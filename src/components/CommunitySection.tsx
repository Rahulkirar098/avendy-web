
const CommunitySection = () => {
  const appIcons = [
    { name: "Join Group", icon: "/placeholder.svg" },
    { name: "Messenger", icon: "/placeholder.svg" },
    { name: "Avenary Stores", icon: "/placeholder.svg" },
    { name: "Profile", icon: "/placeholder.svg" },
    { name: "Discover", icon: "/placeholder.svg" },
    { name: "Calendar", icon: "/placeholder.svg" },
    { name: "Settings", icon: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Join the biggest community<br />of Travelers
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Connect with thousands of travelers around the world and share experiences
        </p>
      </div>
      
      {/* <div className="relative">
        <div className="app-icons-grid max-w-4xl mx-auto">
          {appIcons.map((app, index) => (
            <div 
              key={index} 
              className="bg-avendry-gray-dark rounded-xl p-4 flex flex-col items-center justify-center aspect-square"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-avendry-purple to-avendry-purple-dark rounded-xl flex items-center justify-center mb-2">
                <img src={app.icon} alt={app.name} className="w-6 h-6" />
              </div>
              <span className="text-xs text-center">{app.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-world-map bg-no-repeat bg-center opacity-30">
          <img src="/placeholder.svg" alt="World Map" className="w-full h-full object-contain opacity-20" />
        </div>
      </div> */}
    </section>
  );
};

export default CommunitySection;
