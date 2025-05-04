
const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Pricing", url: "#" },
    ],
    support: [
      { name: "Help Center", url: "#" },
      { name: "Safety Center", url: "#" },
      { name: "Community", url: "#" },
    ],
    legal: [
      { name: "Cookies Policy", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Law Enforcement", url: "#" },
    ],
    install: [
      { name: "App Store", url: "#" },
      { name: "Google Play Store", url: "#" },
    ],
  };

  return (
    <footer className="bg-avendry-black py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/avendry-logo.png" alt="Avendry Logo" className="h-8 mr-2" />
              <h3 className="text-xl font-bold">Avendry</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Connecting travelers, vendors and shoppers worldwide. Build your community today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/social/facebook.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/social/instagram.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/social/twitter.png" alt="Twitter" className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-sm text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-sm text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-sm text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Install App</h4>
            <ul className="space-y-2">
              {footerLinks.install.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-sm text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Avendry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
