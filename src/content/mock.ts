import {
  ALL_CATEGORIES,
  MORE_CATEGORIES,
  PRIMARY_CATEGORIES,
  type Category,
  type CategorySlug,
  type Circuit,
  type Driver,
  type NewsArticle,
  type RaceEvent,
  type RaceResult,
  type SearchHit,
  type StandingRow,
  type Team,
} from './types'

export const categories: Category[] = [...ALL_CATEGORIES]

export const primaryCategories = [...PRIMARY_CATEGORIES]
export const moreCategories = [...MORE_CATEGORIES]

export const articles: NewsArticle[] = [
  {
    slug: 'analise-estrategia-pneus-espanha',
    title: 'Análise: estratégia de pneus no GP da Espanha',
    excerpt:
      'Como as equipes equilibraram degradação e ritmo nas retas de Barcelona e o que isso indica para a próxima etapa.',
    body: [
      'A Pirelli levou a Barcelona os compostos médio e duro como opções principais de corrida, com o macio restrito à classificação.',
      'As equipes que alongaram o primeiro stint no médio ganharam pista limpa na janela de undercut, mas pagaram ritmo nas voltas finais.',
      'Fonte consultada: briefing técnico das equipes e tempos oficiais de sessão (conteúdo de demonstração do portal).',
    ],
    category: 'f1',
    publishedAt: '2026-05-23T18:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: true,
    imageLabel: 'GP da Espanha',
  },
  {
    slug: 'verstappen-domina-treino-final',
    title: 'Verstappen lidera o treino final em Mônaco',
    excerpt:
      'O holandês cravou a melhor marca do TL3 nas ruas do Principado, à frente de Norris e Leclerc.',
    body: [
      'Max Verstappen foi o mais rápido no último treino livre do GP de Mônaco, com vantagem de pouco mais de um décimo.',
      'Leclerc, em casa, ficou próximo no setor 2, mas perdeu tempo na subida até Massenet.',
      'Os tempos são ilustrativos para o protótipo do portal e não substituem a cronometragem oficial.',
    ],
    category: 'f1',
    publishedAt: '2026-05-24T12:30:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: false,
    imageLabel: 'Mônaco TL3',
  },
  {
    slug: 'lemans-hypercar-equilibrio',
    title: 'WEC: Hypercars chegam a Le Mans com equilíbrio apertado',
    excerpt:
      'A 24 Horas de Le Mans reúne fabricantes com diferenças mínimas de ritmo após o último ajuste de BoP.',
    body: [
      'O Balance of Performance da semana de Le Mans deixou Toyota, Ferrari, Porsche e Cadillac separados por menos de um segundo em média de stint.',
      'A noite e o tráfego de GT continuam sendo as variáveis que mais separam uma estratégia vencedora de um abandono.',
    ],
    category: 'wec',
    publishedAt: '2026-06-10T09:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: true,
    imageLabel: 'Le Mans',
  },
  {
    slug: 'indy-500-grid-definido',
    title: 'Grid das 500 Milhas de Indianápolis definido',
    excerpt:
      'A classificação em Indianapolis Motor Speedway definiu as 33 vagas para o dia da corrida.',
    body: [
      'A pole das 500 Milhas ficou com um ritmo acima de 232 mph de média nas quatro voltas lançadas.',
      'Equipes menores avançaram no Last Chance, reforçando o caráter aberto do oval de 2,5 milhas.',
    ],
    category: 'indy',
    publishedAt: '2026-05-19T16:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: false,
    imageLabel: 'Indy 500',
  },
  {
    slug: 'stock-car-interlagos-sprint',
    title: 'Stock Car aquece Interlagos com sprint no sábado',
    excerpt:
      'A etapa paulista mistura classificação curta e corrida sprint antes da prova principal de domingo.',
    body: [
      'A Stock Car Pro Series volta a Interlagos com formato de sprint no sábado, válido para a soma da etapa.',
      'O asfalto renovado da reta oposta deve favorecer ultrapassagens na descida do S do Senna.',
    ],
    category: 'stock-car',
    publishedAt: '2026-04-12T11:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: false,
    imageLabel: 'Interlagos',
  },
  {
    slug: 'gt3-spa-24h-preview',
    title: 'GT3: 24 Horas de Spa reúne o grid mais cheio da temporada',
    excerpt:
      'Mais de 60 carros devem alinhar na Eau Rouge para a clássica belga do GT World Challenge.',
    body: [
      'Spa-Francorchamps recebe o maior grid GT3 do ano, com Mercedes, BMW, Porsche, Lamborghini e Ferrari no mesmo BoP.',
      'A meteorologia das Ardenas continua sendo o fator que mais embaralha estratégias de pneus.',
    ],
    category: 'gt3',
    publishedAt: '2026-06-25T08:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: false,
    imageLabel: 'Spa',
  },
  {
    slug: 'iracing-atualizacao-pneus',
    title: 'iRacing atualiza modelo de pneus em ovais curtos',
    excerpt:
      'A build da semana ajusta degradação e temperatura em pistas abaixo de uma milha.',
    body: [
      'A atualização concentra-se em ovais curtos, com aquecimento mais progressivo no pneu direito.',
      'Ligas oficiais da temporada devem adotar o build a partir da próxima rodada.',
    ],
    category: 'sim-racing',
    publishedAt: '2026-03-04T15:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: false,
    imageLabel: 'Sim racing',
  },
  {
    slug: 'formula-e-gen3-sao-paulo',
    title: 'Fórmula E confirma ePrix de São Paulo no calendário',
    excerpt:
      'O circuito urbano paulistano permanece no calendário da temporada com o pacote Gen3.',
    body: [
      'São Paulo segue no calendário da Fórmula E, com o mesmo traçado do Sambódromo e da região do Anhembi.',
      'O ataque e o modo de recarga nas voltas finais continuam definindo a ordem de chegada.',
    ],
    category: 'formula-e',
    publishedAt: '2026-02-18T10:00:00-03:00',
    source: 'Push & Pass (demonstração)',
    featured: false,
    imageLabel: 'São Paulo ePrix',
  },
]

