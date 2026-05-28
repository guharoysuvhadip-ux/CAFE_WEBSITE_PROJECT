import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-[#FAFAFA] px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80" 
              alt="Pouring coffee at Spice Route Cafe"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl rounded-2xl hidden md:block">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-[#FDF6F0] rounded-full flex items-center justify-center text-[#C65D3C]">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-gray-900">4.5</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Google Rating</p>
              </div>
            </div>
            <div className="flex space-x-1">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-yellow-400/50'}`} fill="currentColor" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                 </svg>
               ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-[#C65D3C] uppercase tracking-widest text-sm font-semibold">Our Story</h2>
          <h3 className="font-serif text-4xl text-gray-900 leading-tight">
            A Haven for Coffee & Connection in Kolkata
          </h3>
          <p className="text-gray-600 font-light leading-relaxed">
            Founded in 2019 by Ananya Mukherjee, Spice Route Café is a beloved cornerstone of Park Street. We blend the rich, aromatic culture of traditional Bengal with the sleek, comforting ambiance of a modern coffee house.
          </p>
          <p className="text-gray-600 font-light leading-relaxed">
            Whether you're a remote worker seeking a quiet corner, a student craving the perfect study snack, or a tourist exploring the city, our doors are open. Enjoy our artisanal coffee alongside legendary Bengali-inspired pastries and brunch items.
          </p>
          <div className="pt-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Ananya_Mukherjee.png" alt="Owner signature" className="h-12 mx-auto md:mx-0 opacity-50 sepia brightness-50" onError={(e) => e.currentTarget.style.display = 'none'} />
             <p className="text-sm text-gray-400 mt-2 font-serif italic">Ananya Mukherjee, Owner</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
