import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Server,
  Database,
  Brain,
  Wifi,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description:
        "Criamos aplicações web modernas e responsivas usando as mais recentes tecnologias. Desenvolvemos desde sites institucionais até sistemas complexos, sempre priorizando performance, segurança e experiência do usuário.",
    },
    {
      icon: Server,
      title: "Infraestrutura Serverless",
      description:
        "Implementamos soluções em nuvem serverless que escalam automaticamente conforme a demanda. Reduzimos custos operacionais e aumentamos a disponibilidade dos seus sistemas usando AWS, Azure e Google Cloud.",
    },
    {
      icon: Database,
      title: "Análise de Dados",
      description:
        "Transformamos seus dados em insights valiosos através de análises avançadas e visualizações intuitivas. Utilizamos ferramentas como Python, R, Power BI e Tableau para extrair o máximo valor dos seus dados.",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description:
        "Desenvolvemos soluções de IA personalizadas para automatizar processos e otimizar decisões. Desde chatbots inteligentes até sistemas de machine learning para predição e classificação.",
    },
    {
      icon: Wifi,
      title: "Internet das Coisas (IoT)",
      description:
        "Conectamos dispositivos e sensores para criar ambientes inteligentes. Desenvolvemos soluções IoT completas, desde a coleta de dados até a análise em tempo real para tomada de decisões.",
    },
    {
      icon: Factory,
      title: "IoT Industrial (IIoT)",
      description:
        "Especializados em soluções IoT para indústria 4.0. Implementamos sistemas de monitoramento, manutenção preditiva e otimização de processos industriais para aumentar eficiência e reduzir custos.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Sdruvis</span> Tecnologia
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("empresa")}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Empresa
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-4 p-6">
                <button
                  onClick={() => scrollToSection("empresa")}
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  Empresa
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  Contato
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-blue-400">Inovação</span> em
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tecnologia
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Transformamos ideias em soluções tecnológicas avançadas
          </p>
          <Button
            onClick={() => scrollToSection("empresa")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Conheça Nossos Serviços
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-32 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Company Section */}
      <section id="empresa" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a <span className="text-blue-400">Sdruvis Tecnologia</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                A Sdruvis Tecnologia é uma empresa especializada em soluções
                tecnológicas inovadoras, focada em transformar a forma como as
                empresas operam no mundo digital.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nossa equipe de especialistas combina conhecimento técnico
                avançado com visão estratégica para entregar soluções que
                impulsionam o crescimento e a eficiência dos nossos clientes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Desde desenvolvimento web até inteligência artificial e IoT,
                estamos na vanguarda da inovação tecnológica, sempre buscando as
                melhores práticas e tecnologias emergentes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Equipe Sdruvis Tecnologia"
                className="relative z-10 w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-blue-400">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços tecnológicos para
              impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em <span className="text-blue-400">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Pronto para transformar sua ideia em realidade? Vamos conversar!
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8"> */}
          <div className="flex justify-center">
            <div className="space-y-8 max-w-md w-full text-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">
                      contato@sdruvis.tec.br
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">+55 (19) 99439-7474</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Campinas, SP - Brasil</span>
                  </div>
                </div>
              </div>

              {/* <div>
                <h3 className="text-2xl font-bold text-white mb-4">Horário de Atendimento</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-300">Sábado: 9h às 14h</p>
                </div>
              </div> */}
            </div>

            {/* <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Seu e-mail"
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Sua mensagem"
                      rows={4}
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-colors duration-300">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-400">Sdruvis</span> Tecnologia
          </div>
          <p className="text-gray-400">
            © 2024 Sdruvis Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
