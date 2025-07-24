import image1 from "/courierpartner/courierpartner1.png";
import image2 from "/courierpartner/courierpartner2.png";
import image3 from "/courierpartner/courierpartner3.png";
import font2 from "/courierpartner/font1.png";
import font1 from "/courierpartner/font2.png";
import font3 from "/courierpartner/font3.png";
import Card from "@/components/common/card/Card";

export default function CourierPartners() {
  const partners = [
    {
      logo: image1,
      brand: font1,
    },
    {
      logo: image2,
      brand: font2,
    },
    {
      logo: image3,
      brand: font3,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#4B9795] mb-4">
            <span className="text-black">Our Trusted</span> Courier Partner
          </h2>
          <p className="text-lg text-gray-600">
            At Rapid Response Couriers, we are committed to delivering your parcels quickly,
            safely, and reliably. Whether you're sending documents across town or shipping
            goods nationwide, our comprehensive courier solutions are designed to meet your needs.
          </p>
        </div>

        <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="!p-0 !bg-black !min-h-[200px] !max-w-none !w-full aspect-[4/3] relative overflow-hidden"
              hoverEffect={true}
            >
              <img 
                src={partner.logo} 
                alt="Partner logo" 
                className="absolute  dark:filter dark:grayscale inset-0 w-full h-full object-cover opacity-70"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
{partner.brand === font3 ? (
  <div className="text-center">
    <div className="text-white text-2xl tracking-[0.3rem] uppercase">APPLEYARD</div>
    <div className="text-white text-lg  tracking-[0.3rem] uppercase">LONDON</div>
  </div>
) : (
  <img 
    src={partner.brand} 
    alt="Brand name" 
    className="max-w-[70%] max-h-[40%] object-contain z-10"
  />
)}              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}