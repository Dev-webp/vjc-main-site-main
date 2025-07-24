import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

export default function NocCanada2025WithAllLevels() {
  // Table state
  const [nocRows, setNocRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [sortCol, setSortCol] = useState("Level");
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // Fetch and process JSON from /public
  useEffect(() => {
    fetch("/csvjson.json")
      .then((res) => res.json())
      .then((data) => {
        // Accept all levels, ensure proper field mapping
        const mapped = data.map((row, i) => ({
          level: row.Level,
          structure: row["Hierarchical structure"] || "",
          code: String(row["Code - NOC 2021 V1.0"] ?? ""),
          title: row["Class title"] || "",
        }));
        setNocRows(mapped);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.error("Error loading NOC data", e);
      });
  }, []);

  // Filtering
  const filtered = useMemo(() => {
    if (!filter) return nocRows;
    return nocRows.filter(
      (row) =>
        row.level.toString().includes(filter) ||
        row.structure.toLowerCase().includes(filter.toLowerCase()) ||
        row.code.toString().includes(filter) ||
        row.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [nocRows, filter]);

  // Sorting
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let aVal = a[sortCol.toLowerCase()];
      let bVal = b[sortCol.toLowerCase()];
      if (sortCol === "Level") {
        aVal = Number(aVal);
        bVal = Number(bVal);
      } else {
        aVal = (aVal || "").toString().toLowerCase();
        bVal = (bVal || "").toString().toLowerCase();
      }
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortCol, sortDir]);

  // Pagination
  const totalEntries = sorted.length;
  const totalPages = Math.ceil(totalEntries / perPage);
  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page, perPage]);

  // Table header click for sorting
  const handleSort = (col) => {
    if (sortCol === col) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  // Pagination controls
  const gotoPage = (p) => setPage(p);
  const handlePerPage = (e) => {
    setPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <section className="noc-2025-section" style={{ padding: "2rem", background: "#f8fafc" }}>
      {/* Only the 1st paragraph above the table */}
      
          <h1 style={{
  marginBottom: "1rem",
  color: "#d32f2f",
  fontWeight: "bold",      // makes text bold
  fontSize: "2rem"       // adjust size as you want, e.g. 2.5rem or "32px"
}}>
  NOC Canada 2025 – Find Your Occupation In-Demand List
</h1>
      <div className="noc-2025-container" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div className="noc-2025-image" style={{ flex: "0 0 280px", maxWidth: "320px", minWidth: "220px" }}>
          <Image
            src="/find-my-national-occupation-classification-canada-vjc.webp"
            alt="Canada Immigration"
            width={320}
            height={240}
            style={{ borderRadius: "12px", objectFit: "cover", width: "100%", height: "auto", boxShadow: "0 2px 8px rgba(0,0,0,0.09)" }}
            priority
            unoptimized
          />
        </div>
        
        <div className="noc-2025-content" style={{ flex: "1 1 340px", minWidth: "260px" }}>
         
          <h2 style={{ marginTop: 0, color: "#333", fontWeight: 500 }}>
            Explore Your Canadian Immigration Path with the Latest NOC Updates
          </h2>
          <p style={{ fontSize: "1.1rem", margin: "1rem 0 0.7rem 0" }}>
            Are you planning to move to Canada in 2025? The first step is to check whether your profession is in demand under the updated NOC (National Occupation Classification) Canada 2025 list. Canada welcomes skilled professionals who meet its growing labor market needs—and your dream job might be on the list!
          </p>
        </div>
      </div>
      {/* NOC 2025 Table */}
      <div style={{ margin: "2.5rem auto 0", maxWidth: "1100px" }}>
        <h2 style={{ color: "#d32f2f", marginBottom: "1rem" }}>
          NOC 2025 – All Levels, Codes, and Class Titles
        </h2>
        <div style={{padding:"1rem 0"}}>
          <label style={{marginRight: 8}}>Filter items</label>
          <input
            value={filter}
            onChange={e => { setFilter(e.target.value); setPage(1); }}
            style={{padding: 4, fontSize:"1rem", border:"1px solid #aaa", borderRadius:4, marginRight:16, width:180}}
            placeholder="Search by any column"
          />
          <span style={{marginRight:8}}>Showing {Math.min((page-1)*perPage+1, totalEntries)} to {Math.min(page*perPage, totalEntries)} of {totalEntries} entries</span>
          <label style={{marginRight:4}}>Show</label>
          <select value={perPage} onChange={handlePerPage} style={{padding: 2, fontSize:"1rem", marginRight:4}}>
            {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          entries
        </div>
        <div style={{
          overflowX: "auto",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          borderRadius: "8px"
        }}>
          {/* Custom table CSS for hover effect */}
          <style>{`
            .noc-table-custom thead th {
              background:rgb(255, 136, 0);
              transition: background 0.2s;
            }
            .noc-table-custom tbody tr {
              transition: background 0.2s;
            }
            .noc-table-custom tbody tr:hover {
              background: #fde68a; /* orange-100 */
            }
            .noc-table-custom tbody tr:active {
              background: #bfdbfe; /* blue-200 */
            }
          `}</style>
          <table className="noc-table-custom" style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "1.08rem"
          }}>
            <thead>
              <tr>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('Level')}>
                  Level
                  <span style={{marginLeft:4}}>{sortCol==="Level"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('structure')}>
                  Hierarchical Structure
                  <span style={{marginLeft:4}}>{sortCol==="structure"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('code')}>
                  NOC Code
                  <span style={{marginLeft:4}}>{sortCol==="code"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
                <th style={{ padding: "14px", border: "1px solid #e0e0e0", textAlign: "left", cursor: "pointer" }}
                    onClick={() => handleSort('title')}>
                  Class Title
                  <span style={{marginLeft:4}}>{sortCol==="title"?(sortDir==="asc"?"↑":"↓"):"⇅"}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{padding:20, textAlign:"center"}}>Loading...</td></tr>
              ) : paginated.length === 0 ? (
                <tr><td colSpan={4} style={{padding:20, textAlign:"center"}}>No entries found.</td></tr>
              ) : paginated.map((row, idx) => (
                <tr key={row.code + row.title + row.level}
                    style={{background: idx % 2 === 1 ? "#f7f7f7" : "#fff"}}>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.level}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.structure}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.code}</td>
                  <td style={{ padding: "12px 14px", border: "1px solid #e0e0e0" }}>{row.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "1.5rem 0"}}>
          <button onClick={() => gotoPage(page-1)} disabled={page===1} style={{padding:"0.3rem 0.9rem", marginRight:4, borderRadius:4, border:"1px solid #bbb", background:"#fafafa", cursor:page===1?"not-allowed":"pointer"}}>{"<"}</button>
          {[...Array(Math.min(5, totalPages)).keys()].map(i => {
            let p = i+1;
            if (page > 3 && totalPages > 5) p = page <= totalPages-2 ? page - 3 + i + 1 : totalPages - 4 + i;
            if (p < 1 || p > totalPages) return null;
            return (
              <button
                key={p}
                onClick={() => gotoPage(p)}
                style={{
                  padding:"0.3rem 0.9rem",
                  margin: "0 2px",
                  borderRadius:4,
                  border:"1px solid #bbb",
                  background: p===page ? "#1976d2" : "#fafafa",
                  color: p===page ? "#fff" : "#222",
                  fontWeight: p===page ? "bold" : "normal",
                  cursor: p===page ? "default" : "pointer"
                }}
                disabled={p===page}
              >
                {p}
              </button>
            );
          })}
          {totalPages > 5 && page < totalPages-2 && (
            <span style={{margin:"0 6px"}}>...</span>
          )}
          <button onClick={() => gotoPage(page+1)} disabled={page===totalPages} style={{padding:"0.3rem 0.9rem", marginLeft:4, borderRadius:4, border:"1px solid #bbb", background:"#fafafa", cursor:page===totalPages?"not-allowed":"pointer"}}>{">"}</button>
        </div>
      </div>
      {/* All remaining content below the table */}
      <div style={{ margin: "2.5rem auto 0", maxWidth: "900px" }}>
        <p style={{ fontSize: "1.08rem", color: "#444" }}>
          At <strong>[VJC Overseas]</strong>, we specialize in helping professionals like you identify your NOC code, assess your eligibility, and guide you through every step of the immigration process—whether it’s Express Entry, PNP (Provincial Nominee Program), or job-based visas.
        </p>
        <div style={{ margin: "1.5rem 0" }}>
          <strong>Why the NOC 2025 List Matters</strong>
          <p style={{ margin: "0.3rem 0 0 0" }}>
            Canada’s immigration system uses the NOC to evaluate whether your skills and work experience match the country’s labor demands. The NOC 2025 update includes new occupations, reclassified roles, and better alignment with Canada’s economic priorities.
          </p>
        </div>
        <div style={{ margin: "1.5rem 0" }}>
          <strong>Top features of NOC 2025:</strong>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Updated job titles and classifications</li>
            <li>High-demand occupations for 2025</li>
            <li>More opportunities for skilled professionals</li>
            <li>Better pathways through Express Entry &amp; PNP</li>
          </ul>
        </div>
        <div style={{ margin: "1.5rem 0" }}>
          <strong>Is Your Occupation In Demand in Canada 2025?</strong>
          <p style={{ margin: "0.3rem 0 0 0" }}>
            We help you quickly check your job title against the latest NOC list and understand your immigration chances. Whether you’re an IT professional, healthcare worker, engineer, tradesperson, or manager—your opportunity could be waiting.
          </p>
        </div>
        <div style={{ margin: "1.5rem 0" }}>
          <strong>Industries Hiring in Canada (2025 Focus):</strong>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Healthcare &amp; Nursing</li>
            <li>Information Technology &amp; Software</li>
            <li>Engineering &amp; Construction</li>
            <li>Finance &amp; Accounting</li>
            <li>Education &amp; Social Services</li>
            <li>Logistics &amp; Supply Chain</li>
          </ul>
        </div>
        <div style={{ margin: "1.5rem 0" }}>
          <strong>How We Help You</strong>
          <ul style={{ marginLeft: "1.5rem" }}>
            <li>Personalized NOC code identification</li>
            <li>Occupation eligibility assessment</li>
            <li>Points calculation &amp; profile building</li>
            <li>Step-by-step visa process guidance</li>
            <li>Job matching support (if applicable)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}