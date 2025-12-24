import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  {
    number: '15+',
    label: 'CERTIFIED PROFESSIONAL TRAINERS DEDICATED TO YOUR SUCCESS',
    image: 'https://images.unsplash.com/photo-1648542036561-e1d66a5ae2b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXJ8ZW58MXx8fHwxNzY2NTE2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    number: '500+',
    label: 'ACTIVE MEMBERS TRANSFORMING THEIR LIVES EVERY DAY',
    image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjY0NDAzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    number: '95%',
    label: 'MEMBER SATISFACTION — OUR COMMUNITY SPEAKS FOR ITSELF',
    image: 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NjY1MTYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden group"
            >
              {/* Background Image */}
              <ImageWithFallback
                src={stat.image}
                alt={stat.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8">
                <p className="text-white text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
                <h3 
                  className="text-yellow-500" 
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6rem)', lineHeight: '1', letterSpacing: '0.02em' }}
                >
                  {stat.number}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}