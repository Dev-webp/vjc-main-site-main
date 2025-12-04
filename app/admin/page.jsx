"use client";
import { useState, useMemo } from "react";
// Import your dashboard components
import AdminLogin from "./AdminLogin";
import News from "./News";
import Jobseeker from "./Jobseeker";
import AdminJobs from "./AdminJobs";
import InvestorVisas from "./InvestorVisas"; 
import Visitvisas from "./Visitvisas";
import Resume from "./Resume";
import Schengenvisas from "./Schengenvisas";
import Metas from "./Metas";
import Studyabroad from "./Studyabroad";
import Tours from "./Tours";
import Services from "./Services";
import Migrate from "./Migrate";
import Migratechild from "./Migratechild";
// Import icons
import { Menu, X, Briefcase, Users, Newspaper, LogOut, DollarSign, BarChart3, FileText, Globe, ChevronLeft, ChevronRight } from 'lucide-react'; 

// Mapping icons to keys for the tabs
const TAB_ICONS = {
  news: Newspaper,
  jobseeker: Users,
  adminjobs: Briefcase,
  investor: DollarSign, 
  visitvisas: Globe, 
  schengenvisas: Globe,
  resume: FileText, 
  metas: BarChart3, 
  studyabroad: Globe,
  tours: Globe,
  services: Globe,
  migrate: Globe,
  migratechild: Globe,
};

// Define tabs
const TABS = [
  { key: "news", label: "News & Announcements" },
  { key: "jobseeker", label: "Jobseeker Management" },
  { key: "adminjobs", label: "Job Postings" },
  { key: "investor", label: "Investor Visas" }, 
  { key: "visitvisas", label: "Visit Visas" },
  { key: "schengenvisas", label: "Schengen Visas" },
  { key: "resume", label: "Resume Management" },
  { key: "metas", label: "Site Meta Management" },
  { key: "studyabroad", label: "Study Abroad Visas" },
  { key: "tours", label: "Tours & Ticketing" },
  { key: "services", label: "Services Management" },
  { key: "migrate", label: "Migration Services" },
  { key: "migratechild", label: "Migration Sub-Services" },
];

// --- Helper Component for the Sexy Tab Button ---
const TabButton = ({ tab, activeTab, setActiveTab }) => {
  const Icon = TAB_ICONS[tab.key];
  const isActive = activeTab === tab.key;

  return (
    <button
      className={`
        flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-200 ease-in-out
        font-semibold text-base cursor-pointer transform hover:scale-[1.01]
        text-left group
        ${isActive
          ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30"
          : "text-gray-600 hover:bg-gray-100 hover:text-orange-600"
        }
      `}
      onClick={() => setActiveTab(tab.key)}
    >
      <Icon 
        className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-white" : "text-gray-500 group-hover:text-orange-600"}`} 
      />
      <span className="truncate">{tab.label}</span>
    </button>
  );
};

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("news");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(TABS.length / ITEMS_PER_PAGE);

  const visibleTabs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return TABS.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Main content renderer
  function renderContent() {
    switch (activeTab) {
      case "news":
        return <News />;
      case "jobseeker":
        return <Jobseeker />;
      case "adminjobs":
        return <AdminJobs />;
      case "investor":
        return <InvestorVisas />; 
      case "visitvisas":
        return <Visitvisas />;
      case "schengenvisas":
        return <Schengenvisas />;
      case "resume":
        return <Resume />;
      case "studyabroad":
        return <Studyabroad />;
      case "metas":
        return <Metas />;
      case "tours":
        return <Tours />;
      case "services":
        return <Services />;
      case "migrate":
        return <Migrate />;
      case "migratechild":
        return <Migratechild />;
      default:
        return null;
    }
  }

  // --- LOGIN SCREEN ---
  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-300 to-orange-500">
        <div className="p-12 w-full max-w-md transition-all duration-500">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Admin Portal Access</h1>
          <AdminLogin onLogin={() => setLoggedIn(true)} />
        </div>
      </div>
    );
  }

  // --- REVERSED DASHBOARD LAYOUT (Main Content Left, Sidebar Right) ---
  return (
    <div className="min-h-screen flex md:flex-row-reverse bg-gray-50 antialiased">
      
      {/* 1. Right Sidebar (Navigation Buttons with Pagination) */} 
      <aside 
        className={`
          fixed inset-y-0 right-0 z-40 
          md:sticky md:h-screen md:w-64 
          bg-white shadow-2xl md:shadow-lg 
          p-6 flex flex-col gap-10 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0
          w-64
        `}
      >
        {/* Logo/Title */}
        <div className="text-3xl font-extrabold text-gray-900 border-b-4 border-orange-600 pb-4 flex justify-between items-center tracking-tight">
          <span className="text-orange-600">Portal</span> <span className="text-gray-800">Admin</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden text-gray-500 hover:text-orange-500 p-2"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation with Pagination */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Visible Tabs (7 items max) */}
          <nav className="flex flex-col gap-2">
            {visibleTabs.map(tab => (
              <TabButton 
                key={tab.key} 
                tab={tab} 
                activeTab={activeTab} 
                setActiveTab={(key) => {
                  setActiveTab(key);
                  setIsMenuOpen(false); 
                }} 
              />
            ))}
          </nav>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`
                flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }
              `}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <span className="text-xs text-gray-500">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`
                flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                }
              `}
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => setLoggedIn(false)}
          className="flex items-center justify-center gap-2 p-3 text-white font-semibold rounded-xl bg-gray-700 hover:bg-gray-800 transition-all duration-200 shadow-lg"
        >
          <LogOut size={20} /> Sign Out
        </button>
      </aside>

      {/* 2. Main Content Area (Left Side) */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="w-full max-w-full mx-auto mt-8"> 
          
          {/* Header Bar (Mobile Menu Button and Title) */}
          <header className="flex justify-between items-center mb-6 md:mb-10 bg-white p-4 rounded-xl shadow-md border-t-4 border-orange-600">
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition md:hidden shadow-lg"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <h2 className="text-3xl font-bold text-gray-800 tracking-tight ml-4 md:ml-0">
              {TABS.find(t => t.key === activeTab)?.label}
            </h2>
            
            <div className="hidden md:block w-8" />
          </header>

          {/* Content Panel */}
          <div className="min-h-[75vh] w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 lg:p-12">
            {renderContent()}
          </div>
        </div>
      </main>

      {/* 3. Mobile Overlay (When menu is open) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
