
import { Button } from "@/components/ui/button";
import google from '../assets/pngs/google.png';
import apple from '../assets/pngs/apple.png';

const HeroSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      <div className="geometric-overlay"></div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
        BRIDGING <br/> THE GAP
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
        The only app you need to connect with the world's best travelers
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-16">
          <img src={google} alt="Google Play" className="w-15 h-10" />
      
          <img src={apple} alt="App Store" className="w-15 h-10" />
      </div>
      
      <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-avendry-purple">16K+</span>
          <span className="text-sm text-gray-400">Active Users</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-avendry-purple">08K+</span>
          <span className="text-sm text-gray-400">Global Users</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-4xl font-bold text-avendry-purple">12K+</span>
          <span className="text-sm text-gray-400">Partners</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
