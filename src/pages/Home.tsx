import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Gamepad2, Cpu, VrHeadset } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => (
  <div className="space-y-16">
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 px-4 py-16 text-center md:px-8 md:py-24">
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold md:text-6xl"
        >
          Добро пожаловать в
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {' '}
            GameHub
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-xl text-gray-300"
        >
          Погрузись в мир игр на самом современном оборудовании
        </motion.p>
        <Button size="lg" className="bg-purple-600 text-lg hover:bg-purple-700">
          Забронировать место
        </Button>
      </div>
    </section>

    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        { icon: Monitor, title: 'Мощные PC', desc: 'RTX 4080, i9 процессоры' },
        { icon: Gamepad2, title: 'PlayStation 5', desc: '4K gaming с DualSense' },
        { icon: Cpu, title: 'Топовая периферия', desc: 'Механические клавиатуры, Pro мыши' },
        { icon: VrHeadset, title: 'VR игры', desc: 'Погружение в виртуальную реальность' },
      ].map((item, i) => (
        <Card
          key={i}
          className="border-slate-700 bg-slate-800/50 transition-transform hover:scale-105"
        >
          <CardContent className="flex flex-col items-center p-6 text-center">
            <item.icon className="mb-4 h-12 w-12 text-purple-500" />
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  </div>
);

export default Home;
