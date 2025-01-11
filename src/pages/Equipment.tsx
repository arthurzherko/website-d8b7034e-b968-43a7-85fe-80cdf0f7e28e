import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Equipment = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">Наше оборудование</h1>
      <p className="text-xl text-gray-400">Только лучшее для наших игроков</p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      <Card className="border-slate-700 bg-slate-800/50">
        <CardHeader>
          <CardTitle>Gaming PC</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>Intel Core i9 13900K</li>
            <li>NVIDIA RTX 4080 16GB</li>
            <li>32GB DDR5 RAM</li>
            <li>2TB NVMe SSD</li>
            <li>240Hz Gaming мониторы</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-slate-700 bg-slate-800/50">
        <CardHeader>
          <CardTitle>PlayStation 5</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>4K HDR Gaming</li>
            <li>DualSense контроллеры</li>
            <li>55" 4K OLED TV</li>
            <li>3D Audio</li>
            <li>Все хитовые игры</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-slate-700 bg-slate-800/50">
        <CardHeader>
          <CardTitle>Периферия</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>Механические клавиатуры Razer</li>
            <li>Мыши Logitech Pro</li>
            <li>Гарнитуры HyperX Cloud</li>
            <li>Игровые кресла DXRacer</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-slate-700 bg-slate-800/50">
        <CardHeader>
          <CardTitle>VR Оборудование</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>Meta Quest 2</li>
            <li>Valve Index</li>
            <li>Большая игровая зона</li>
            <li>Полный набор VR игр</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Equipment;