export const drivers: Driver[] = [
  {
    slug: 'max-verstappen',
    name: 'Max Verstappen',
    shortName: 'M. Verstappen',
    number: 1,
    teamSlug: 'red-bull-racing',
    category: 'f1',
    nationality: 'Países Baixos',
    countryCode: 'NL',
    birthDate: '1997-09-30',
    hometown: 'Hasselt',
    bio: [
      'Max Verstappen estreou na Fórmula 1 ainda na adolescência e se consolidou como referência de ritmo em classificação e corrida.',
      'No recorte de demonstração do portal, o holandês aparece como líder da temporada fictícia, com títulos recentes destacados na ficha.',
    ],
    stats: { races: 184, wins: 58, podiums: 61, points: 2281 },
    titles: [2021, 2022, 2023],
  },
  {
    slug: 'lewis-hamilton',
    name: 'Lewis Hamilton',
    shortName: 'L. Hamilton',
    number: 44,
    teamSlug: 'ferrari',
    category: 'f1',
    nationality: 'Reino Unido',
    countryCode: 'GB',
    birthDate: '1985-01-07',
    hometown: 'Stevenage',
    bio: [
      'Lewis Hamilton é um dos pilotos com mais vitórias na história da categoria e segue na briga pelos pontos de construtores.',
    ],
    stats: { races: 340, wins: 103, podiums: 197, points: 4500 },
    titles: [2008, 2014, 2015, 2017, 2018, 2019, 2020],
  },
  {
    slug: 'charles-leclerc',
    name: 'Charles Leclerc',
    shortName: 'C. Leclerc',
    number: 16,
    teamSlug: 'ferrari',
    category: 'f1',
    nationality: 'Mônaco',
    countryCode: 'MC',
    birthDate: '1997-10-16',
    hometown: 'Monte Carlo',
    bio: [
      'Leclerc combina classificação agressiva com consistência crescente em ritmo de corrida, especialmente em circuitos de rua.',
    ],
    stats: { races: 140, wins: 8, podiums: 35, points: 1204 },
    titles: [],
  },
  {
    slug: 'lando-norris',
    name: 'Lando Norris',
    shortName: 'L. Norris',
    number: 4,
    teamSlug: 'mclaren',
    category: 'f1',
    nationality: 'Reino Unido',
    countryCode: 'GB',
    birthDate: '1999-11-13',
    hometown: 'Bristol',
    bio: [
      'Norris consolidou-se como um dos referências da McLaren, com regularidade nos pontos e ritmo de ponta em treinos.',
    ],
    stats: { races: 118, wins: 4, podiums: 26, points: 896 },
    titles: [],
  },
  {
    slug: 'fernando-alonso',
    name: 'Fernando Alonso',
    shortName: 'F. Alonso',
    number: 14,
    teamSlug: 'aston-martin',
    category: 'f1',
    nationality: 'Espanha',
    countryCode: 'ES',
    birthDate: '1981-07-29',
    hometown: 'Oviedo',
    bio: [
      'Bicampeão mundial, Alonso segue competitivo e aparece com frequência entre os dez primeiros neste recorte de demonstração.',
    ],
    stats: { races: 380, wins: 32, podiums: 106, points: 2200 },
    titles: [2005, 2006],
  },
  {
    slug: 'seb-buemi',
    name: 'Sébastien Buemi',
    shortName: 'S. Buemi',
    number: 8,
    teamSlug: 'toyota-gazoo',
    category: 'wec',
    nationality: 'Suíça',
    countryCode: 'CH',
    birthDate: '1988-10-31',
    hometown: 'Aigle',
    bio: [
      'Buemi acumula títulos no WEC e continua como um dos nomes mais constantes da Toyota em endurance.',
    ],
    stats: { races: 90, wins: 24, podiums: 48, points: 1102 },
    titles: [2014, 2018, 2019, 2022],
  },
  {
    slug: 'alex-palou',
    name: 'Álex Palou',
    shortName: 'A. Palou',
    number: 10,
    teamSlug: 'chip-ganassi',
    category: 'indy',
    nationality: 'Espanha',
    countryCode: 'ES',
    birthDate: '1997-04-01',
    hometown: 'Sant Antoni de Vilamajor',
    bio: [
      'Palou é um dos referências atuais da IndyCar, com regularidade em ovais e circuitos mistos.',
    ],
    stats: { races: 72, wins: 10, podiums: 28, points: 1840 },
    titles: [2021, 2023],
  },
  {
    slug: 'gabriel-casagrande',
    name: 'Gabriel Casagrande',
    shortName: 'G. Casagrande',
    number: 83,
    teamSlug: 'amc-stock',
    category: 'stock-car',
    nationality: 'Brasil',
    countryCode: 'BR',
    birthDate: '1994-01-20',
    hometown: 'Curitiba',
    bio: [
      'Casagrande é um dos nomes mais vitoriosos da Stock Car recente e figura entre os líderes deste mock.',
    ],
    stats: { races: 120, wins: 18, podiums: 40, points: 980 },
    titles: [2021, 2022],
  },
]

