import React from 'react';

interface Props {
  onNavigate: (view: string) => void;
}

const styles = {
  container: {
    padding: '60px 80px',
    backgroundColor: '#fff',
    minHeight: '100%',
    boxSizing: 'border-box' as const,
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '100px'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 800,
    color: '#172b4d',
    marginBottom: '24px',
    letterSpacing: '-1px',
    textAlign: 'center' as const
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#5e6c84',
    marginBottom: '64px',
    textAlign: 'center' as const,
    maxWidth: '800px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px'
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ebecf0',
    borderRadius: '12px',
    padding: '40px 24px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center'
  },
  cardIcon: {
    fontSize: '3.5rem',
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#172b4d',
    marginBottom: '12px'
  },
  cardText: {
    fontSize: '1rem',
    color: '#5e6c84',
    lineHeight: '1.5'
  }
};

export const GeneralWelcomePage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div style={styles.container}>
        <h1 style={styles.title}>Välkommen till Dokumentationen</h1>
        <p style={styles.subtitle}>
          Välj system eller område för att utforska dokumentationen.
        </p>
        
        <div style={styles.grid}>
            {/* 1. Tidslinjer */}
            <div 
                style={styles.card}
                onClick={() => onNavigate('timeline')}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'; }}
            >
                <div style={styles.cardIcon}>📅</div>
                <h2 style={styles.cardTitle}>Tidslinjer</h2>
                <p style={styles.cardText}>Implementering<br/>Historik och Framtid</p>
            </div>

            {/* 2. Driftsättning */}
            <div 
                style={styles.card}
                onClick={() => onNavigate('deployment')}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'; }}
            >
                <div style={styles.cardIcon}>🚀</div>
                <h2 style={styles.cardTitle}>Driftsättning</h2>
                <p style={styles.cardText}>Roadmap och faser<br/>Implementeringsplaner</p>
            </div>

            {/* 3. Att göra */}
            <div 
                style={styles.card}
                onClick={() => onNavigate('todo')}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'; }}
            >
                <div style={styles.cardIcon}>📋</div>
                <h2 style={styles.cardTitle}>Att göra</h2>
                <p style={styles.cardText}>Arbetslista<br/>Utestående punkter</p>
            </div>

            {/* 4. Storyline */}
            <div 
                style={styles.card}
                onClick={() => onNavigate('storyline')}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'; }}
            >
                <div style={styles.cardIcon}>📖</div>
                <h2 style={styles.cardTitle}>Storyline</h2>
                <p style={styles.cardText}>Kims väg genom systemen<br/>Visualiserade kundresor</p>
            </div>

            {/* 5. Datahub */}
            <div 
                style={styles.card}
                onClick={() => onNavigate('dhvWelcome')}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'; }}
            >
                <div style={styles.cardIcon}>💾</div>
                <h2 style={styles.cardTitle}>Datahub</h2>
                <p style={styles.cardText}>Datahanteringsverktyg (DHV)<br/>Mätvärden och avtal</p>
            </div>

            {/* 6. FIS */}
            <div 
                style={styles.card}
                onClick={() => onNavigate('welcome')}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)'; }}
            >
                <div style={styles.cardIcon}>⚡</div>
                <h2 style={styles.cardTitle}>FIS</h2>
                <p style={styles.cardText}>Flexibilitetsregistret<br/>Processer, BRS och MPS</p>
            </div>
        </div>
    </div>
  );
};
