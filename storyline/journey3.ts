import { BatteryCharging, ClipboardCheck, Network, CheckCircle2, PlayCircle, Medal, Zap, Database } from 'lucide-react';
import { Step } from '../types';

export const journey3: Step[] = [
  {
    id: 1,
    title: "Resursen ansluts",
    icon: BatteryCharging,
    category: 'Onboarding',
    description: "Som en direkt följd av Kims Flexresa registrerar aggregatorn (SP) batteriet som en teknisk resurs i det nationella registret.",
    technical: "Aggregatorn (SP) registrerar en ny 'Controllable Unit' (CU) i FIS och kopplar den till rätt mätpunkt (GSRN) baserat på avtalet i Kims Flexresa."
  },
  {
    id: 2,
    title: "Kvalificeringsstart",
    icon: ClipboardCheck,
    category: 'Ansökan',
    description: "För att få delta på marknaden måste resursen bevisa att den uppfyller kraven för t.ex. stödtjänster. Här anger SP också vilken baseline-metod som ska tillämpas för CUn.",
    technical: "SP skickar in en digital ansökan om produktförkvalificering i FIS. Systemet validerar att alla tekniska data finns med samt att SP har angett vilken baseline-metod som ska gälla för CUn."
  },
  {
    id: 3,
    title: "Nätanalys påbörjas",
    icon: Network,
    category: 'Nätanalys',
    description: "Nätägaren får i uppdrag att göra en analys för att se om batteriet kan aktiveras utan att elnätet överbelastas.",
    technical: "DSO får en notifiering av FIS och utför en Nätförkvalificering (Power flow analys) baserat på resursens nätposition."
  },
  {
    id: 4,
    title: "Nätkollen klar",
    icon: CheckCircle2,
    category: 'Beslut',
    description: "Nätägaren lägger in resultatet av nätkollen i registret. Om det krävs begränsningar för att nätet ska hålla, fastställs dessa nu.",
    technical: "DSO registrerar sitt beslut i FIS. Systemet skickar en notifiering till SP/BSP om resultatet och eventuella villkor."
  },
  {
    id: 5,
    title: "Eldprovet (Test)",
    icon: PlayCircle,
    category: 'Verifiering',
    description: "Nu genomförs ett fysiskt test där batteriet styrs för att se hur snabbt och exakt det reagerar på signaler.",
    technical: "Teknisk förkvalificering: Data från testet skickas till FIS. Systemet verifierar prestandan mot produktkraven."
  },
  {
    id: 6,
    title: "Godkänd & Marknadsredo",
    icon: Medal,
    category: 'Godkännande',
    description: "CU får status 'Qualified' i FIS och inkluderas automatiskt i en Service Providing Group (SPG) för budgivning baserad på sina och mätpunktens tekniska egenskaper. SP/BSP har möjlighet att flytta CU till en annan SPG eller SPU. SP/BSP notifieras om detta och i vilken SPG CU lagts till.",
    technical: "CU får status 'Qualified' i FIS. Systemet placerar CU i en default SPG och skickar en notifiering till SP/BSP med detaljer om placeringen."
  },
  {
    id: 7,
    title: "Budobjektet aktiveras",
    icon: Database,
    category: 'Integration',
    description: "FIS informerar automatiskt Svenska kraftnät (TSO) om den nya SPGn. SPG är likställt med ett budobjekt och TSO får denna information för att kunna registrera det i sitt budmottagningssystem så de kan ta emot framtida bud.",
    technical: "FIS skickar en automatisk notifiering med masterdata för SPGn till TSO:s system för att säkerställa att budgivning kan påbörjas."
  },
  {
    id: 8,
    title: "Budgivning & Drift",
    icon: Zap,
    category: 'Marknad',
    description: "Varje sekund räknas. BSP lägger bud och vid aktivering verifieras leveransen av FIS.",
    technical: "BSP skickar bud till marknadsplatsen. Vid aktivering jämför FIS inkomna mätvärden mot en baseline för att fastställa levererad volym."
  }
];
