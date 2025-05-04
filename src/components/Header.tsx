
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 relative z-10">
      <div className="text-xl font-bold flex items-center">
        <img src="/placeholder.svg" alt="Avendry Logo" className="h-8 mr-2" />
        Avendry
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-300 hover:text-white">Features</a>
        <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
        <a href="#benefits" className="text-gray-300 hover:text-white">Benefits</a>
        <a href="#download" className="text-gray-300 hover:text-white">Download</a>
      </nav>
      <Button className="bg-avendry-purple hover:bg-avendry-purple-dark text-white">
        Sign Up
      </Button>
    </header>
  );
};

export default Header;
