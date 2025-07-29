import { Mail, Phone, MapPin, Wifi, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-8 w-8 text-orange-400" />
              <span className="text-xl font-bold">ATM NA MÃO</span>
            </div>
            <p className="text-purple-200 leading-relaxed">
              Inovação tecnológica e desenvolvimento de soluções financeiras para transformar o futuro dos serviços
              bancários.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre" },
                { href: "/responsabilidade-social", label: "Responsabilidade Social" },
                { href: "#", label: "Serviços" },
                { href: "#", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-purple-200 hover:text-orange-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Serviços</h3>
            <ul className="space-y-2">
              {[
                "ATM NA MÃO",
                "Desenvolvimento Web",
                "Aplicativos Mobile",
                "Proteção de Dados",
                "Consultoria TI",
                "Soluções Personalizadas",
              ].map((service) => (
                <li key={service}>
                  <span className="text-purple-200">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-purple-200">contato@atmnamao.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-purple-200">+244 900 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-purple-200">Luanda, Angola</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-12 pt-8 text-center">
          <p className="text-purple-200">
            © 2025 ATM NA MÃO. Todos os direitos reservados. | Desenvolvido com ❤️ para transformar o futuro financeiro.
          </p>
        </div>
      </div>
    </footer>
  )
}
