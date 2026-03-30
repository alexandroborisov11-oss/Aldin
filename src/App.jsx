import React, { useState, useEffect } from 'react';
import { Phone, Paintbrush, ShieldCheck, Star, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneRaw = "0614370597";
  const phoneDisplay = "06 - 14 37 05 97";

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100">
      {/* Fixed Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* UPDATED LOGO: Added Bedrijf VOF */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Paintbrush className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">RENI ONDERHOUD</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Bedrijf VOF</span>
            </div>
          </div>

          <div className="hidden lg:flex gap-8 font-bold text-slate-700 uppercase text-xs tracking-widest">
            <a href="#diensten" className="hover:text-blue-600 transition-colors">Diensten</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <a href={`tel:${phoneRaw}`} className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
            <Phone size={16} /> <span className="font-bold">{phoneDisplay}</span>
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO (White Background) */}
      <header className="relative bg-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
              <Star size={14} fill="currentColor" /> Schilder Utrecht
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Uw woning weer <br />
              <span className="text-blue-600">als nieuw.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Professioneel schilderwerk door <strong>Aldin Yordanov</strong>. Wij staan voor kwaliteit, netheid en een duurzaam resultaat in de regio Utrecht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* FIXED BUTTON: Now calls Aldin */}
              <a href={`tel:${phoneRaw}`} className="bg-slate-900 text-white text-center px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                <Phone size={24} /> {phoneDisplay}
              </a>
              {/* FIXED BUTTON: Links to services section below */}
              <a href="#diensten" className="border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl text-center hover:bg-slate-900 hover:text-white transition-all">
                Onze Diensten
              </a>
            </div>
          </div>

          <div className="relative">
            {/* UPDATED IMAGE: Professional Painter Roller */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="/painter.jpg.png"
                alt="Professionele Schilder in Utrecht"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-3 text-blue-600 font-bold">
                <CheckCircle2 size={24} />
                <span>100% Tevredenheidsgarantie</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: DIENSTEN (Light Blue Background for Separation) */}
      <section id="diensten" className="py-24 bg-blue-50/50 px-6 border-y border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Onze Diensten</h2>
            <div className="h-2 w-20 bg-blue-600 mt-2 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Paintbrush size={32} />}
              title="Binnenschilderwerk"
              desc="Muren, plafonds en houtwerk met de hoogste precisie afgewerkt."
            />
            <ServiceCard
              icon={<ShieldCheck size={32} />}
              title="Buitenschilderwerk"
              desc="Optimale bescherming voor uw gevel en kozijnen tegen weer en wind."
            />
            <ServiceCard
              icon={<Star size={32} />}
              title="Totaal Onderhoud"
              desc="Volledige ontzorging voor uw vastgoed onderhoud in Utrecht."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT (White/Slate Background) */}
      <footer id="contact" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Reni Onderhoud Bedrijf VOF</h3>
            <div className="space-y-4 font-medium text-slate-600">
              <div className="flex items-center gap-3"><MapPin size={20} className="text-blue-600" /> Faustdreef 319, 3561 LK Utrecht</div>
              <div className="flex items-center gap-3"><Mail size={20} className="text-blue-600" /> aldinyordanov@gmail.com</div>
              <div className="flex items-center gap-3"><Clock size={20} className="text-blue-600" /> Maandag — Zaterdag: 08:00 - 18:00</div>
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-center text-white shadow-2xl">
            <p className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Maak direct een afspraak</p>
            <a href={`tel:${phoneRaw}`} className="text-4xl font-black block hover:text-blue-400 transition-colors">
              {phoneDisplay}
            </a>
            <p className="mt-4 text-slate-400">Bel Aldin voor een vrijblijvende offerte.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          © 2026 Reni Onderhoud Bedrijf VOF. Uw schilder in de regio Utrecht.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
      <div className="text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h4>
      <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
