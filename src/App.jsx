import React, { useState, useEffect } from 'react';
import { Phone, Paintbrush, ShieldCheck, Star, Mail, MapPin, Clock, Camera } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneRaw = "0614370597";
  const phoneDisplay = "06 - 14 37 05 97";

  const projects = [
    { id: 1, src: '/painter1.jpg', label: 'Project Utrecht',  alt: 'Professioneel binnenschilderwerk in een woonkamer in Utrecht door Reni Onderhoud' },
    { id: 2, src: '/painter2.jpg', label: 'Schilderwerk',     alt: 'Strak afgewerkt schilderwerk aan muren en plafond in een Utrechtse woning' },
    { id: 3, src: '/painter3.jpg', label: 'Vakmanschap',      alt: 'Vakkundig schilderwerk – nauwkeurige afwerking door Reni Onderhoud Utrecht' },
    { id: 4, src: '/painter4.jpg', label: 'Binnenwerk',       alt: 'Binnenschilderwerk – egale verflaag en gladde muuropbouw in een woning in Utrecht' },
    { id: 5, src: '/painter5.jpg', label: 'Buitenwerk',       alt: 'Buitenschilderwerk aan gevels en kozijnen van een woning in Utrecht' },
    { id: 6, src: '/painter6.jpg', label: 'Onderhoud',        alt: 'Onderhoudsschilderwerk aan gevels en houten kozijnen in Utrecht' },
    { id: 7, src: '/painter7.jpg', label: 'Renovatie',        alt: 'Renovatieschilderwerk – vernieuwde binnen- en buitenafwerking van een pand in Utrecht' },
    { id: 8, src: '/painter8.jpg', label: 'Kwaliteit',        alt: 'Hoogwaardig schilderwerk met kwaliteitsverf – resultaat door Reni Onderhoud Utrecht' },
    { id: 9, src: '/painter9.jpg', label: 'Reni Onderhoud',   alt: 'Reni Onderhoud – professioneel schildersbedrijf gevestigd in Utrecht' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">

      {/* Navigatie */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Paintbrush className="text-white w-6 h-6" />
            </div>
            {/* Bedrijf VOF is hier nu definitief weg */}
            <span className="font-black text-2xl tracking-tighter text-slate-900 leading-none">RENI ONDERHOUD</span>
          </div>

          <a href={`tel:${phoneRaw}`} className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg active:scale-95">
            <Phone size={16} /> <span className="font-bold">{phoneDisplay}</span>
          </a>
        </div>
      </nav>

      {/* Hero Sectie */}
      <header className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50/30 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Star size={14} fill="currentColor" /> Uw Schilder in Utrecht
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Schilder in Utrecht –<br />
              <span className="text-blue-600">uw woning als nieuw.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Hoogwaardig binnen- en buitenschilderwerk door <strong>Aldin Yordanov</strong> van Reni Onderhoud.
              Gespecialiseerd in woningen en bedrijfspanden in Utrecht en omgeving –
              op tijd, binnen budget en altijd met een eerlijke prijs.
            </p>
            <a href={`tel:${phoneRaw}`} className="bg-slate-900 text-white text-center px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto inline-flex">
              <Phone size={24} /> {phoneDisplay}
            </a>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-square lg:aspect-auto lg:h-[500px]">
            <img src="/painter.png" alt="Aldin Yordanov, vakkundig schilder van Reni Onderhoud, gespecialiseerd in binnen- en buitenschilderwerk in Utrecht" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <main>
      {/* Portfolio Sectie met de 9 foto's */}
      <section id="diensten" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter flex items-center justify-center lg:justify-start gap-3">
              <Camera className="text-blue-600" /> Recent Werk
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mt-4 rounded-full mx-auto lg:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-square shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="text-white font-black text-xl uppercase tracking-tighter">{project.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      {/* Footer met het nieuwe adres */}
      <footer id="contact" className="bg-slate-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">RENI ONDERHOUD</h3>
            <address className="not-italic space-y-6 font-medium text-slate-300">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-blue-400 shrink-0" />
                <span className="text-lg">Patrimoniumstraat 8, <br/>3555 GM Utrecht</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Mail size={24} className="text-blue-400" />
                <a href="mailto:info@renionderhoud.com" className="hover:text-white transition-colors">info@renionderhoud.com</a>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Clock size={24} className="text-blue-400" /> Ma - Za: 08:00 - 18:00
              </div>
            </address>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-lg p-12 rounded-[3rem] text-center border border-slate-700 shadow-2xl">
            <p className="text-blue-400 font-black uppercase text-xs tracking-[0.2em] mb-6">Direct een scherpe offerte?</p>
            <a href={`tel:${phoneRaw}`} className="text-3xl md:text-5xl font-black block hover:text-blue-400 transition-all transform hover:scale-105 active:scale-95">
              {phoneDisplay}
            </a>
            <p className="mt-6 text-slate-400 font-medium italic">"Bel Aldin voor vakkundig advies op locatie"</p>
          </div>
        </div>
        {/* Decoratieve achtergrond voor de footer */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
      </footer>
    </div>
  );
}
