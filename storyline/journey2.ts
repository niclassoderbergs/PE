import { Battery, Cpu, Server, FileText, UserCheck } from 'lucide-react';
import { Step } from '../types';

export const journey2: Step[] = [
  {
    id: 1,
    title: "Kim köper ett batteri",
    icon: Battery,
    category: 'Avtal',
    description: "Kim har köpt ett batteri och kontaktar en flexibilitetsleverantör för att teckna ett flexibilitetsavtal.",
    technical: "Affärshändelsen initieras av slutkunden. Flexibilitetsleverantören och Kim etablerar en kommersiell relation."
  },
  {
    id: 2,
    title: "Registrering i IT-system",
    icon: Cpu,
    category: 'Systemintegration',
    description: "Flexibilitetsleverantören (i rollen som SP/BSP) registrerar batteriet och deras flexibilitetsavtal i sitt IT-system.",
    technical: "Samtidigt skickar IT-systemet automatiskt information om flexibilitetsresursen till FIS."
  },
  {
    id: 3,
    title: "Mätpunktskoll",
    icon: Server,
    category: 'Validering',
    description: "FIS tar emot och validerar att angivet mätpunktsid finns.",
    technical: "Det är det och flexibilitetsaktören får en bekräftelse tillbaka till sitt IT-system."
  },
  {
    id: 4,
    title: "Avtalsdata skickas",
    icon: FileText,
    category: 'Automation',
    description: "Flexibilitetsleverantörens IT-system skickar därefter automatiskt information om flexibilitetsavtalet till FIS.",
    technical: "Systemintegration säkerställer att avtalsdetaljer överförs säkert för central kontroll."
  },
  {
    id: 5,
    title: "Säkrade kopplingar",
    icon: UserCheck,
    category: 'Kontroll',
    description: "FIS tar emot flexibilitetsavtalet och kontrollerar att det är samma kund på nätavtalet för mätpunkten.",
    technical: "Det är det och flexibilitetsleverantören tar emot en bekräftelse att de är flexibilitetsleverantör för resursen."
  }
];
