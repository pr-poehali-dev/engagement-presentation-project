import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showReport, setShowReport] = useState(false);

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

  const reportData = {
    personalInfo: {
      name: 'ФЕДОСЕЕНКО СЕРГЕЙ ИВАНОВИЧ',
      birthDate: '04.05.1988',
      age: '36 лет',
      phone: '+7 905 682-**-**',
      additionalPhone: '+7 961 489-**-**',
      region: 'Уфа',
      registrationAddress: 'РОССИЯ, БАШКОРТОСТАН РЕСП., Г. УФА, УЛ. ДЕМСКАЯ, Д.14',
      actualAddress: 'РОССИЯ, БАШКОРТОСТАН РЕСП., Г. УФА, УЛ. ГОГОЛЯ, Д.29'
    },
    socialNetworks: [
      { platform: 'VK', id: 'id39343820', name: 'Федосеенко Сергей', status: 'active' },
      { platform: 'VK', id: 'id6528774', name: 'Руденко Валерий', status: 'hidden' },
      { platform: 'Instagram', id: '@serg8087', name: 'serega', status: 'active' },
      { platform: 'Telegram', id: '1604222277', name: 'Основной', status: 'active' },
      { platform: 'Telegram', id: '1896244800', name: 'Дополнительный', status: 'hidden' }
    ],
    datingPlatforms: [
      { platform: 'Mamba', url: 'mamba.ru/anketa.phtml?oid=826****', registered: '12.04.2023', deleted: '09.06.2025', status: 'deleted' }
    ],
    suspiciousActivities: [
      { type: 'Скрытые группы', description: 'Участие в закрытых сообществах флирта и эскорта', severity: 'high' },
      { type: 'Дополнительный профиль', description: 'Обнаружен скрытый профиль VK с подозрительной активностью', severity: 'high' },
      { type: 'Сайт знакомств', description: 'Удаленная анкета на Mamba.ru с 2 фотографиями', severity: 'medium' },
      { type: 'Ночные контакты', description: 'Активное общение в ночное время с незнакомыми людьми', severity: 'medium' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="tech-gradient p-2 rounded-lg">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-dark-slate">VERNOST PRO</h1>
                <p className="text-sm text-steel-gray">Профессиональная проверка на верность</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['Главная', 'Услуги', 'Примеры', 'Цены', 'Гарантии', 'Контакты'].map((item) => (
                <a key={item} href="#" className="text-steel-gray hover:text-tech-blue transition-colors font-medium">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-slate mb-6 animate-fade-in">
              Получите полный и профессиональный 
              <span className="text-tech-blue"> результат проверки</span> на верность!
            </h1>
            <p className="text-xl text-steel-gray mb-8 animate-fade-in max-w-3xl mx-auto">
              Мы тщательно собираем и изучаем информацию из множества источников, чтобы предоставить 
              самый полный и точный отчет о верности вашего партнера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Dialog open={showReport} onOpenChange={setShowReport}>
                <DialogTrigger asChild>
                  <Button size="lg" className="tech-gradient text-white hover:shadow-xl transition-all duration-300 animate-pulse-glow">
                    <Icon name="FileSearch" size={20} className="mr-2" />
                    Посмотреть пример отчета
                  </Button>
                </DialogTrigger>
                <ReportDialog reportData={reportData} />
              </Dialog>
              <Button size="lg" variant="outline" className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-slate mb-12">Что включает наша проверка</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-dark-slate">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-steel-gray text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-blue-50 border-tech-blue border-2 shadow-xl">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Badge className="bg-alert-red text-white px-4 py-2 text-sm">АКЦИЯ СЕГОДНЯ</Badge>
                </div>
                <CardTitle className="text-3xl text-dark-slate">Полная проверка на верность</CardTitle>
                <CardDescription className="text-lg text-steel-gray">
                  Комплексный анализ цифровой активности
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-3xl font-light text-steel-gray line-through">1 999 ₽</span>
                  <span className="text-5xl font-bold text-tech-blue">999 ₽</span>
                </div>
                <p className="text-warning-orange font-semibold">
                  Скидка 50% по промокоду "VERNOST111" действует только сегодня!
                </p>
                <Button 
                  size="lg" 
                  className="w-full tech-gradient text-white hover:shadow-xl transition-all duration-300 text-lg py-6"
                  onClick={() => window.open('https://t.me/VernostProService_bot', '_blank')}
                >
                  <Icon name="MessageCircle" size={24} className="mr-3" />
                  Начать проверку
                </Button>
                <div className="text-sm text-steel-gray">
                  <p>Есть вопросы? Получите бесплатную консультацию</p>
                  <Button 
                    variant="link" 
                    className="text-tech-blue p-0 h-auto"
                    onClick={() => window.open('https://t.me/VernostService', '_blank')}
                  >
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-xl font-semibold">Политика конфиденциальности и обеспечения анонимности</h3>
            <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
              <p>
                Уведомляем что наши проверки направлены на улучшение и восстановление отношений, 
                для лучшего понимания друг друга.
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

// Report Dialog Component
const ReportDialog = ({ reportData }: { reportData: any }) => {
  return (
    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex items-center space-x-3 mb-4">
          <div className="tech-gradient p-2 rounded-lg">
            <Icon name="FileText" size={24} className="text-white" />
          </div>
          <div>
            <DialogTitle className="text-2xl text-dark-slate">БЛАНК ОТЧЕТА № 25-0183</DialogTitle>
            <DialogDescription className="text-steel-gray">
              Дата проверки: 21.01.2025 | E-mail заказчика: pavel000***@mail.ru
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Сводка</TabsTrigger>
          <TabsTrigger value="social">Соц. сети</TabsTrigger>
          <TabsTrigger value="analysis">Анализ</TabsTrigger>
          <TabsTrigger value="risks">Риски</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <Card className="report-section">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Icon name="User" size={20} className="mr-2 text-tech-blue" />
                Общая информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><strong>ФИО:</strong> {reportData.personalInfo.name}</p>
                  <p><strong>Дата рождения:</strong> {reportData.personalInfo.birthDate}</p>
                  <p><strong>Возраст:</strong> {reportData.personalInfo.age}</p>
                  <p><strong>Телефон:</strong> {reportData.personalInfo.phone}</p>
                  <p><strong>Дополнительный номер:</strong> {reportData.personalInfo.additionalPhone}</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Регион:</strong> {reportData.personalInfo.region}</p>
                  <p><strong>Адрес регистрации:</strong> {reportData.personalInfo.registrationAddress}</p>
                  <p><strong>Фактический адрес:</strong> {reportData.personalInfo.actualAddress}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="report-section">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2 text-tech-blue" />
                Статистика цифровой активности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-tech-blue">5</div>
                  <div className="text-sm text-steel-gray">Соц. сетей</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-warning-orange">2</div>
                  <div className="text-sm text-steel-gray">Скрытые профили</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-alert-red">1</div>
                  <div className="text-sm text-steel-gray">Сайт знакомств</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-data-green">24</div>
                  <div className="text-sm text-steel-gray">Контактов</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card className="report-section">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Icon name="Users" size={20} className="mr-2 text-tech-blue" />
                Найденные социальные сети и мессенджеры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {reportData.socialNetworks.map((network: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" size={16} className="text-tech-blue" />
                      <div>
                        <span className="font-medium">{network.platform}</span>
                        <span className="text-steel-gray ml-2">{network.id}</span>
                      </div>
                      <span className="text-sm text-steel-gray">({network.name})</span>
                    </div>
                    <Badge 
                      className={network.status === 'hidden' ? 'status-alert' : 'status-active'}
                    >
                      {network.status === 'hidden' ? 'Скрытый' : 'Активный'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card className="report-section">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-alert-red">
                <Icon name="AlertTriangle" size={20} className="mr-2" />
                ВАЖНО: Обнаружен дополнительный скрытый профиль VK
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 border-l-4 border-alert-red p-4 rounded">
                <p className="font-semibold text-alert-red">Основание для анализа:</p>
                <p className="text-sm text-gray-700 mt-2">
                  В ходе поиска дополнительных профилей и аккаунтов в социальных сетях второй половины заказчика, 
                  был найден аккаунт ВК, в котором выявлены совпадения в цифровых параметрах учетных записей и устройств.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Совпадающие параметры:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Синхронизированный почтовый адрес</li>
                    <li>✓ Цифровые параметры устройства</li>
                    <li>✓ Идентичность MAC-адреса</li>
                    <li>✓ DNS-адрес и IP-адрес</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Активность профиля:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 18 друзей (2 совпадают с основным)</li>
                    <li>• 24 сообщества (4 совпадают)</li>
                    <li>• Последняя активность: 21.08.2025</li>
                    <li>• Периодичность: несколько раз в месяц</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <Card className="report-section">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-alert-red">
                <Icon name="ShieldAlert" size={20} className="mr-2" />
                Выявленные подозрительные активности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportData.suspiciousActivities.map((activity: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white border rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.severity === 'high' ? 'bg-alert-red' : 
                      activity.severity === 'medium' ? 'bg-warning-orange' : 'bg-yellow-400'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-slate">{activity.type}</h4>
                      <p className="text-steel-gray text-sm mt-1">{activity.description}</p>
                    </div>
                    <Badge className={activity.severity === 'high' ? 'status-alert' : 'status-warning'}>
                      {activity.severity === 'high' ? 'Высокий риск' : 'Средний риск'}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-alert-red mb-2 flex items-center">
                  <Icon name="AlertCircle" size={16} className="mr-2" />
                  Общая оценка риска
                </h4>
                <Progress value={75} className="mb-2" />
                <p className="text-sm text-red-700">
                  <strong>75% - Высокий уровень подозрительной активности</strong>
                </p>
                <p className="text-xs text-red-600 mt-2">
                  Рекомендуется дополнительная проверка и открытый разговор с партнером.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

export default Index;