export const teams: Team[] = [
  {
    slug: 'red-bull-racing',
    name: 'Red Bull Racing',
    category: 'f1',
    base: 'Milton Keynes, Inglaterra',
    summary: 'Equipe campeã recente no recorte de demonstração, com ênfase em eficiência aerodinâmica.',
    driverSlugs: ['max-verstappen'],
  },
  {
    slug: 'ferrari',
    name: 'Scuderia Ferrari',
    category: 'f1',
    base: 'Maranello, Itália',
    summary: 'A mais antiga equipe do grid, com Hamilton e Leclerc no recorte atual do portal.',
    driverSlugs: ['lewis-hamilton', 'charles-leclerc'],
  },
  {
    slug: 'mclaren',
    name: 'McLaren',
    category: 'f1',
    base: 'Woking, Inglaterra',
    summary: 'McLaren aparece com ritmo de ponta em vários circuitos deste conjunto de dados.',
    driverSlugs: ['lando-norris'],
  },
  {
    slug: 'aston-martin',
    name: 'Aston Martin',
    category: 'f1',
    base: 'Silverstone, Inglaterra',
    summary: 'Time de Fernando Alonso no mock da temporada.',
    driverSlugs: ['fernando-alonso'],
  },
  {
    slug: 'toyota-gazoo',
    name: 'Toyota Gazoo Racing',
    category: 'wec',
    base: 'Colônia, Alemanha',
    summary: 'Referência de Hypercar no WEC, com programa estável em Le Mans.',
    driverSlugs: ['seb-buemi'],
  },
  {
    slug: 'chip-ganassi',
    name: 'Chip Ganassi Racing',
    category: 'indy',
    base: 'Indianápolis, EUA',
    summary: 'Uma das estruturas mais vitoriosas da IndyCar.',
    driverSlugs: ['alex-palou'],
  },
  {
    slug: 'amc-stock',
    name: 'AMC Motorsport',
    category: 'stock-car',
    base: 'Curitiba, Brasil',
    summary: 'Equipe ilustrativa da Stock Car para o protótipo.',
    driverSlugs: ['gabriel-casagrande'],
  },
]

