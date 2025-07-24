import image1 from "/new&letter/news1.png";
import image2 from "/new&letter/news2.png";
import image3 from "/new&letter/news3.png";
import image4 from "/new&letter/news4.png";
import Card from "@/components/common/card/Card";
import { LinkButton } from "@/components/common/button";
import { FaArrowRight } from "react-icons/fa6";

export default function NewsAndArticles() {
  const articles = [
    {
      date: "July 4, 2025",
      icon: image2,
      title: "How to Choose the Right Courier Service for Your Business",
      hasReadMore: true
    },
    {
      date: "July 4, 2025",
      icon: image3,
      title: "Protecting Your Shipments: Understanding Insurance Options",
      hasReadMore: true
    },
    {
      date: "July 4, 2025",
      icon: image4,
      title: "Behind the Scenes: A Day in the Life of a Courier Driver",
      hasReadMore: true
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4B9795]">
            <span className="text-black">Our Latest</span> News & Articles
          </h2>
          <p className="mt-4 text-sm text-black max-w-3xl md:mx-[16rem]">
            Stay updated with our latest news and articles, showcasing innovations and tips in the courier industry. 
            Discover insights on delivery efficiency, safety, and customer satisfaction. 
            Keep informed about our newest services and company achievements.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src={image1} 
              alt="Packing guide" 
              className="w-full rounded-md h-64 object-cover"
            />
            <div className="py-4">
              <span className="text-sm text-gray-500">July 4, 2025</span>
              <h3 className="text-2xl font-semibold mt-2 mb-4 text-gray-800">
                The Ultimate Guide to Packing for Safe Shipping
              </h3>
              <p className="text-md text-black mb-6">
                Learn how to pack your items securely for safe shipping with this comprehensive guide. 
                It covers essential materials, proper packing techniques, and labeling tips to prevent damage. 
                Ensure your packages arrive intact and on time with these expert packing tips.
              </p>
              <LinkButton icon={<FaArrowRight />}>Read more</LinkButton>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="!p-0 !bg-white !max-w-none !w-full !border-b-2 !flex-row !items-stretch !min-h-0 !rounded-md hover:!shadow-none"
              >
                <div className="w-1/4">
                  <img 
                    src={article.icon} 
                    alt={article.title} 
                    className="w-full md:h-[6rem] rounded-l-md object-cover"
                  />
                </div>
                <div className="px-4 py-1 flex flex-col justify-between items-start w-3/4"> 
                  <div>
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <h3 className="text-md font-semibold mt-1 mb-2 text-gray-800 line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                  <LinkButton icon={<FaArrowRight />} className="!justify-start">Read more</LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}