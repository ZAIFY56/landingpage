import { motion } from "framer-motion";
import heroimg from "/getquote/getqoute1.jpg";
import svan from "/getquote/van.jpg";
import tvan from "/getquote/tvan.png";
import mvan from "/getquote/mvan.jpg";
import xvan from "/getquote/xvan.png";
import lvan from "/getquote/lvan.jpg";
import vanIcon from "/getquote/vanicon.png";
import { useState, useCallback, useEffect } from "react";
import backIcon from "/getquote/prevoius.png";
import personimg from "/getquote/person.jpg";
import { useNavigate } from "react-router-dom";

// ---------------------- ANIMATED TEXT ----------------------
const DropLetter = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: -50, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.span>
  );
};

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");
  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((letter, letterIndex) => (
            <DropLetter
              key={letterIndex}
              delay={delay + wordIndex * 0.1 + letterIndex * 0.05}
            >
              {letter}
            </DropLetter>
          ))}
        </span>
      ))}
    </div>
  );
};

// ---------------------- DEBOUNCE ----------------------
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ---------------------- AUTOCOMPLETE ----------------------
const AutocompleteInput = ({
  placeholder,
  defaultValue,
  onSelect,
  setLocation,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSuggestions = async (input) => {
    if (!input || input.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=cbc65427c4fb45e68cb53012b5775cba&filter=countrycode:gb&bias=countrycode:gb`
      );
      const data = await response.json();

      if (data && data.features) {
        const results = data.features.map((feature) => ({
          description: feature.properties.formatted,
          place_id: feature.properties.place_id,
          lat: feature.geometry.coordinates[1],
          lon: feature.geometry.coordinates[0],
        }));
        setSuggestions(results);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedFetchSuggestions(value);
  };

  const handleSelect = (item) => {
    setInputValue(item.description);
    setShowSuggestions(false);
    onSelect(item.description);
    setLocation(item); // Pass full location object to parent
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full p-2 rounded text-gray-800 focus:border-primary focus:ring-2 focus:ring-primary-light"
      />
      {isLoading && (
        <div className="absolute right-2 top-2">
          <div className="animate-spin rounded-full h-4 w-4 "></div>
        </div>
      )}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white text-primary border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(item)}
            >
              {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// ---------------------- UI ELEMENTS ----------------------
const BackButton = ({ icon }) => (
  <motion.div
    className="mt-3 flex items-center gap-2 cursor-pointer hover:underline"
    onClick={() => window.history.back()}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{
      scale: 1.05,
      x: -5,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.img
      src={icon}
      alt="Back"
      className="2xl:w-[32px] 2xl:h-[32px]"
      whileHover={{
        x: -3,
        transition: { duration: 0.2 },
      }}
    />
    <h3 className="2xl:text-[18px] font-semibold text-md md:text-md">Back</h3>
  </motion.div>
);

const SpecsList = ({ specs }) => {
  const specVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  return (
    <motion.ul
      className="text-sm space-y-1 mb-4"
      variants={specVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Object.entries(specs).map(([key, value]) => (
        <motion.li
          key={key}
          className="flex justify-between"
          variants={itemVariants}
        >
          <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
          <span>{value}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const PriceLine = ({ label, value, isBold = false, variants }) => (
  <motion.p
    className={`flex justify-between ${isBold ? "font-semibold" : ""}`}
    variants={variants}
  >
    <span>{label}</span>
    <span>£{value.toFixed(2)}</span>
  </motion.p>
);

const PriceInfo = ({ price, total }) => {
  const priceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      className="text-sm mb-2 space-y-1"
      variants={priceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <PriceLine label="Price:" value={price} variants={itemVariants} />
      <PriceLine label="TOTAL:" value={total} isBold variants={itemVariants} />
    </motion.div>
  );
};

const VanCard = ({ van, index, variants }) => {
  const navigate = useNavigate();
  const total = van.price;
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      className="border border-primary rounded-md p-4 shadow-sm"
      custom={index}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.h4
        className="font-semibold bg-primary p-2 text-center rounded-se-md text-white 2xl:text-lg w-[140px] 2xl:w-[156px] mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {van.title}
      </motion.h4>
      <motion.img
        src={van.image}
        alt={van.title}
        className="w-full h-32 object-contain mb-4"
        variants={imageVariants}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      />
      <SpecsList specs={van.specs} />
      {van.tripDistance && (
        <motion.div className="flex justify-between mb-2">
          <span>Trip Distance:</span>
          <span>{van.tripDistance} mi</span>
        </motion.div>
      )}
      <PriceInfo price={van.price} total={total} />
      <motion.button
        className="w-full bg-primary text-white py-2 rounded hover:bg-[#3c7e7c] transition"
        whileHover={{
          scale: 1.02,
          backgroundColor: "#3c7e7c",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() =>
          navigate("/instant-quote/form", {
            state: {
              van,
              tripDistance: van.tripDistance,
              totalPrice: total, // Pass the total price to the form
            },
          })
        }
      >
        Choose this Option
      </motion.button>
    </motion.div>
  );
};
// ---------------------- MAIN COMPONENT ----------------------
function GetQuotesPage() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [tripDistance, setTripDistance] = useState(null);
  const [showPickupMap, setShowPickupMap] = useState(false);
  const [showDestinationMap, setShowDestinationMap] = useState(false);

  useEffect(() => {
    const calculateDistance = async () => {
      if (pickupLocation && dropoffLocation) {
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/routing?waypoints=${pickupLocation.lat},${pickupLocation.lon}|${dropoffLocation.lat},${dropoffLocation.lon}&mode=drive&apiKey=cbc65427c4fb45e68cb53012b5775cba`
          );
          const data = await response.json();
          const meters = data.features[0].properties.distance;
          const mi = (meters / 1609.344).toFixed(2);
          setTripDistance(mi);
          console.log(data.features[0].properties.distance);
        } catch (error) {
          console.error("Error calculating distance:", error);
        }
      }
    };
    calculateDistance();
  }, [pickupLocation, dropoffLocation]);

  const vanOptions = [
    {
      title: "Small Van",
      image: svan,
      specs: {
        length: "1.3m",
        width: "1.2m",
        height: "1.2m",
        weight: "400kg",
      },
      price: 75,
    },
    {
      title: "Transit Van",
      image: tvan,
      specs: {
        length: "1.8m",
        width: "1.4m",
        height: "1.4m",
        weight: "900kg",
      },
      price: 83,
    },
    {
      title: "Medium Van",
      image: mvan,
      specs: {
        length: "2.0m",
        width: "1.5m",
        height: "1.4m",
        weight: "950kg",
      },
      price: 90,
    },
    {
      title: "Xlwb Van",
      image: xvan,
      specs: {
        length: "3.4m",
        width: "1.7m",
        height: "1.7m",
        weight: "1250kg",
      },
      price: 175,
    },
    {
      title: "Luton Van",
      image: lvan,
      specs: {
        length: "4.0m",
        width: "2.0m",
        height: "2.2m",
        weight: "1000kg",
      },
      price: 170,
    },
  ];

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const infoBarVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    hover: { y: -10, scale: 1.02, transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  return (
    <div className="bg-white relative">
      {/* Hero Image & Title */}
      <motion.div
        className="relative "
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.img
          src={heroimg}
          alt="Hero"
          className="w-full h-[360px] object-cover"
        />
        <motion.div
          className="absolute mx-[4rem] lg:mx-[16rem] top-80 left-0 right-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="bg-white text-black p-6 text-xl md:text-4xl font-bold text-center rounded-md">
            <AnimatedText text="Instant Quotes" delay={0.2} />
          </h2>
        </motion.div>
      </motion.div>

      {/* Inputs */}
      <motion.div
        className="mt-10 md:mt-14 flex flex-wrap justify-between items-center bg-primary text-white p-4 rounded-md max-w-5xl mx-auto mb-8 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={infoBarVariants}
      >
        {/* Pickup Field */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm mb-1">Pickup from:</label>

          <AutocompleteInput
            placeholder="Enter pickup location"
            defaultValue={pickup}
            onSelect={setPickup}
            setLocation={setPickupLocation}
          />
        </div>

        {/* Destination Field */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm mb-1">Destination:</label>

          <AutocompleteInput
            placeholder="Enter destination"
            defaultValue={destination}
            onSelect={setDestination}
            setLocation={setDropoffLocation}
          />
        </div>

        {/* Info + Back */}
        <div className="flex-1 min-w-[200px]">
          <div className="text-white flex p-2 mt-4 gap-4">
            <img src={vanIcon} alt="van-icon" className="w-12 h-8 mt-2" />
            <div>
              <p className="text-sm font-semibold ">Earliest Delivery:</p>
              <p className="text-sm font-semibold ">14:21 if Booked Now</p>
            </div>
          </div>
        </div>

        <BackButton icon={backIcon} />
      </motion.div>

      {tripDistance ? (
        // Van Cards Section (unchanged)
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {vanOptions.map((van, index) => (
            <VanCard
              key={index}
              van={{ ...van, tripDistance }}
              index={index}
              variants={cardVariants}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={personimg}
              alt="person"
              className="w-full h-auto rounded-md shadow-md"
            />
          </motion.div>
        </motion.div>
      ) : (
        // Fallback Section with Image
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-2xl mx-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="No trip selected"
            className="w-32 h-32 mb-6 opacity-80"
          />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            No Route Selected
          </h3>
          <p className="text-gray-500 text-lg">
            Please choose a pickup and destination to view available van options
            and pricing.
          </p>
        </div>
      )}
    </div>
  );
}

export default GetQuotesPage;
