import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Linux", path: "/linux" },
  { name: "Tools", path: "/tools" },
  { name: "Cyber Laws", path: "/cyber-laws" },
  { name: "Blockchain", path: "/blockchain" },
  { name: "Cryptography", path: "/cryptography" },
  { name: "Platforms", path: "/platforms" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-16">
        
        {/* Logo */}
        <h1 className="text-cyan-400 font-bold text-lg tracking-wide">
          CYBER_WORLD
        </h1>

        {/* Links */}
        <div className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-300
                 ${
                   isActive
                     ? "text-cyan-400"
                     : "text-gray-300 hover:text-cyan-400"
                 }
                 after:content-[''] after:absolute after:left-0 after:-bottom-2
                 after:h-[2px] after:bg-cyan-400
                 after:transition-all after:duration-300
                 after:w-0 hover:after:w-full
                 ${isActive ? "after:w-full" : ""}
                `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
