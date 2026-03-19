'use client'

import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Home() {
  const { data: session } = useSession()

  const features = [
    { title: '100% Anonymous', desc: 'Your identity is never revealed—every message stays completely anonymous and secure.' },
    { title: 'Secure & Private', desc: 'No one can see which email or account was used to send feedback.' },
    { title: 'Instant Messages', desc: 'Send focused feedback without noise—one meaningful message per submission.' },
    { title: 'Instant Messages', desc: 'Messages are delivered instantly with a smooth, real-time experience.' },
    { title: 'Instant Messages', desc: 'Encourages genuine, unfiltered opinions without fear or judgment.' },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white px-6 py-16">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-600/30 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🔥 HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Anonymous Feedback
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Reimagined
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Let people share their honest thoughts without fear. 
          Build deeper connections through true anonymity.
        </p>

        <div className="mt-8 flex justify-center">
          {/* 🔒 DO NOT CHANGE THIS */}
          <a
            href="/sign-up"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 
            font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/30 
            transition-all duration-300"
          >
            Get Started 
          </a>
        </div>
      </motion.section>

      {/* 💎 TRUST / STATS */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 flex justify-center gap-10 text-center text-gray-400"
      >
      </motion.section>

      {/* 🎠 CAROUSEL */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 max-w-6xl mx-auto"
      >
        <Carousel className="max-w-3xl mx-auto">
          <CarouselContent>
            {features.map((item, i) => (
              <CarouselItem key={i} className="md:basis-1/3">
                <Card className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-105 transition-all">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.section>

      {/* ✨ FOOTER */}
      <footer className="mt-24 text-center text-gray-500 text-sm">
        Built for honest conversations • Your privacy matters
      </footer>
    </main>
  )
}