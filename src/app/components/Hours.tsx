import { Clock } from 'lucide-react';
import { useState } from 'react';

export function Hours() {
  const [isRamadan, setIsRamadan] = useState(false);

  const standardHours = [
    { day: 'Monday - Saturday', time: '5:00 AM - 1:00 AM' },
    { day: 'Sunday', time: '4:00 PM - 10:00 PM' }
  ];

  const ramadanHours = [
    { day: 'Monday - Saturday (Morning)', time: '6:00 AM - 11:00 AM' },
    { day: 'Monday - Saturday (Evening)', time: '4:00 PM - 3:00 AM' },
    { day: 'Sunday', time: '8:00 PM - 2:00 AM' }
  ];

  const currentHours = isRamadan ? ramadanHours : standardHours;

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-yellow-500">⭐</span>
              <span className="text-white/70 uppercase text-sm tracking-wider">Opening Hours</span>
            </div>
            <h2 className="text-white uppercase mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
              WE'RE OPEN
            </h2>
            
            {/* Ramadan Toggle */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className={`text-sm uppercase tracking-wider ${!isRamadan ? 'text-yellow-500' : 'text-white/50'}`}>
                Standard Hours
              </span>
              <button
                onClick={() => setIsRamadan(!isRamadan)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  isRamadan ? 'bg-yellow-500' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    isRamadan ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm uppercase tracking-wider ${isRamadan ? 'text-yellow-500' : 'text-white/50'}`}>
                Ramadan Hours
              </span>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-white uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '0.02em' }}>
                {isRamadan ? 'Ramadan Timings' : 'Regular Timings'}
              </h3>
            </div>

            <div className="space-y-4">
              {currentHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0"
                >
                  <span className="text-white/90">{schedule.day}</span>
                  <span className="text-yellow-500">{schedule.time}</span>
                </div>
              ))}
            </div>

            {isRamadan && (
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-500 text-sm text-center">
                  Special Ramadan timings are in effect
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
