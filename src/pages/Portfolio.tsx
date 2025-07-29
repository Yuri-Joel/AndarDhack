"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Star, Calendar, Tag, ArrowRight } from "lucide-react"
import Header from "../components/Header"

import Footer from "../components/Footer"

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("todos")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "ATM NA MÃO",
      category: "fintech",
      description:
        "Aplicação móvel revolucionária que permite transações bancárias sem cartão físico, utilizando tecnologia biométrica avançada.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20WhatsApp%202025-07-28%20%C3%A0s%2019.06.46_fe676fc8.jpg-TG5j9drb1blJzqH7dAnyPTOL8kcmNl.jpeg",
      technologies: ["React Native", "Node.js", "Biometria", "APIs Bancárias"],
      status: "Lançado",
      year: "2024",
      featured: true,
      results: ["500K+ downloads", "99.9% uptime", "Redução de 80% no tempo de transação"],
    },
    {
      id: 2,
      title: "Sistema Bancário Digital",
      category: "fintech",
      description:
        "Plataforma completa de internet banking com recursos avançados de segurança e experiência do usuário otimizada.",
      image: "/placeholder.svg?height=300&width=400&text=Banking+System",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      status: "Em Produção",
      year: "2023",
      results: ["100K+ usuários ativos", "Redução de 60% em chamadas de suporte"],
    },
    {
      id: 3,
      title: "E-commerce Marketplace",
      category: "web",
      description:
        "Marketplace completo com sistema de pagamentos integrado, gestão de vendedores e analytics avançados.",
      image: "/placeholder.svg?height=300&width=400&text=E-commerce+Platform",
      technologies: ["Next.js", "Stripe", "MongoDB", "AWS"],
      status: "Lançado",
      year: "2023",
      results: ["1M+ produtos cadastrados", "R$ 50M+ em transações"],
    },
    {
      id: 4,
      title: "App de Gestão Empresarial",
      category: "mobile",
      description:
        "Aplicativo móvel para gestão completa de pequenas e médias empresas, incluindo vendas, estoque e financeiro.",
      image: "/placeholder.svg?height=300&width=400&text=Business+Management",
      technologies: ["React Native", "Firebase", "Chart.js"],
      status: "Em Desenvolvimento",
      year: "2024",
      results: ["Beta com 1000+ empresas", "Aumento de 40% na produtividade"],
    },
    {
      id: 5,
      title: "Portal Governamental",
      category: "web",
      description: "Portal digital para serviços públicos com foco em acessibilidade e experiência do cidadão.",
      image: "/placeholder.svg?height=300&width=400&text=Government+Portal",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      status: "Lançado",
      year: "2022",
      results: ["2M+ cidadãos atendidos", "Redução de 70% no tempo de atendimento"],
    },
    {
      id: 6,
      title: "Sistema de Telemedicina",
      category: "web",
      description:
        "Plataforma completa para consultas médicas online com recursos de videoconferência e prontuário eletrônico.",
      image: "/placeholder.svg?height=300&width=400&text=Telemedicine+System",
      technologies: ["React", "WebRTC", "Node.js", "MongoDB"],
      status: "Em Produção",
      year: "2023",
      results: ["50K+ consultas realizadas", "95% satisfação dos pacientes"],
    },
  ]

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "fintech", label: "Fintech" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredProjects =
    activeFilter === "todos" ? projects : projects.filter((project) => project.category === activeFilter)

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
              Nosso<span className="block text-orange-400">Portfólio</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários que alcançamos para nossos
              clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {activeFilter === "todos" && (
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <Star className="h-5 w-5 text-white" />
                <span className="text-white font-semibold">Projeto em Destaque</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">ATM NA MÃO</h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Nossa solução patenteada que revolucionou o acesso a serviços bancários em Angola
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20WhatsApp%202025-07-28%20%C3%A0s%2019.06.46_fe676fc8.jpg-TG5j9drb1blJzqH7dAnyPTOL8kcmNl.jpeg"
                    alt="ATM NA MÃO"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Resultados Alcançados:</h3>
                  {["500K+ downloads", "99.9% uptime", "Redução de 80% no tempo de transação"].map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-white text-lg">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Tecnologias:</h3>
                  <div className="flex flex-wrap gap-3">
                    {["React Native", "Node.js", "Biometria", "APIs Bancárias"].map((tech, index) => (
                      <span key={index} className="bg-white/20 px-4 py-2 rounded-full text-white font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                  Ver Detalhes do Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {project.featured && (
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Destaque
                      </div>
                    )}
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Lançado"
                          ? "bg-green-500 text-white"
                          : project.status === "Em Produção"
                            ? "bg-blue-500 text-white"
                            : "bg-yellow-500 text-white"
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500 capitalize">{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-purple-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {project.results && (
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-purple-900">Resultados:</h4>
                      <div className="text-xs text-gray-600">
                        {project.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300">
                      Ver Detalhes
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                      <ExternalLink className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Seu Projeto Pode Ser o Próximo</h2>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed">
            Transforme sua ideia em realidade com a expertise da Andhardack. Vamos criar algo extraordinário juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Iniciar Projeto
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
