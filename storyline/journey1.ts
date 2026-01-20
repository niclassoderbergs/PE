import { Home, Zap, Server, UserCheck, CheckCircle2, Mail, BarChart3, Share2, ArrowRight } from 'lucide-react';
import { Step } from '../types';

export const journey1: Step[] = [
  {
    id: 1,
    title: "Kim flyttar in",
    icon: Home,
    category: 'Flytt',
    description: "Kim ringer nätägaren och tecknar nätavtal for sitt nya hus. En spännande start på det nya boendet!",
    technical: "Nätägarens IT-system registrerar anläggning och avtal. Masterdata skickas därefter automatiskt direkt från IT-systemet till DHV for central lagring."
  },
  {
    id: 2,
    title: "Datahubben lagrar",
    icon: Server,
    category: 'Validering',
    description: "Informationen om att Kim nu bor på adressen sparas säkert och centralt i den nationella hubben.",
    technical: "DHV tar emot, validerar formatet och kopplar personnumret till den unika mätpunkten (GSRN)."
  },
  {
    id: 3,
    title: "Kim väljer elbolag",
    icon: Zap,
    category: 'Avtal',
    description: "Kim ringer en Elleverantör för att köpa el. Konkurrens på marknaden ger Kim bra priser!",
    technical: "Elleverantörens IT-system skickar automatiskt en digital förfrågan till DHV om att starta leverans på mätpunkten."
  },
  {
    id: 4,
    title: "Osynlig kontroll",
    icon: UserCheck,
    category: 'Validering',
    description: "Systemet kollar automatiskt att det är samma Kim som har både nätavtalet och elavtalet.",
    technical: "DHV matchar personnummer i realtid. Automatisk validering förhindrar felaktiga byten."
  },
  {
    id: 5,
    title: "Grönt ljus & Info",
    icon: CheckCircle2,
    category: 'Validering',
    description: "Elbolaget får OK. Nätägaren får automatiskt veta att Kim nu har säkrat sin elförsörjning.",
    technical: "DHV bekräftar till Elleverantör och notifierar Nätägare. Processen sker helt utan manuell handpåläggning."
  },
  {
    id: 6,
    title: "Bekräftelse till Kim",
    icon: Mail,
    category: 'Avtal',
    description: "Nätägaren skickar ut ett lagstadgat brev till Kim som bekräftar att ett leverantörsbyte har skett på adressen.",
    technical: "Efter notifiering från DHV skickar nätägaren ut lagstadgad information om leverantörsbytet till kunden."
  },
  {
    id: 7,
    title: "Vardagen rullar på",
    icon: BarChart3,
    category: 'Vardag',
    description: "Kim använder el för matlagning och värme. Mätvärden samlas in helt automatiskt varje dag.",
    technical: "Nätägarens IT-system mäter -> Skickar rådata till DHV -> DHV validerar och distribuerar till rätt Elleverantör."
  },
  {
    id: 8,
    title: "Kim vill ha koll",
    icon: Share2,
    category: 'Innovation',
    description: "Kim loggar in på DHVs Mina Sidor och vill dela sin data med en smart energiapp för att spara pengar.",
    technical: "Digitalt samtycke/fullmakt skapas i DHV för en tredjepartsaktör (s.k. ESCO)."
  },
  {
    id: 9,
    title: "Smart delning",
    icon: ArrowRight,
    category: 'Innovation',
    description: "Nu får både elbolaget och appen data automatiskt. Kim optimerar sitt hem för framtiden.",
    technical: "DHV distribuerar mätvärden till både Elleverantör och ESCO. En central punkt - many mottagare."
  }
];
