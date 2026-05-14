export type Locale = "en" | "tr";

export type Translation = {
  nav: {
    services: string;
    process: string;
    pricing: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    headingItalic: string;
    headingEnd: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    metrics: readonly { number: string; label: string }[];
  };
  services: {
    tag: string;
    heading: string;
    subtitle: string;
    items: readonly {
      icon: string;
      title: string;
      description: string;
      tag: string;
    }[];
  };
  process: {
    tag: string;
    heading: string;
    steps: readonly {
      number: string;
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    tag: string;
    heading: string;
    items: readonly {
      quote: string;
      name: string;
      role: string;
      initials: string;
    }[];
  };
  pricing: {
    tag: string;
    heading: string;
    subtitle: string;
    plans: readonly {
      name: string;
      price: string;
      priceSuffix: string;
      period: string;
      featured: boolean;
      badge?: string;
      cta: string;
      features: readonly string[];
    }[];
  };
  cta: {
    heading: string;
    button: string;
  };
  contact: {
    tag: string;
    heading: string;
    subtitle: string;
    labels: {
      name: string;
      email: string;
      budget: string;
      message: string;
      submit: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    budgetOptions: readonly string[];
    details: readonly { label: string; value: string }[];
    remote: string;
  };
  footer: {
    copy: string;
    links: readonly { label: string; href: string }[];
  };
};

export const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Software Solutions",
      heading: "We turn your ideas into",
      headingItalic: "products.",
      headingEnd: "",
      subtitle: "End-to-end software development from design to deployment. Scalable, maintainable, and delivered on time.",
      cta: "Share Your Project →",
      ctaSecondary: "Our Services",
      metrics: [
        { number: "140+", label: "Projects delivered" },
        { number: "98%", label: "Client satisfaction" },
        { number: "7 yrs", label: "Industry experience" },
      ],
    },
    services: {
      tag: "// Services",
      heading: "What do we do?",
      subtitle: "We're with you every step of the way from idea to production. Tailored solutions for small teams and enterprise clients a like.",
      items: [
        {
          icon: "⬡",
          title: "Web & API Development",
          description: "High-performance backend systems, REST and GraphQL APIs, microservice architectures.",
          tag: "Node · Python · Go",
        },
        {
          icon: "◈",
          title: "Mobile Applications",
          description: "Cross-platform mobile experiences for iOS and Android, native or with React Native.",
          tag: "React Native · Swift · Kotlin",
        },
        {
          icon: "◻",
          title: "Cloud & DevOps",
          description: "Infrastructure design on AWS, GCP and Azure, CI/CD pipeline setup, and monitoring systems.",
          tag: "AWS · Terraform · Docker",
        },
        {
          icon: "◈",
          title: "Data & Analytics",
          description: "Data warehouses, ETL pipelines, dashboard design, and machine learning integration.",
          tag: "Spark · dbt · Python",
        },
      ],
    },
    process: {
      tag: "// Process",
      heading: "How do we work?",
      steps: [
        {
          number: "01",
          title: "Discovery & Scoping",
          description: "We deeply understand your needs. We work together until technical requirements, business goals, and constraints are crystal clear.",
        },
        {
          number: "02",
          title: "Design & Prototyping",
          description: "From wireframes to high-fidelity prototypes, we get your approval at every step. A clear roadmap before development begins.",
        },
        {
          number: "03",
          title: "Agile Development",
          description: "We progress with two-week sprint cycles. Demos, feedback, and communication at every stage. No surprises.",
        },
        {
          number: "04",
          title: "Testing & Launch",
          description: "Comprehensive testing processes, staging environment validation, and a smooth production transition.",
        },
        {
          number: "05",
          title: "Maintenance & Growth",
          description: "We're still with you after launch. Performance monitoring, security updates, and scaling support.",
        },
      ],
    },
    testimonials: {
      tag: "// Testimonials",
      heading: "What do they say?",
      items: [
        {
          quote: "They delivered in three months what we hoped to finish in six, under budget. The technical quality is genuinely world-class.",
          name: "Ayşe Yılmaz",
          role: "CTO, Fintech Startup",
          initials: "AY",
        },
        {
          quote: "The communication was incredibly transparent. Every week we knew exactly what was done and what was coming. They exceeded expectations every time.",
          name: "Mert Kaya",
          role: "Founder, E-commerce Platform",
          initials: "MK",
        },
        {
          quote: "They rebuilt our data infrastructure from scratch. Our queries are 10x faster and our costs were cut in half.",
          name: "Zeynep Doğan",
          role: "Director of Data, SaaS Company",
          initials: "ZD",
        },
        {
          quote: "They don't just write code — they think like product owners. Their attention to user experience makes all the difference.",
          name: "Emre Arslan",
          role: "Product Manager, Scaleup",
          initials: "EA",
        },
      ],
    },
    pricing: {
      tag: "// Pricing",
      heading: "Transparent and predictable.",
      subtitle: "No hourly billing. No surprise costs. We work on a fixed or retainer basis for your project.",
      plans: [
        {
          name: "Starter",
          price: "$5K",
          priceSuffix: "from",
          period: "One-time project",
          featured: false,
          cta: "Let's Talk",
          features: [
            "MVP development",
            "UI / UX design",
            "1 platform (web or mobile)",
            "3 months maintenance",
            "Source code delivery",
          ],
        },
        {
          name: "Growth",
          price: "$2K",
          priceSuffix: "/mo",
          period: "Monthly retainer",
          featured: true,
          badge: "Most Popular",
          cta: "Get Started →",
          features: [
            "Custom software development",
            "Priority support",
            "Full-stack team access",
            "Weekly sprint demos",
            "Infrastructure management",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom",
          priceSuffix: "",
          period: "Enterprise solution",
          featured: false,
          cta: "Get a Quote",
          features: [
            "Dedicated team allocation",
            "24/7 support channel",
            "SLA guarantee",
            "Security audit",
            "On-site training",
          ],
        },
      ],
    },
    cta: {
      heading: "Ready to bring your project to life?",
      button: "Free Discovery Call →",
    },
    contact: {
      tag: "// Contact",
      heading: "Let's talk.",
      subtitle: "We usually respond within 24 hours. For urgent projects, prefer direct email or phone.",
      labels: {
        name: "Your Name",
        email: "Email",
        budget: "Budget range",
        message: "Your Project",
        submit: "Send Message →",
      },
      placeholders: {
        name: "Batuhan Kurkut",
        email: "Kurkut.Batuhan@outlook.com",
        message: "What do you want to build? Tell us briefly...",
      },
      budgetOptions: ["$5K — $20K", "$20K — $100K", "$100K+", "Retainer (Monthly)"],
      details: [
        { label: "Email", value: "hello@skelvric.com" },
        { label: "Phone", value: "+90 535 734 45 32" },
        { label: "Address", value: "Central District, Bilecik, Türkiye" },
        { label: "Hours", value: "Mon — Fri, 09:00 — 18:00" },
      ],
      remote: "We're a remote, distributed team. We serve clients from anywhere in the world.",
    },
    footer: {
      copy: "© 2026 Skelvric — Deeper Than Code.",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Use", href: "/terms-of-use" },
        { label: "Careers", href: "/careers" },
      ],
    },
  },

  tr: {
    nav: {
      services: "Hizmetler",
      process: "Süreç",
      pricing: "Fiyatlar",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Yazılım Çözümleri",
      heading: "Fikirlerinizi",
      headingItalic: "ürüne",
      headingEnd: "dönüştürüyoruz.",
      subtitle: "Tasarımdan dağıtıma kadar eksiksiz yazılım geliştirme. Ölçeklenebilir, bakımı kolay ve zamanında teslim.",
      cta: "Projenizi Paylaşın →",
      ctaSecondary: "Hizmetlerimiz",
      metrics: [
        { number: "140+", label: "Teslim edilen proje" },
        { number: "98%", label: "Müşteri memnuniyeti" },
        { number: "7 yıl", label: "Sektör deneyimi" },
      ],
    },
    services: {
      tag: "// Hizmetler",
      heading: "Ne yapıyoruz?",
      subtitle: "Fikir aşamasından production'a her adımda yanınızdayız. Küçük takımlar ve kurumsal şirketler için özelleştirilmiş çözümler üretiyoruz.",
      items: [
        {
          icon: "⬡",
          title: "Web & API Geliştirme",
          description: "Yüksek performanslı backend sistemleri, REST ve GraphQL API'lar, mikro servis mimarileri.",
          tag: "Node · Python · Go",
        },
        {
          icon: "◈",
          title: "Mobil Uygulamalar",
          description: "iOS ve Android için native veya React Native ile çapraz platform mobil deneyimler.",
          tag: "React Native · Swift · Kotlin",
        },
        {
          icon: "◻",
          title: "Bulut & DevOps",
          description: "AWS, GCP ve Azure üzerinde altyapı tasarımı, CI/CD pipeline kurulumu ve izleme sistemleri.",
          tag: "AWS · Terraform · Docker",
        },
        {
          icon: "◈",
          title: "Veri & Analitik",
          description: "Veri ambarları, ETL pipeline'ları, dashboard tasarımı ve makine öğrenmesi entegrasyonu.",
          tag: "Spark · dbt · Python",
        },
      ],
    },
    process: {
      tag: "// Çalışma Süreci",
      heading: "Nasıl çalışıyoruz?",
      steps: [
        {
          number: "01",
          title: "Keşif & Kapsam Belirleme",
          description: "İhtiyaçlarınızı derinlemesine anlıyoruz. Teknik gereksinimler, iş hedefleri ve kısıtlar netleşene kadar birlikte çalışıyoruz.",
        },
        {
          number: "02",
          title: "Tasarım & Prototipleme",
          description: "Wireframe'lerden yüksek doğruluklu prototiplere kadar her adımda onayınızı alıyoruz. Geliştirmeye başlamadan önce net bir yol haritası çıkarıyoruz.",
        },
        {
          number: "03",
          title: "Çevik Geliştirme",
          description: "İki haftalık sprint döngüleriyle ilerliyoruz. Her aşamada demo, geri bildirim ve iletişim. Sürpriz yok.",
        },
        {
          number: "04",
          title: "Test & Lansman",
          description: "Kapsamlı test süreçleri, staging ortamı doğrulaması ve sorunsuz bir production geçişi.",
        },
        {
          number: "05",
          title: "Bakım & Büyüme",
          description: "Lansmanın ardından da yanınızdayız. Performans izleme, güvenlik güncellemeleri ve ölçeklendirme desteği.",
        },
      ],
    },
    testimonials: {
      tag: "// Müşteri Görüşleri",
      heading: "Neler söylüyorlar?",
      items: [
        {
          quote: "Altı ayda tamamlamayı umduğumuz projeyi üç ayda, bütçe altında teslim ettiler. Teknik kalite gerçekten üst düzeyde.",
          name: "Ayşe Yılmaz",
          role: "CTO, Fintech Girişimi",
          initials: "AY",
        },
        {
          quote: "İletişim süreci çok şeffaftı. Her hafta ne yapıldığını, ne yapılacağını net olarak biliyorduk. Beklentileri her seferinde aştılar.",
          name: "Mert Kaya",
          role: "Kurucu, E-ticaret Platformu",
          initials: "MK",
        },
        {
          quote: "Veri altyapımızı sıfırdan yeniden inşa ettiler. Sorgularımız 10 kat hızlandı, maliyetlerimiz yarıya indi.",
          name: "Zeynep Doğan",
          role: "Veri Direktörü, SaaS Şirketi",
          initials: "ZD",
        },
        {
          quote: "Sadece kod yazmıyorlar; ürün sahibi gibi düşünüyorlar. Kullanıcı deneyimine verdikleri önem fark yaratıyor.",
          name: "Emre Arslan",
          role: "Ürün Yöneticisi, Scaleup",
          initials: "EA",
        },
      ],
    },
    pricing: {
      tag: "// Fiyatlandırma",
      heading: "Şeffaf ve öngörülebilir.",
      subtitle: "Saatlik faturalandırma yok. Sürpriz maliyet yok. Projeniz için sabit ya da retainer bazlı çalışıyoruz.",
      plans: [
        {
          name: "Starter",
          price: "₺50K",
          priceSuffix: "den",
          period: "Tek seferlik proje",
          featured: false,
          cta: "Konuşalım",
          features: [
            "MVP geliştirme",
            "UI / UX tasarım",
            "1 platform (web veya mobil)",
            "3 ay bakım desteği",
            "Kaynak kodu teslimi",
          ],
        },
        {
          name: "Growth",
          price: "₺15K",
          priceSuffix: "/ay",
          period: "Aylık retainer",
          featured: true,
          badge: "En Popüler",
          cta: "Başlayın →",
          features: [
            "Özel yazılım geliştirme",
            "Öncelikli destek",
            "Tam yığın takım erişimi",
            "Haftalık sprint demoları",
            "Altyapı yönetimi",
          ],
        },
        {
          name: "Enterprise",
          price: "Özel",
          priceSuffix: "",
          period: "Kurumsal çözüm",
          featured: false,
          cta: "Teklif Alın",
          features: [
            "Özel ekip tahsisi",
            "7/24 destek kanalı",
            "SLA garantisi",
            "Güvenlik denetimi",
            "Yerinde eğitim",
          ],
        },
      ],
    },
    cta: {
      heading: "Projenizi hayata geçirmeye hazır mısınız?",
      button: "Ücretsiz Keşif Görüşmesi →",
    },
    contact: {
      tag: "// İletişim",
      heading: "Konuşalım.",
      subtitle: "Genellikle 24 saat içinde yanıt veriyoruz. Acil projeler için doğrudan e-posta ya da telefon tercih edin.",
      labels: {
        name: "Adınız",
        email: "E-posta",
        budget: "Bütçe aralığı",
        message: "Projeniz",
        submit: "Mesajı Gönder →",
      },
      placeholders: {
        name: "Batuhan Kurkut",
        email: "Kurkut.Batuhan@outlook.com",
        message: "Ne inşa etmek istiyorsunuz? Kısaca anlatın...",
      },
      budgetOptions: [
        "₺50K — ₺150K",
        "₺150K — ₺500K",
        "₺500K+",
        "Retainer (Aylık)",
      ],
      details: [
        { label: "E-Posta", value: "merhaba@skelvric.com" },
        { label: "Telefon", value: "+90 535 734 45 32" },
        { label: "Adres", value: "Merkez, Bilecik, Türkiye" },
        { label: "Saat", value: "Pzt — Cum, 09:00 — 18:00" },
      ],
      remote: "Uzaktan çalışan, dağıtık bir ekibiz. Dünyanın her yerinden müşterilere hizmet veriyoruz.",
    },
    footer: {
      copy: "© 2026 Skelvric — Koddan Daha Derin.",
      links: [
        { label: "Gizlilik Politikası", href: "/privacy-policy" },
        { label: "Kullanım Koşulları", href: "/terms-of-use" },
        { label: "Kariyer", href: "/careers" },
      ],
    },
  }
} satisfies Record<Locale, Translation>;

export type Translations = Translation;
