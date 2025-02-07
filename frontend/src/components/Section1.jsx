import { motion } from "framer-motion";

export default function Section1() {
  return (
    <section className="bg-black min-h-screen flex flex-col justify-center p-8 md:p-12 lg:p-16 z-40">
      <div className="grid lg:grid-cols-2 gap-8 items-center px-10">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to make some noise?
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's start making music on May 5. vyt hgcvytcoutcytcoygcyotcyotc
            hufitrseuwaeeeeeeeeeeeeeeurzxtrjxfciyy ytcfir6xxxxxxxxxxxxx f
            myidtr6xtujfjfxtrxxirtfxtesdyfyttxeuzcygctr
            xrexezezujfxitrxezurzjtfxtxrxfjxjutx
          </motion.p>
          
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20144015-ECQQFovBtlpvEn3L25z8BIXaksGTvR.png"
            alt="Abstract 3D shape"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      
    </section>
  );
}
