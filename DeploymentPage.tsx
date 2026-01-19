
import React, { useState } from 'react';

// --- Types & Data ---

type ItemType = 'Process' | 'Information';
type SystemType = 'DHV' | 'FIS';

interface RoadmapItem {
  id: string;
  name: string;
  type: ItemType;
  system: SystemType;
  description?: string;
}

interface Impact {
  actor: string;
  removed: string[];
  added: string[];
}

interface Phase {
  id: string;
  title: string;
  subtitle: string;
  status: 'Critical' | 'Planned' | 'Vision';
  dhvRationale?: string;
  fisRationale?: string;
  impacts?: Impact[];
  impactNote?: string;
  items: RoadmapItem[];
}

const roadmapData: Phase[] = [
  {
    id: 'phase1',
    title: 'Fas 1: Marknadsetablering (MVP)',
    subtitle: 'Kritisk funktionalitet för Go-Live. Fokus på att möjliggöra handel och avräkning.',
    status: 'Critical',
    dhvRationale: "För DHV innebär MVP att ansvaret för nätavräkningen flyttas från nätägarna till DHV. För att möjliggöra detta krävs att korrekt strukturdata, mätvärden och leveransstruktur finns på plats. Denna initiala information etableras genom migrering innan driftsättning, varvid DHV blir master för informationen. Därefter måste marknadsprocesser utföras via DHV för att hålla informationen aktuell och säkerställa en korrekt avräkning. Implementeringen av Mina Sidor är dessutom strategiskt viktig redan i MVP för att ersätta dagens manuella fullmaktshantering med digitala samtycken.",
    fisRationale: "För FIS handlar MVP om att etablera den grundläggande infrastrukturen för flexibilitetsmarknaden. Det är kritiskt att kunna registrera Service Providers (SP) och deras resurser (CU), samt upprätta flexibilitetsavtal. Dessutom krävs förmågan att beräkna baseline baserat på mätpunktsmätvärden för att kunna verifiera aktiveringar och möjliggöra ekonomisk reglering. Då NC DR stipulerar ett fullständigt flexibilitetsregister är de flesta funktioner inkluderade redan i FIS MVP.",
    impacts: [
        {
            actor: "Nätägare (DSO)",
            removed: [
                "Utförande av nätavräkning (flyttas till DHV)",
                "Manuell hantering av fullmakter",
                "Hantering av samtycke för energitjänsteföretag via egna Mina Sidor",
                "Validering av leverantörsbyten",
                "Distribution av mätvärden till flera marknadsaktörer"
            ],
            added: [
                "Registrering av nätavtal",
                "Rapportering av mätvärden till en mottagare (DHV)",
                "Registrering av mätpunktsinformation i DHV",
                "Hantera nätförkvalicieringar",
                "Registrera nätbegränsningar i FIS"
            ]
        },
        {
            actor: "Datahub-operatör (DHV/System)",
            removed: [
                "Ingen (Ny central roll)"
            ],
            added: [
                "Utförande av aggregerad nätavräkning",
                "Hantering av leverantörsbyten & flytt",
                "Validering och lagring av masterdata & mätvärden",
                "Distribution av information till marknadsaktörer",
                "Tillhandahållande av 'Mina Sidor' och samtyckeshantering",
                "Registrera baseline metoder",
                "Beräkna baseline för CU",
                "Validera flexibilitetsaktiveringar",
                "Distribuera information för obalansjustering",
                "Distribuera information för elleverantörskompensation"
            ]
        },
        {
            actor: "Service Provider (SP) / BSP",
            removed: [],
            added: [
                "Registrera CU",
                "Strukturera SPU/SPG",
                "Produktkvalificering",
                "Registrera flexibilitetsavtal",
                "Välja baseline för CU"
            ]
        },
        {
            actor: "Elleverantör",
            removed: [
                "Hantering av ej standardiserade fullmakter"
            ],
            added: [
                "Digitala standardiserade samtycken via DHV"
            ]
        }
    ],
    impactNote: "Notera: För övriga processer (t.ex. leverantörsbyte eller hämtning av mätvärden för elleverantör) ändras primärt mottagaren/källan från Nätägare till DHV. Processens affärssyfte består.",
    items: [
      // DHV Processer
      { id: 'p1_1', name: 'Mätpunktshantering', type: 'Process', system: 'DHV', description: 'Registrering och uppdatering av mätpunkter (MP)' },
      { id: 'p1_2', name: 'Mätvärdeshantering (MP)', type: 'Process', system: 'DHV', description: 'Insamling och validering av mätvärden från nätägare' },
      { id: 'p1_dhv_switch', name: 'Leverantörsbyten & flytt', type: 'Process', system: 'DHV', description: 'Hantering av in/utflytt och byte av elleverantör' },
      { id: 'p1_dhv_contract', name: 'Nätavtalshantering', type: 'Process', system: 'DHV', description: 'Registrering av nätavtal (Grid Contract)' },
      { id: 'p1_3', name: 'Nätavräkning (aggregerad)', type: 'Process', system: 'DHV', description: 'Aggregering av energivolymer för balansavräkning' },
      { id: 'p1_4', name: 'Nättariffer', type: 'Process', system: 'DHV', description: 'Registrering och distribution av tariffer' },
      { id: 'p1_dhv_consent', name: 'Mina Sidor - Samtycke', type: 'Process', system: 'DHV', description: 'Samtycke till energitjänsteföretag och inför leverantörsbyten' },
      
      // DHV Informationsobjekt (Master Data)
      { id: 'i1_1', name: 'Aktörsregister', type: 'Information', system: 'DHV', description: 'Register över marknadens aktörer' },
      { id: 'i1_dhv_area', name: 'Områdesdefinitioner', type: 'Information', system: 'DHV', description: 'Nätområden och Elområden' },
      { id: 'i1_dhv_mp', name: 'Mätpunkter', type: 'Information', system: 'DHV', description: 'Teknisk anläggningsdata' },
      { id: 'i1_dhv_mv', name: 'Mätvärden', type: 'Information', system: 'DHV', description: 'Tidsserier för energi och effekt' },
      { id: 'i1_dhv_grid_contract', name: 'Nätavtal', type: 'Information', system: 'DHV', description: 'Avtal mellan nätägare och kund' },
      { id: 'i1_dhv_supply_contract', name: 'Elhandelsavtal', type: 'Information', system: 'DHV', description: 'Leveransavtal mellan leverantör och kund' },
      { id: 'i1_dhv_consent_obj', name: 'Samtycken', type: 'Information', system: 'DHV', description: 'Digitala godkännanden för datadelning och representation' },
      { id: 'i1_2', name: 'Leveransstruktur', type: 'Information', system: 'DHV', description: 'Koppling: Kund -> Ellev -> BRP -> Anläggning' },
      
      // FIS Processer (Flex)
      { id: 'p1_5', name: 'Aktörskvalificering', type: 'Process', system: 'FIS', description: 'Finansiell och juridisk kvalificering av SP' },
      { id: 'p1_6', name: 'Resursregistrering (CU)', type: 'Process', system: 'FIS', description: 'Registrering av tekniska resurser' },
      { id: 'p1_fis_contract', name: 'Hantera flexibilitetsavtal', type: 'Process', system: 'FIS', description: 'Registrering av avtal mellan SP och resursägare' },
      { id: 'p1_7', name: 'Produktkvalificering', type: 'Process', system: 'FIS', description: 'Admin, nät och teknisk kvalificering' },
      { id: 'p1_8', name: 'Nätbegränsningar', type: 'Process', system: 'FIS', description: 'DSO registrerar begränsningar (Congestion)' },
      { id: 'p1_9', name: 'Baseline (MP)', type: 'Process', system: 'FIS', description: 'Beräkning baserad på mätpunktsmätvärden' },
      { id: 'p1_11', name: 'Ekonomisk reglering', type: 'Process', system: 'FIS', description: 'Underlag för obalans och kompensation' },
      
      // FIS Informationsobjekt
      { id: 'i1_fis_cu', name: 'CU-resurser', type: 'Information', system: 'FIS', description: 'Registrering och uppdatering av flexibilitetsresurser (CU)' },
      { id: 'i1_fis_actor', name: 'Aktörsregister', type: 'Information', system: 'FIS', description: 'SP och BSP' },
      { id: 'i1_fis_baseline', name: 'Baseline', type: 'Information', system: 'FIS', description: 'Referenskurvor och metoder för verifiering' },
      { id: 'i1_3', name: 'Flexibilitetsavtal', type: 'Information', system: 'FIS', description: 'Avtalsrelation mellan SP och resurs' },
      { id: 'i1_4', name: 'Aggregering (SPU/SPG)', type: 'Information', system: 'FIS', description: 'Gruppering av resurser (teknisk/marknad)' }
    ]
  },
  {
    id: 'phase2',
    title: 'Fas 2: Expansion & precision',
    subtitle: 'Utökad funktionalitet för undermätning och nya marknadsmodeller.',
    status: 'Planned',
    impacts: [
        {
            actor: "Service Provider (SP) / BSP",
            removed: [],
            added: [
                "Registrera undermätare",
                "Rapportering av CU-mätvärden"
            ]
        },
        {
            actor: "Datahub-operatör (DHV)",
            removed: [],
            added: [
                "Nätavräkningens komplexitet ökar",
                "Automatiskt koppla eller ta bort mätpunkter i planobjekt"
            ]
        },
        {
            actor: "Balansansvarig (BRP)",
            removed: [
                "Strukturera planobjekt hos eSett"
            ],
            added: [
                "Möjligt att omstrukturera planobjekt - vilka mätpunkter som ingår planobjekt"
            ]
        },
        {
            actor: "SCB (Statistiska centralbyrån)",
            removed: [],
            added: [
                "En motpart att samla in statistik ifrån"
            ]
        },
        {
            actor: "Nätägare (DSO)",
            removed: [
                "Del eller all statistikrapportering"
            ],
            added: []
        },
        {
            actor: "Elleverantör",
            removed: [
                "Del eller all statistikrapportering"
            ],
            added: []
        }
    ],
    items: [
      // DHV Processer
      { id: 'p2_dhv_comm', name: 'Energigemenskapshantering', type: 'Process', system: 'DHV', description: 'Hantering av energigemenskaper' },
      { id: 'p2_dhv_share', name: 'Energidelningshantering', type: 'Process', system: 'DHV', description: 'Hantering av energidelning' },
      { id: 'p2_dhv_settle', name: 'Uppdaterad nätavräkning', type: 'Process', system: 'DHV', description: 'För att hantera gemenskaper och delning' },
      { id: 'p2_dhv_plan', name: 'Planobjektshantering', type: 'Process', system: 'DHV', description: 'Relation mellan mätpunkter och BRPs planobjekt' },
      { id: 'p2_dhv_stat', name: 'Statistikunderlag', type: 'Process', system: 'DHV', description: 'Framtagande och distribution av statistik' },

      // DHV Information
      { id: 'i2_dhv_comm', name: 'Energigemenskaper', type: 'Information', system: 'DHV', description: 'Definition av gemenskap och medlemmar' },
      { id: 'i2_dhv_share', name: 'Energidelning', type: 'Information', system: 'DHV', description: 'Regler och fördelningsnycklar' },
      { id: 'i2_1', name: 'Planobjekt', type: 'Information', system: 'DHV', description: 'Strukturdata för balansansvar' },
      { id: 'i1_dhv_cust', name: 'Kundinformation', type: 'Information', system: 'DHV', description: 'Utökad kunddata' },

      // FIS Processer
      { id: 'p2_fis_measure', name: 'Mätvärdeshantering för CU', type: 'Process', system: 'FIS', description: 'Hantering av mätvärden på resursnivå' },
      { id: 'p2_fis_base', name: 'Baseline CU', type: 'Process', system: 'FIS', description: 'Beräkning av baseline på resursnivå' },
      { id: 'p2_fis_eco', name: 'Ekonomisk reglering', type: 'Process', system: 'FIS', description: 'Baserad på CU (Undermätning)' },
      
      // FIS Information
      { id: 'i2_fis_values', name: 'Mätvärden CU', type: 'Information', system: 'FIS', description: 'Detaljerade mätserier för resurser' },
      { id: 'i2_2', name: 'Undermätare & IDn', type: 'Information', system: 'FIS', description: 'Teknisk identifiering av sub-meters' }
    ]
  },
  {
    id: 'phase3',
    title: 'Fas 3: Marknadsöppning & ärendehantering',
    subtitle: 'Öppnar upp elmarknaden genom leverantörsbyten inom IKN och avancerad ärendehantering.',
    status: 'Vision',
    impacts: [
        {
            actor: "Nätägare (DSO)",
            removed: [
                "Bekräftelse till kund vid levbyte"
            ],
            added: []
        },
        {
            actor: "Datahub-operatör (DHV)",
            removed: [],
            added: [
                "Nätavräkningens komplexitet ökar",
                "Bekräftelse till kund vid levbyte",
                "Hantering av leverantörsbyten & flytt inom IKN"
            ]
        },
        {
            actor: "IKN-ombud",
            removed: [],
            added: [
                "Registrera mätpunkter inom IKN",
                "Rapporterar mätvärden inom IKN"
            ]
        }
    ],
    items: [
      // DHV Processer (Byte & IKN)
      { id: 'p3_1', name: 'Leverantörsbyte för CU', type: 'Process', system: 'DHV', description: 'Byta aggregator/leverantör för en teknisk resurs' },
      { id: 'p3_ikn_mp', name: 'Mätpunktshantering inom IKN', type: 'Process', system: 'DHV', description: 'Registrering och administration av mätpunkter i interna nät' },
      { id: 'p3_ikn_switch', name: 'Leverantörsbyte inom IKN', type: 'Process', system: 'DHV', description: 'Byte av leverantör för mätpunkter i interna nät' },
      { id: 'p3_cust_conf', name: 'Bekräftelse till kund vid byte', type: 'Process', system: 'DHV', description: 'DHV skickar bekräftelse direkt till slutkund' },
      
      // DHV Processer (Avräkning & Ärende)
      { id: 'p3_ikn_settle', name: 'Nätavräkning (IKN)', type: 'Process', system: 'DHV', description: 'Uppdaterad avräkning för att hantera interna nät' },
      { id: 'p3_4', name: 'Avancerad ärendehantering', type: 'Process', system: 'DHV', description: 'Integrerad tvist/frågehantering' },
      
      // DHV Information
      { id: 'i3_ikn_mp', name: 'Mätpunkter inom IKN', type: 'Information', system: 'DHV', description: 'Strukturdata för punkter i interna nät' },
      { id: 'i3_cases', name: 'Ärenden', type: 'Information', system: 'DHV', description: 'Ärendeobjekt för kommunikation' }
    ]
  }
];

