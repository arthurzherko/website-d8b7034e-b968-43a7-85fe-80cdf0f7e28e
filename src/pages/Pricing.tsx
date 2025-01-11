import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const prices = [
    {
      title: 'PC Gaming',
      price: 150,
      period: 'час',
      features: ['Топовый Gaming PC', 'Комфортное кресло', 'Премиум периферия'],
    },
    {
      title: 'PlayStation 5',
      price: 200,
      period: 'час',
      features: ['4K Gaming', 'Два геймпада', 'Все новые игры'],
    },
    {
      title: 'VR Gaming',
      price: 250,
      period: 'час',
      features: ['Meta Quest 2/Valve Index', 'Большая игровая зона', 'Помощь оператора'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Цены</h1>
        <p className="text-xl text-gray-400">Доступные тарифы для всех геймеров</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {prices.map((plan, i) => (
          <Card
            key={i}
            className="border-slate-700 bg-slate-800/50 transition-transform hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="text-center text-2xl">{plan.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}₽</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-4 text-gray-300">
                {plan.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center">
        <h3 className="mb-4 text-2xl font-bold">Специальные предложения</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-900/30 p-4">
            <h4 className="mb-2 font-bold">Ночной тариф</h4>
            <p className="text-gray-300">С 00:00 до 08:00 скидка 30%</p>
          </div>
          <div className="rounded-lg bg-purple-900/30 p-4">
            <h4 className="mb-2 font-bold">Групповой тариф</h4>
            <p className="text-gray-300">От 5 человек скидка 20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