export const events: RaceEvent[] = [
  {
    slug: 'gp-monaco',
    name: 'GP de Mônaco',
    circuitName: 'Circuit de Monaco',
    city: 'Monte Carlo',
    country: 'Mônaco',
    countryCode: 'MC',
    category: 'f1',
    startDate: '2026-05-22',
    endDate: '2026-05-25',
    sessions: [
      { kind: 'TL1', startsAt: '2026-05-23T09:30:00-03:00' },
      { kind: 'TL2', startsAt: '2026-05-23T13:00:00-03:00' },
      { kind: 'TL3', startsAt: '2026-05-24T08:30:00-03:00' },
      { kind: 'Classificação', startsAt: '2026-05-24T12:00:00-03:00' },
      { kind: 'Corrida', startsAt: '2026-05-25T10:00:00-03:00' },
    ],
    broadcasters: [{ name: 'Band' }, { name: 'F1TV' }],
    imageLabel: 'Mônaco',
  },
  {
    slug: 'gp-canada',
    name: 'GP do Canadá',
    circuitName: 'Circuit Gilles Villeneuve',
    city: 'Montreal',
    country: 'Canadá',
    countryCode: 'CA',
    category: 'f1',
    startDate: '2026-06-05',
    endDate: '2026-06-08',
    sessions: [
      { kind: 'TL1', startsAt: '2026-06-06T13:30:00-03:00' },
      { kind: 'TL2', startsAt: '2026-06-06T17:00:00-03:00' },
      { kind: 'TL3', startsAt: '2026-06-07T12:30:00-03:00' },
      { kind: 'Classificação', startsAt: '2026-06-07T16:00:00-03:00' },
      { kind: 'Corrida', startsAt: '2026-06-08T15:00:00-03:00' },
    ],
    broadcasters: [{ name: 'Band' }, { name: 'F1TV' }],
    imageLabel: 'Montreal',
  },
  {
    slug: 'gp-espanha',
    name: 'GP da Espanha',
    circuitName: 'Circuit de Barcelona-Catalunya',
    city: 'Montmeló',
    country: 'Espanha',
    countryCode: 'ES',
    category: 'f1',
    startDate: '2026-05-21',
    endDate: '2026-05-23',
    sessions: [
      { kind: 'TL1', startsAt: '2026-05-21T08:30:00-03:00' },
      { kind: 'TL2', startsAt: '2026-05-21T12:00:00-03:00' },
      { kind: 'Classificação', startsAt: '2026-05-22T11:00:00-03:00' },
      { kind: 'Corrida', startsAt: '2026-05-23T10:00:00-03:00' },
    ],
    broadcasters: [{ name: 'Band' }, { name: 'F1TV' }],
    imageLabel: 'Barcelona',
  },
  {
    slug: '24h-le-mans',
    name: '24 Horas de Le Mans',
    circuitName: 'Circuit de la Sarthe',
    city: 'Le Mans',
    country: 'França',
    countryCode: 'FR',
    category: 'wec',
    startDate: '2026-06-13',
    endDate: '2026-06-14',
    sessions: [{ kind: 'Corrida', startsAt: '2026-06-13T11:00:00-03:00' }],
    broadcasters: [{ name: 'ESPN' }, { name: 'F1TV' }],
    imageLabel: 'Le Mans',
  },
  {
    slug: 'indy-500',
    name: '500 Milhas de Indianápolis',
    circuitName: 'Indianapolis Motor Speedway',
    city: 'Indianápolis',
    country: 'EUA',
    countryCode: 'US',
    category: 'indy',
    startDate: '2026-05-24',
    endDate: '2026-05-24',
    sessions: [{ kind: 'Corrida', startsAt: '2026-05-24T13:00:00-03:00' }],
    broadcasters: [{ name: 'Star+' }, { name: 'ESPN' }],
    imageLabel: 'Indianápolis',
  },
  {
    slug: 'stock-interlagos',
    name: 'Stock Car — Interlagos',
    circuitName: 'Autódromo de Interlagos',
    city: 'São Paulo',
    country: 'Brasil',
    countryCode: 'BR',
    category: 'stock-car',
    startDate: '2026-04-11',
    endDate: '2026-04-12',
    sessions: [
      { kind: 'Classificação', startsAt: '2026-04-11T11:00:00-03:00' },
      { kind: 'Corrida', startsAt: '2026-04-12T12:00:00-03:00' },
    ],
    broadcasters: [{ name: 'Band' }],
    imageLabel: 'Interlagos',
  },
  {
    slug: 'spa-24h',
    name: '24 Horas de Spa',
    circuitName: 'Spa-Francorchamps',
    city: 'Stavelot',
    country: 'Bélgica',
    countryCode: 'BE',
    category: 'gt3',
    startDate: '2026-06-27',
    endDate: '2026-06-28',
    sessions: [{ kind: 'Corrida', startsAt: '2026-06-27T12:00:00-03:00' }],
    broadcasters: [{ name: 'YouTube' }],
    imageLabel: 'Spa',
  },
]

