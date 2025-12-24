import { Dumbbell, Users, Heart, Award, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const services = [
  {
    icon: Users,
    title: 'Professional Instructors',
    description: 'Certified trainers with years of experience to guide your fitness journey',
    image: 'https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXJ8ZW58MXx8fHwxNzY2NTE2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art fitness equipment for all your training needs',
    image: 'https://images.unsplash.com/photo-1632758205645-732ee46c17fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjY1NDkzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: TrendingUp,
    title: 'Weight Loss Programs',
    description: 'Customized programs designed to help you achieve your weight loss goals',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjY0NDAzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Heart,
    title: 'Diet & Nutrition',
    description: 'Expert nutritional guidance to complement your training',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3N8ZW58MXx8fHwxNzY2NDU1MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Target,
    title: 'Martial Arts/Kung Fu',
    description: '200 AED/Month - 3 classes weekly with expert martial arts instructors',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjY0NDAzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Award,
    title: 'Free Trial Sessions',
    description: 'Experience our facility and training programs with a complimentary trial',
    image: 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjY1MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="text-white/70 uppercase text-sm tracking-wider">Our Services</span>
          </div>
          <h2 className="text-white uppercase mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            WHAT WE OFFER
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-none w-[400px] snap-start group relative overflow-hidden rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <service.icon className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-white uppercase mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem', letterSpacing: '0.02em' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}