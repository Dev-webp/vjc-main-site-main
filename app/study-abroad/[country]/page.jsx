import CountryClient from "./CountryClient";
 
// Metadata map
const metaData = {
  usa: {
    title: "Study Abroad in the USA Learn at World-Class Universities and Explore American Education Scholarships and Student Life",
    description: "Get USA Student Visa F1 Process and Study in USA with Best Abroad Universities to settle in America also know the Study Documents Check list and Requirements to F1 Study Abroad in USA with Best USA Student Study Visa Consultants in Hyderabad also Find Top Most Universities in USA and Apply Online for USA Study Visa Process with Fast Admissions at Lowest Tuition Courses Fees with Top International Educational Consultants in Hyderabad Bangalore",
    keywords:" Study Abroad USA, Study in USA, USA student visa, Study Abroad in the USA, Study USA programs, US study destinations, Study in America, US universities for international students, Study abroad consultants USA, Study in USA scholarships, Study Abroad application USA, Study Abroad colleges USA, Student travel to USA, USA academic opportunities, Study in the USA requirements, Study in USA career paths, Study Abroad advisors, Study in USA culture, VJC Overseas, Best Visa Immigration Consultants",
  },
  canada: {
    title: "Study Abroad in Canada with Canadian Universities Offering World Class Education",
    description: "Explore studying in Canada with VJC Overseas. Get expert support on top universities, scholarships, visa process & PR pathways. Start your journey now!",
    keywords: "  Study Abroad in Canada, Study in Canada, Canada study abroad, Canada education for international students, Study abroad Canada universities, Study in Canada programs, Canada study permit, Canada student visa, Canada PGWP, Study in Canada work permit, Canada study admission, Canada study scholarship, Canada student life, Canadian universities for international students, Study abroad consultants Canada, Study abroad services Canada, VJC Overseas, Best Visa Immigration Consultants",
  },
  uk: {
    title: " Study Abroad in UK Experience World Class Education and Leading Universities",
    description: "Study in the UK with VJC Overseas. Explore top universities, scholarships, visa process & post-study work options. Get expert guidance and support today.",
    keywords: "Study Abroad in UK, Study in UK, UK study abroad, UK student programs, UK universities for international students, study overseas UK, UK education abroad, UK college admission, UK student application, study uk programs, student visa UK, UK campus experience, UK student life, UK academic opportunities, study uk guide, British universities abroad, VJC Overseas, Best Visa Immigration Consultants",
  },
  australia: {
    title: "Study Abroad in Australia Explore Top Australian Universities and Quality Education",
    description: "Study in Australia with VJC Overseas. Get expert guidance on top universities, scholarships, visa process & post-study work opportunities. Start now!",
    keywords: "Study Abroad in Australia, Study in Australia, Australia Study Abroad, Australian Universities, Australia Education, Study in Australia for International Students, Study in Australia Programs, Australia Student Visa, Australia Study Permit, Australia Higher Education, Study in Australia Admission, Study in Australia Scholarships, Study in Australia Guide, Study in Australia Application, Study in Australia Opportunities, Study in Australia Colleges, VJC Overseas, Best Visa Immigration Consultants",
  },
  germany: {
    title: "Study in Germany with German Universities and Study Abroad in Germany Programs",
    keywords:"study in germany, immigration consultants, germany study visa, germany study abroad, top universities in germany, top universities in germany, best universities in germany, masters in germany, student visa in germany, top rated universities in germany, germany visa for students, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, germany visa, germany opportunity card, germany study visa",
    description: "Study Abroad in Germany, Germany Study Abroad, Study in Germany, Study in Germany Education, Germany Education, International study Germany, Germany student visa, Study in Germany programs, German universities, Germany higher education, Study Germany scholarships, Germany tuition free universities, Germany education for international students, Germany Masters study abroad, Study in Germany guide, Germany study permit, Study in Germany applications, Study in Germany admissions, VJC Overseas, Best Visa Immigration Consultants",
  },
  italy: {
    title: "Study Abroad in Italy with Italian Education and Leading Universities in Italy  ",
    keywords:"Study Abroad in Italy, Study in Italy, Italian Education, Universities in Italy, Italy Study Abroad, Study at Italian Universities, Italy Student Visa, Study in Italy Programs, Italian Higher Education, Study Abroad Italy Scholarships, Study in Italy Courses, Study Abroad Italy Admission, Italy Study Application, Study in Italy Requirements, Italy International Students, Study in Italy Universities, Study Abroad Italy Consultants, VJC Overseas, Best Visa Immigration Consultants",
    description: "Study in Italy with VJC Overseas – trusted consultants in India for 2025 admissions, scholarships, top universities, and complete visa support.",
  },
  france: {
    title: "Study Abroad in France with French Universities and Renowned French Education",
    description: "Study in France with VJC Overseas – expert help for 2025 admissions, top universities, courses, scholarships & visa support. Talk to our Experts.",
    keywords: "Study Abroad in France, Study in France, France Study Abroad, French Universities, France Education, Study in France Universities, Study France, France Student Visa, France Study Programs, France Higher Education, France Education Abroad, Study France University, France Study Applications, Study in France Scholarships, Study in France Opportunities, VJC Overseas, Best Visa Immigration Consultants",
  },
  ireland: {
    title: "Study Abroad in Ireland pursue higher education at leading Irish universities",
    description: "VJC Overseas provides expert support to study in Ireland. Get help with university selection, visas, scholarships, and smooth application assistance.",
    keywords: "Study Abroad in Ireland, Study in Ireland, Irish Universities, Education in Ireland, Study Abroad Ireland, Ireland Higher Education, Study in Ireland Programs, Ireland Student Visa, Study in Ireland Scholarships, Study in Ireland Admissions, Ireland Study Australia, Study Abroad Ireland Consultants, Ireland Study Permit, Study Abroad in Ireland for International Students, Study in Ireland Applications, Ireland Education Abroad, VJC Overseas, Best Visa Immigration Consultants",
  },
  singapore: {
    title: "Study Abroad in Singapore Learn at Top Singapore Universities with World Class Education",
    description: "Study in Singapore with VJC Overseas. Discover how to study in Singapore, explore top universities, courses, and scholarships for your educational journey.",
    keywords: "Study Abroad in Singapore, Study in Singapore, Singapore Study Abroad, Singapore Education, Singapore Universities, Study Abroad Singapore programs, Study in Singapore universities, Singapore international education, Singapore study permit, Singapore student visa, Singapore tertiary education, Singapore study application, Study in Singapore admissions, Singapore education opportunities, Study Abroad Singapore consultants, VJC Overseas, Best Visa Immigration Consultants, Study Abroad Singapore scholarships",
  },
  malaysia: {
    title: "Study Abroad in Malaysia pursue education in Malaysian universities and study programs",
    description: "Study in Malaysia 2025 with VJC Overseas. Explore top universities, courses, scholarships, and how to apply. Begin your Malaysia journey today.",
    keywords: "Study Abroad in Malaysia, Study in Malaysia, Malaysia Study Abroad, Malaysian Universities, Malaysia Education, Study in Malaysia Programs, Malaysia Student Visa, Study Abroad Malaysia Admissions, Malaysia Higher Education, Study in Malaysia Scholarships, Study Abroad Malaysia Consultants, Malaysia Study Applications, Study in Malaysia Opportunities, Malaysia Education Abroad, Study Overseas Malaysia, VJC Overseas, Best Visa Immigration Consultants",
  },
  southafrica: {
    title: "Study Abroad in South Africa with South African Universities and Academic Excellence",
    description: "Study in South Africa with VJC Overseas. Explore top universities, courses, scholarships, and how to apply. Start your study in South Africa journey today.",
    keywords: "Study Abroad in South Africa, Study in South Africa, South Africa Study Abroad, South African Universities, South Africa Education, Study in SA Programs, South Africa Student Visa, Study Abroad South Africa Admissions, South Africa Higher Education, Study in South Africa Scholarships, Study in South African Universities, South Africa Education Abroad, Study in South Africa Courses, South Africa Study Permit, South Africa Study Application, South Africa Education Opportunities, Study Abroad South Africa Consultants, VJC Overseas, Best Visa Immigration Consultants",
  },
  newzealand: {
    title: "Study Abroad in New Zealand with Leading Universities and International Education",
    description: "Begin your study abroad journey in New Zealand with VJC Overseas. Expert guidance on top universities, visas, scholarships, and admission support.",
    keywords: "Study Abroad in New Zealand, Study in New Zealand, New Zealand Study Abroad, New Zealand Universities, New Zealand Education, International Education New Zealand, NZ student visa, Study in NZ programs, New Zealand higher education, Study in New Zealand scholarships, NZ admission process, New Zealand study permit, Study in New Zealand opportunities, Study in NZ consultants, VJC Overseas, Best Visa Immigration Consultants",
  },
  philippines: {
    title: "Study Abroad in the Philippines with Leading Universities and Quality Philippine Education",
    description: "Start your study abroad journey in the Philippines with VJC Overseas. Get expert help on top universities, student visas, admissions, and scholarships.",
    keywords: "Study Abroad Philippines, Study in Philippines, Philippines Education, Philippines Universities, Study in Philippine Colleges, Philippines Study Visa, Higher Education in Philippines, Study Abroad Programs Philippines, Philippine Student Visa, Study in Manila Universities, Study in Cebu Philippines, Philippines Study Abroad Consultants, Medical Study in Philippines, Study in Philippines for International Students, Philippines Study Admission, Study in Philippines Opportunities, Study Abroad Consultants Philippines, Study Permit Philippines, VJC Overseas, Best Visa Immigration Consultants",
  },
  poland: {
    title: "Study Abroad in Poland with Polish Universities and Higher Education Opportunities",
    description: "Begin your study abroad journey in Poland with VJC Overseas. Get expert guidance on top universities, student visas, scholarships, and admissions process.",
    keywords: "Study Abroad in Poland, Study in Poland, Polish Universities, Poland Education, Study in Poland Programs, Polish Higher Education, Study in Poland Scholarships, Poland Student Visa, Study in Poland Opportunities, Study in Poland Admissions, Poland Study Permit, Study in Poland Courses, Study in Poland Application, Study in Poland Universities, Affordable Education Poland, Study in Poland Consultants, VJC Overseas, Best Visa Immigration Consultants",
  },
  denmark: {
    title: "Study in Denmark Masters Bachelors PhD Living Cost Admission Student Life Insights English Programs Scholarships Visa Requirements",
    description: "Explore world-class education in Denmark through VJC Overseas. Get expert help with university selection, student visas, scholarships, and easy admissions",
    keywords: "Study in Denmark, Study Abroad Denmark, Denmark Universities, Danish Higher Education, Study in Copenhagen, Study in Aarhus, English Programs Denmark, Bachelor in Denmark, Masters in Denmark, PhD in Denmark, Denmark Scholarships, Denmark Student Visa, Tuition Fees in Denmark, Cost of Living in Denmark, Work and Study in Denmark, Admission Requirements Denmark, International Students Denmark, Student Life in Denmark, VJC Overseas, Best Visa Immigration Consultants",
  },
  spain: {
    title: "Study Abroad in Spain with Spanish Universities and Higher Education in Barcelona and Madrid",
    description: "Explore world-class education in Spain through VJC Overseas. Get expert help with universities, visa process, scholarships, and smooth application support.",
    keywords: "Study Abroad in Spain, Study in Spain, Spanish Universities, Spain Education, Study in Spain Programs, Spain Student Visa, Study in Spain Scholarships, Study in Spain Admissions, Spanish Higher Education, Study Abroad in Spain Opportunities, Study in Spain Application, Study in Spain Services, International Study Spain, Spain Education Abroad, Study in Spain Consultants, Study in Spain for International Students, Study Medicine in Spain, Study Masters in Spain, Study in Barcelona Universities, Study in Madrid Universities, Spain Study Permit, VJC Overseas, Best Visa Immigration Consultants",
  },
 
  hongkong: {
    title: "Study in Hong Kong Top Universities Scholarships Student Visa Tuition Fees Living Expenses",
    description: "Study in Hong Kong with VJC Overseas. Explore top universities, courses, scholarships, visa process, and how to start your study in Hong Kong journey.",
    keywords: "Study in Hong Kong, Study Abroad Hong Kong, Hong Kong Universities, Higher Education in Hong Kong, Study in Hong Kong City, Bachelor in Hong Kong, Masters in Hong Kong, PhD in Hong Kong, Hong Kong Scholarships, Hong Kong Student Visa, Tuition Fees in Hong Kong, Cost of Living in Hong Kong, Work and Study in Hong Kong, Admission Requirements Hong Kong, International Students Hong Kong, Student Life in Hong Kong, Campus Facilities Hong Kong, VJC Overseas, Best Visa Immigration Consultants",
  },
 
  uae: {
    title: "Study in UAE Best Colleges Bachelor Masters PhD Programs English Courses Student Life",
    description: "Study in UAE with VJC Overseas. Discover top universities, courses, scholarships, and how to apply. Begin your study in UAE journey with expert support.",
    keywords: "Study in UAE, UAE Universities, Higher Education in UAE, Study in Dubai, Study in Abu Dhabi, Bachelor in UAE, Masters in UAE, PhD in UAE, UAE Scholarships, UAE Student Visa, Tuition Fees in UAE, Cost of Living in UAE, Work and Study in UAE, Admission Requirements UAE, International Students UAE, Student Life in UAE, Campus Facilities UAE, VJC Overseas, Best Visa Immigration Consultants",
  },
 
  sweden: {
    title: "Study in Sweden World Ranked Universities Innovation Sustainability Scholarships Visa Opportunities",
    description: "Study in Sweden with VJC Overseas. Explore top universities, scholarships, and visa benefits. Enjoy Schengen access while you study in Sweden in 2025.",
    keywords: "Study in Sweden, Sweden Higher Education, Sustainable Study Sweden, Innovation Programs Sweden, World Ranked Universities Sweden, Masters in Sweden, PhD in Sweden, Scholarships to Study in Sweden, Sweden Student Visa Process, Living Costs in Sweden, Work While Studying in Sweden, Swedish Culture for Students, Research Opportunities Sweden, University Admissions Sweden, Student Life in Sweden, Study in Stockholm, Study in Gothenburg, VJC Overseas, Best Visa Immigration Consultants",
  },
 
  norway: {
    title: "Study in Norway Top Universities Scholarships Student Visa Tuition Fees Living Expenses",
    description: "Explore higher education in Norway through VJC Overseas. We provide expert help with universities, visa process, scholarships, and full admission support.",
    keywords: "Study in Norway, Norway Universities, Higher Education in Norway, Study in Oslo, Study in Bergen, Bachelor in Norway, Masters in Norway, PhD in Norway, Norway Scholarships, Norway Student Visa, Cost of Living in Norway, Work and Study in Norway, Admission Requirements Norway, International Students Norway, Student Life in Norway, Campus Facilities Norway, VJC Overseas, Best Visa Immigration Consultants",
  },
  netherlands: {
    title: "Study in Netherlands Top Universities Scholarships Student Visa Courses Tuition Fees Living Cost Education Programs",
    description: "Explore study opportunities in the Netherlands with VJC Overseas. Get expert help on top universities, student visa process, scholarships & more.",
    keywords: "Study in Netherlands, Study Abroad Netherlands, Netherlands Universities, Netherlands Scholarships, Netherlands Student Visa, Netherlands Education System, Study in Holland, English Programs Netherlands, Bachelor in Netherlands, Masters in Netherlands, Postgraduate in Netherlands, PhD in Netherlands, Cost Of Living in Netherlands, Study in Amsterdam, Dutch Universities, International Students Netherlands, Student Housing Netherlands, VJC Overseas, Best Visa Immigration Consultants"
  },
  dubai: {
    title: "Study in Dubai Best Colleges Programs English Courses Student Visa Tuition Living Expenses",
    description: "Explore study opportunities in the Dubai with VJC Overseas. Get expert help on top universities, student visa process, scholarships & more.",
    keywords: "Study in Dubai, Top Colleges in Dubai, Dubai International Universities, Higher Education in UAE, Study Programs in Dubai, English Medium Courses Dubai, Undergraduate in Dubai, Postgraduate in Dubai, Doctorate in Dubai, Scholarships for Dubai Students, Student Visa Process Dubai, Affordable Tuition in Dubai, Dubai Living Expenses for Students, Work Opportunities for Students in Dubai, Dubai University Admissions, Campus Life in Dubai, Internships for Students in Dubai, Study Abroad in UAE, VJC Overseas, Best Visa Immigration Consultants"
  },
  luxembourg: {
    title: "Study in Luxembourg Top Universities Bachelor Masters PhD Scholarships Student Visa Programs",
    description: "Explore study opportunities in the Luxembourg with VJC Overseas. Get expert help on top universities, student visa process, scholarships & more.",
    keywords: "Study in Luxembourg, Luxembourg Universities for International Students, Higher Education Luxembourg, Bachelor Programs in Luxembourg, Masters Programs in Luxembourg, PhD Programs in Luxembourg, Luxembourg Scholarships for Students, Student Visa Luxembourg, Affordable Tuition in Luxembourg, Cost of Living in Luxembourg, Study Abroad Luxembourg, Study in Luxembourg City, Admission Requirements Luxembourg, International Students Luxembourg, Student Life Luxembourg, Campus Facilities Luxembourg, Internship Opportunities Luxembourg, VJC Overseas, Best Visa Immigration Consultants"
  },
  switzerland: {
    title: "Study in Switzerland Top Ranked Colleges Affordable Tuition Living Expenses Work Opportunities",
    description: "Start your study journey in Switzerland with VJC Overseas. Get expert help with top universities, scholarships, student visa process & application guidance.",
    keywords: "Study Opportunities in Switzerland, Top Colleges in Switzerland, Swiss Education For International Students, Study in Lausanne, Study in Basel, Low Cost Universities Switzerland, Study And Work in Switzerland, Swiss Higher Education, Study Visa Process Switzerland, PhD in Switzerland For International Students, MBA in Switzerland, Switzerland Student Life, Part Time Jobs in Switzerland, Switzerland Admission Requirements, Apply to Swiss Universities, Public Universities in Switzerland, Private Universities in Switzerland, Best Courses in Switzerland, VJC Overseas, Best Visa Immigration Consultants"
  }
 
 
 
 
};
 
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
  const country = params.country.toLowerCase();
  const data = metaData[country];
 
  return {
    title: data?.title || "Study Abroad – Explore Global Education Paths | VJC Overseas",
    description: data?.description || "Get expert guidance to study abroad with VJC Overseas. Explore top universities, countries, scholarships & student visa options. Begin your journey now!",
    keywords: data?.keywords || "study abroad consultants, overseas education consultants, study abroad with scholarship, study abroad, abroad education consultants, foreign study consultancy, overseas study consultants, abroad for studies, study in UK, study in Canada, study in Australia, study in Germany",
  };
}
 
 
export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}
 