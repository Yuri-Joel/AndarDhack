"use client"

import { useState, useEffect } from "react"
import { Smartphone, Code, Shield, Zap, Users, Award, ArrowRight, CheckCircle, Star } from "lucide-react"
import Header from "../components/Header"

import Footer from "../components/Footer"

export default function ServicosPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Smartphone,
      title: "Soluções Fintech",
      subtitle: "Inovação Financeira Digital",
      description:
        "Desenvolvemos aplicações financeiras completas, desde carteiras digitais até sistemas de pagamento avançados.",
      features: [
        "Aplicativos de pagamento móvel",
        "Sistemas de transferência bancária",
        "Carteiras digitais seguras",
        "APIs de integração financeira",
        "Soluções de compliance regulatório",
      ],
      technologies: ["React Native", "Node.js", "Blockchain", "APIs REST", "Microserviços"],
      color: "from-orange-500 to-orange-600",
      highlight: "ATM NA MÃO - Nossa solução patenteada",
    },
    {
      icon: Code,
      title: "Desenvolvimento Web & Mobile",
      subtitle: "Aplicações de Alta Performance",
      description:
        "Criamos websites, sistemas web e aplicativos mobile com foco na experiência do usuário e performance.",
      features: [
        "Websites responsivos e modernos",
        "Aplicativos iOS e Android nativos",
        "Progressive Web Apps (PWA)",
        "Sistemas de gestão empresarial",
        "E-commerce e marketplaces",
      ],
      technologies: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      subtitle: "Proteção de Dados Avançada",
      description: "Implementamos as mais avançadas tecnologias de segurança para proteger informações críticas.",
      features: [
        "Auditoria de segurança",
        "Implementação de criptografia",
        "Sistemas de autenticação biométrica",
        "Monitoramento de ameaças",
        "Compliance LGPD/GDPR",
      ],
      technologies: ["Criptografia AES", "OAuth 2.0", "JWT", "SSL/TLS", "Biometria"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Consultoria Tecnológica",
      subtitle: "Transformação Digital Estratégica",
      description: "Orientamos empresas na jornada de transformação digital com estratégias personalizadas.",
      features: [
        "Análise de processos digitais",
        "Arquitetura de sistemas",
        "Migração para nuvem",
        "Otimização de performance",
        "Treinamento de equipes",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "UX/UI Design",
      subtitle: "Experiências Digitais Memoráveis",
      description: "Criamos interfaces intuitivas e experiências de usuário que encantam e convertem.",
      features: [
        "Pesquisa e análise de usuários",
        "Prototipagem interativa",
        "Design system e style guides",
        "Testes de usabilidade",
        "Design responsivo",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Soluções Personalizadas",
      subtitle: "Desenvolvimento Sob Medida",
      description: "Desenvolvemos produtos únicos para atender necessidades específicas do seu negócio.",
      features: [
        "Análise de requisitos detalhada",
        "Desenvolvimento ágil",
        "Integração com sistemas existentes",
        "Suporte técnico especializado",
        "Manutenção e evolução contínua",
      ],
      technologies: ["Metodologia Ágil", "APIs Customizadas", "Integrações", "Suporte 24/7"],
      color: "from-purple-500 to-orange-600",
    },
  ]

  const ActiveService = services[activeService]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
              Nossos<span className="block text-orange-400">Serviços</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Oferecemos um portfólio completo de soluções tecnológicas para transformar seu negócio e impulsionar sua
              jornada de inovação digital.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer ${
                  activeService === index ? "ring-2 ring-orange-400" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon && <service.icon className="h-8 w-8 text-white" />}
                  </div>

                  {service.highlight && (
                    <div className="inline-flex items-center space-x-1 bg-orange-100 px-3 py-1 rounded-full mb-4">
                      <Star className="h-4 w-4 text-orange-500" />
                      <span className="text-orange-700 text-sm font-semibold">Destaque</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-purple-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-orange-600 font-semibold text-sm mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${ActiveService.color} rounded-xl flex items-center justify-center`}
                  >
                    {ActiveService.icon && <ActiveService.icon className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900">{ActiveService.title}</h3>
                    <p className="text-orange-600 font-semibold">{ActiveService.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">{ActiveService.description}</p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-purple-900">O que oferecemos:</h4>
                  {ActiveService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-orange-100 p-12 flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-purple-900 mb-6">Tecnologias Utilizadas:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {ActiveService.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm">
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>

                {ActiveService.highlight && (
                  <div className="mt-8 p-4 bg-orange-500 rounded-lg text-white">
                    <h5 className="font-semibold mb-2">Produto em Destaque:</h5>
                    <p className="text-sm">{ActiveService.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Pronto para Inovar?</h2>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed">
            Entre em contato conosco e descubra como a Andhardack pode transformar seu negócio com soluções tecnológicas
            de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Falar com Especialista
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent">
              Ver Portfólio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
