
export type ViewMode = 'general' | 'welcome' | 'dhvWelcome' | 'timeline' | 'deployment' | 'todo' | 'dhvDomain1' | 'dhvDomain2' | 'dhvDomain6' | 'dhvDomain7' | 'dhvDomain9' | 'detail' | 'mps' | 'status' | 'domainLanding' | 'brsOverview' | 'mpsOverview' | 'actorOverview' | 'globalActorOverview' | 'domainOverview' | 'conditions' | 'procedures' | 'renumbering' | 'infoModel' | 'procedureDetail';

export const overviewMenuItems = [
    { id: 'welcome', label: 'ℹ️ Om FIS', view: 'welcome' as ViewMode },
    { id: 'domainOverview', label: '🌐 Domänöversikt', view: 'domainOverview' as ViewMode },
    { id: 'globalActorOverview', label: '👥 Aktörsmatris', view: 'globalActorOverview' as ViewMode },
    { id: 'infoModel', label: '📘 Informationsmodell', view: 'infoModel' as ViewMode },
    { id: 'procedures', label: '📜 JWG Processer', view: 'procedures' as ViewMode },
];

export const dhvOverviewMenuItems = [
    { id: 'dhvWelcome', label: 'ℹ️ Om DHV', view: 'dhvWelcome' as ViewMode },
];

export const adminMenuItems = [
    { id: 'status', label: '📊 Status Dashboard', view: 'status' as ViewMode },
    { id: 'renumbering', label: '🔢 ID Omnumrering', view: 'renumbering' as ViewMode },
];