// --- Styling ---

const theme = {
  colors: {
    phase1: { primary: '#0052cc', bg: '#DEEBFF', border: '#B3D4FF' }, // Deep Blue
    phase2: { primary: '#008DA6', bg: '#E6FCFF', border: '#B3F5FF' }, // Cyan/Teal
    phase3: { primary: '#6554C0', bg: '#EAE6FF', border: '#C0B6F2' }, // Visionary Purple
    dhv: '#42526e', // Slate
    fis: '#006644', // Green
    process: '#0052cc',
    information: '#FF991F',
    bg: '#f4f5f7',
    white: '#ffffff',
    text: '#172b4d',
    textLight: '#5e6c84'
  }
};

const styles = {
  container: {
    padding: '40px 60px',
    backgroundColor: '#fff',
    minHeight: '100%',
    boxSizing: 'border-box' as const,
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  headerContainer: {
    marginBottom: '48px',
    borderBottom: '2px solid #ebecf0',
    paddingBottom: '24px'
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '12px',
    color: theme.colors.text,
    letterSpacing: '-0.5px'
  },
  subHeader: {
    fontSize: '1.2rem',
    color: theme.colors.textLight,
    lineHeight: '1.6',
    maxWidth: '800px'
  },
  roadmapContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '32px',
    position: 'relative' as const
  },
  // Connecting line
  roadmapLine: {
    position: 'absolute' as const,
    top: '24px',
    bottom: '24px',
    left: '24px',
    width: '4px',
    backgroundColor: '#ebecf0',
    zIndex: 0
  },
  phaseCard: {
    backgroundColor: theme.colors.white,
    borderRadius: '12px',
    border: '1px solid #dfe1e6',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    position: 'relative' as const,
    zIndex: 1,
    transition: 'all 0.3s ease'
  },
  phaseHeader: {
    padding: '24px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    transition: 'background-color 0.2s'
  },
  phaseHeaderExpanded: {
    borderBottom: '1px solid #ebecf0',
    backgroundColor: '#fafbfc'
  },
  phaseTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  phaseIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#fff',
    flexShrink: 0
  },
  phaseTitleText: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px'
  },
  phaseTitle: {
    fontSize: '1.4rem',
    fontWeight: 700,
    color: theme.colors.text,
    margin: 0
  },
  phaseSubtitle: {
    fontSize: '0.95rem',
    color: theme.colors.textLight,
    margin: 0
  },
  expandIcon: {
    fontSize: '1.2rem',
    color: theme.colors.textLight,
    transition: 'transform 0.3s'
  },
  contentContainer: {
    padding: '32px',
    backgroundColor: '#fff'
  },
  rationaleContainer: {
    display: 'flex',
    gap: '24px',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '2px dashed #ebecf0'
  },
  rationaleBox: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    padding: '16px 20px',
    borderRadius: '6px',
    borderLeft: '4px solid #42526e'
  },
  rationaleHeader: {
    fontWeight: 700,
    marginBottom: '8px',
    fontSize: '0.9rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  rationaleText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: theme.colors.text
  },
  // Impact Styles
  impactSection: {
    marginTop: '0px',
    marginBottom: '32px',
    backgroundColor: '#fff',
    border: '1px solid #dfe1e6',
    borderRadius: '6px',
    padding: '20px'
  },
  impactTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#172b4d',
    borderBottom: '1px solid #ebecf0',
    paddingBottom: '8px'
  },
  impactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px'
  },
  impactColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px'
  },
  impactHeader: {
    fontSize: '0.85rem',
    textTransform: 'uppercase' as const,
    fontWeight: 700,
    marginBottom: '4px'
  },
  impactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '0.9rem',
    color: '#172b4d',
    lineHeight: '1.5',
    padding: '4px 0'
  },
  impactIconMinus: {
    color: '#bf2600',
    fontWeight: 700,
    flexShrink: 0
  },
  impactIconPlus: {
    color: '#006644',
    fontWeight: 700,
    flexShrink: 0
  },
  impactNote: {
      marginTop: '16px',
      fontSize: '0.85rem',
      fontStyle: 'italic',
      color: '#5e6c84',
      backgroundColor: '#f4f5f7',
      padding: '8px 12px',
      borderRadius: '4px'
  },
  splitLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1px 1fr',
    gap: '32px',
    alignItems: 'start'
  },
  divider: {
    height: '100%',
    backgroundColor: '#ebecf0'
  },
  systemColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px'
  },
  systemHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
    paddingBottom: '12px',
    borderBottom: '2px solid #ebecf0'
  },
  systemIcon: {
    fontSize: '1.5rem'
  },
  systemTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: theme.colors.text
  },
  itemGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px'
  },
  itemCard: {
    backgroundColor: '#fff',
    border: '1px solid #ebecf0',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
    transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    cursor: 'default'
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '4px'
  },
  itemName: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: theme.colors.text,
    lineHeight: '1.4'
  },
  itemDesc: {
    fontSize: '0.85rem',
    color: theme.colors.textLight,
    lineHeight: '1.5'
  },
  badge: {
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.7rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
  },
  badgeProcess: {
    backgroundColor: '#DEEBFF',
    color: '#0052CC',
    border: '1px solid #B3D4FF'
  },
  badgeInfo: {
    backgroundColor: '#FFF0B3',
    color: '#172B4D',
    border: '1px solid #FFC400'
  }
};

