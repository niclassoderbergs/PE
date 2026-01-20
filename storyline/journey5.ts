import { Truck, FileX, ZapOff, Unplug, Link2Off } from 'lucide-react';
import { Step } from '../types';

export const journey5: Step[] = [
  {
    id: 1,
    title: "Kim ringer nätägaren",
    icon: Truck,
    category: 'Flytt',
    description: "Dags att flytta vidare. Kim ringer nätägaren och meddelar vilket datum hen flyttar ut.",
    technical: "Nätägarens IT-system initierar avslut av nätavtal. Information skickas därefter automatiskt direkt från IT-systemet till DHV för central uppdatering."
  },
  {
    id: 2,
    title: "Datahubben uppdateras",
    icon: FileX,
    category: 'DHV',
    description: "Informationen om att Kim inte längre bor på adressen sparas säkert och centralt i den nationella hubben. DHV bekräftar avslutet direkt till nätägaren.",
    technical: "DHV registrerar slutdatum för nätavtalet och bekräftar därefter transaktionen automatiskt tillbaka till nätägarens IT-system."
  },
  {
    id: 3,
    title: "Elhandeln stoppas",
    icon: ZapOff,
    category: 'DHV',
    description: "Eftersom det inte finns något nätavtal längre, avslutar DHV automatiskt elavtalet. Elleverantören får veta detta direkt.",
    technical: "DHV avslutar automatiskt leveransrelationen (Supply) för mätpunkten och skickar en digital notifiering direkt till Elleverantörens IT-system."
  },
  {
    id: 4,
    title: "Flex-avtalet upphör",
    icon: Unplug,
    category: 'FIS',
    description: "FIS ser också att Kim flyttar. Kims avtal med SP/BSP avslutas automatiskt.",
    technical: "FIS identifierar att aktivt nätavtal saknas och avslutar automatiskt flexibilitetsavtalet. Systemet skickar en notifiering direkt till SP/BSP IT-system."
  },
  {
    id: 5,
    title: "Batteriet kopplas loss",
    icon: Link2Off,
    category: 'FIS',
    description: "Batteriet tas bort från bud-gruppen (SPG). Det kan inte längre användas för handel förrän nästa ägare flyttar in och tecknar ett eget flexibilitetsavtal.",
    technical: "FIS tar automatiskt bort kopplingen mellan Kims resurs (CU) och marknadsportföljen (SPG). SP/BSP informeras via en systemnotifiering."
  }
];