export const results: RaceResult[] = [
  {
    eventSlug: 'gp-espanha',
    session: 'Corrida',
    fastestLap: { driverSlug: 'max-verstappen', time: '1:16.711' },
    rows: [
      { position: 1, driverSlug: 'max-verstappen', laps: 66, gap: '1:28:20.104', tires: 'Médio / Duro' },
      { position: 2, driverSlug: 'lando-norris', laps: 66, gap: '+9.578', tires: 'Médio / Duro' },
      { position: 3, driverSlug: 'charles-leclerc', laps: 66, gap: '+16.220', tires: 'Médio / Duro' },
      { position: 4, driverSlug: 'lewis-hamilton', laps: 66, gap: '+21.004', tires: 'Médio / Duro' },
      { position: 5, driverSlug: 'fernando-alonso', laps: 66, gap: '+34.812', tires: 'Duro / Médio' },
    ],
  },
  {
    eventSlug: 'gp-espanha',
    session: 'Classificação',
    fastestLap: { driverSlug: 'max-verstappen', time: '1:11.383' },
    rows: [
      { position: 1, driverSlug: 'max-verstappen', laps: 18, gap: '1:11.383', tires: 'Macio' },
      { position: 2, driverSlug: 'lando-norris', laps: 16, gap: '+0.102', tires: 'Macio' },
      { position: 3, driverSlug: 'charles-leclerc', laps: 17, gap: '+0.188', tires: 'Macio' },
    ],
  },
  {
    eventSlug: 'gp-espanha',
    session: 'TL1',
    fastestLap: { driverSlug: 'charles-leclerc', time: '1:14.002' },
    rows: [
      { position: 1, driverSlug: 'charles-leclerc', laps: 28, gap: '1:14.002', tires: 'Macio' },
      { position: 2, driverSlug: 'max-verstappen', laps: 26, gap: '+0.211', tires: 'Macio' },
      { position: 3, driverSlug: 'lando-norris', laps: 24, gap: '+0.340', tires: 'Médio' },
    ],
  },
  {
    eventSlug: 'gp-espanha',
    session: 'TL2',
    fastestLap: { driverSlug: 'max-verstappen', time: '1:13.540' },
    rows: [
      { position: 1, driverSlug: 'max-verstappen', laps: 32, gap: '1:13.540', tires: 'Macio' },
      { position: 2, driverSlug: 'lando-norris', laps: 30, gap: '+0.090', tires: 'Macio' },
      { position: 3, driverSlug: 'lewis-hamilton', laps: 29, gap: '+0.277', tires: 'Macio' },
    ],
  },
]

