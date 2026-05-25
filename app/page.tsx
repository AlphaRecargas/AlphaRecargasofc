import Image from "next/image";

export default function PaginaWhatsApp() {
  const mensagemWhatsApp = encodeURIComponent(
    "Olá! Escaneei o QR Code do panfleto e tenho interesse em me tornar um colaborador/parceiro da Alpha Recargas. Poderia me passar mais informações?"
  );

  const contatos = [
    {
      nome: "Vinicius",
      numero: "5511987901884",
      descricao: "Atendimento Comercial",
    },
    {
      nome: "Robson",
      numero: "5511966061655",
      descricao: "Suporte e Vendas",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,174,255,0.25),transparent_40%),radial-gradient(circle_at_bottom,_rgba(0,255,136,0.15),transparent_35%)]" />
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 blur-3xl rounded-full top-[-80px] sm:top-[-120px] left-[-80px] sm:left-[-120px]" />
      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-[-60px] sm:bottom-[-100px] right-[-60px] sm:right-[-100px]" />

      {/* Main card */}
      <main
        className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-2xl border border-cyan-400/20 rounded-[24px] sm:rounded-[36px] shadow-[0_0_50px_rgba(0,174,255,0.15)] p-5 sm:p-8 animate-fade-in"
        role="main"
        aria-label="Página de contato Alpha Recargas"
      >
        <header className="text-center mb-8 sm:mb-10">
          {/* Logo */}
          <div className="flex justify-center mb-4 sm:mb-5 animate-slide-down">
            <Image
              src="/images/alpha-recargas-logo.jpg"
              alt="Alpha Recargas - Rápido, Seguro, Sempre com você"
              width={280}
              height={280}
              className="w-48 sm:w-64 md:w-72 rounded-2xl sm:rounded-3xl shadow-[0_0_40px_rgba(0,174,255,0.35)]"
              priority
            />
          </div>

          {/* Badge de atendimento 24h */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-4 animate-slide-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-green-300 text-sm font-medium">
              Atendimento 24 horas
            </span>
          </div>

          <p className="text-zinc-300 text-base sm:text-xl leading-relaxed max-w-xl mx-auto animate-slide-up">
            Quer se tornar um colaborador Alpha Recargas? Escolha um de nossos
            atendentes e inicie sua parceria agora mesmo!
          </p>
        </header>

        {/* Contact cards */}
        <div className="grid gap-4 sm:gap-5" role="list" aria-label="Lista de contatos">
          {contatos.map((contato, index) => (
            <a
              key={contato.numero}
              href={`https://wa.me/${contato.numero}?text=${mensagemWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-zinc-900/80 to-zinc-800/70 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-500 border border-cyan-400/10 hover:border-cyan-300/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex items-center justify-between shadow-xl hover:scale-[1.02] animate-slide-up focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
              role="listitem"
              aria-label={`Contatar ${contato.nome} - ${contato.descricao} via WhatsApp`}
            >
              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-3xl font-bold mb-1 tracking-wide group-hover:text-cyan-300 transition-colors truncate">
                  {contato.nome}
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base group-hover:text-white/90 transition-colors">
                  {contato.descricao}
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(0,174,255,0.35)] group-hover:scale-105 transition-all duration-300 flex items-center gap-2 ml-3 flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 sm:mt-10 space-y-3 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-zinc-500 text-xs sm:text-sm">
            Escaneou o QR Code do panfleto? Você está no lugar certo!
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Alpha Recargas - Rápido - Seguro - Sempre com você
          </p>
        </footer>
      </main>
    </div>
  );
}