const getPhaseColor = (status: string) => {
  switch (status) {
    case 'Critical': return theme.colors.phase1;
    case 'Planned': return theme.colors.phase2;
    default: return theme.colors.phase3;
  }
};

const ItemCard: React.FC<{ item: RoadmapItem }> = ({ item }) => (
  <div 
    style={styles.itemCard}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.08)';
        e.currentTarget.style.borderColor = '#b3d4ff';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.03)';
        e.currentTarget.style.borderColor = '#ebecf0';
    }}
  >
    <div style={styles.itemHeader}>
      <span style={item.type === 'Process' ? styles.badgeProcess : styles.badgeInfo}>
        {item.type === 'Information' ? 'Informationsobjekt' : 'Process'}
      </span>
      {/* Optional: Add a system tag here if needed, but context is clear from column */}
    </div>
    <div style={styles.itemName}>{item.name}</div>
    {item.description && (
      <div style={styles.itemDesc}>{item.description}</div>
    )}
  </div>
);

export const DeploymentPage: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<string>('phase1');

  const togglePhase = (id: string) => {
    setExpandedPhase(prev => prev === id ? '' : id);
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Driftsättning & roadmap</h1>
        <p style={styles.subHeader}>
          En strukturerad färdplan för implementering av Datahub och Flexibilitetsregister. 
          Fokus ligger på att säkra kritisk funktionalitet (MVP) för marknadsetablering innan expansion.
        </p>
      </div>

      <div style={styles.roadmapContainer}>
        <div style={styles.roadmapLine} />
        
        {roadmapData.map((phase) => {
          const isExpanded = expandedPhase === phase.id;
          const colors = getPhaseColor(phase.status);
          
          const dhvItems = phase.items.filter(i => i.system === 'DHV');
          const fisItems = phase.items.filter(i => i.system === 'FIS');

          return (
            <div key={phase.id} style={{
                ...styles.phaseCard,
                borderLeft: `6px solid ${colors.primary}`
            }}>
              {/* Header */}
              <div 
                style={{
                    ...styles.phaseHeader,
                    ...(isExpanded ? styles.phaseHeaderExpanded : {})
                }}
                onClick={() => togglePhase(phase.id)}
              >
                <div style={styles.phaseTitleGroup}>
                  <div style={{...styles.phaseIcon, backgroundColor: colors.primary}}>
                    {phase.status === 'Critical' ? '1' : phase.status === 'Planned' ? '2' : '3'}
                  </div>
                  <div style={styles.phaseTitleText}>
                    <h2 style={{...styles.phaseTitle, color: colors.primary}}>{phase.title}</h2>
                    <p style={styles.phaseSubtitle}>{phase.subtitle}</p>
                  </div>
                </div>
                <div style={{
                    ...styles.expandIcon,
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </div>
              </div>

              {/* Content */}
              {isExpanded && (
                <div style={styles.contentContainer}>
                    
                    {/* Rationale Section */}
                    {(phase.dhvRationale || phase.fisRationale) && (
                        <div style={styles.rationaleContainer}>
                            {phase.dhvRationale && (
                                <div style={styles.rationaleBox}>
                                    <div style={{...styles.rationaleHeader, color: theme.colors.dhv}}>
                                        <span>💾</span>
                                        DHV Strategisk Betydelse
                                    </div>
                                    <p style={styles.rationaleText}>{phase.dhvRationale}</p>
                                </div>
                            )}
                            {phase.fisRationale && (
                                <div style={{...styles.rationaleBox, borderLeftColor: theme.colors.fis}}>
                                    <div style={{...styles.rationaleHeader, color: theme.colors.fis}}>
                                        <span>⚡</span>
                                        FIS Strategisk Betydelse
                                    </div>
                                    <p style={styles.rationaleText}>{phase.fisRationale}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Stakeholder Impact (If present) */}
                    {phase.impacts && (
                        <div style={styles.impactSection}>
                            <div style={styles.impactTitle}>Aktörspåverkan</div>
                            {phase.impacts.map((impact, i) => (
                                <div key={i} style={{marginBottom: '24px'}}>
                                    <h4 style={{marginTop: 0, marginBottom: '12px', color: '#0052cc'}}>{impact.actor}</h4>
                                    <div style={styles.impactGrid}>
                                        <div style={styles.impactColumn}>
                                            <div style={{...styles.impactHeader, color: '#bf2600'}}>Försvinner / Avlastas</div>
                                            {impact.removed.map((rem, ri) => (
                                                <div key={ri} style={styles.impactItem}>
                                                    <span style={styles.impactIconMinus}>➖</span>
                                                    <span>{rem}</span>
                                                </div>
                                            ))}
                                            {impact.removed.length === 0 && <span style={{fontSize:'0.85rem', color:'#888', fontStyle:'italic'}}>Inga punkter</span>}
                                        </div>
                                        <div style={styles.impactColumn}>
                                            <div style={{...styles.impactHeader, color: '#006644'}}>Tillkommer / Nytt</div>
                                            {impact.added.map((add, ai) => (
                                                <div key={ai} style={styles.impactItem}>
                                                    <span style={styles.impactIconPlus}>➕</span>
                                                    <span>{add}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {phase.impactNote && (
                                <div style={styles.impactNote}>{phase.impactNote}</div>
                            )}
                        </div>
                    )}

                    <div style={styles.splitLayout}>
                        
                        {/* DHV Column */}
                        <div style={styles.systemColumn}>
                            <div style={styles.systemHeader}>
                                <span style={styles.systemIcon}>💾</span>
                                <span style={styles.systemTitle}>Datahub (DHV)</span>
                            </div>
                            <div style={styles.itemGrid}>
                                {dhvItems.map(item => <ItemCard key={item.id} item={item} />)}
                                {dhvItems.length === 0 && <div style={{fontStyle:'italic', color:'#aaa'}}>Inga punkter i denna fas.</div>}
                            </div>
                        </div>

                        <div style={styles.divider} />

                        {/* FIS Column */}
                        <div style={styles.systemColumn}>
                            <div style={styles.systemHeader}>
                                <span style={styles.systemIcon}>⚡</span>
                                <span style={styles.systemTitle}>Flexibilitetsregister (FIS)</span>
                            </div>
                            <div style={styles.itemGrid}>
                                {fisItems.map(item => <ItemCard key={item.id} item={item} />)}
                                {fisItems.length === 0 && <div style={{fontStyle:'italic', color:'#aaa'}}>Inga punkter i denna fas.</div>}
                            </div>
                        </div>

                    </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
