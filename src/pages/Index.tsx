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
  Cpu,
  Workflow,
  Cloud,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import industriaFarmaceutica from "@/assets/industria-farmaceutica.jpg";
import galpaoLogistico from "@/assets/galpao-logistico.jpg";
import pivoIrrigacao from "@/assets/pivo-irrigacao.jpg";
import escritorioTecnologico from "@/assets/escritorio-tecnologico.jpg";

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

  const solucoes = [
    {
      icon: Cpu,
      title: "Deep Learning & Machine Learning",
      description:
        "Criação e treinamento de algoritmos de deep learning e machine learning desenvolvidos sob medida para os desafios específicos de empresas e indústrias, gerando modelos preditivos, de classificação e de visão computacional com alto desempenho.",
    },
    {
      icon: Workflow,
      title: "Automação com n8n e Agentes de IA",
      description:
        "Automatizamos atividades operacionais e fluxos de trabalho complexos utilizando n8n e agentes de IA, integrando sistemas, eliminando tarefas repetitivas e acelerando a produtividade do seu time.",
    },
    {
      icon: Factory,
      title: "Projetos de IoT para Indústria 4.0",
      description:
        "Desenvolvemos projetos completos de IoT industrial, do sensoriamento de chão de fábrica à plataforma de dados, habilitando manutenção preditiva, eficiência energética e monitoramento em tempo real.",
    },
    {
      icon: Cloud,
      title: "Arquitetura e Desenvolvimento Serverless",
      description:
        "Projetamos e desenvolvemos sistemas serverless escaláveis e resilientes, com arquiteturas modernas que reduzem custo de infraestrutura e aceleram o time-to-market dos seus produtos digitais.",
    },
    {
      icon: MessageSquare,
      title: "Agentes Conversacionais com IA",
      description:
        "Construímos agentes conversacionais inteligentes integrados a LLMs e bases de conhecimento próprias da empresa, capazes de atender clientes, apoiar times internos e executar ações em sistemas corporativos.",
    },
  ];

  const segmentos = [
    {
      img: industriaFarmaceutica,
      title: "Indústria Farmacêutica",
      description:
        "Soluções para salas limpas, rastreabilidade de lotes, controle de qualidade e otimização de linhas de produção.",
    },
    {
      img: galpaoLogistico,
      title: "Logística & Supply Chain",
      description:
        "Gestão inteligente de pátios, monitoramento de frotas, roteirização e visibilidade em tempo real das operações.",
    },
    {
      img: pivoIrrigacao,
      title: "Agronegócio",
      description:
        "IoT no campo, irrigação inteligente, análise de imagens e modelos preditivos para produtividade da lavoura.",
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
              <span className="text-blue-400">Sdruvis</span>{" "}
              <span className="text-brand-orange">Tecnologia</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("empresa")}
                className="text-white hover:text-brand-orange transition-colors duration-300"
              >
                Empresa
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-white hover:text-brand-orange transition-colors duration-300"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("solucoes")}
                className="text-white hover:text-brand-orange transition-colors duration-300"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-white hover:text-brand-orange transition-colors duration-300"
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
                  className="text-white hover:text-brand-orange transition-colors duration-300 text-left"
                >
                  Empresa
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-white hover:text-brand-orange transition-colors duration-300 text-left"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("solucoes")}
                  className="text-white hover:text-brand-orange transition-colors duration-300 text-left"
                >
                  Soluções
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white hover:text-brand-orange transition-colors duration-300 text-left"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/10"></div>
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
            <span className="bg-gradient-to-r from-blue-400 via-brand-orange to-orange-300 bg-clip-text text-transparent">
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
            className="bg-brand-orange hover:opacity-90 text-white px-8 py-3 text-lg animate-fade-in animate-glow-orange"
            style={{ animationDelay: "0.6s" }}
          >
            Conheça Nossos Serviços
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-32 right-10 w-16 h-16 bg-brand-orange/30 rounded-full animate-pulse"
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
              Sobre a <span className="text-blue-400">Sdruvis</span>{" "}
              <span className="text-brand-orange">Tecnologia</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-brand-orange to-orange-300 mx-auto mb-8"></div>
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
            <div className="relative mx-auto w-full max-w-md md:max-w-none px-4 sm:px-6 md:px-0 mt-4 md:mt-0">
              <div
                aria-hidden="true"
                className="absolute inset-2 sm:inset-3 md:inset-0 bg-gradient-to-r from-blue-600 to-brand-orange rounded-lg transform rotate-3 md:rotate-6"
              ></div>
              <img
                src={escritorioTecnologico}
                alt="Escritório tecnológico da Sdruvis Tecnologia com múltiplos monitores e ambiente futurista"
                width={1280}
                height={896}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 600px"
                className="relative z-10 w-full h-auto aspect-[10/7] object-cover rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
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
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-brand-orange to-orange-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços tecnológicos para
              impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-brand-orange transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-blue-400 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
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

      {/* Solutions Section */}
      <section
        id="solucoes"
        className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden"
      >
        {/* Decorative orange accents */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/40 bg-brand-orange/10 text-brand-orange text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Soluções de Ponta
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossas <span className="text-brand-orange">Soluções</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aplicamos IA, automação e arquiteturas modernas para resolver
              desafios reais de empresas e indústrias.
            </p>
          </div>

          {/* Solution cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solucoes.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-900/70 border-2 border-brand-orange/60 hover:border-brand-orange transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-[0_0_25px_-10px_hsl(var(--brand-orange)/0.5)] hover:shadow-[0_0_35px_-5px_hsl(var(--brand-orange)/0.8)]"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-orange-glow"></div>
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-brand-orange/15 border border-brand-orange/40 group-hover:bg-brand-orange/25 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-brand-orange" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {sol.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {sol.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Industry segments showcase */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Setores que <span className="text-brand-orange">atendemos</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experiência aplicada em segmentos estratégicos da economia
              brasileira.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {segmentos.map((seg, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-brand-orange transition-all duration-500"
              >
                <img
                  src={seg.img}
                  alt={seg.title}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-10 h-1 bg-brand-orange mb-3 group-hover:w-20 transition-all duration-500"></div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {seg.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em <span className="text-brand-orange">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Pronto para transformar sua ideia em realidade? Vamos conversar!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="space-y-8 max-w-md w-full text-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-300">
                      contato@sdruvis.tec.br
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-300">+55 (19) 99439-7474</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-300">Campinas, SP - Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-400">Sdruvis</span>{" "}
            <span className="text-brand-orange">Tecnologia</span>
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
