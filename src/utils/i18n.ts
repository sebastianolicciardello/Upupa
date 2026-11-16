export type Language = 'en' | 'it';

export const languages: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  it: { name: 'Italiano', flag: '🇮🇹' }
};

export const defaultLanguage: Language = 'en';

/**
 * Language from the device/system settings: Italian if any of the user's
 * preferred languages is Italian, English otherwise.
 */
export function getDeviceLanguage(): Language {
  if (typeof navigator !== 'undefined') {
    const deviceLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
    if (deviceLangs.some(l => String(l).toLowerCase().startsWith('it'))) {
      return 'it';
    }
  }

  return defaultLanguage;
}

export function detectLanguageFromUrl(url: string): Language {
  // Check localStorage first for saved preference
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('language-preference');
    if (saved && saved !== 'manual' && (saved === 'it' || saved === 'en')) {
      return saved as Language;
    }
  }
  
  // First visit: follow the device language
  return getDeviceLanguage();
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
    'home.hero.subtitle': 'One World, Two Expressions',
    'home.hero.description': 'Upupa gathers two complementary dimensions of the same world: experiences to live together, and stories to tell once they have settled.',
    
    // Horizon Section Card on Home
    'home.horizon.badge': 'Shared experiences',
    'home.horizon.title': 'Horizon',
    'home.horizon.subtitle': 'Nature, encounters, explorations',
    'home.horizon.description': 'Outings in nature, explorations and days spent together. Horizon creates the occasion to live new experiences, meet people and discover the territory.',
    'home.horizon.cta': 'Discover Horizon',
    
    // Journal Section Card on Home
    'home.journal.badge': 'Stories & reflections',
    'home.journal.title': 'Journal',
    'home.journal.subtitle': 'Things lived and told',
    'home.journal.description': 'Stories, thoughts and personal discoveries published when they have found their moment. Experiences lived, told with the time they need.',
    'home.journal.cta': 'Enter the Journal',
    'home.journal.recentTitle': 'Latest Reflections from the Journal',

    // Horizon Dedicated Page
    'horizon.page.title': 'Upupa Horizon · Nature, explorations and encounters',
    'horizon.page.description': 'Outings, walks and days in nature in Sicily. An informal project to live places and experiences together with other people.',
    'horizon.badge': 'Shared experiences',
    'horizon.hero.title': 'Upupa Horizon',
    'horizon.hero.subtitle': 'Nature, explorations and encounters. An invitation to go out, discover and share.',
    'horizon.hero.description': 'Upupa Horizon comes from the wish to explore, to be in nature and to live experiences together with other people.\n\nIt is not a hiking association, not an agency and not a tour operator. It is a space open to anyone who feels like going out, walking, swimming in a river, watching a sunset or simply spending a few hours in good company.\n\nThe idea is simple: doing things we would do anyway, with the chance to share them.',
    'horizon.pillar1.title': 'What we do',
    'horizon.pillar1.desc': 'Hikes and walks, swims in rivers and in the sea, days at the beach, sunsets, places few people know. Not only trekking: what matters is living the territory, slowly and with curiosity.',
    'horizon.pillar2.title': 'How we live nature',
    'horizon.pillar2.desc': 'No competitions, no performances to achieve. We like to stop, observe, talk a little, take a photo and respect the place we are in. Everyone arrives with their own pace and their own curiosity.',
    'horizon.pillar3.title': 'Who you meet',
    'horizon.pillar3.desc': 'People of different ages, experiences and origins, brought together by the wish to be outside. An inclusive and LGBTQ+ friendly project, where you do not need to know anyone to join and there are no expectations about the relationships that may grow.',
    'horizon.participate.title': 'Join in',
    'horizon.participate.intro': 'Outings are shared mainly through Telegram and Instagram, with place, approximate times, meeting point, difficulty, terrain and suggested equipment. If you are interested, you can write on Telegram; when needed, we organise transport and car sharing together.',
    'horizon.participate.safety': 'Environmental conditions can change and activities may be modified or cancelled: people\'s safety and the care of the places come before the experience itself.\n\nEvery proposal is not a professional service or a paid guided hike. Each participant judges their own preparation and equipment for themselves.',
    'horizon.cta.telegram': 'Write to us on Telegram',
    'horizon.cta.journal': 'Read the Journal',
    'horizon.cta.about': 'Who is behind Upupa',

    // Journal Dedicated Page
    'journal.page.title': 'Journal · Reflective Journal',
    'hero.title': 'Upupa Journal',
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
    'home.hero.subtitle': 'Un mondo, due espressioni',
    'home.hero.description': 'Upupa raccoglie due dimensioni complementari dello stesso mondo: esperienze da vivere insieme e storie da raccontare quando si sono sedimentate.',
    
    // Horizon Section Card on Home
    'home.horizon.badge': 'Esperienze condivise',
    'home.horizon.title': 'Horizon',
    'home.horizon.subtitle': 'Natura, incontri, esplorazioni',
    'home.horizon.description': 'Uscite nella natura, esplorazioni e giornate insieme. Horizon crea occasioni per vivere esperienze nuove, conoscere persone e scoprire il territorio.',
    'home.horizon.cta': 'Scopri Horizon',
    
    // Journal Section Card on Home
    'home.journal.badge': 'Racconti e riflessioni',
    'home.journal.title': 'Journal',
    'home.journal.subtitle': 'Esperienze vissute e raccontate',
    'home.journal.description': 'Storie, pensieri e scoperte personali pubblicate quando hanno trovato il loro momento. Esperienze vissute, raccontate con il tempo che serve.',
    'home.journal.cta': 'Entra nel Journal',
    'home.journal.recentTitle': 'Ultime riflessioni dal Journal',

    // Horizon Dedicated Page
    'horizon.page.title': 'Upupa Horizon · Natura, esplorazioni e incontri',
    'horizon.page.description': 'Escursioni, passeggiate e giornate nella natura in Sicilia. Un progetto informale per vivere luoghi ed esperienze insieme ad altre persone.',
    'horizon.badge': 'Esperienze condivise',
    'horizon.hero.title': 'Upupa Horizon',
    'horizon.hero.subtitle': 'Natura, esplorazioni e incontri. Un invito a uscire, scoprire e condividere.',
    'horizon.hero.description': 'Upupa Horizon nasce dalla voglia di esplorare, stare nella natura e vivere le esperienze insieme ad altre persone.\n\nNon è un\'associazione escursionistica, non è un\'agenzia e non è un tour operator. È uno spazio aperto a chi ha voglia di uscire, camminare, fare un bagno in un fiume, guardare un tramonto o semplicemente passare qualche ora in buona compagnia.\n\nL\'idea è semplice: fare cose che faremmo comunque, con la possibilità di condividerle.',
    'horizon.pillar1.title': 'Cosa facciamo',
    'horizon.pillar1.desc': 'Escursioni e passeggiate, bagni in fiumi e al mare, giornate in spiaggia, tramonti, luoghi poco conosciuti. Non solo trekking: quello che conta è vivere il territorio, con calma e curiosità.',
    'horizon.pillar2.title': 'Come viviamo la natura',
    'horizon.pillar2.desc': 'Niente competizioni, niente performance da raggiungere. Ci piace fermarci, osservare, fare due chiacchiere, scattare una foto e rispettare il luogo in cui siamo. Ognuno arriva con i propri tempi e la propria curiosità.',
    'horizon.pillar3.title': 'Chi incontri',
    'horizon.pillar3.desc': 'Persone diverse per età, esperienze e provenienze, unite dalla voglia di stare fuori. Un progetto inclusivo e LGBTQ+ friendly, dove non serve conoscere già qualcuno per partecipare e non ci sono aspettative sulle relazioni che nascono.',
    'horizon.participate.title': 'Partecipa',
    'horizon.participate.intro': 'Le iniziative vengono comunicate principalmente su Telegram e Instagram, con luogo, orari indicativi, punto di ritrovo, difficoltà, terreno e attrezzatura consigliata. Chi è interessato può scrivere su Telegram; quando serve, organizziamo insieme spostamenti e passaggi in auto.',
    'horizon.participate.safety': 'Le condizioni ambientali possono cambiare e le attività possono essere modificate o annullate: la sicurezza delle persone e la tutela dei luoghi vengono prima dell\'esperienza.\n\nOgni proposta non è un servizio professionale né un\'escursione guidata a pagamento. Ogni partecipante valuta autonomamente la propria preparazione e la propria attrezzatura.',
    'horizon.cta.telegram': 'Scrivici su Telegram',
    'horizon.cta.journal': 'Leggi il Journal',
    'horizon.cta.about': 'Chi c\'è dietro Upupa',

    // Journal Dedicated Page
    'journal.page.title': 'Journal · Diario Riflessivo',
    'hero.title': 'Upupa Journal',
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
  
  // First visit: follow the device language
  return getDeviceLanguage();
}

export function setLanguage(lang: Language): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('language-preference', lang);
  }
}