export const standings: StandingRow[] = [
  { position: 1, driverSlug: 'max-verstappen', teamSlug: 'red-bull-racing', points: 194 },
  { position: 2, driverSlug: 'lando-norris', teamSlug: 'mclaren', points: 168 },
  { position: 3, driverSlug: 'charles-leclerc', teamSlug: 'ferrari', points: 150 },
  { position: 4, driverSlug: 'lewis-hamilton', teamSlug: 'ferrari', points: 121 },
  { position: 5, driverSlug: 'fernando-alonso', teamSlug: 'aston-martin', points: 68 },
  { position: 6, driverSlug: 'seb-buemi', teamSlug: 'toyota-gazoo', points: 86 },
  { position: 7, driverSlug: 'alex-palou', teamSlug: 'chip-ganassi', points: 312 },
  { position: 8, driverSlug: 'gabriel-casagrande', teamSlug: 'amc-stock', points: 210 },
]

export const circuits: Circuit[] = [
  {
    slug: 'monaco',
    name: 'Circuit de Monaco',
    location: 'Monte Carlo',
    country: 'Mônaco',
    countryCode: 'MC',
    lengthKm: 3.337,
    laps: 78,
    categories: ['f1'],
    summary: 'Traçado urbano estreito, com poucas zonas de ultrapassagem e ênfase em classificação.',
    featured: true,
  },
  {
    slug: 'barcelona-catalunya',
    name: 'Circuit de Barcelona-Catalunya',
    location: 'Montmeló',
    country: 'Espanha',
    countryCode: 'ES',
    lengthKm: 4.657,
    laps: 66,
    categories: ['f1', 'gt3'],
    summary: 'Pista de testes clássica, exigente em equilíbrio aerodinâmico e pneus dianteiros.',
    featured: true,
  },
  {
    slug: 'montreal',
    name: 'Circuit Gilles Villeneuve',
    location: 'Montreal',
    country: 'Canadá',
    countryCode: 'CA',
    lengthKm: 4.361,
    laps: 70,
    categories: ['f1'],
    summary: 'Semicircuito de ilha, com muro próximo e zona de DRS longa na reta dos boxes.',
    featured: false,
  },
  {
    slug: 'le-mans',
    name: 'Circuit de la Sarthe',
    location: 'Le Mans',
    country: 'França',
    countryCode: 'FR',
    lengthKm: 13.626,
    laps: 0,
    categories: ['wec'],
    summary: 'A clássica das 24 Horas combina trechos permanentes e estradas públicas.',
    featured: false,
  },
  {
    slug: 'indianapolis',
    name: 'Indianapolis Motor Speedway',
    location: 'Indianápolis',
    country: 'EUA',
    countryCode: 'US',
    lengthKm: 4.023,
    laps: 200,
    categories: ['indy'],
    summary: 'Oval de 2,5 milhas palco das 500 Milhas, com quatro curvas inclinadas.',
    featured: false,
  },
  {
    slug: 'interlagos',
    name: 'Autódromo José Carlos Pace',
    location: 'São Paulo',
    country: 'Brasil',
    countryCode: 'BR',
    lengthKm: 4.309,
    laps: 71,
    categories: ['f1', 'stock-car'],
    summary: 'S do Senna, Descida do Lago e clima instável: palco tradicional brasileiro.',
    featured: false,
  },
  {
    slug: 'spa',
    name: 'Spa-Francorchamps',
    location: 'Stavelot',
    country: 'Bélgica',
    countryCode: 'BE',
    lengthKm: 7.004,
    laps: 44,
    categories: ['f1', 'wec', 'gt3'],
    summary: 'Eau Rouge e Raidillon definem um dos traçados mais respeitados do mundo.',
    featured: false,
  },
]

