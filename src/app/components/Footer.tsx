import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971523131909', '_blank');
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-yellow-500" />
              <span className="text-white uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', letterSpacing: '0.05em' }}>Oxford Fitness</span>
            </div>
            <p className="text-white/70 text-sm">
              Fit For Future - Your Fitness Journey Starts Here!
            </p>
            <p className="text-white/70 text-sm">
              Al Hilal Bank Building, 3rd Floor, Al Qusais 2, Dubai
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Services</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Pricing</a></li>
              <li><a href="#trainers" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Trainers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Professional Instructors</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Modern Equipment</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Weight Loss Programs</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Diet & Nutrition</a></li>
              <li><a href="#" className="text-white/70 hover:text-yellow-500 transition-colors text-sm">Martial Arts/Kung Fu</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Al Qusais 2, Dubai</li>
              <li>
                <button onClick={handleWhatsApp} className="text-white/70 hover:text-yellow-500 transition-colors">
                  +971 52 313 1909
                </button>
              </li>
              <li className="text-white/70">info@oxfordfitnesscenterdubai.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 Oxford Fitness Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}