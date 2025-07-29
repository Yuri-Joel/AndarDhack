

import { useState, useEffect } from "react"
import { Heart, Users, Leaf, GraduationCap, HandHeart, Globe, ArrowRight } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ResponsabilidadeSocialPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
              Responsabilidade
              <span className="block text-orange-400">Social</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Acreditamos que a tecnologia deve ser uma força para o bem. Nosso compromisso vai além dos negócios,
              buscando criar impacto positivo na sociedade e no meio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6">Nosso Compromisso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos iniciativas que promovem inclusão digital, sustentabilidade e desenvolvimento social, sempre
              alinhadas com nossos valores corporativos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Users,
                title: "Inclusão Digital",
                description:
                  "Promovemos o acesso à tecnologia financeira para comunidades menos favorecidas, democratizando serviços bancários.",
                color: "from-orange-500 to-orange-600",
                initiatives: [
                  "Workshops gratuitos de educação financeira digital",
                  "Parcerias com ONGs locais",
                  "Desenvolvimento de soluções acessíveis",
                ],
              },
              {
                icon: Leaf,
                title: "Sustentabilidade",
                description:
                  "Implementamos práticas sustentáveis em nossos processos e desenvolvemos soluções que reduzem o impacto ambiental.",
                color: "from-green-500 to-green-600",
                initiatives: ["Escritório 100% digital", "Compensação de carbono", "Tecnologias eco-friendly"],
              },
              {
                icon: GraduationCap,
                title: "Educação Tecnológica",
                description:
                  "Investimos na formação de novos talentos através de programas educacionais e parcerias com instituições de ensino.",
                color: "from-blue-500 to-blue-600",
                initiatives: [
                  "Bolsas de estudo em tecnologia",
                  "Mentoria para jovens desenvolvedores",
                  "Palestras em universidades",
                ],
              },
            ].map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  <div className="space-y-2">
                    {area.initiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {initiative}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nosso Impacto</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Números que refletem nosso compromisso com a transformação social positiva.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "1000+", label: "Pessoas Beneficiadas", icon: Users },
              { number: "50+", label: "Projetos Sociais", icon: HandHeart },
              { number: "25+", label: "Parcerias com ONGs", icon: Heart },
              { number: "100%", label: "Carbono Neutro", icon: Leaf },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6">Projetos Atuais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça algumas das iniciativas que estamos desenvolvendo para criar um impacto positivo duradouro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "ATM Solidário",
                description:
                  "Programa que disponibiliza pontos de acesso gratuito a serviços bancários digitais em comunidades carentes.",
                image: "/assets/work.jpg",
                status: "Em andamento",
                beneficiaries: "500+ famílias",
              },
              {
                title: "TechFuture Academy",
                description:
                  "Academia de formação gratuita em tecnologia para jovens de baixa renda, com foco em desenvolvimento de software.",
                image: "/assets/slide6.jpg",
                status: "Lançamento em 2025",
                beneficiaries: "200+ jovens",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      <strong>Beneficiários:</strong> {project.beneficiaries}
                    </span>
                    <button className="border-2 border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white px-4 py-2 rounded-lg bg-transparent transition-all duration-300 flex items-center">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="h-16 w-16 text-white mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Junte-se à Nossa Missão</h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed">
            Acreditamos que juntos podemos criar um futuro mais inclusivo e sustentável. Seja parte da transformação
            digital responsável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Seja um Parceiro
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent">
              Conheça Nossos Projetos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
