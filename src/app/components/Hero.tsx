import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971523131909', '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjY1MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym fitness workout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="text-white uppercase tracking-wider text-sm">Al Qusais 2, Dubai</span>
          </div>
          <h1 className="text-white uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            FIT FOR FUTURE
          </h1>
          <h2 className="text-yellow-500 uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', letterSpacing: '0.02em' }}>
            YOUR FITNESS JOURNEY STARTS HERE!
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Professional instructors, modern equipment, and personalized training programs designed to help you achieve your fitness goals. Join Oxford Fitness Center today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
            <Button onClick={handleWhatsApp} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black uppercase tracking-wider">
              JOIN NOW
            </Button>
            <Button onClick={handleWhatsApp} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black uppercase tracking-wider">
              FREE TRIAL SESSION
            </Button>
          </div>
        </div>
      </div>

      {/* Dubai Skyline Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}