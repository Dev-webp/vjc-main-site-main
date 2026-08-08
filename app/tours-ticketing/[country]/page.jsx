import CountryClient from "./CountryClient";
 
// Metadata map
const metaData = {
  europe: {
    title: "Europe Tour Packages & Ticketing | VJC Overseas",
    
    keywords:" Europe Tour packages, Europe Flight booking, Europe Ticketing services, Schengen Holiday tours, Europe Travel deals, Affordable Europe tours, Luxury Europe packages, Europe Honeymoon tours, Europe Family vacations, Europe Group travel, Europe Sightseeing tours, Europe Visa travel, Best Europe itineraries, Euro trip holidays, Train travel in Europe, Europe cultural tours, Guided tours Europe, Europe Vacation booking, Europe Budget packages, VJC Overseas, Best Visa Immigration Consultants",
  },
  usa: {
    title: "USA Tour Packages | VJC Overseas",
    
    keywords: " USA Tour packages, USA Flight booking, USA Ticketing services, USA Holiday packages, USA Sightseeing tours, USA Travel deals, USA Hotel booking, USA Road trips, USA City tours, USA Adventure travel, USA Group tours, USA Visa travel, USA Family vacations, USA Honeymoon packages, USA Discounted flights, USA Vacation planning, USA Cultural tours, USA Travel itineraries, USA Tourism packages, VJC Overseas, Best Visa Immigration Consultants",
  },
  australia: {
    title: "Australia Tour Packages & Holiday Trips",
    
    keywords: "Australia Vacation packages, Australia Holiday tours, Australia Family trips, Australia Honeymoon packages, Australia Group travel, Australia Adventure tours, Australia Sightseeing packages, Australia Cultural tours, Australia Wildlife tours, Australia Beach holidays, Australia Luxury travel, Australia Budget packages, Australia Guided tours, Australia Travel deals, Australia Customized trips, Australia Tourism packages, Australia Best itineraries, Australia Trip booking, Australia Holiday deals, VJC Overseas, Best Visa Immigration Consultants",
  },
  canada: {
    title: "Canada Tour Packages & Holidays | VJC Overseas",
    
    keywords: "Canada Tour packages, Canada Holiday packages, Canada Vacation packages, Canada Group tours, Canada Travel deals, Canadian Trips, Sightseeing Canada, Adventure Tours Canada, Family Vacations Canada, Honeymoon Packages Canada, Budget tours Canada, Luxury packages Canada, Cultural tours Canada, Hotel Bookings Canada, Flight Booking Canada, Visa Travel Canada, Wildlife Tours Canada, Canada Itineraries, City tours Canada, VJC Overseas, Best Visa Immigration Consultants",
  },
  france: {
    title: "France Tour Packages & Holiday Travel Deals",
    
    keywords:"France Vacation packages, France Holiday tours, France Honeymoon trips, France Family holidays, France Group travel, Sightseeing France, Adventure Tours France, Luxury France Vacations, Budget France packages, France Cultural tours, France Historical tours, France travel itineraries, France Holiday deals, Paris Tour packages, France city tours, France trip booking, France guided tours, France holiday planning, France tourism packages, VJC Overseas, Best Visa Immigration Consultants",
    
  },
  italy: {
    title: "Italy Tour Packages & Holidays | VJC Overseas",
    keywords:"Italy Vacation packages, Italy Holiday tours, Italy Family trips, Italy Honeymoon tours, Italy Group travel, Italy Sightseeing tours, Italy Cultural tours, Italy tours, Italy Adventure tours, Italy Historical tours, Italy Luxury tours, Italy Budget packages, Italy Guided tours, Italy City tours, Italy Countryside tours, Italy Beach holidays, Italy Visa, Italy travel deals, Italy trip itineraries, VJC Overseas, Best Visa Immigration Consultants",
  },
  switzerland: {
    title: "Switzerland Tour Packages & Holidays",
   
    keywords: "Switzerland Vacation packages, Switzerland Holiday tours, Switzerland Family trips, Switzerland Honeymoon adventures, Switzerland Group travel, Switzerland Sightseeing tours, Swiss Alps tours, Switzerland Cultural tours, Switzerland Culinary tours, Switzerland Adventure trips, Switzerland Luxury tours, Switzerland Budget tours, Switzerland Guided tours, Switzerland City tours, Switzerland Countryside tours, Switzerland Beach holidays, Switzerland tours, Switzerland tour itineraries, Switzerland travel deals, VJC Overseas, Best Visa Immigration Consultants",
  },
  dubai: {
    title: "Dubai Tour Packages & Holiday Trips",
    
    keywords: "Dubai Vacation packages, Dubai Holiday tours, Dubai Family trips, Dubai Group tours, Dubai Adventure travel, Dubai Sightseeing tours, Dubai Desert safaris, Dubai city tours, Dubai Beach holidays, Dubai Honeymoon trips, Dubai Luxury tours, Dubai Budget tours, Dubai Guided tours, Dubai Shopping tours, Dubai Cruise packages, Dubai Cultural tours, Dubai Travel itineraries, Dubai tour deals, Dubai attractions, VJC Overseas, Best Visa Immigration Consultants",
  },
  turkey: {
    title: "Turkey Tour Packages & Holidays | VJC Overseas",
    
    keywords: "Turkey Tour packages, Turkey Holiday packages, Turkey Vacation packages, Turkey Group tours, Turkey Travel deals, Turkey trips, Turkey Sightseeing, Turkey Adventure tours, Turkey Family vacations, Turkey Honeymoon packages, Turkey Luxury tours, Turkey budget tours, Turkey cultural tours, Turkey hotel bookings, Turkey flight booking, Turkey travel itineraries, Turkey holiday deals, Turkey tour booking, Turkey attractions, VJC Overseas, Best Visa Immigration Consultants",
  },
  malaysia: {
    title: "Malaysia Tour Packages & Holidays | VJC Overseas",
    
    keywords: "Malaysia Holiday tours, Malaysia Adventure trips, Malaysia Family vacations, Malaysia Honeymoon packages, Malaysia Tour packages, Malaysia Sightseeing tours, Malaysia Cultural tours, Malaysia Nature tours, Malaysia City tours, Malaysia Beach holidays, Malaysia Rainforest tours, Malaysia Luxury tours, Malaysia Budget tours, Malaysia Guided tours, Malaysia Travel itineraries, Malaysia Trip planning, Malaysia Attractions, Malaysia Travel deals, Malaysia Tour booking, VJC Overseas, Best Visa Immigration Consultants",
  },
  singapore: {
    title: "Singapore Tour Packages & Travel Experiences",
    
    keywords: "Singapore tours, Singapore Attractions tickets, Singapore Universal Studios, Singapore Flyer, Singapore city tours, FunVee bus tour, Singapore travel packages, Singapore sightseeing, Singapore adventure tours, Singapore family tours, Singapore Holiday packages, Singapore tour deals, Singapore excursion tickets, Singapore guided tours, Singapore tour operators, Singapore travel guide, Singapore local experiences, Singapore tourist attractions, Singapore day trips, VJC Overseas, Best Visa Immigration Consultants",
  },
  greece: {
    title: "Greece Tour Packages & Ticketing | VJC Overseas ",
    
    keywords: "Greece tours, Greece Attractions tickets, Santorini tours, Athens sightseeing, Crete travel packages, Greek islands tours, Greece holiday deals, Greece city tours, Greece vacation packages, Greece cultural tours, Greece guided tours, Greece cruise packages, Greece adventure tours, Greece family tours, Greece honeymoon packages, Greece travel guide, Greece day trips, Greece historical sites, VJC Overseas, Best Visa Immigration Consultants",
  },
  bali: {
    title: "Bali Tour Packages, Beaches & Holiday Experiences",
    
    keywords: "Bali tours, Bali Travel packages, Bali sightseeing, Bali temples, Bali beaches, Bali volcano tours, Bali cultural experiences, Bali adventure tours, Bali family trips, Bali honeymoon tours, Bali day trips, Bali guided tours, Bali holiday deals, Bali vacation packages, Bali nature tours, Bali city tours, Bali cruise packages, Bali luxury tours, VJC Overseas, Best Visa Immigration Consultants",
  },
  andaman: {
    title: "Andaman Tour Packages & Island Holiday Trips",
    
    keywords: "Andaman tours, Andaman travel packages, Port Blair tours, Havelock Island trips, Neil Island sightseeing, Radhanagar Beach visits, Elephant Beach activities, Cellular Jail tours, Ross Island excursions, North Bay Island adventures, Viper Island tours, Jolly Buoy Island snorkeling, Andaman water sports, Andaman holiday packages, Andaman vacation deals, Andaman cultural experiences, Andaman guided trips, Andaman family holidays, VJC Overseas, Best Visa Immigration Consultants",
  },
  thailand: {
    title: "Thailand Tour Packages & Holiday Trips",
    
    keywords: "Thailand tours, Thailand attractions tickets, Bangkok tours, Pattaya sightseeing, Phuket beaches, Chiang Mai temples, Krabi islands, Thailand holiday packages, Thailand city tours, Thailand adventure tours, Thailand honeymoon packages, Thailand family tours, Thailand cultural experiences, Thailand guided tours, Thailand vacation deals, Thailand day trips, Thailand shopping tours, Thailand nightlife tours, Thailand cruise packages, Thailand luxury tours, VJC Overseas, Best Visa Immigration Consultants",
  },
  philippines: {
    title: "Philippines Tour Packages | VJC Overseas",
    
    keywords: "Philippines tours, Boracay travel packages, Palawan island tours, Cebu sightseeing, Manila city tours, Philippines beach holidays, Philippines adventure trips, Philippines cultural tours, Philippines guided tours, Philippines family vacations, Philippines honeymoon trips, Philippines day trips, Philippines nature tours, Philippines water sports, Philippines island hopping, Philippines vacation deals, Philippines cruise tours, Philippines luxury holidays, VJC Overseas, Best Visa Immigration Consultants",
  },
  maldives: {
    title: "Maldives Tour Packages & Luxury Holidays",
    
    keywords: "Maldives tours, Maldives travel packages, Maldives overwater villas, Maldives snorkeling, Maldives cruises, Maldives honeymoon packages, Maldives family holidays, Maldives island hopping, Maldives beach resorts, Maldives adventure tours, Maldives luxury holidays, Maldives cultural experiences, Maldives day trips, Maldives guided tours, Maldives water sports, Maldives spa resorts, Maldives diving packages, Maldives romantic getaways, Maldives vacation deals, Maldives travel guide, VJC Overseas, Best Visa Immigration Consultants",
  },
  "fiji-island": {
    title: "Fiji Island Tour Packages & Travel Services | VJC",
    
    keywords: "Fiji Island tours, Fiji snorkeling packages, Yasawa Islands Fiji, Fiji coral reefs, Fiji beach resorts, Fiji adventure tours, Fiji honeymoon packages, Fiji family holidays, Fiji cultural experiences, Fiji day trips, Fiji guided tours, Fiji vacation packages, Fiji island hopping, Fiji diving tours, Fiji luxury resorts, Fiji travel deals, Fiji nature tours, Fiji cruise packages, Fiji spa resorts, Fiji wildlife experiences, VJC Overseas, Best Visa Immigration Consultants",
  },
  azerbaijan: {
    title: "Azerbaijan Tour Packages & Travel Experiences",
    
    keywords: "Azerbaijan tours, Baku city tours, Gobustan petroglyphs, Sheki Palace, Gabala waterfalls, Ganja sightseeing, Azerbaijan cultural experiences, Azerbaijan adventure tours, Azerbaijan holiday packages, Azerbaijan guided tours, Azerbaijan day trips, Azerbaijan vacation deals, Azerbaijan nature tours, Azerbaijan luxury holidays, Azerbaijan family tours, Azerbaijan honeymoon packages, Azerbaijan historical sites, Azerbaijan UNESCO sites, Azerbaijan travel guide, Azerbaijan cruise tours, VJC Overseas, Best Visa Immigration Consultants",
  },
  austria: {
    title: "Austria Tour Packages & Holiday Trips",
    
    keywords: "Austria tours, Vienna sightseeing, Salzburg travel packages, Innsbruck city tours, Hallstatt village, Austria holiday deals, Austria vacation packages, Austria cultural experiences, Austria guided tours, Austria adventure tours, Austria family holidays, Austria honeymoon packages, Austria day trips, Austria nature tours, Austria luxury holidays, Austria historical sites, Austria UNESCO sites, Austria music heritage, Austria alpine resorts, Austria culinary tours, VJC Overseas, Best Visa Immigration Consultants",
  },
  "south-africa": {
    title: "South Africa Tour Packages & Holiday Trips",
    
    keywords: "South Africa tours, Cape Town sightseeing, Kruger National Park safari, Garden Route trips, Johannesburg city tours, Stellenbosch wine tours, Robben Island visit, Table Mountain hiking, Boulders Beach penguins, Cape of Good Hope tour, Addo Elephant Park, Drakensberg adventure, Knysna lagoon, Hermanus whale watching, Durban beaches, Pretoria city tours, Soweto cultural tours, Apartheid Museum visit, South Africa luxury tours, VJC Overseas, Best Visa Immigration Consultants",
  },
  japan: {
    title: "Japan Tour Packages, Flights & Holiday Deals | VJC Overseas",
    
    keywords: "Japan travel, Tokyo city tours, Kyoto temples and shrines, Osaka food experiences, Mount Fuji trekking, Hiroshima historical tours, Nara sightseeing, Japan cherry blossoms, Hokkaido nature trips, Okinawa beaches, Japan cultural experiences, Japan guided adventures, Japan family holidays, Japan honeymoon travel, Japan day excursions, Japan luxury tours, Japan cruise experiences, Japan festival tours, Japan shopping streets, VJC Overseas, Best Visa Immigration Consultants",
  },
  vietnam: {
    title: "Vietnam Tour Packages & Holiday Experiences",
    
    keywords: "Vietnam travel, Hanoi exploration, Halong Bay cruise, Hoi An heritage town, Mekong Delta adventure, Ho Chi Minh City tours, Sapa mountain trekking, Hue historic sites, Ninh Binh landscapes, Phong Nha caves, Vietnam cultural experiences, Vietnam culinary tours, Vietnam family trips, Vietnam honeymoon escapes, Vietnam guided journeys, Vietnam nature tours, Vietnam beach holidays, Vietnam local markets, VJC Overseas, Best Visa Immigration Consultants",
  },
  
};


export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country?.toLowerCase();
  const data = metaData[country];

  return {
    title: data?.title || "Tours & Ticketing – Explore the World with Ease | VJC Travel Services",
description: data?.description || "Discover seamless tours and ticketing solutions with VJC Travel Services. From flight bookings to customized holiday packages, we make your travel planning effortless and affordable.",
keywords: data?.keywords || "tours and ticketing, travel booking, flight tickets, holiday packages, hotel reservations, travel agency, vacation planning, affordable tours, travel consultancy, group tours, international trips"
  };
}

export default async function CountryPage({ params }) {
  const resolvedParams = await params;
  const country = resolvedParams.country;

  return <CountryClient country={country} />;
}
