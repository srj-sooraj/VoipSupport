import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "24/7 Technical Support", path: "/services" },
    { name: "Platform Monitoring", path: "/services" },
    { name: "Troubleshooting", path: "/services" },
    { name: "Customer Onboarding", path: "/services" },
    { name: "Security Management", path: "/services" },
  ];

  const platformLinks = [
    { name: "Netsapiens Support", path: "/platforms" },
    { name: "SkySwitch Support", path: "/platforms" },
    { name: "Dialpad Integration", path: "/platforms" },
    { name: "Microsoft Teams Direct Routing", path: "/platforms" },
    { name: "3CX & FreePBX Maintenance", path: "/platforms" },
  ];

  const resourceLinks = [
    { name: "Solutions Directory", path: "/solutions" },
    { name: "Case Studies & Results", path: "/case-studies" },
    { name: "Company About", path: "/about" },
    { name: "Platform Status", path: "/platforms" },
    { name: "Schedule Demo", path: "/book-demo" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          
          {/* Logo & Info Block */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                V
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                VoIP<span className="text-blue-500">Support</span><span className="text-orange-500 font-extrabold font-display">Pro</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              VoIP Support Pro delivers enterprise-grade white-label support, 24/7 network monitoring, and certified engineering expertise behind high-performing telecom operations globally.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-900/10 transition-all duration-300"
                aria-label="Twitter/X"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-900/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-900/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-900/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 hover:underline transition duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platforms */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Platforms</h3>
            <ul className="space-y-3 text-sm">
              {platformLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 hover:underline transition duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Co */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h3>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 hover:underline transition duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-slate-900 my-16" />

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div>
            &copy; {currentYear} VoIP Support Pro. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">SLA Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;