import { Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';
import { Button } from './ui/button';

const trainers = [
  {
    name: 'Ahmed Al-Mansouri',
    specialty: 'Strength & Conditioning Coach',
    certifications: 'NASM-CPT, CrossFit L2',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXJ8ZW58MXx8fHwxNzY2NTE2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    specialty: 'Holistic Fitness & Mobility Coach',
    certifications: 'RYT-500, Nutrition Coach',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3N8ZW58MXx8fHwxNzY2NDU1MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    specialty: 'Fat Loss & HIIT Expert',
    certifications: 'ACE-CPT, Boxing Coach',
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjY0NDAzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  },
  {
    name: 'Fatima Hassan',
    specialty: 'Transformation Coach',
    certifications: 'ISSA-CPT, Pre/Postnatal',
    experience: '7 years',
    image: 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjY1MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  },
  {
    name: 'James Carter',
    specialty: 'Athletic Performance',
    certifications: 'CSCS, Olympic Lifting',
    experience: '9 years',
    image: 'https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXJ8ZW58MXx8fHwxNzY2NTE2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  }
];

export function Trainers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="trainers" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="text-white/70 uppercase text-sm tracking-wider">Our Trainers</span>
          </div>
          <h2 className="text-white uppercase mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            OUR EXPERT TRAINERS
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our certified fitness professionals are more than just trainers—they're transformation specialists.
          </p>
        </div>

        {/* Horizontal Scrolling Container with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <Button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full p-3 h-12 w-12 hidden md:flex items-center justify-center"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Trainers Scroll */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="flex-none w-[350px] snap-start bg-zinc-900 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white uppercase mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem', letterSpacing: '0.02em' }}>
                      {trainer.name}
                    </h3>
                    <p className="text-yellow-500 text-sm">{trainer.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full p-3 h-12 w-12 hidden md:flex items-center justify-center"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}