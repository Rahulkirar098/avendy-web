
import { Button } from "@/components/ui/button";
import mobile from "../assets/pngs/mobile.png";
import cloud from "../assets/pngs/cloud.png";
import network from "../assets/pngs/network.png";
import brand from "../assets/pngs/brand.png";
import mobileBg from "../assets/pngs/mobilebg.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: mobile,
      title: "Mobile App",
      description: "Access from anywhere with our mobile app"
    },
    {
      icon: network,
      title: "SEO",
      description: "Save your data securely in the cloud"
    },
    {
      icon: brand,
      title: "Branding Consultation",
      description: "Save your data securely in the cloud"
    },
    {
      icon: cloud,
      title: "Cloud Storage",
      description: "Stay updated with the latest trends and news"
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-avendry-gray-dark" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          What would you grade your social media page?
        </h2>
        <p className="text-sm text-gray-400 mb-10">
          We offer the best features to help you improve your social media presence
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className=" h-64 mb-4 overflow-hidden">
              <img src={mobileBg} alt="Feature Showcase" className="w-50 h-25 object-cover" />
            </div>
            <Button className="bg-avendry-purple hover:bg-avendry-purple-dark text-white">
              Learn More
            </Button>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12  flex items-center justify-center shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-15" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
