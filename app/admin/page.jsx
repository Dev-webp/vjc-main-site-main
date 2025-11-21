"use client";
import { useState } from "react";
// Import your dashboard components
import AdminLogin from "./AdminLogin";
import News from "./News";
import Jobseeker from "./Jobseeker";
import AdminJobs from "./AdminJobs";
import InvestorVisas from "./InvestorVisas"; // <-- New import
import Visitvisas from "./Visitvisas";
import Resume from "./Resume";
import { Menu, X, Briefcase, Users, Newspaper, LogOut, DollarSign } from 'lucide-react'; // Import icons

// Mapping icons to keys for the tabs
const TAB_ICONS = {
  news: Newspaper,
  jobseeker: Users,
  adminjobs: Briefcase,
  investor: DollarSign, // <-- icon for Investor Visa
  visitvisas: DollarSign,
  resume: DollarSign,
};

// Define tabs
const TABS = [
  { key: "news", label: "News" },
  { key: "jobseeker", label: "Jobseeker Management" },
  { key: "adminjobs", label: "Job Postings" },
  { key: "investor", label: "Investor Visas" }, // <-- New tab
  { key: "visitvisas", label: "Visit Visas" },
  { key: "resume", label: "Resume Visas" },
];

// --- Helper Component for the Orange & White Tab Button ---
const TabButton = ({ tab, activeTab, setActiveTab }) => {
  const Icon = TAB_ICONS[tab.key];
  const isActive = activeTab === tab.key;

  return (
    <button
      key={tab.key}
      className={`
        flex items-center gap-3 w-full p-4 rounded-xl transition-all duration-300 ease-in-out
        font-bold text-lg cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]
        text-left
        ${isActive
          ? "bg-orange-500 text-white shadow-xl shadow-orange-300/50"
          : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600"
        }
      `}
      onClick={() => setActiveTab(tab.key)}
    >
      <Icon className="w-6 h-6" />
      <span className="truncate">{tab.label}</span>
    </button>
  );
};

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("news");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        return <InvestorVisas />; // <-- render Investor Visa dashboard
      case "visitvisas":
        return <Visitvisas />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  }

  // --- LOGIN SCREEN ---
  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-amber-600">
        <div className="p-12 w-full max-w-md transition-all duration-500">
          <h1 className="text-4xl font-extrabold text-center text-black mb-8">Portal Access</h1>
          <AdminLogin onLogin={() => setLoggedIn(true)} />
        </div>
      </div>
    );
  }

  // --- DASHBOARD LAYOUT ---
  return (
    <div className="min-h-screen flex bg-gray-100 mt-14 times-new-roman">
      
      {/* Main Content */}
      <main className="flex-1 p-8 md:p-8 lg:p-20 overflow-y-auto">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header Bar */}
          <header className="flex justify-between items-center mb-6 md:mb-10 bg-white p-4 rounded-xl shadow-sm md:shadow-none">
            <h2 className="text-3xl font-extrabold text-gray-800 capitalize">
              {TABS.find(t => t.key === activeTab)?.label}
            </h2>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition md:hidden shadow-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </header>

          <div className="min-h-[70vh] w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10 lg:p-12">
            {renderContent()}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 right-0 z-30 
          md:sticky md:top-0 md:h-screen md:w-64 
          bg-white shadow-2xl border-l-4 border-orange-500 
          p-6 flex flex-col gap-8 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0
          w-72
        `}
      >
        <div className="text-3xl font-black text-orange-600 border-b border-gray-200 pb-4 flex justify-between items-center">
          Admin <span className="text-gray-800">Panel</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden text-gray-500 hover:text-orange-500"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col gap-3 flex-1">
          {TABS.map(tab => (
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

        {/* Logout */}
        <button
          onClick={() => setLoggedIn(false)}
          className="flex items-center justify-center gap-2 p-3 mt-4 text-white font-semibold rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md"
        >
          <LogOut size={20} /> Sign Out
        </button>
      </aside>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}