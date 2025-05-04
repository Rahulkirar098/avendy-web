
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const userCategories = [
    {
      icon: "/placeholder.svg",
      title: "DJ",
      description: "Find gigs and connect with venues"
    },
    {
      icon: "/placeholder.svg",
      title: "Photographers",
      description: "Showcase your portfolio and find clients"
    },
    {
      icon: "/placeholder.svg",
      title: "Party Planners",
      description: "Plan events and find vendors"
    },
    {
      icon: "/placeholder.svg",
      title: "Artists",
      description: "Sell your art and connect with collectors"
    },
    {
      icon: "/placeholder.svg",
      title: "Bakers",
      description: "Show off your bakery items and find customers"
    },
    {
      icon: "/placeholder.svg",
      title: "Caterers",
      description: "Offer catering services for events"
    },
    {
      icon: "/placeholder.svg",
      title: "Makeup Artists",
      description: "Connect with clients for special occasions"
    },
    {
      icon: "/placeholder.svg",
      title: "Studios",
      description: "Rent out your studio space to artists"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Who can benefit from using Avendry?</h2>
        <p className="text-gray-400">Our platform is designed for a variety of professionals</p>
      </div>
      
      <div className="benefits-grid max-w-6xl mx-auto">
        {userCategories.map((category, index) => (
          <div 
            key={index} 
            className="border border-avendry-gray-light rounded-xl p-6 flex flex-col items-center"
          >
            {/* <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
              <img src={category.icon} alt={category.title} className="w-10 h-10" />
            </div> */}
            <h3 className="font-semibold mb-1">{category.title}</h3>
            <p className="text-sm text-gray-400 text-center">{category.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <Button className="bg-avendry-purple hover:bg-avendry-purple-dark text-white px-8">
          See All
        </Button>
      </div>
    </section>
  );
};

export default BenefitsSection;
