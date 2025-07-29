"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Smartphone, Shield, Code, Zap, Users, Award, ChevronDown, Star, TrendingUp } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Star className="h-5 w-5 text-orange-500" />
              <span className="text-orange-700 font-semibold">Produto em Destaque</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6">ATM NA MÃO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa solução patenteada que revoluciona o acesso a serviços bancários, permitindo transações financeiras
              através de tecnologia móvel avançada e segura.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  "Transações bancárias sem cartão físico",
                  "Segurança de ponta com biometria",
                  "Interface intuitiva e acessível",
                  "Disponível 24/7 em qualquer lugar",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Saiba Mais sobre ATM NA MÃO
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-100 to-orange-100 rounded-2xl p-8">
                <img
                  src="/assets/atm-logo.jpg"
                  alt="ATM NA MÃO Interface"
                  className="mx-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
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

      <Footer />
    </div>
  )
}
