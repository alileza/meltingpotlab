export const languages = {
  en: 'English',
  id: 'Bahasa Indonesia',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Team',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'Where Heritage Lives',
    'hero.subtitle': 'We reposition heritage and luxury hospitality brands for the modern era — preserving soul, amplifying presence.',
    'hero.cta': 'Discover Our Work',
    'hero.scroll': 'Scroll to explore',

    // About
    'about.label': 'About Us',
    'about.title': 'Crafting narratives for places with soul',
    'about.p1': 'Melting Pot Lab is a creative agency that specialises in digital repositioning for heritage and luxury hospitality brands. We believe the most powerful brands are built on authentic stories — rooted in history, culture, and place.',
    'about.p2': 'Our approach blends cinematic storytelling with strategic brand thinking to create experiences that resonate with modern travellers while honouring the legacy of iconic properties.',
    'about.p3': 'From visual identity to tone of voice, we craft every detail to ensure your brand speaks with clarity, elegance, and emotional depth.',

    // Services
    'services.label': 'What We Do',
    'services.title': 'Our Services',
    'services.creative.title': 'Creative Direction',
    'services.creative.desc': 'Setting the visual and emotional tone for your brand across every touchpoint — from photography direction to brand world-building.',
    'services.identity.title': 'Visual Identity',
    'services.identity.desc': 'Logos, typography systems, colour palettes, and brand guidelines that feel timeless yet contemporary.',
    'services.content.title': 'Content Production',
    'services.content.desc': 'Cinematic photography, video production, and editorial content that tells your story with emotional depth.',
    'services.tone.title': 'Tone of Voice',
    'services.tone.desc': 'Developing a distinctive written voice that captures your brand\'s personality across all communications.',
    'services.strategy.title': 'Brand Strategy',
    'services.strategy.desc': 'Market positioning, audience insights, and strategic frameworks that guide every creative decision.',

    // Portfolio
    'portfolio.label': 'Featured Project',
    'portfolio.title': 'Hotel Des Indes',
    'portfolio.subtitle': 'The Hague, Netherlands',
    'portfolio.desc': 'A complete digital repositioning for one of the Netherlands\' most storied heritage hotels. We crafted a new visual identity and content strategy that honours its 19th-century grandeur while speaking to today\'s luxury traveller.',
    'portfolio.scope': 'Scope',
    'portfolio.scope.items': 'Visual Identity, Content Strategy, Photography Direction, Tone of Voice, Digital Presence',
    'portfolio.cta': 'View Case Study',

    // Team
    'team.label': 'The People',
    'team.title': 'Our Team',
    'team.member1.name': 'Freda',
    'team.member1.role': 'Co-Founder',
    'team.member2.name': 'Talitha',
    'team.member2.role': 'Co-Founder',

    // Contact
    'contact.label': 'Get in Touch',
    'contact.title': 'Let\'s create something timeless',
    'contact.desc': 'Have a heritage property or luxury brand that deserves a story worth telling? We\'d love to hear from you.',
    'contact.email': 'hello@meltingpotlab.com',
    'contact.cta': 'Start a Conversation',

    // Footer
    'footer.copyright': '© 2026 Melting Pot Lab. All rights reserved.',
    'footer.tagline': 'Where Heritage Lives',
  },
  id: {
    // Header
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portofolio',
    'nav.team': 'Tim',
    'nav.contact': 'Kontak',

    // Hero
    'hero.tagline': 'Di Mana Warisan Hidup',
    'hero.subtitle': 'Kami mereposisi brand hospitalitas warisan dan mewah untuk era modern — menjaga jiwa, memperkuat kehadiran.',
    'hero.cta': 'Jelajahi Karya Kami',
    'hero.scroll': 'Gulir untuk menjelajah',

    // About
    'about.label': 'Tentang Kami',
    'about.title': 'Merangkai narasi untuk tempat-tempat berjiwa',
    'about.p1': 'Melting Pot Lab adalah agensi kreatif yang mengkhususkan diri dalam reposisi digital untuk brand hospitalitas warisan dan mewah. Kami percaya brand yang paling kuat dibangun di atas cerita autentik — berakar pada sejarah, budaya, dan tempat.',
    'about.p2': 'Pendekatan kami memadukan storytelling sinematik dengan pemikiran brand strategis untuk menciptakan pengalaman yang beresonansi dengan wisatawan modern sambil menghormati warisan properti ikonik.',
    'about.p3': 'Dari identitas visual hingga nada suara, kami merancang setiap detail untuk memastikan brand Anda berbicara dengan kejelasan, keanggunan, dan kedalaman emosional.',

    // Services
    'services.label': 'Apa yang Kami Lakukan',
    'services.title': 'Layanan Kami',
    'services.creative.title': 'Arahan Kreatif',
    'services.creative.desc': 'Menetapkan nada visual dan emosional untuk brand Anda di setiap titik sentuh — dari arahan fotografi hingga pembangunan dunia brand.',
    'services.identity.title': 'Identitas Visual',
    'services.identity.desc': 'Logo, sistem tipografi, palet warna, dan panduan brand yang terasa timeless namun kontemporer.',
    'services.content.title': 'Produksi Konten',
    'services.content.desc': 'Fotografi sinematik, produksi video, dan konten editorial yang menceritakan kisah Anda dengan kedalaman emosional.',
    'services.tone.title': 'Nada Suara',
    'services.tone.desc': 'Mengembangkan suara tulisan yang khas yang menangkap kepribadian brand Anda di seluruh komunikasi.',
    'services.strategy.title': 'Strategi Brand',
    'services.strategy.desc': 'Posisi pasar, wawasan audiens, dan kerangka strategis yang memandu setiap keputusan kreatif.',

    // Portfolio
    'portfolio.label': 'Proyek Unggulan',
    'portfolio.title': 'Hotel Des Indes',
    'portfolio.subtitle': 'Den Haag, Belanda',
    'portfolio.desc': 'Reposisi digital menyeluruh untuk salah satu hotel warisan paling bersejarah di Belanda. Kami merancang identitas visual baru dan strategi konten yang menghormati kemegahan abad ke-19 sambil berbicara kepada wisatawan mewah masa kini.',
    'portfolio.scope': 'Cakupan',
    'portfolio.scope.items': 'Identitas Visual, Strategi Konten, Arahan Fotografi, Nada Suara, Kehadiran Digital',
    'portfolio.cta': 'Lihat Studi Kasus',

    // Team
    'team.label': 'Tim Kami',
    'team.title': 'Tim Kami',
    'team.member1.name': 'Freda',
    'team.member1.role': 'Co-Founder',
    'team.member2.name': 'Talitha',
    'team.member2.role': 'Co-Founder',

    // Contact
    'contact.label': 'Hubungi Kami',
    'contact.title': 'Mari ciptakan sesuatu yang abadi',
    'contact.desc': 'Punya properti warisan atau brand mewah yang layak untuk diceritakan? Kami ingin mendengar dari Anda.',
    'contact.email': 'hello@meltingpotlab.com',
    'contact.cta': 'Mulai Percakapan',

    // Footer
    'footer.copyright': '© 2026 Melting Pot Lab. Hak cipta dilindungi.',
    'footer.tagline': 'Di Mana Warisan Hidup',
  },
} as const;
