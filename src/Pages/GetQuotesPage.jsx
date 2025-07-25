import heroimg from "/getquote/getqoute1.jpg";  
import vanimg from "/getquote/van.jpg";
import vectoricon from "/getquote/Vector.png";
import vanIcon from "/getquote/vanicon.png";
import backIcon from "/getquote/prevoius.png";
import personimg from "/getquote/person.jpg"
const vanOptions = [
  {
    title: "Small Van",
    image: vanimg,
    specs: { length: "1.3m", width: "1.2m", height: "1.2m", weight: "400kg" },
    price: 75,
    vat: 15,
  },
  {
    title: "Transit Van",
    image: vanimg,
    specs: { length: "1.8m", width: "1.4m", height: "1.4m", weight: "900kg" },
    price: 83,
    vat: 17,
  },
  {
    title: "Medium Van",
    image: vanimg,
    specs: { length: "2.0m", width: "1.5m", height: "1.4m", weight: "950kg" },
    price: 90,
    vat: 18,
  },
  {
    title: "Xlwb Van",
    image: vanimg,
    specs: { length: "3.4m", width: "1.7m", height: "1.7m", weight: "1250kg" },
    price: 175,
    vat: 35,
  },
  {
    title: "Luton Van",
    image: vanimg,
    specs: { length: "4.0m", width: "2.0m", height: "2.2m", weight: "1000kg" },
    price: 170,
    vat: 34,
  },
];

function GetQuotesPage() {
  return (
 <div className="bg-white relative">
      <div className="relative">
        <img 
          src={heroimg} 
          alt="Hero" 
          className="w-full h-[360px] object-cover" 
        />
        
        <div className="absolute mx-[4rem] lg:mx-[16rem]  2xl:rounded-lg 2xl:top-68 top-80 left-0 right-0">
          <h2 className="bg-white text-black p-6 text-xl md:text-4xl font-bold text-center rounded-md">
            Instant Quotes
          </h2>
        </div>
      </div>
   
      <div className="mt-10 md:mt-14 flex flex-wrap justify-between items-center bg-[#4B9795] text-white p-4 rounded-md max-w-5xl mx-auto mb-8">
        <InfoItem icon={vectoricon} label="Pickup from:" value="EC1A 1NT" />
        <InfoItem icon={vectoricon} label="Destination:" value="E17JF" />
        <InfoItem icon={vanIcon} label="Earliest Delivery:" value="14:21 if Booked Now" />
        <BackButton icon={backIcon} />
      </div>
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10">
        {vanOptions.map((van, index) => (
          <VanCard key={index} van={van} />
        ))}
        <div>
          <img src={personimg} alt="Person" className="2xl:w-[366px] rounded-md mt-20" />
        </div>
      </div>
    </div>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt={label} className="2xl:w-[32px] 2xl:h-[32px]" />
      <div>
        <p className="2xl:text-[18px] md:text-sm">{label}</p>
        <h3 className="2xl:text-[18px] font-semibold md:text-lg">{value}</h3>
      </div>
    </div>
  );
}

function BackButton({ icon }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:underline">
      <img src={icon} alt="Back" className="2xl:w-[32px] 2xl:h-[32px]" />
      <h3 className="2xl:text-[18px] font-semibold text-md md:text-lg">Back</h3>
    </div>
  );
}

function VanCard({ van }) {
  const total = van.price + van.vat;
  
  return (
    <div className="border border-[#4B9795] rounded-md p-4 shadow-sm">
      <h4 className="font-semibold bg-[#4B9795] p-2 text-center rounded-se-md text-white 2xl:text-lg w-[140px] 2xl:w-[156px] mb-2">
        {van.title}
      </h4>
      <img src={van.image} alt={van.title} className="w-full h-32 object-contain mb-4" />
      <SpecsList specs={van.specs} />
      <PriceInfo price={van.price} vat={van.vat} total={total} />
      <button className="w-full bg-[#4B9795] text-white py-2 rounded hover:bg-[#3c7e7c] transition">
        Choose this Option
      </button>
    </div>
  );
}

function SpecsList({ specs }) {
  return (
    <ul className="text-sm space-y-1 mb-4">
      {Object.entries(specs).map(([key, value]) => (
        <li key={key} className="flex justify-between">
          <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span> 
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

function PriceInfo({ price, vat, total }) {
  return (
    <div className="text-sm mb-2 space-y-1">
      <PriceLine label="Price:" value={price} />
      <PriceLine label="VAT:" value={vat} />
      <PriceLine label="TOTAL:" value={total} isBold />
    </div>
  );
}

function PriceLine({ label, value, isBold = false }) {
  return (
    <p className={`flex justify-between ${isBold ? 'font-semibold' : ''}`}>
      <span>{label}</span>
      <span>£{value.toFixed(2)}</span>
    </p>
  )
}

export default GetQuotesPage