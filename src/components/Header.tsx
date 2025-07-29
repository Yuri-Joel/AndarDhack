
import { useState } from "react"
import { Menu, Wifi, X } from "lucide-react"
import { Link, useLocation} from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = useLocation().pathname

 
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/portfolio", label: "Portfólio" },
    { href: "/responsabilidade-social", label: "Responsabilidade Social" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/95 backdrop-blur-sm border-b border-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Wifi className="h-8 w-8 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
             ANDARDHACK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-orange-400 relative group ${
                    pathname === item.href ? "text-orange-400" : "text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left transition-transform duration-300 ${
                      pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contato">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Fale Conosco
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 p-2 rounded-lg transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-900/95 backdrop-blur-sm border-t border-purple-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-orange-400 rounded-lg ${
                    pathname === item.href ? "text-orange-400 bg-purple-800" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contato">
                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                  Fale Conosco
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
