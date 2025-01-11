import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    duration: '',
    type: 'pc',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Бронирование отправлено!',
      description: 'Мы свяжемся с вами для подтверждения.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Забронировать место</h1>
        <p className="text-xl text-gray-400">Заполните форму для бронирования</p>
      </div>

      <Card className="border-slate-700 bg-slate-800/50">
        <CardHeader>
          <CardTitle>Форма бронирования</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm">Ваше имя</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-slate-700 bg-slate-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Телефон</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-slate-700 bg-slate-900"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm">Дата</label>
                <Input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="border-slate-700 bg-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Время</label>
                <Input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="border-slate-700 bg-slate-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Тип оборудования</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-900 p-2"
                required
              >
                <option value="pc">Gaming PC</option>
                <option value="ps5">PlayStation 5</option>
                <option value="vr">VR</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Длительность (часов)</label>
              <Input
                name="duration"
                type="number"
                min="1"
                max="12"
                value={formData.duration}
                onChange={handleChange}
                required
                className="border-slate-700 bg-slate-900"
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Забронировать
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Booking;
