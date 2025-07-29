""

import { useState, useEffect } from "react"
import { Target, Eye, Award, Users, Lightbulb, Shield, Calendar, MapPin } from "lucide-react"
import Header from "../components/Header"

import Footer from "../components/Footer"

export default function SobrePage() {
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
              Sobre a<span className="block text-orange-400">Andhardack</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa pioneira em inovação tecnológica, especializada em desenvolvimento de soluções
              financeiras e tecnológicas que transformam negócios e criam valor para nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-orange-500" />
                <span className="text-orange-600 font-semibold">Nossa História</span>
              </div>
              <h2 className="text-4xl font-bold text-purple-900">Construindo o Futuro Digital</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-purple-900">Andhardack</strong> tem como objeto social a inovação
                  tecnológica e o desenvolvimento de soluções financeiras. Somos titulares da patente, marca e aplicação
                  <strong className="text-orange-600"> ATM NA MÃO</strong>, nossa solução revolucionária para o setor
                  bancário.
                </p>
                <p>
                  Dedicamo-nos à prestação de serviços na área das tecnologias de informação, incluindo o
                  desenvolvimento de websites, sistemas, aplicativos web e mobile, e proteção de dados informáticos.
                </p>
                <p>
                  Nossa empresa pode dedicar-se a outras atividades complementares, por si ou através da associação ou
                  participação em sociedades, sempre nos termos permitidos por lei e mediante deliberação da assembleia
                  geral.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-600 rounded-3xl transform rotate-3 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20WhatsApp%202025-07-28%20%C3%A0s%2019.06.46_fe676fc8.jpg-TG5j9drb1blJzqH7dAnyPTOL8kcmNl.jpeg"
                  alt="ATM NA MÃO - Produto Andhardack"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-purple-900">ATM NA MÃO</h3>
                  <p className="text-gray-600 text-sm">Produto patenteado Andhardack</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Missão",
                description:
                  "Democratizar o acesso à tecnologia através de soluções inovadoras, seguras e acessíveis que transformam a experiência digital dos nossos clientes.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Eye,
                title: "Visão",
                description:
                  "Ser reconhecida como líder em inovação tecnológica, criando soluções que moldam o futuro digital e financeiro globalmente.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Award,
                title: "Valores",
                description:
                  "Inovação constante, excelência técnica, transparência, responsabilidade social e compromisso com a transformação digital sustentável.",
                color: "from-orange-600 to-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nossa Expertise</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Combinamos conhecimento técnico avançado com visão estratégica para entregar soluções que fazem a
              diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Inovação Tecnológica",
                description: "Desenvolvimento de soluções disruptivas que antecipam as necessidades do mercado.",
              },
              {
                icon: Shield,
                title: "Segurança Digital",
                description: "Implementação de protocolos de segurança de última geração para proteção de dados.",
              },
              {
                icon: Users,
                title: "Experiência do Usuário",
                description: "Design centrado no usuário para criar interfaces intuitivas e experiências memoráveis.",
              },
            ].map((expertise, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <expertise.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{expertise.title}</h3>
                <p className="text-purple-100 leading-relaxed">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-purple-900 mb-6">Andhardack Hoje</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma empresa sólida, inovadora e comprometida com a excelência em cada projeto que desenvolvemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Localização</h3>
                  <p className="text-gray-600">Sediada em Angola, com atuação em mercados internacionais</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Certificações</h3>
                  <p className="text-gray-600">Empresa certificada em desenvolvimento de software e soluções fintech</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Equipe</h3>
                  <p className="text-gray-600">Time multidisciplinar de especialistas em tecnologia e inovação</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Nosso Compromisso</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Estamos comprometidos em entregar soluções tecnológicas de alta qualidade que geram valor real para
                  nossos clientes e contribuem para o desenvolvimento tecnológico do país.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Projetos Entregues</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Suporte Técnico</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
