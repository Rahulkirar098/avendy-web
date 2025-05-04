
import { Button } from "@/components/ui/button";
import google from '../assets/pngs/google.png';
import apple from '../assets/pngs/apple.png';


const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-gradient-to-r from-blue-500 to-avendry-purple">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Download the Avendry<br />app Today!
          </h2>
          <p className="text-white/80 mb-6">
            Available on iOS and Android
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col md:flex-row gap-4 mb-16">
          <img src={google} alt="Google Play" className="w-15 h-10" />
      
          <img src={apple} alt="App Store" className="w-15 h-10" />
      </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-3xl w-64">
            <div className="bg-black rounded-2xl h-96 overflow-hidden">
              <img src="/placeholder.svg" alt="Avendry App" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
