import { useState, useEffect } from "react"
import { ArrowRight, Smartphone, Shield, Code, Zap, Users, Award, ChevronDown,  Newspaper, MessageSquare, Phone, Mail } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { GooglePlay } from "../components/icons/GooglePlayIcon"
import { AppStoreIcon } from "../components/icons/AppStoreIcon"

export const Home = ()=>{
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-orange-300/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange-500/30 rounded-full animate-ping delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="px-4 py-2 bg-orange-500/20 rounded-full border border-orange-400/30">
                  <span className="text-orange-400 font-semibold text-sm">ANDHARDACK</span>
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Inovação
                <span className="block text-orange-400 animate-pulse">Tecnológica</span>
                <span className="block text-white">Sem Limites</span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed max-w-lg">
                Desenvolvemos soluções tecnológicas revolucionárias para transformar negócios e criar o futuro digital.
                Do fintech ao desenvolvimento web, somos sua parceira em inovação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                Conheça Nossas Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-purple-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent">
                Ver Portfólio
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl transform rotate-6 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 m-5 shadow-2xl transform hover:rotate-1 transition-transform duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20WhatsApp%202025-07-28%20%C3%A0s%2019.06.46_fe676fc8.jpg-TG5j9drb1blJzqH7dAnyPTOL8kcmNl.jpeg"
                  alt="ATM NA MÃO - Produto Andhardack"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-purple-900">ATM NA MÃO</h3>
                  <p className="text-gray-600">Nosso produto em destaque</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-orange-400" />
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-purple-800 rounded-lg shadow-lg p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Descubra mais sobre a Andhardack</h3>
            <p className="text-purple-200">Conheça nossa história, missão e valores.</p>
            <Link to="/sobre">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                Saiba mais
              </button>
            </Link>
          </div>
          <div className="bg-orange-500 rounded-lg shadow-lg p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Soluções Andhardack</h3>
            <p className="text-orange-100">Explore nossas soluções inovadoras para o seu negócio.</p>
            <Link to="/servicos">
              <button className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors duration-300">
                Saiba mais
              </button>
            </Link>
          </div>
          <div className="bg-purple-800 rounded-lg shadow-lg p-8 text-white space-y-4">
            <h3 className="text-2xl font-bold">Relatórios e Insights</h3>
            <p className="text-purple-200">Acesse nossos relatórios e análises de mercado.</p>
            <Link to="/blog">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                Saiba mais
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6">Nossas Especialidades</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços tecnológicos para transformar seu negócio e impulsionar a
              inovação digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Soluções Fintech",
                description: "Desenvolvimento de aplicações financeiras inovadoras e seguras.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Code,
                title: "Desenvolvimento Web & Mobile",
                description: "Criação de websites, sistemas e aplicativos de alta performance.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Shield,
                title: "Segurança Digital",
                description: "Proteção de dados e implementação de protocolos de segurança avançados.",
                color: "from-orange-600 to-purple-600",
              },
              {
                icon: Zap,
                title: "Consultoria Tecnológica",
                description: "Orientação estratégica para transformação digital do seu negócio.",
                color: "from-purple-600 to-orange-500",
              },
              {
                icon: Users,
                title: "UX/UI Design",
                description: "Design centrado no usuário para experiências digitais memoráveis.",
                color: "from-orange-500 to-purple-500",
              },
              {
                icon: Award,
                title: "Soluções Personalizadas",
                description: "Desenvolvimento sob medida para necessidades específicas.",
                color: "from-purple-500 to-orange-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
    {/*   <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Andhardack em Números</h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
            Nossa trajetória de sucesso reflete nosso compromisso com a excelência e inovação tecnológica.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "10+", label: "Anos de Experiência", icon: TrendingUp },
              { number: "500+", label: "Projetos Entregues", icon: Award },
              { number: "100+", label: "Clientes Satisfeitos", icon: Users },
              { number: "50+", label: "Soluções Desenvolvidas", icon: Zap },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            Conheça Nossa História
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
 */}
   <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-12 text-center">Últimas Notícias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: null,
                title: "Saiba Como Participar no Sorteio da Campanha '50 ANOS'",
                description:
                  "Inserida nas comemorações do quinquagésimo aniversário da Independência de Angola, o Banco de Comércio e Indústria (BCI)",
                badge: "Premiação",
              },
              {
                image: null,
                title: "Esclarecimento sobre a Multa Aplicada pelo Banco Nacional de Angola",
                description:
                  "Considerando a evolução dos sistemas de pagamento em Angola, o Banco Nacional de Angola anunciou através do Comunicado de 12 de Abril de 2024 a descontinuação da emissão de cheques e a consequente descontinuação da aceitação dos mesmos.",
                badge: null,
              },
              {
                image: null, // Placeholder for abstract graphic
                title: "BNA saúda cumprimentos das medidas de intervenção correctiva aplicadas ao BCI",
                description:
                  "“No uso de suas atribuições legais e regulamentares, o Banco Nacional de Angola comunica que as medidas de",
                badge: null,
              },
              {
                image: null,
                title: "BCI conclui com sucesso Plano de Recapitalização e Reestruturação",
                description:
                  "Considerando a evolução dos sistemas de pagamento em Angola, o Banco Nacional de Angola anunciou através do Comunicado de 12 de Abril de 2024 a descontinuação da emissão de cheques e a consequente descontinuação da aceitação dos mesmos.",
                badge: null,
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {news.image ? (
                  <div className="relative">
                    <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-40 object-cover" />
                    {news.badge && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {news.badge}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-purple-200 to-orange-200 flex items-center justify-center">
                    {/* Placeholder for abstract graphic or text-only card */}
                    {index === 2 && (
                      <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center">
                        <Newspaper className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-purple-900 hover:text-orange-600 transition-colors duration-300 cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{news.description}</p>
                  <Link to="#" className="text-orange-600 font-semibold text-sm hover:underline">
                    Ler mais <ArrowRight className="inline-block h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mobile Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/assets/atm-logo.jpg"
              alt="Andhardack Mobile App"
              className="w-full max-w-[250px] transform rotate-6 translate-x-4 rounded-xl shadow-2xl border-4 border-white"
            />
            <img
              src="/assets/atm-logo.jpg"
              alt="Andhardack Mobile App"
              className="w-full max-w-[250px] absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-6 -translate-y-4 rounded-xl shadow-2xl border-4 border-white"
            />
          </div>

          {/* Right Column - Text and Download Buttons */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Tenha a Andhardack no seu
              <span className="block text-orange-400">Smartphone</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-lg mx-auto lg:mx-0">
              Acesse todos os nossos serviços e soluções na palma da sua mão. Nada mais simples e seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <button className=" text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300">
                <GooglePlay />
                </button>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <button className=" text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-300">
              <AppStoreIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support/Contact Section - Inspired by BCI, with Andhardack colors */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
              Precisa de apoio?
              <span className="block text-orange-600">Fale connosco</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Estamos aqui para ajudar! Contacte-nos por email, telefone ou preenchendo o formulário abaixo. Estamos à
              sua espera.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-2 border border-gray-200">
                <Mail className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">Email</h3>
                <p className="text-gray-600">apoio.cliente@andhardack.com</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-2 border border-gray-200">
                <Phone className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">Telefone</h3>
                <p className="text-gray-600">+244 900 000 000</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-2 border border-gray-200">
                <Users className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">Apoio ao cliente</h3>
                <Link to="/contato" className="text-orange-600 font-semibold text-sm hover:underline">
                  Saiba mais <ArrowRight className="inline-block h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-2 border border-gray-200">
                <MessageSquare className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-lg font-semibold text-purple-900">Reclamações</h3>
                <Link to="/contato" className="text-orange-600 font-semibold text-sm hover:underline">
                  Preencha o nosso formulário <ArrowRight className="inline-block h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src="/assets/image.png"
              alt="Customer Support"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
