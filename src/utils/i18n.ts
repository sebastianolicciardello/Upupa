export type Language = 'en' | 'it';

export const languages: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  it: { name: 'Italiano', flag: '🇮🇹' }
};

export const defaultLanguage: Language = 'en';

export function detectLanguageFromUrl(url: string): Language {
  // Check localStorage first for saved preference
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('language-preference');
    if (saved && saved !== 'manual' && (saved === 'it' || saved === 'en')) {
      return saved as Language;
    }
  }
  
  // Check browser language for first visit
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('it')) {
      return 'it';
    }
  }
  
  return 'en';
}

export function getLanguageFromSlug(slug: string): Language {
  if (slug.startsWith('it/')) return 'it';
  if (slug.startsWith('en/')) return 'en';
  return defaultLanguage;
}

export function removeLanguageFromSlug(slug: string): string {
  if (slug.startsWith('it/')) return slug.slice(3);
  if (slug.startsWith('en/')) return slug.slice(3);
  return slug;
}

export function addLanguageToPath(path: string, lang: Language): string {
  if (lang === defaultLanguage) return path;
  return `/${lang}${path}`;
}

export const translations = {
  en: {
    // Brand & Navigation
    'brand.name': 'Upupa',
    'brand.tagline': 'Horizon & Journal',
    'nav.home': 'Home',
    'nav.horizon': 'Horizon',
    'nav.journal': 'Journal',
    'nav.archive': 'Archive',
    'nav.about': 'About',
    'page.title': 'Upupa · Horizon & Journal',
    'footer.copyright': '2025-2026 - upupa.life - All rights reserved.',
    'footer.tagline': 'Between horizons to reach and moments to remember.',

    // Homepage Dual Hero
    'home.hero.title': 'Upupa',
    'home.hero.subtitle': 'Two Dimensions, One Journey',
    'home.hero.description': 'A digital haven balanced between future directions and lived reflections. Explore what lies ahead in Horizon, or wander through settled memories in Journal.',
    
    // Horizon Section Card on Home
    'home.horizon.badge': 'Direction & Vision',
    'home.horizon.title': 'Horizon',
    'home.horizon.subtitle': 'Looking Forward',
    'home.horizon.description': 'Paths, ambitions, creative projects, and the next milestones. Horizon is the gaze toward tomorrow, mapped with intention and openness to the unknown.',
    'home.horizon.cta': 'Explore Horizon',
    
    // Journal Section Card on Home
    'home.journal.badge': 'Reflections & Stories',
    'home.journal.title': 'Journal',
    'home.journal.subtitle': 'Moments Lived & Reflected',
    'home.journal.description': 'A timeless reflective journal. Thoughts, places, and encounters shared not in haste, but only after time has allowed them to settle and reveal their meaning.',
    'home.journal.cta': 'Enter Journal',
    'home.journal.recentTitle': 'Latest Reflections from Journal',

    // Horizon Dedicated Page
    'horizon.page.title': 'Horizon · Upupa',
    'horizon.hero.title': 'Horizon',
    'horizon.hero.subtitle': 'Visions, Roads & What Comes Next',
    'horizon.hero.description': 'Horizon is the space dedicated to looking forward. While the Journal preserves the echoes of the past, Horizon charts the trajectories, creative aspirations, and expeditions of tomorrow.',
    'horizon.pillar1.title': 'Explorations & Routes',
    'horizon.pillar1.desc': 'New geographies, slow travels, and nomadic trajectories waiting to be mapped.',
    'horizon.pillar2.title': 'Projects & Creation',
    'horizon.pillar2.desc': 'Digital crafts, writing, ideas in progress, and creative ventures.',
    'horizon.pillar3.title': 'Life Philosophy',
    'horizon.pillar3.desc': 'Intentional living, sustainable nomadism, and conscious evolution.',
    'horizon.cta.journal': 'Read the Journal reflections',

    // Journal Dedicated Page
    'journal.page.title': 'Journal · Reflective Journal',
    'hero.title': 'Journal',
    'hero.description': `Moments don't ask to be shared while they're happening.

They ask to be lived: fully, quietly, truthfully.

This journal exists to hold the echoes of those moments, once they've settled into meaning.

It is a space for reflections that surface not in real-time, but in real depth.

Here, I share stories, places, and thoughts after time has allowed them to take root.`,
    
    // Blog / Archive
    'blog.title': 'Journal Archive',
    'blog.subtitle': 'All thoughts, travels, and moments collected through time.',
    'blog.description': 'All thoughts, travels, and moments collected through time.',
    'blog.empty': 'No reflections found',
    'blog.readMore': 'Read more',
    'blog.sort.newest': 'Sorted: Newest First',
    'blog.sort.oldest': 'Sorted: Oldest First',
    'blog.sort.switchTo.newest': 'Switch to Newest First',
    'blog.sort.switchTo.oldest': 'Switch to Oldest First',

    // Post & Guide
    'posts.recent': 'Recent Reflections',
    'posts.viewAll': 'View all posts',
    'posts.readingGuide.title': 'First Time Here?',
    'posts.readingGuide.description': 'These posts are connected by a logical, emotional, and historical flow. For the best experience, start from the oldest posts and read chronologically to follow the journey as it unfolded.',
    'posts.readingGuide.dismiss': 'Got it!',

    // Discover & About
    'discover.title': 'Discover More',
    'discover.description': 'Explore the journey through stories and reflections.',
    'discover.about': 'About Me',
    'about.title': 'About Me',
    'connect.title': 'Connect',
    'connect.telegram': 'Telegram',
    'connect.channel': 'Channel',
    'connect.instagram': 'Instagram',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
  },
  it: {
    // Brand & Navigation
    'brand.name': 'Upupa',
    'brand.tagline': 'Horizon & Journal',
    'nav.home': 'Home',
    'nav.horizon': 'Horizon',
    'nav.journal': 'Journal',
    'nav.archive': 'Archivio',
    'nav.about': 'Chi Sono',
    'page.title': 'Upupa · Horizon & Journal',
    'footer.copyright': '2025-2026 - upupa.life - Tutti i diritti riservati.',
    'footer.tagline': 'Tra orizzonti da raggiungere e momenti da ricordare.',

    // Homepage Dual Hero
    'home.hero.title': 'Upupa',
    'home.hero.subtitle': 'Due Dimensioni, Un Solo Cammino',
    'home.hero.description': 'Uno spazio digitale sospeso tra direzioni future e riflessioni vissute. Esplora le visioni del domani in Horizon, o lasciati accompagnare dalle memorie sedimentate di Journal.',
    
    // Horizon Section Card on Home
    'home.horizon.badge': 'Direzione & Visione',
    'home.horizon.title': 'Horizon',
    'home.horizon.subtitle': 'Verso il Futuro',
    'home.horizon.description': 'Rotte, ambizioni, progetti creativi e le prossime tappe. Horizon è lo sguardo puntato su ciò che viene, tracciato con consapevolezza e apertura all\'inatteso.',
    'home.horizon.cta': 'Scopri Horizon',
    
    // Journal Section Card on Home
    'home.journal.badge': 'Riflessioni & Storie',
    'home.journal.title': 'Journal',
    'home.journal.subtitle': 'Momenti Vissuti e Sedimentati',
    'home.journal.description': 'Un diario riflessivo senza tempo. Pensieri, luoghi e incontri condivisi non nella fretta, ma solo quando il tempo ha permesso loro di depositarsi e rivelare il loro senso.',
    'home.journal.cta': 'Entra in Journal',
    'home.journal.recentTitle': 'Ultime Riflessioni dal Journal',

    // Horizon Dedicated Page
    'horizon.page.title': 'Horizon · Upupa',
    'horizon.hero.title': 'Horizon',
    'horizon.hero.subtitle': 'Visioni, Rotte & Il Prossimo Passo',
    'horizon.hero.description': 'Horizon è lo spazio dedicato allo sguardo in avanti. Se il Journal custodisce l\'eco del vissuto, Horizon traccia le traiettorie, le aspirazioni creative e le spedizioni del domani.',
    'horizon.pillar1.title': 'Esplorazioni & Rotte',
    'horizon.pillar1.desc': 'Nuove geografie, viaggi lenti e traiettorie nomadiche pronte per essere disegnate.',
    'horizon.pillar2.title': 'Progetti & Creazione',
    'horizon.pillar2.desc': 'Artigianato digitale, scrittura, idee in fermento e percorsi creativi.',
    'horizon.pillar3.title': 'Filosofia di Vita',
    'horizon.pillar3.desc': 'Vivere intenzionale, nomadismo sostenibile ed evoluzione personale.',
    'horizon.cta.journal': 'Leggi le riflessioni del Journal',

    // Journal Dedicated Page
    'journal.page.title': 'Journal · Diario Riflessivo',
    'hero.title': 'Journal',
    'hero.description': `I momenti non chiedono di essere condivisi subito.

Chiedono di essere vissuti: davvero, fino in fondo, senza fretta.

Questo diario nasce per raccogliere le esperienze quando si sono sedimentate, quando diventano storie, comprensioni, emozioni che restano.

È un luogo per riflessioni lente, nate dal viaggio, ma condivise solo quando hanno trovato la loro forma.`,
    
    // Blog / Archive
    'blog.title': 'Archivio di Journal',
    'blog.subtitle': 'Tutti i pensieri, viaggi e momenti raccolti nel tempo.',
    'blog.description': 'Tutti i pensieri, viaggi e momenti raccolti nel tempo.',
    'blog.empty': 'Nessuna riflessione trovata',
    'blog.readMore': 'Leggi di più',
    'blog.sort.newest': 'Ordinamento: Più Recenti',
    'blog.sort.oldest': 'Ordinamento: Più Vecchi',
    'blog.sort.switchTo.newest': 'Passa a Più Recenti',
    'blog.sort.switchTo.oldest': 'Passa a Più Vecchi',

    // Post & Guide
    'posts.recent': 'Riflessioni Recenti',
    'posts.viewAll': 'Visualizza tutti i post',
    'posts.readingGuide.title': 'Prima Volta Qui?',
    'posts.readingGuide.description': 'Questi post sono collegati tra loro con un flusso logico, emozionale e storico. Per la migliore esperienza, inizia dai post più vecchi e leggi in ordine cronologico per seguire il viaggio come si è svolto.',
    'posts.readingGuide.dismiss': 'Tutto chiaro!',

    // Discover & About
    'discover.title': 'Scopri di Più',
    'discover.description': 'Esplora il viaggio attraverso storie e riflessioni.',
    'discover.about': 'Chi Sono',
    'about.title': 'Chi Sono',
    'connect.title': 'Contatti',
    'connect.telegram': 'Telegram',
    'connect.channel': 'Canale',
    'connect.instagram': 'Instagram',
    'settings.language': 'Lingua',
    'settings.theme': 'Tema',
  }
} as const;

export type TranslationKey = keyof typeof translations.en;

export function t(key: TranslationKey | string, lang: Language = defaultLanguage): string {
  const dict = translations[lang] as Record<string, string>;
  const fallbackDict = translations[defaultLanguage] as Record<string, string>;
  return dict[key] || fallbackDict[key] || key;
}

export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === 'en' ? 'it' : 'en';
}

export function switchLanguageInUrl(url: string, newLang: Language): string {
  return url;
}

export function getCurrentLanguage(): Language {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('language-preference');
    if (saved && (saved === 'it' || saved === 'en')) {
      return saved as Language;
    }
  }
  
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('it')) {
      return 'it';
    }
  }
  
  return 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language-preference', lang);
  }
}
