export type Language = 'sl' | 'en';

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    pricing: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    tagline1: string;
    tagline2: string;
    bio: string;
    exploreWork: string;
    contactMe: string;
    stats: {
      age: string;
      ageLabel: string;
      skillsCount: string;
      skillsLabel: string;
      approach: string;
      approachLabel: string;
      ambition: string;
      ambitionLabel: string;
    };
    status: string;
  };
  marquee: string;
  about: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    factsTitle: string;
    facts: string[];
    statusBadge: string;
    nicknameLabel: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewProjects: string;
    viewPricing: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      tag: string;
      desc: string;
      highlights: string[];
      ctaText: string;
      categoryFilter: string;
      isDream?: boolean;
    }>;
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    instruction: string;
    showAll: string;
    reset: string;
    filters: {
      web: string;
      photoVideo: string;
      social: string;
      keti: string;
    };
    comingSoonBadge: string;
    inProgressBadge: string;
    viewProject: string;
    detailsLabel: string;
  };
  pricing: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    introTitle: string;
    introText: string;
    cards: Array<{
      title: string;
      desc: string;
      perk: string;
    }>;
    ctaButton: string;
    directContactCta: string;
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      services: {
        web: string;
        photoVideo: string;
        social: string;
        keti: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successMsg: string;
    };
    socialsTitle: string;
    emailLabel: string;
  };
  footer: {
    builtWith: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  sl: {
    nav: {
      about: "O meni",
      skills: "Storitve & CV",
      projects: "Primeri del",
      pricing: "Sodelovanje",
      contact: "Kontakt",
      hireMe: "Najemi me"
    },
    hero: {
      badge: "KREATIVNOST • KODA • KAMERA • KETI",
      greeting: "Živjo, sem",
      name: "Kevin (KETI).",
      tagline1: "Koda, kamera",
      tagline2: "in preveč idej ob 2h zjutraj.",
      bio: "21-letni razvijalec in vizualni kreativec. Izdelujem hitre, sodobne spletne strani in trgovine. Prav tako snemam fotografije in videe, ki jih nato montiram v orodjih CapCut in DaVinci Resolve, podprt z bogatimi izkušnjami z organsko rastjo družbenih omrežij.",
      exploreWork: "Poglej moje delo",
      contactMe: "Stopi v stik",
      stats: {
        age: "21",
        ageLabel: "Let energije",
        skillsCount: "Full Stack",
        skillsLabel: "Splet & E-trgovine",
        approach: "CapCut + DaVinci",
        approachLabel: "Video Montaža",
        ambition: "100%",
        ambitionLabel: "Kakovost & Zagnanost"
      },
      status: "STATUS: Odprt za nove projekte & sodelovanja"
    },
    marquee: "SPLETNI RAZVOJ • FOTOGRAFIJA • VIDEO MONTAŽA • CAPCUT & DAVINCI RESOLVE • SOCIAL MEDIA MANAGEMENT • KETI BRAND • ",
    about: {
      titlePrefix: "Kdo Sem &",
      titleHighlight: "Življenjski CV",
      titleSuffix: "",
      p1: "Sem 21-letni kreativec, ki ga navdušuje ustvarjanje – od digitalnih strani do kadrov skozi objektiv kamere. Zanimanje za tehnologijo se je začelo že zgodaj, ko sem obiskoval srednjo računalniško šolo. Tam sem spoznal prve osnove spletnega razvoja, ki so me takoj pritegnile.",
      p2: "Ker me je to področje resnično navdušilo, sem se začel spletnega razvoja učiti samostojno. Z ogromno radovednosti in prakse sem usvojil sodobna orodja, kot sta React in WordPress (WooCommerce), ter začel graditi hitre, unikatne strani.",
      p3: "Hkrati me močno veseli vizualna produkcija. Znam fotografirati in snemati videoposnetke s pravo kamero ter jih profesionalno zmontirati v programih CapCut in DaVinci Resolve. Skozi vsak nov projekt nenehno širim svoje praktično znanje.",
      p4: "Poleg tega imam že vrsto let bogate izkušnje z vodenjem in organsko rastjo družbenih omrežij ter oblikovanjem privlačnih grafik. V prihodnosti pa imam tudi podjetniško ambicijo ustvariti lastno blagovno znamko prigrizkov pod vzdevkom KETI (več o tem kmalu!).",
      factsTitle: "Hitra dejstva:",
      facts: [
        "Izobrazba: Srednja računalniška šola + samoučenje spletnega razvoja",
        "Video orodja: Znanje CapCuta in DaVinci Resolva",
        "Foto & Video: Snemanje posnetkov in fotografiranje s kamero",
        "Ambicija: Ustanoviti lastno blagovno znamko KETI (Coming Soon)"
      ],
      statusBadge: "21 LET • KREATIVEC & RAZVIJALEC",
      nicknameLabel: "VZDEVEK: KETI"
    },
    services: {
      title: "Kaj Počnem &",
      subtitle: "Veščine, za katere me lahko najameš, ali projekti, kjer lahko združiva moči.",
      viewProjects: "Poglej primere",
      viewPricing: "Povpraševanje",
      items: [
        {
          id: "web-dev",
          number: "01",
          title: "Izdelava Spletnih Strani",
          tag: "REACT • WOOCOMMERCE • CUSTOM",
          desc: "Izdelava kakovostnih in hitrih spletnih strani ter trgovin. Od udarnih pristajalnih strani do obsežnih poslovnih spletnih mest.",
          highlights: [
            "Hitre enostranske ali večstranske spletne strani",
            "Spletne trgovine z WooCommerce sistemom in preprostim urejanjem",
            "100% prilagoditev za telefone, tablice in računalnike",
            "Optimizacija za iskalnike (SEO) in sodoben vizualni izgled"
          ],
          ctaText: "Poglej primere spletnih strani",
          categoryFilter: "web"
        },
        {
          id: "photo-video",
          number: "02",
          title: "Fotografija & Videografija",
          tag: "KAMERA • SHOOTINGI • KREATIVNO",
          desc: "Vizualno ustvarjanje s pravo kamero. Snemanje fotografij ter kratkih in daljših videov – pripravljen na portrete, izdelke in promocijske posnetke.",
          highlights: [
            "Fotografiranje izdelkov, ambienta in portretov",
            "Snemanje promocijskih videov (kratki in daljši formati)",
            "Filmski pristop z delom na terenu",
            "Pripravljen prostor za primere & prihajajoče shootinge"
          ],
          ctaText: "Poglej foto/video okvirje",
          categoryFilter: "photo"
        },
        {
          id: "social-media",
          number: "03",
          title: "Social Media",
          tag: "VODENJE • CAPCUT • DAVINCI RESOLVE",
          desc: "Vodenje profilov na družbenih omrežjih, oblikovanje grafik za objave ter dinamična video montaža v programih CapCut in DaVinci Resolve.",
          highlights: [
            "Bogate izkušnje z vodenjem računov in organsko rastjo",
            "Montaža videov v CapCutu in DaVinci Resolvu",
            "Oblikovanje udarnih grafik in posterjev za objave",
            "Strategija za privlačno predstavitev znamke"
          ],
          ctaText: "Znamke, s katerimi sodelujem",
          categoryFilter: "social"
        },
        {
          id: "keti-brand",
          number: "04",
          title: "KETI Snack Brand (Podjetniška Vizija)",
          tag: "BLAGOVNA ZNAMKA • COMING SOON",
          desc: "Moj dolgoročni podjetniški projekt pod vzdevkom KETI. Pripravljam povsem novo izkušnjo prigrizkov. Vse podrobnosti prihajajo kmalu!",
          highlights: [
            "Razvoj lastne znamke prigrizkov pod vzdevkom KETI",
            "Inovativna kulinarična ideja z gourmet recepturo",
            "Konceptualni razvoj in priprava identitete",
            "Coming Soon – skrivnost razkrita ob pravem času"
          ],
          ctaText: "Poglej KETI teaser",
          categoryFilter: "keti",
          isDream: true
        }
      ]
    },
    projects: {
      title: "Pregled &",
      titleHighlight: "Primeri Del.",
      subtitle: "Izberi področje spodaj za ogled projektov, referenc in prihajajočih ustvarjalnih prostorov.",
      instruction: "Klikni na kategorijo za prikaz projektov:",
      showAll: "Prikaži vse projekte",
      reset: "Skrij projekte",
      filters: {
        web: "💻 Spletne Strani",
        photoVideo: "📸 Foto & Video",
        social: "🏢 Znamke & Social Media",
        keti: "🧀 KETI Snack Brand"
      },
      comingSoonBadge: "COMING SOON",
      inProgressBadge: "V TEKU",
      viewProject: "Ogled podrobnosti",
      detailsLabel: "Kategorija"
    },
    pricing: {
      title: "Sodelovanje &",
      titleHighlight: "Investicija.",
      subtitle: "Kakovostno, cenovno dostopno in po meri tvojih potreb.",
      introTitle: "Kako sodelujemo?",
      introText: "Za vsako od svojih veščin – ne glede na to, ali gre za izdelavo spletne strani, video montažo, fotografiranje ali vodenje družbenih omrežij – ponujam visoko kakovostno in cenovno dostopno izvedbo. Ker je vsak projekt specifičen, me preprosto kontaktiraj na družbenih omrežjih ali preko maila, da se sproščeno pogovoriva o tvoji ideji in skupaj dorečeva najboljšo rešitev.",
      cards: [
        {
          title: "Po Meri Tvojih Ciljev",
          desc: "Vsak projekt obravnavam individualno – brez vnaprej določenih toghih šablon.",
          perk: "Popolna prilagodljivost"
        },
        {
          title: "Cenovno Dostopno",
          desc: "Poštena in pregledna ponudba glede na tvoj obseg dela in proračun.",
          perk: "Brez skritih stroškov"
        },
        {
          title: "Hitra Odzivnost",
          desc: "Direktna komunikacija z mano od prvega sporočila do končnega rezultata.",
          perk: "Brez kompliciranja"
        },
        {
          title: "Vse na Enem Mestu",
          desc: "Združitev spletnega razvoja, vizualnih posnetkov in social media znanja.",
          perk: "Celostna izvedba"
        }
      ],
      ctaButton: "Piši mi za ponudbo",
      directContactCta: "Kontaktiraj me na socialnih medijih ali preko maila ->"
    },
    contact: {
      title: "Narediva Nekaj",
      titleHighlight: "Norega.",
      subtitle: "Imaš idejo za novo spletno stran, potrebuješ video ali fotografije, želiš dvigniti svoja družbena omrežja ali te zanima sodelovanje? Piši mi!",
      form: {
        nameLabel: "01. Tvoje Ime / Podjetje",
        namePlaceholder: "Janez Novak",
        emailLabel: "02. Tvoj Email",
        emailPlaceholder: "janez@tvoj-projekt.si",
        serviceLabel: "03. O čem se pogovarjamo?",
        services: {
          web: "Izdelava spletne strani / trgovine",
          photoVideo: "Fotografija & Videografija",
          social: "Social Media vodenje & Video montaža",
          keti: "KETI Snack Brand sodelovanje",
          other: "Nekaj drugega / Samo klepet"
        },
        messageLabel: "04. Opiši svojo idejo ali vprašanje",
        messagePlaceholder: "Rabil bi spletno stran / pomoč pri videu / fotografiranje / sodelovanje...",
        submitBtn: "POŠLJI SPOROČILO",
        submittingBtn: "POŠILJAM...",
        successMsg: "Hvala za sporočilo! Oglasim se kmalu."
      },
      socialsTitle: "Direkten stik & družbena omrežja",
      emailLabel: "Email naslov"
    },
    footer: {
      builtWith: "Zgrajeno s kodo, kamero in čisto motivacijo.",
      allRightsReserved: "Vse pravice pridržane."
    }
  },
  en: {
    nav: {
      about: "About Me",
      skills: "Services & CV",
      projects: "Showcase",
      pricing: "Collaboration",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      badge: "CREATIVITY • CODE • CAMERA • KETI",
      greeting: "Hey, I'm",
      name: "Kevin (KETI).",
      tagline1: "Code, camera",
      tagline2: "and way too many ideas at 2 AM.",
      bio: "21-year-old developer & visual creator. I build fast, modern websites and online stores. I also shoot photos and videos, and edit them in both CapCut and DaVinci Resolve, backed by extensive experience in growing organic social media accounts.",
      exploreWork: "Explore My Work",
      contactMe: "Get In Touch",
      stats: {
        age: "21",
        ageLabel: "Years of energy",
        skillsCount: "Full Stack",
        skillsLabel: "Web & E-Commerce",
        approach: "CapCut + DaVinci",
        approachLabel: "Video Editing",
        ambition: "100%",
        ambitionLabel: "Quality & Drive"
      },
      status: "STATUS: Open for projects & collaborations"
    },
    marquee: "WEB DEVELOPMENT • PHOTOGRAPHY • VIDEO EDITING • CAPCUT & DAVINCI RESOLVE • SOCIAL MEDIA MANAGEMENT • KETI BRAND • ",
    about: {
      titlePrefix: "Who I Am &",
      titleHighlight: "Life CV",
      titleSuffix: "",
      p1: "I'm a 21-year-old creator passionate about bringing bold ideas to life—from digital web applications to capturing visuals through a lens. My fascination with technology began when I attended a high school for computer science, where I was introduced to the fundamentals of web development and instantly fell in love with it.",
      p2: "Because I was genuinely excited by it, I started teaching myself web development outside of school. With intense curiosity and hands-on practice, I mastered modern frameworks like React and WordPress (WooCommerce) to build fast, responsive, and custom sites.",
      p3: "At the same time, visual storytelling is a huge part of my life. I know how to shoot photos and videos, and edit them professionally in both CapCut and DaVinci Resolve. With each new project, I continuously expand my hands-on creative experience.",
      p4: "In addition, I have substantial experience managing social media accounts, growing profiles organically, and designing eye-catching content. Looking ahead, I also harbor an ambitious entrepreneurial goal to build my own snack brand under my nickname KETI (more on that coming soon!).",
      factsTitle: "Quick Facts:",
      facts: [
        "Education: Computer science high school + self-taught web developer",
        "Video Stack: Proficient in both CapCut and DaVinci Resolve",
        "Photo & Video: Shooting photos and videos with camera gear",
        "Ambition: Launching my own snack brand KETI (Coming Soon)"
      ],
      statusBadge: "21 Y/O • CREATOR & DEVELOPER",
      nicknameLabel: "NICKNAME: KETI"
    },
    services: {
      title: "What I Do &",
      subtitle: "Creative skills you can hire me for, or ventures where we can collaborate.",
      viewProjects: "View Examples",
      viewPricing: "Inquire",
      items: [
        {
          id: "web-dev",
          number: "01",
          title: "Web Development",
          tag: "REACT • WOOCOMMERCE • CUSTOM",
          desc: "Building high-performance, custom websites and online stores. From punchy landing pages to full-scale business websites.",
          highlights: [
            "Lightning-fast landing & multi-page websites",
            "E-commerce stores powered by WooCommerce with easy self-management",
            "100% responsive across phones, tablets, and desktops",
            "SEO optimization and fresh, modern aesthetic design"
          ],
          ctaText: "View web examples",
          categoryFilter: "web"
        },
        {
          id: "photo-video",
          number: "02",
          title: "Photography & Videography",
          tag: "CAMERA • SHOOTS • VISUAL STORYTELLING",
          desc: "Visual storytelling through dedicated camera gear. Shooting photos and videos (short-form and long-form)—ready for portraits, products, and creative shoots.",
          highlights: [
            "Product, ambient, and lifestyle photography",
            "Shooting compelling promotional videos (short & long-form)",
            "On-location filming with camera setup",
            "Showcase frames ready for upcoming productions"
          ],
          ctaText: "View photo/video frames",
          categoryFilter: "photo"
        },
        {
          id: "social-media",
          number: "03",
          title: "Social Media",
          tag: "MANAGEMENT • CAPCUT • DAVINCI RESOLVE",
          desc: "Social media account management, graphic design for posts, and dynamic video editing in both CapCut and DaVinci Resolve.",
          highlights: [
            "Extensive experience in growing accounts organically",
            "Editing in both CapCut and DaVinci Resolve",
            "High-impact graphic design & posters for social feeds",
            "Cohesive visual branding strategies"
          ],
          ctaText: "Brands I work with",
          categoryFilter: "social"
        },
        {
          id: "keti-brand",
          number: "04",
          title: "KETI Snack Brand (Entrepreneurial Vision)",
          tag: "BRAND VENTURE • COMING SOON",
          desc: "My long-term venture under my nickname KETI. A brand new snacking experience. Full details coming soon!",
          highlights: [
            "Developing an original snack brand under the nickname KETI",
            "Unique culinary concept with artisanal flavors",
            "Early concept development & brand packaging design",
            "Coming Soon – details unveiled at the right moment"
          ],
          ctaText: "View KETI teaser",
          categoryFilter: "keti",
          isDream: true
        }
      ]
    },
    projects: {
      title: "Showcase &",
      titleHighlight: "Portfolio.",
      subtitle: "Choose a category below to explore projects, references, and upcoming work spaces.",
      instruction: "Click a category to reveal projects:",
      showAll: "Show All Projects",
      reset: "Hide Projects",
      filters: {
        web: "💻 Websites",
        photoVideo: "📸 Photo & Video",
        social: "🏢 Brands & Social Media",
        keti: "🧀 KETI Snack Brand"
      },
      comingSoonBadge: "COMING SOON",
      inProgressBadge: "IN PROGRESS",
      viewProject: "View Details",
      detailsLabel: "Category"
    },
    pricing: {
      title: "Collaboration &",
      titleHighlight: "Investment.",
      subtitle: "Quality, affordable work tailored to your specific project needs.",
      introTitle: "How We Work Together",
      introText: "For each and every skill I have—whether it's web development, video editing, photography, or social media management—I deliver quality, affordable work tailored to your scope. Because every project is unique, simply reach out to me on social media or by email. Let's talk about your idea and figure out the best plan together.",
      cards: [
        {
          title: "Tailored to Your Goals",
          desc: "Every project is crafted specifically for your needs—no rigid templates or cookie-cutter solutions.",
          perk: "Complete flexibility"
        },
        {
          title: "Affordable & Fair",
          desc: "Transparent, honest pricing based on the actual scope of work and your budget.",
          perk: "Zero hidden costs"
        },
        {
          title: "Direct & Fast Turnaround",
          desc: "Direct communication with me from the first message to final project delivery.",
          perk: "No bureaucracy"
        },
        {
          title: "All Under One Roof",
          desc: "Combining web development, visual camera work, and organic social media know-how.",
          perk: "Full creative stack"
        }
      ],
      ctaButton: "Get in touch for a quote",
      directContactCta: "Message me directly on social media or via email ->"
    },
    contact: {
      title: "Let's Build Something",
      titleHighlight: "Crazy.",
      subtitle: "Got an idea for a website, need video or photo work, want to grow your social media, or curious about collaborating? Hit me up!",
      form: {
        nameLabel: "01. Your Name / Company",
        namePlaceholder: "John Doe",
        emailLabel: "02. Your Email",
        emailPlaceholder: "john@yourcompany.com",
        serviceLabel: "03. What are we talking about?",
        services: {
          web: "Website or Online Store",
          photoVideo: "Photography & Videography",
          social: "Social Media Management & Video Editing",
          keti: "KETI Snack Brand Collaboration",
          other: "Something else / Just saying hi"
        },
        messageLabel: "04. Describe your vision or question",
        messagePlaceholder: "I'm looking for a website / video & photo support / interested in collaborating...",
        submitBtn: "SEND MESSAGE",
        submittingBtn: "SENDING...",
        successMsg: "Thanks for reaching out! I will get back to you shortly."
      },
      socialsTitle: "Direct Contact & Social Media",
      emailLabel: "Email address"
    },
    footer: {
      builtWith: "Crafted with code, camera & pure motivation.",
      allRightsReserved: "All rights reserved."
    }
  }
};
