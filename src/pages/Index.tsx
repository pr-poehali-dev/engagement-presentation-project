import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showReport, setShowReport] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const features = [
    {
      icon: 'Search',
      title: 'Глубокий анализ',
      description: 'Тщательно собираем и изучаем информацию из множества источников для полного отчета'
    },
    {
      icon: 'Users',
      title: 'Социальные сети',
      description: 'Исследуем все актуальные соцсети, мессенджеры и сообщества'
    },
    {
      icon: 'Eye',
      title: 'Скрытые профили',
      description: 'Найдём удалённые и скрытые профили, которые партнер старается скрыть'
    },
    {
      icon: 'MessageCircle',
      title: 'Анализ общения',
      description: 'Узнайте, с кем, когда и как часто общается ваш партнер'
    },
    {
      icon: 'Shield',
      title: 'Конфиденциальность',
      description: 'Абсолютная анонимность - никто не узнает о вашем запросе'
    },
    {
      icon: 'FileText',
      title: 'Структурированный отчет',
      description: 'Получите профессиональный IT-отчет с таблицами и графиками'
    }
  ];

  // Данные для графиков активности
  const phoneActivityData = [
    { month: 'Янв', calls: 24, sms: 89, data: 156 },
    { month: 'Фев', calls: 31, sms: 127, data: 203 },
    { month: 'Мар', calls: 18, sms: 94, data: 178 },
    { month: 'Апр', calls: 45, sms: 156, data: 234 },
    { month: 'Май', calls: 28, sms: 134, data: 189 },
    { month: 'Июн', calls: 37, sms: 178, data: 267 }
  ];

  const vkActivityData = [
    { date: '15.11', messages: 12, views: 45, online: 156 },
    { date: '16.11', messages: 8, views: 23, online: 89 },
    { date: '17.11', messages: 15, views: 67, online: 234 },
    { date: '18.11', messages: 3, views: 12, online: 45 },
    { date: '19.11', messages: 21, views: 89, online: 178 },
    { date: '20.11', messages: 7, views: 34, online: 123 },
    { date: '21.11', messages: 18, views: 78, online: 267 }
  ];

  const telegramActivityData = [
    { hour: '00', messages: 0, channels: 0 },
    { hour: '08', messages: 4, channels: 2 },
    { hour: '12', messages: 8, channels: 5 },
    { hour: '15', messages: 12, channels: 7 },
    { hour: '18', messages: 15, channels: 9 },
    { hour: '21', messages: 25, channels: 14 },
    { hour: '23', messages: 8, channels: 3 }
  ];

  const communityActivityData = [
    { name: 'Автомобили Уфы', visits: 45, posts: 12 },
    { name: 'Флирт клуб 18+', visits: 78, posts: 23 },
    { name: 'Знакомства Башкирия', visits: 34, posts: 8 },
    { name: 'Ресторан Премиум', visits: 23, posts: 5 }
  ];

  const reportData = {
    personalInfo: {
      name: 'ФЕДОСЕЕНКО СЕРГЕЙ ИВАНОВИЧ',
      birthDate: '**.05.1988',
      age: '36 лет',
      phone: '+7 905 682-**-**',
      phoneOperator: 'Билайн',
      additionalPhone: '+7 961 489-**-**',
      region: 'Уфа',
      registrationAddress: 'РОССИЯ, БАШКОРТОСТАН РЕСП., Г. УФА, УЛ. ДЕМСКАЯ, Д.1**',
      actualAddress: 'РОССИЯ, БАШКОРТОСТАН РЕСП., Г. УФА, УЛ. ГОГОЛЯ, Д.2*, кв. 2*',
      relatives: [
        { relation: 'Сестра', name: 'Федосеенко Елена Григорьевна', birthDate: '**.05.1990', phone: '8915635****', vk: 'vk.com/id671284**' },
        { relation: 'Брат', name: 'Федосеев Антон Григорьевич', birthDate: '**.06.1985', phone: '8991567****', vk: 'vk.com/id105459522' }
      ],
      maritalStatus: 'Женат (Федосеева Инна Александровна **.08.19**) vk.com/id597287**',
      phoneBookEntries: [
        'Sergii', 'Сережка', 'Сергей Иваныч сосед', 'Муж', 'Серый напарник', 
        'Федосеенко С.', 'Сергей кафе', 'Серг Mamba', 'Брат Серега', 'Сергей с ресторана', 'Сережа'
      ]
    },
    socialNetworks: [
      { 
        platform: 'VK', 
        id: 'id39343820', 
        name: 'Федосеенко Сергей', 
        status: 'active', 
        registered: '2018',
        friends: 156,
        groups: 23,
        lastActivity: '21.11.2025',
        digitalParams: {
          email: 'synchronized',
          device: 'match',
          mac: 'identical',
          dns: 'match'
        }
      },
      { 
        platform: 'VK', 
        id: 'id6528774', 
        name: 'Руденко Валерий', 
        status: 'hidden', 
        registered: '2020',
        friends: 18,
        groups: 24,
        lastActivity: '21.08.2025',
        digitalParams: {
          email: 'synchronized',
          device: 'match',
          mac: 'identical',
          dns: 'match'
        }
      },
      { 
        platform: 'OK', 
        id: '578432156789', 
        name: 'Сергей Ф.', 
        status: 'active', 
        registered: '2019',
        friends: 89,
        groups: 12,
        lastActivity: '20.11.2025',
        digitalParams: {
          email: 'synchronized',
          device: 'match',
          mac: 'identical',
          dns: 'match'
        }
      },
      { 
        platform: 'Telegram', 
        id: '1604222277', 
        name: 'Основной', 
        status: 'active', 
        registered: '2020',
        channels: 45,
        chats: 12,
        lastActivity: '21.11.2025'
      },
      { 
        platform: 'Telegram', 
        id: '1896244800', 
        name: 'Дополнительный', 
        status: 'hidden', 
        registered: '2021',
        channels: 23,
        chats: 5,
        lastActivity: '18.11.2025'
      }
    ],
    vkFriends: [
      { name: 'Иванов Андрей', frequency: '3-4 раза в неделю, вечером', topic: 'Автомобили, тюнинг', mutual: true },
      { name: 'Смирнова Елена', frequency: '1-2 раза в неделю, днем', topic: 'Дизайн интерьера', mutual: true },
      { name: 'Сидоров Денис', frequency: 'Ежедневно, вечером', topic: 'Личные беседы', mutual: false },
      { name: 'Васильева Анна', frequency: '2-3 раза в неделю, днем', topic: 'Сад, огород', mutual: false }
    ],
    hiddenVkFriends: [
      { name: 'Петрова Ольга', frequency: '3-4 раза в неделю, вечером', topic: 'Личные беседы', mutual: false },
      { name: 'Кузнецова Екатерина', frequency: '2-3 раза в неделю, днем', topic: 'Криптовалюты', mutual: false }
    ],
    telegramContacts: [
      { username: '@anna_petro', name: 'Анна П.', frequency: 'Ежедневно', lastActive: '21:45' },
      { username: '@denis_work', name: 'Денис', frequency: '3-4 раза в неделю', lastActive: '18:30' },
      { username: '@secret_chat', name: 'Скрытый контакт', frequency: '2-3 раза в неделю', lastActive: '23:15' }
    ],
    suspiciousChannels: [
      { name: 'Флирт клуб 18+', type: 'dating', activity: 'high' },
      { name: 'Знакомства Уфа', type: 'dating', activity: 'medium' },
      { name: 'Эскорт услуги', type: 'escort', activity: 'low' }
    ],
    datingPlatforms: [
      { 
        platform: 'Mamba', 
        url: 'mamba.ru/anketa.phtml?oid=826****', 
        registered: '12.04.2023', 
        deleted: '09.06.2025', 
        status: 'deleted',
        email: 'serg***87@yandex.ru',
        photos: 2,
        totalViews: 1247,
        totalMessages: 156,
        totalLikes: 328,
        digitalParams: {
          phone: 'identical',
          device: 'match',
          browser: 'same',
          ip: 'match'
        }
      }
    ],
    suspiciousActivities: [
      { type: 'Скрытые группы эскорт-услуг', description: 'Участие в закрытых сообществах флирта и эскорт-услуг с 2021 года', severity: 'high' },
      { type: 'Дополнительный скрытый профиль VK', description: 'Обнаружен скрытый профиль VK с подозрительной активностью', severity: 'high' },
      { type: 'Удаленная анкета на сайте знакомств', description: 'Активная анкета на Mamba.ru с 2023 по 2025 год', severity: 'high' },
      { type: 'Ночные контакты в Telegram', description: 'Интенсивное общение в ночное время с неизвестными контактами', severity: 'medium' },
      { type: 'Подозрительные каналы 18+', description: 'Подписки на каналы эротического содержания', severity: 'medium' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="tech-gradient p-2 rounded-lg">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">VERNOST PROFI</h1>
                <p className="text-sm text-blue-700">Профессиональная проверка на верность</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 animate-fade-in">
              Получите полный и профессиональный 
              <span className="text-blue-600"> результат проверки</span> на верность!
            </h1>
            <p className="text-xl text-blue-700 mb-8 animate-fade-in max-w-3xl mx-auto">
              Пользуясь нашими услугами, Вы можете быть уверены в том, что получаете первоклассные услуги по адекватной цене!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in mb-8">
              <Dialog open={showReport} onOpenChange={setShowReport}>
                <DialogTrigger asChild>
                  <Button size="lg" className="tech-gradient text-white hover:shadow-xl transition-all duration-300 text-lg py-6">
                    <Icon name="FileSearch" size={24} className="mr-3" />
                    Пример полной проверки
                  </Button>
                </DialogTrigger>
                <ReportDialog reportData={reportData} phoneActivityData={phoneActivityData} vkActivityData={vkActivityData} telegramActivityData={telegramActivityData} communityActivityData={communityActivityData} />
              </Dialog>
              
              <Dialog open={showServices} onOpenChange={setShowServices}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg py-6 animate-pulse">
                    <Icon name="Zap" size={24} className="mr-3" />
                    Наши услуги
                  </Button>
                </DialogTrigger>
                <ServicesDialog features={features} />
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-600 border-2 shadow-xl">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Badge className="bg-red-600 text-white px-4 py-2 text-sm animate-pulse">АКЦИЯ СЕГОДНЯ</Badge>
                </div>
                <CardTitle className="text-3xl text-blue-900">Полная проверка на верность</CardTitle>
                <CardDescription className="text-lg text-blue-700">
                  Комплексный анализ цифровой активности с IT-отчетом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl font-light text-blue-600 line-through">1 999 ₽</span>
                  <span className="text-5xl font-bold text-blue-600">999 ₽</span>
                </div>
                <p className="text-orange-600 font-semibold text-lg">
                  Скидка 50% по промокоду "VERNOST111" действует только сегодня!
                  <br />
                  <span className="text-sm text-blue-700">
                    Сообщите промокод нашему менеджеру для получения скидки
                  </span>
                </p>
                <Button 
                  size="lg" 
                  className="w-full tech-gradient text-white hover:shadow-xl transition-all duration-300 text-lg py-6"
                  onClick={() => window.open('https://t.me/VernostProService_bot', '_blank')}
                >
                  <Icon name="MessageCircle" size={24} className="mr-3" />
                  Начать проверку
                </Button>
                <div className="text-sm text-blue-700">
                  <p>Есть вопросы? Получите бесплатную консультацию по любым вопросам</p>
                  <Button 
                    variant="link" 
                    className="text-blue-600 p-0 h-auto mt-2"
                    onClick={() => window.open('https://t.me/VernostService', '_blank')}
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
              <div className="flex items-start justify-center">
                <Icon name="ShieldCheck" size={48} className="text-blue-600 mr-6 mt-2" />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Абсолютная конфиденциальность и анонимность!</h3>
                  <div className="text-blue-800 space-y-3">
                    <p>✓ Ваши данные и результаты проверки останутся строго между вами и нами</p>
                    <p>✓ Никто не узнает о вашем запросе — гарантируем полную анонимность</p>
                    <p>✓ Вся найденная информация проходит строгую проверку на актуальность</p>
                    <p>✓ Все данные получены из общедоступных источников в рамках законодательства РФ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-xl font-semibold">Политика конфиденциальности и обеспечения анонимности</h3>
            <div className="text-blue-200 space-y-4 text-sm leading-relaxed">
              <p>
                <strong>Уведомляем что наши проверки направлены на улучшение и восстановление отношений, 
                для лучшего понимания друг друга.</strong>
              </p>
              <p>
                В целях максимальной конфиденциальности данный отчёт передаётся исключительно заказчику 
                и не сохраняется в системах. После отправки отчёт автоматически удаляется с сервера.
              </p>
              <p>
                Мы гарантируем полную анонимность и не передаём информацию третьим лицам. 
                Все данные получены из общедоступных источников в рамках законодательства РФ 
                (статья 23 Конституции и Закон № 152-ФЗ «О персональных данных»).
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Services Dialog Component
const ServicesDialog = ({ features }: { features: any[] }) => {
  return (
    <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-center space-x-3 mb-4">
          <div className="tech-gradient p-2 rounded-lg">
            <Icon name="Zap" size={24} className="text-white" />
          </div>
          <div>
            <DialogTitle className="text-2xl text-blue-900">Наши услуги</DialogTitle>
            <DialogDescription className="text-blue-700">
              Полный спектр услуг профессиональной проверки на верность
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-200 bg-blue-50/50">
            <CardHeader>
              <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} size={24} className="text-white" />
              </div>
              <CardTitle className="text-blue-900">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-800 text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button 
          size="lg" 
          className="tech-gradient text-white hover:shadow-xl transition-all duration-300"
          onClick={() => window.open('https://t.me/VernostProService_bot', '_blank')}
        >
          <Icon name="MessageCircle" size={20} className="mr-2" />
          Заказать проверку
        </Button>
      </div>
    </DialogContent>
  );
};

// Report Dialog Component
const ReportDialog = ({ reportData, phoneActivityData, vkActivityData, telegramActivityData, communityActivityData }: { reportData: any, phoneActivityData: any, vkActivityData: any, telegramActivityData: any, communityActivityData: any }) => {
  return (
    <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-center space-x-3 mb-4">
          <div className="tech-gradient p-2 rounded-lg">
            <Icon name="FileText" size={24} className="text-white" />
          </div>
          <div>
            <DialogTitle className="text-2xl text-blue-900">РЕЗУЛЬТАТ ПРОВЕРКИ № 25-0183</DialogTitle>
            <DialogDescription className="text-blue-700">
              <strong>Дата проверки:</strong> 21.11.2025 | <strong>E-mail заказчика:</strong> pavel000***@mail.ru
              <br />
              <span className="text-xs">
                Пример структурированного индивидуального отчета. Основные данные изменены в целях конфиденциальности.
              </span>
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-7 text-xs">
          <TabsTrigger value="summary">Сводка</TabsTrigger>
          <TabsTrigger value="social">Аналитика Соц.сетей</TabsTrigger>
          <TabsTrigger value="messengers">Аналитика мессенджеров</TabsTrigger>
          <TabsTrigger value="dating">Сайты знакомств</TabsTrigger>
          <TabsTrigger value="analysis">Цифровая активность</TabsTrigger>
          <TabsTrigger value="risks">Риски</TabsTrigger>
          <TabsTrigger value="conclusion">Результат</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <Card className="report-section border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Icon name="User" size={20} className="mr-2 text-blue-600" />
                Общая информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">ФИО:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.name}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Дата рождения / Возраст:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.birthDate} / {reportData.personalInfo.age}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Основной телефон:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.phone} <span className="text-blue-600">({reportData.personalInfo.phoneOperator})</span></p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Дополнительный найденный номер:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.additionalPhone}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Регион:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.region}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Адрес регистрации:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.registrationAddress}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Фактический адрес:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.actualAddress}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-700 mb-1">Семейное положение:</p>
                    <p className="font-semibold text-blue-900">{reportData.personalInfo.maritalStatus}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Родственники:</h4>
                <div className="space-y-2">
                  {reportData.personalInfo.relatives.map((relative: any, index: number) => (
                    <div key={index} className="bg-white p-3 rounded-lg border border-blue-100">
                      <p className="text-sm">
                        <strong>{relative.relation}:</strong> {relative.name} {relative.birthDate}; 
                        {relative.phone}; {relative.vk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Найденные записи в телефонных книгах других лиц:</h4>
                <div className="bg-white p-4 rounded-lg border border-blue-100">
                  <div className="flex flex-wrap gap-2">
                    {reportData.personalInfo.phoneBookEntries.map((entry: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {entry}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Статистика цифровой активности:</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">{reportData.socialNetworks.length}</div>
                    <div className="text-xs text-blue-700">Аккаунтов найдено</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg border">
                    <div className="text-2xl font-bold text-red-600">3</div>
                    <div className="text-xs text-red-700">Скрытых профиля</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border">
                    <div className="text-2xl font-bold text-orange-600">1</div>
                    <div className="text-xs text-orange-700">Сайт знакомств</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">263</div>
                    <div className="text-xs text-green-700">Активных контактов</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">68</div>
                    <div className="text-xs text-purple-700">Подозрит. каналов</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          {reportData.socialNetworks.filter((network: any) => network.platform === 'VK' || network.platform === 'OK').map((network: any, index: number) => (
            <Card key={index} className={`report-section ${network.status === 'hidden' ? 'border-red-200 bg-red-50/30' : 'border-blue-200'}`}>
              <CardHeader>
                <CardTitle className={`text-lg flex items-center ${network.status === 'hidden' ? 'text-red-700' : 'text-blue-900'}`}>
                  <Icon name="Globe" size={20} className="mr-2" />
                  {network.platform} - {network.name} {network.status === 'hidden' && <Badge className="ml-2 bg-red-100 text-red-800">СКРЫТЫЙ ПРОФИЛЬ</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Совпадающие цифровые параметры:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                        <span>✓ Синхронизированный почтовый адрес</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                        <span>✓ Цифровые параметры устройства</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                        <span>✓ Идентичность MAC-адреса</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                        <span>✓ DNS-адрес и IP-адрес</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Активность профиля:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Друзья:</strong> {network.friends} пользователей</li>
                      <li>• <strong>Сообщества:</strong> {network.groups} групп</li>
                      <li>• <strong>Последняя активность:</strong> {network.lastActivity}</li>
                      <li>• <strong>Регистрация:</strong> {network.registered}</li>
                      {network.status === 'hidden' && <li className="text-red-600 font-semibold">• <strong>Подозрительные группы:</strong> флирт, 18+</li>}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-4">График активности по месяцам:</h4>
                  <div style={{ width: '100%', height: '200px' }}>
                    <ResponsiveContainer>
                      <LineChart data={vkActivityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="messages" stroke="#3b82f6" name="Сообщения" />
                        <Line type="monotone" dataKey="views" stroke="#10b981" name="Просмотры" />
                        <Line type="monotone" dataKey="online" stroke="#f59e0b" name="Время онлайн" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Таблица «Друзья и пересечения»:</h4>
                    <div className="space-y-2">
                      {(network.status === 'hidden' ? reportData.hiddenVkFriends : reportData.vkFriends).map((friend: any, idx: number) => (
                        <div key={idx} className="bg-white p-3 rounded border text-xs">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{friend.name}</span>
                            {friend.mutual && <Badge className="bg-blue-100 text-blue-800 text-xs">Общий</Badge>}
                          </div>
                          <p className="text-gray-600">{friend.frequency}</p>
                          <p className="text-gray-500">{friend.topic}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Сообщества и каналы:</h4>
                    <div className="space-y-2">
                      {communityActivityData.map((community: any, idx: number) => (
                        <div key={idx} className="bg-white p-3 rounded border text-xs">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{community.name}</span>
                            <Badge className={community.name.includes('18+') || community.name.includes('Флирт') ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>
                              {community.visits} визитов
                            </Badge>
                          </div>
                          <Progress value={(community.posts / 25) * 100} className="mt-1 h-2" />
                          <p className="text-gray-500 mt-1">{community.posts} постов</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${network.status === 'hidden' ? 'bg-red-50 border border-red-200' : 'bg-blue-50 border border-blue-200'}`}>
                  <h4 className="font-semibold mb-2">
                    {network.status === 'hidden' ? 'ВЫВОД: Скрытая активность обнаружена' : 'ВЫВОД: Основной активный профиль'}
                  </h4>
                  <p className="text-sm">
                    {network.status === 'hidden' 
                      ? 'Профиль используется для скрытого общения с подозрительными контактами и участия в закрытых сообществах.' 
                      : 'Основной профиль с нормальной социальной активностью и открытым общением.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="messengers" className="space-y-6">
          {reportData.socialNetworks.filter((network: any) => network.platform === 'Telegram').map((network: any, index: number) => (
            <Card key={index} className={`report-section ${network.status === 'hidden' ? 'border-red-200 bg-red-50/30' : 'border-blue-200'}`}>
              <CardHeader>
                <CardTitle className={`text-lg flex items-center ${network.status === 'hidden' ? 'text-red-700' : 'text-blue-900'}`}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram - {network.name} {network.status === 'hidden' && <Badge className="ml-2 bg-red-100 text-red-800">СКРЫТЫЙ АККАУНТ</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Параметры активности:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Каналы:</strong> {network.channels} подписок</li>
                      <li>• <strong>Чаты:</strong> {network.chats} активных</li>
                      <li>• <strong>Последняя активность:</strong> {network.lastActivity}</li>
                      <li>• <strong>Регистрация:</strong> {network.registered}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Почасовая активность:</h4>
                    <div style={{ width: '100%', height: '150px' }}>
                      <ResponsiveContainer>
                        <BarChart data={telegramActivityData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="messages" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Контакты с наибольшей активностью:</h4>
                  <div className="space-y-2">
                    {reportData.telegramContacts.map((contact: any, idx: number) => (
                      <div key={idx} className="bg-white p-3 rounded border">
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">{contact.name}</span>
                            <span className="text-gray-500 ml-2">({contact.username})</span>
                          </div>
                          <div className="text-right text-sm">
                            <div className="text-blue-600">{contact.frequency}</div>
                            <div className="text-gray-500">Последний раз: {contact.lastActive}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Подозрительные каналы и группы:</h4>
                  <div className="space-y-2">
                    {reportData.suspiciousChannels.map((channel: any, idx: number) => (
                      <div key={idx} className="bg-red-50 border border-red-200 p-3 rounded">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-red-800">{channel.name}</span>
                          <Badge className={`${
                            channel.activity === 'high' ? 'bg-red-100 text-red-800' :
                            channel.activity === 'medium' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {channel.activity === 'high' ? 'Высокая активность' :
                             channel.activity === 'medium' ? 'Средняя активность' : 'Низкая активность'}
                          </Badge>
                        </div>
                        <p className="text-sm text-red-700 mt-1">
                          Тип: {channel.type === 'dating' ? 'Знакомства' : channel.type === 'escort' ? 'Эскорт-услуги' : channel.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${network.status === 'hidden' ? 'bg-red-50 border border-red-200' : 'bg-blue-50 border border-blue-200'}`}>
                  <h4 className="font-semibold mb-2">
                    {network.status === 'hidden' ? 'ВЫВОД: Обнаружена скрытая активность' : 'ВЫВОД: Стандартное использование'}
                  </h4>
                  <p className="text-sm">
                    {network.status === 'hidden' 
                      ? 'Аккаунт используется для скрытого общения в ночное время и участия в подозрительных каналах.' 
                      : 'Обычное использование мессенджера для повседневного общения.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="dating" className="space-y-6">
          <Card className="report-section border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-red-700">
                <Icon name="Heart" size={20} className="mr-2" />
                Отчёт о найденных аккаунтах на сайтах знакомств и флирта
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {reportData.datingPlatforms.map((platform: any, index: number) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                  <h4 className="font-semibold text-red-800 mb-4">Обнаружена удаленная анкета Mamba.ru</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Данные анкеты:</h5>
                      <div className="space-y-2 text-sm">
                        <p><strong>Ссылка:</strong> {platform.url}</p>
                        <p><strong>Дата регистрации:</strong> {platform.registered}</p>
                        <p><strong>Дата удаления:</strong> {platform.deleted}</p>
                        <p><strong>Email регистрации:</strong> {platform.email}</p>
                        <p><strong>Загружено фотографий:</strong> {platform.photos}</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Статистика активности:</h5>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white p-3 rounded border text-center">
                          <div className="text-xl font-bold text-blue-600">{platform.totalViews}</div>
                          <div className="text-xs text-gray-600">Просмотров</div>
                        </div>
                        <div className="bg-white p-3 rounded border text-center">
                          <div className="text-xl font-bold text-orange-600">{platform.totalMessages}</div>
                          <div className="text-xs text-gray-600">Сообщений</div>
                        </div>
                        <div className="bg-white p-3 rounded border text-center">
                          <div className="text-xl font-bold text-green-600">{platform.totalLikes}</div>
                          <div className="text-xs text-gray-600">Лайков</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Совпадающие цифровые параметры:</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span>✓ Идентичный номер телефона</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span>✓ Совпадающие параметры устройства</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span>✓ Тот же браузер и версия</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span>✓ Идентичный IP-адрес</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 border border-red-300 rounded">
                    <h5 className="font-semibold text-red-800 mb-2">
                      ЗАКЛЮЧЕНИЕ по цифровому анализу:
                    </h5>
                    <p className="text-sm text-red-700">
                      Выявленные совпадения цифровых параметров (номер телефона, устройство, IP-адрес, браузер) 
                      с вероятностью 95% подтверждают принадлежность данной анкеты проверяемому лицу. 
                      <strong> Анкета была активной в период с 2023 по 2025 год во время официального брака.</strong>
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card className="report-section border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-blue-900">
                <Icon name="Activity" size={20} className="mr-2" />
                Цифровая активность в сети
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-4">График активности дополнительного номера телефона</h4>
                <div style={{ width: '100%', height: '250px' }}>
                  <ResponsiveContainer>
                    <BarChart data={phoneActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="calls" fill="#3b82f6" name="Звонки" />
                      <Bar dataKey="sms" fill="#10b981" name="SMS" />
                      <Bar dataKey="data" fill="#f59e0b" name="Интернет (МБ)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Обнаружено:</strong> Повышенная активность дополнительного номера в период с февраля по апрель, 
                    что совпадает с периодом активности на сайте знакомств.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-blue-900 mb-4">Временная активность общения по контактам</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-3">Основные контакты (дневное время):</h5>
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-3 rounded border">
                        <div className="flex justify-between">
                          <span>Рабочие контакты</span>
                          <span className="text-blue-600">09:00-18:00</span>
                        </div>
                        <Progress value={70} className="mt-1 h-2" />
                      </div>
                      <div className="bg-green-50 p-3 rounded border">
                        <div className="flex justify-between">
                          <span>Семейные контакты</span>
                          <span className="text-green-600">18:00-22:00</span>
                        </div>
                        <Progress value={85} className="mt-1 h-2" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-3">Подозрительные контакты (ночное время):</h5>
                    <div className="space-y-2">
                      <div className="bg-red-50 p-3 rounded border">
                        <div className="flex justify-between">
                          <span>Неизвестные контакты</span>
                          <span className="text-red-600">22:00-02:00</span>
                        </div>
                        <Progress value={60} className="mt-1 h-2" />
                      </div>
                      <div className="bg-orange-50 p-3 rounded border">
                        <div className="flex justify-between">
                          <span>Скрытые чаты</span>
                          <span className="text-orange-600">23:00-01:00</span>
                        </div>
                        <Progress value={45} className="mt-1 h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-4">Тематическая диаграмма распределения интересов</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl">🚗</div>
                    <div className="text-lg font-semibold text-blue-600">35%</div>
                    <div className="text-sm text-blue-700">Автомобили</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl">💕</div>
                    <div className="text-lg font-semibold text-red-600">28%</div>
                    <div className="text-sm text-red-700">Знакомства</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl">🍽️</div>
                    <div className="text-lg font-semibold text-green-600">22%</div>
                    <div className="text-sm text-green-700">Рестораны</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl">💰</div>
                    <div className="text-lg font-semibold text-purple-600">15%</div>
                    <div className="text-sm text-purple-700">Финансы</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <Card className="report-section border-red-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-red-700">
                <Icon name="ShieldAlert" size={20} className="mr-2" />
                Выявленные подозрительные активности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportData.suspiciousActivities.map((activity: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white border rounded-lg">
                    <div className={`w-4 h-4 rounded-full mt-2 ${
                      activity.severity === 'high' ? 'bg-red-600' : 'bg-orange-500'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900">{activity.type}</h4>
                      <p className="text-blue-700 text-sm mt-1">{activity.description}</p>
                    </div>
                    <Badge className={activity.severity === 'high' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}>
                      {activity.severity === 'high' ? 'ВЫСОКИЙ РИСК' : 'СРЕДНИЙ РИСК'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conclusion" className="space-y-6">
          <Card className="report-section border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-red-700">
                <Icon name="AlertCircle" size={20} className="mr-2" />
                Результат проверки с выводами
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                  <Icon name="AlertTriangle" size={20} className="mr-2" />
                  ИТОГОВАЯ ОЦЕНКА РИСКА НАРУШЕНИЯ ВЕРНОСТИ
                </h4>
                <Progress value={87} className="mb-3 h-3" />
                <p className="text-lg font-bold text-red-700 mb-4">
                  87% - КРИТИЧЕСКИЙ УРОВЕНЬ ПОДОЗРИТЕЛЬНОЙ АКТИВНОСТИ
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h5 className="font-semibold text-red-800 mb-2">Критические нарушения:</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Обнаружены 3 скрытых профиля в соцсетях</li>
                      <li>• Активность на сайте знакомств в период брака</li>
                      <li>• Участие в закрытых группах эскорт-тематики</li>
                      <li>• Скрытые контакты в ночное время</li>
                      <li>• Дополнительный номер телефона</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-800 mb-2">Цифровые доказательства:</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 100% совпадение MAC-адресов</li>
                      <li>• Идентичные IP и DNS параметры</li>
                      <li>• Синхронизированные email адреса</li>
                      <li>• Совпадающие временные паттерны</li>
                      <li>• Подтвержденная активность на Mamba.ru</li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="bg-white p-4 border border-red-300 rounded">
                  <h5 className="font-semibold text-red-800 mb-2">
                    ПРОФЕССИОНАЛЬНАЯ РЕКОМЕНДАЦИЯ:
                  </h5>
                  <p className="text-sm text-red-700 mb-3">
                    Обнаруженные факты указывают на высокую вероятность нарушения семейной верности. 
                    Совокупность цифровых доказательств и поведенческих паттернов требует немедленного внимания.
                  </p>
                  <div className="bg-red-100 p-3 rounded text-sm">
                    <p className="font-semibold text-red-800 mb-1">Рекомендуемые действия:</p>
                    <p className="text-red-700">
                      1. Серьезный разговор с партнером о найденных фактах
                      <br />
                      2. Рассмотрение семейной терапии или консультирования
                      <br />
                      3. При необходимости - консультация с юристом по семейным вопросам
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

export default Index;