import { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/971523131909', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-yellow-500" />
            <span className="text-white uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.05em' }}>Oxford Fitness Center</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wider">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wider">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wider">
              Pricing
            </button>
            <button onClick={() => scrollToSection('trainers')} className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wider">
              Trainers
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wider">
              Contact
            </button>
            <Button onClick={handleWhatsApp} className="bg-yellow-500 hover:bg-yellow-600 text-black uppercase tracking-wider">
              Message Business
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors text-left uppercase text-sm tracking-wider">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-left uppercase text-sm tracking-wider">
                Services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors text-left uppercase text-sm tracking-wider">
                Pricing
              </button>
              <button onClick={() => scrollToSection('trainers')} className="text-white/80 hover:text-white transition-colors text-left uppercase text-sm tracking-wider">
                Trainers
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors text-left uppercase text-sm tracking-wider">
                Contact
              </button>
              <Button onClick={handleWhatsApp} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full uppercase tracking-wider">
                Message Business
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}