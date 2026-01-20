import { Calculator, Gavel, ShieldCheck, Trophy, Zap, FileSearch, LineChart, Coins, Banknote } from 'lucide-react';
import { Step } from '../types';

export const journey4: Step[] = [
  {
    id: 1,
    title: "Flex-beräkning",
    icon: Calculator,
    category: 'Analys',
    description: "Det första BSP gör är att räkna på Kims batteri: 'Hur mycket kan vi dra ner imorgon jämfört med det vanliga mönstret (Baseline)?'. BSP har tillgång till all nödvändig information i FIS som baselinemetoden kräver, exempelvis den framförliggande mätpunktens historiska mätvärden.",
    technical: "BSP beräknar flexibilitetsmöjligheten i FIS baserat på den valda Baseline-metoden och tillgänglig mätdata."
  },
  {
    id: 2,
    title: "Budet läggs",
    icon: Gavel,
    category: 'Marknad',
    description: "BSP bakar ihop Kims kapacitet med andras i en Service Providing Group (SPG) och lägger ett stort bud för hela gruppen till Svenska kraftnät (TSO). Det är på SPG-nivån som den kommersiella budgivningen sker.",
    technical: "Aggregerat bud för SPGn skickas till TSO. TSO vidarebefordrar därefter detta till FIS för teknisk kontroll."
  },
  {
    id: 3,
    title: "FIS Validerar",
    icon: ShieldCheck,
    category: 'Validering',
    description: "FIS agerar dörrvakt. Innehåller SPGn tillräckligt med resurser som tillsammans kan leverera det som lovats i budet? Finns det dessutom några tillfälliga nätbegränsningar i området?",
    technical: "FIS validerar budet mot SPGns ingående resurser, deras tekniska kapacitet och aktuella nätbegränsningar."
  },
  {
    id: 4,
    title: "Budet vinner",
    icon: Trophy,
    category: 'Marknad',
    description: "Grönt ljus! Budet var giltigt och hade bäst pris. TSO accepterar och BSP får en order.",
    technical: "TSO tar emot valideringsresultatet från FIS, accepterar budet och notifierar BSP om vinst."
  },
  {
    id: 5,
    title: "Aktivering",
    icon: Zap,
    category: 'Drift',
    description: "BSP styr Kims batteri automatiskt vid den avtalade tidpunkten.",
    technical: "Själva styrningen utförs av BSP:s egna styrsystem och sker helt utanför de gemensamma plattformarna."
  },
  {
    id: 6,
    title: "Verifiering (Fas 1)",
    icon: FileSearch,
    category: 'Verifiering',
    description: "När nätägaren rapporterat in mätvärdena till DHV, räknar FIS ut hur mycket batteriet faktiskt hjälpte till, baserat på baseline-metoden.",
    technical: "FIS utför verifieringen (Fas 1) mot Baseline baserat på mätvärden hämtade från DHV. Verifierad volym skickas därefter till BSP."
  },
  {
    id: 7,
    title: "Info till BRP",
    icon: LineChart,
    category: 'Distribution',
    description: "FIS meddelar BRP hur mycket energi som flyttades, så att de kan justera sina prognoser för framtiden.",
    technical: "FIS beräknar och skickar volym for obalansjustering till BRP (för neutralisering och spårbarhet)."
  },
  {
    id: 8,
    title: "Info till Elleverantör",
    icon: LineChart,
    category: 'Distribution',
    description: "FIS meddelar även Elleverantören om de flyttade volymerna. Detta ligger till grund för den ekonomiska kompensationen mellan parterna.",
    technical: "FIS beräknar och skickar volym för kompensationsunderlag till Elleverantören."
  },
  {
    id: 9,
    title: "Avräkning",
    icon: Coins,
    category: 'Ekonomi',
    description: "Cirkeln sluts. DHV använder obalansjusteringen för nätavräkningen.",
    technical: "DHV rapporterar avräkningsresultatet inklusive obalansjusteringen till eSett."
  },
  {
    id: 10,
    title: "Ersättning till BSP",
    icon: Banknote,
    category: 'Ekonomi',
    description: "Arbetet lönar sig. TSO betalar ut ersättning till BSP för den nytta som resursen gjort för kraftsystemet.",
    technical: "TSO utför utbetalning till BSP baserat på den verifierade aktiverade flexibilitetsvolymen."
  },
  {
    id: 11,
    title: "Kompensation till Leverantör",
    icon: Banknote,
    category: 'Ekonomi',
    description: "Balans i ekonomin. TSO kompenserar Elleverantören för de uteblivna intäkterna till följd av den aktiverade flexibiliteten.",
    technical: "TSO betalar ut kompensation till elleverantören baserad på den verifierade aktiverade flexibilitetsvolymen."
  }
];
