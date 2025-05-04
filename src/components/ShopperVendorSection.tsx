
import { Button } from "@/components/ui/button";
import communityimage from "../assets/pngs/communityimage.png";
import communityvendor from "../assets/pngs/communityvendor.png";


const ShopperVendorSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Community heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Join the largest Community of<br />
            Vendors and Shoppers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with thousands of vendors and shoppers around the world
          </p>
        </div>
        
        {/* Shopper Benefits */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shopper benefits</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Find the best products from around the world
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Connect directly with vendors
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Get exclusive deals and discounts
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Review and rate vendors
              </li>
            </ul>
            <Button className="bg-avendry-purple hover:bg-avendry-purple-dark text-white">
              Learn More
            </Button>
          </div>
          
          <div>
            {/* <div className="bg-gradient-to-br to-avendry-purple-light rounded-xl h-72 overflow-hidden"> */}
              <img src={communityimage} alt="Shopper Experience" className="w-full h-full object-cover" />
            {/* </div> */}
          </div>
        </div>
        
        {/* Vendor Benefits */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
              <img src={communityvendor} alt="Vendor Experience" className="w-full h-full object-cover" />
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Vendor Benefits</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Reach more customers globally
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Showcase your products to interested buyers
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Receive payments securely
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-avendry-purple rounded-full"></span>
                Analytics to track your sales and growth
              </li>
            </ul>
            <Button className="bg-avendry-purple hover:bg-avendry-purple-dark text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopperVendorSection;
