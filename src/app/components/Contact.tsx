import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971523131909', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500">⭐</span>
            <span className="text-white/70 uppercase text-sm tracking-wider">Contact</span>
          </div>
          <h2 className="text-white uppercase mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', letterSpacing: '0.02em' }}>
            GET IN TOUCH
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Visit us or reach out to start your fitness journey today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white uppercase mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem', letterSpacing: '0.02em' }}>
                Visit Our Gym
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1 uppercase tracking-wider">Location</h4>
                    <p className="text-white/70">
                      Al Hilal Bank Building, 3rd Floor<br />
                      Al Qusais 2, Dubai<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1 uppercase tracking-wider">WhatsApp</h4>
                    <button 
                      onClick={handleWhatsApp}
                      className="text-white/70 hover:text-yellow-500 transition-colors"
                    >
                      +971 52 313 1909
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1 uppercase tracking-wider">Email</h4>
                    <p className="text-white/70">info@oxfordfitnesscenterdubai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white mb-1 uppercase tracking-wider">Opening Hours</h4>
                    <p className="text-white/70">
                      Monday - Saturday: 5:00 AM - 1:00 AM<br />
                      Sunday: 4:00 PM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6791847891795!2d55.38!3d25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzI0LjAiTiA1NcKwMjInNDguMCJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oxford Fitness Center Location"
              />
            </div>
          </div>

          {/* Contact Form - Lead Capture */}
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-white uppercase mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem', letterSpacing: '0.02em' }}>
              Start Your Journey
            </h3>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              handleWhatsApp();
            }}>
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message (Optional)"
                  rows={5}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/50"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black uppercase tracking-wider" 
                size="lg"
              >
                Message on WhatsApp
              </Button>
              <p className="text-white/50 text-xs text-center">
                By submitting, you'll be redirected to WhatsApp to complete your inquiry
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}