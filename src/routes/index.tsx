import { createFileRoute } from "@tanstack/react-router";
import heroDish from "@/assets/hero-dish.jpg";
import interior from "@/assets/interior.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const LINKTREE = "https://linktr.ee/Orirestaurante";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="text-display text-2xl tracking-[0.3em]">ORI</a>
          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#cozinha" className="hover:text-foreground transition">Cozinha</a>
            <a href="#horarios" className="hover:text-foreground transition">Horários</a>
            <a href="#reservas" className="hover:text-foreground transition">Reservas</a>
          </nav>
          <a
            href={LINKTREE}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.2em] border border-foreground px-4 py-2 hover:bg-foreground hover:text-primary-foreground transition"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end pt-16">
        <img
          src={heroDish}
          alt="Prato do restaurante Ori"
          width={1600}
          height={1800}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-32 w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground animate-fade-up">
            Por Grupo Origem · Salvador — Bahia
          </p>
          <h1 className="text-display mt-8 text-[15vw] md:text-[10vw] leading-[0.85] animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Ori
          </h1>
          <div className="mt-10 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-2xl md:text-3xl text-display font-light leading-tight">
              Uma imersão nos sabores da Bahia.
            </p>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Um restaurante do Grupo Origem 🍃 dedicado a traduzir, prato a prato, a memória afetiva de uma terra feita de mar, dendê e devoção.
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 md:right-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground rotate-90 origin-bottom-right hidden md:block">
          Est. Salvador
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-display text-4xl md:text-6xl gap-16">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Moqueca</span><span className="text-muted-foreground">·</span>
              <span>Dendê</span><span className="text-muted-foreground">·</span>
              <span>Vatapá</span><span className="text-muted-foreground">·</span>
              <span>Bobó</span><span className="text-muted-foreground">·</span>
              <span>Caruru</span><span className="text-muted-foreground">·</span>
              <span>Acarajé</span><span className="text-muted-foreground">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-[1400px] mx-auto px-6 md:px-10 py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 01 · Sobre</p>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-display text-4xl md:text-6xl leading-[1.05]">
            A Bahia servida em silêncio, luz e memória.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-12 text-muted-foreground leading-relaxed">
            <p>
              No Ori, cada prato começa muito antes da cozinha — em feiras de rua, terreiros e beira-mar. Do Grupo Origem, o restaurante é um convite a atravessar a Bahia pelo paladar, entre técnicas contemporâneas e ingredientes ancestrais.
            </p>
            <p>
              Aqui, o dendê é reverência, o peixe é fresco do dia, e o tempo obedece ao ritmo lento de quem cozinha para lembrar. Uma experiência sensorial, íntima e sem pressa.
            </p>
          </div>
        </div>
      </section>

      {/* COZINHA — galeria */}
      <section id="cozinha" className="max-w-[1400px] mx-auto px-6 md:px-10 pb-32">
        <div className="flex items-end justify-between mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 02 · Cozinha</p>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Menu sazonal</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: dish1, title: "Do Mar", sub: "Frutos frescos e caldos ancestrais." },
            { img: dish2, title: "Da Terra", sub: "Raízes, azeites e ervas do sertão." },
            { img: dish3, title: "Da Memória", sub: "Sobremesas que voltam à infância." },
          ].map((d) => (
            <figure key={d.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  width={1000}
                  height={1200}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 flex justify-between items-baseline">
                <h3 className="text-display text-2xl">{d.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.sub}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* INTERIOR */}
      <section className="relative">
        <img src={interior} alt="Interior do Ori" width={1600} height={1100} loading="lazy" className="w-full h-[70vh] object-cover" />
        <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
          <blockquote className="text-display text-3xl md:text-5xl max-w-3xl text-center px-6 leading-tight">
            "Cozinhar aqui é uma forma de rezar em voz baixa."
          </blockquote>
        </div>
      </section>

      {/* HORÁRIOS */}
      <section id="horarios" className="max-w-[1400px] mx-auto px-6 md:px-10 py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">— 03 · Horários</p>
        <div className="grid md:grid-cols-2 gap-8 border-t border-border">
          <div className="py-10 border-b border-border md:border-b-0 md:border-r md:pr-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Terça a Sábado</p>
            <p className="text-display text-4xl md:text-5xl mt-4">12h — 16h</p>
            <p className="text-display text-4xl md:text-5xl mt-1 text-muted-foreground">19h — 23h</p>
          </div>
          <div className="py-10 md:pl-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Domingo</p>
            <p className="text-display text-4xl md:text-5xl mt-4">12h — 17h</p>
            <p className="text-display text-4xl md:text-5xl mt-1 text-muted-foreground">Segunda · fechado</p>
          </div>
        </div>
      </section>

      {/* RESERVAS */}
      <section id="reservas" className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— 04 · Reservas</p>
          <h2 className="text-display text-5xl md:text-8xl mt-8 leading-[0.95]">
            Reserve a sua<br />
            <em className="italic text-muted-foreground">mesa no Ori.</em>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md mx-auto">
            Reservas e informações através do nosso Linktree.
          </p>
          <a
            href={LINKTREE}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 border border-foreground px-10 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-primary-foreground transition"
          >
            linktr.ee/Orirestaurante ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <p className="text-display text-xl tracking-[0.3em] text-foreground normal-case">ORI</p>
          <p>Salvador · Bahia · Brasil</p>
          <p>Por Grupo Origem 🍃</p>
          <a href={LINKTREE} target="_blank" rel="noreferrer" className="hover:text-foreground">@orirestaurante</a>
        </div>
      </footer>
    </div>
  );
}