const categoryBySlug = new Map(categories.map((item) => [item.slug, item]))
const driverBySlug = new Map(drivers.map((item) => [item.slug, item]))
const teamBySlug = new Map(teams.map((item) => [item.slug, item]))
const articleBySlug = new Map(articles.map((item) => [item.slug, item]))
const eventBySlug = new Map(events.map((item) => [item.slug, item]))
const circuitBySlug = new Map(circuits.map((item) => [item.slug, item]))

function isCategorySlug(value: string): value is CategorySlug {
  return categoryBySlug.has(value as CategorySlug)
}

export const mockContent = {
  listCategories: () => categories,
  listPrimaryCategories: () => primaryCategories,
  listMoreCategories: () => moreCategories,
  getCategory: (slug: string) => (isCategorySlug(slug) ? categoryBySlug.get(slug) : undefined),
  isCategorySlug,
  listArticles: (category?: CategorySlug) =>
    articles
      .filter((item) => (category ? item.category === category : true))
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
  getArticle: (slug: string) => articleBySlug.get(slug),
  listEvents: (category?: CategorySlug) =>
    events
      .filter((item) => (category ? item.category === category : true))
      .sort((a, b) => a.startDate.localeCompare(b.startDate)),
  getEvent: (slug: string) => eventBySlug.get(slug),
  upcomingEvents: (limit = 6) =>
    [...events].sort((a, b) => a.startDate.localeCompare(b.startDate)).slice(0, limit),
  getResult: (eventSlug: string, session: RaceResult['session']) =>
    results.find((item) => item.eventSlug === eventSlug && item.session === session),
  listResultSessions: (eventSlug: string) =>
    results.filter((item) => item.eventSlug === eventSlug).map((item) => item.session),
  listStandings: (category: CategorySlug) =>
    standings.filter((row) => driverBySlug.get(row.driverSlug)?.category === category),
  listDrivers: (category?: CategorySlug) =>
    drivers.filter((item) => (category ? item.category === category : true)),
  getDriver: (slug: string) => driverBySlug.get(slug),
  listTeams: (category?: CategorySlug) =>
    teams.filter((item) => (category ? item.category === category : true)),
  getTeam: (slug: string) => teamBySlug.get(slug),
  listCircuits: (category?: CategorySlug | 'todas') =>
    circuits.filter((item) =>
      !category || category === 'todas' ? true : item.categories.includes(category),
    ),
  getCircuit: (slug: string) => circuitBySlug.get(slug),
  search: (query: string): SearchHit[] => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    const hits: SearchHit[] = []
    for (const article of articles) {
      if (article.title.toLowerCase().includes(q) || article.excerpt.toLowerCase().includes(q)) {
        hits.push({
          kind: 'noticia',
          title: article.title,
          subtitle: categoryBySlug.get(article.category)?.name ?? article.category,
          href: `/${article.category}/noticias/${article.slug}`,
        })
      }
    }
    for (const driver of drivers) {
      if (driver.name.toLowerCase().includes(q) || driver.shortName.toLowerCase().includes(q)) {
        hits.push({
          kind: 'piloto',
          title: driver.name,
          subtitle: teamBySlug.get(driver.teamSlug)?.name ?? driver.category,
          href: `/${driver.category}/pilotos/${driver.slug}`,
        })
      }
    }
    for (const event of events) {
      if (event.name.toLowerCase().includes(q) || event.circuitName.toLowerCase().includes(q)) {
        hits.push({
          kind: 'evento',
          title: event.name,
          subtitle: event.circuitName,
          href: `/${event.category}/calendario`,
        })
      }
    }
    for (const circuit of circuits) {
      if (circuit.name.toLowerCase().includes(q) || circuit.location.toLowerCase().includes(q)) {
        hits.push({
          kind: 'circuito',
          title: circuit.name,
          subtitle: `${circuit.location}, ${circuit.country}`,
          href: `/circuitos/${circuit.slug}`,
        })
      }
    }
    return hits.slice(0, 20)
  },
}
