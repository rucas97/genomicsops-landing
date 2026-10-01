export type Locale = "en" | "fa" | "ar" | "zh";

export type LocaleMeta = {
  code: Locale;
  label: string;
  dir: "ltr" | "rtl";
};

export const LOCALES: LocaleMeta[] = [
  { code: "en", label: "English",  dir: "ltr" },
  { code: "fa", label: "فارسی",    dir: "rtl" },
  { code: "ar", label: "العربية",  dir: "rtl" },
  { code: "zh", label: "中文",     dir: "ltr" },
];

export type NamedItem = { title: string; body: string };
export type QAItem = { q: string; a: string };

export type Translation = {
  nav: { features: string; tour: string; faq: string; download: string };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: { acmg: string; cnv: string; mane: string; offline: string };
  features: {
    label: string;
    title: string;
    subtitle: string;
    items: NamedItem[];
  };
  tour: {
    label: string;
    title: string;
    subtitle: string;
    steps: NamedItem[];
  };
  personas: { label: string; title: string; items: NamedItem[] };
  faq: { label: string; title: string; items: QAItem[] };
  docs: {
    label: string;
    title: string;
    subtitle: string;
    openPdf: string;
    items: NamedItem[];
  };
  cta: {
    title: string;
    body: string;
    button: string;
    requirements: string;
  };
  footer: {
    tagline: string;
    productLabel: string;
    docsLabel: string;
    contactLabel: string;
    download: string;
    features: string;
    faq: string;
    gettingStarted: string;
    catalog: string;
    sla: string;
    copyright: string;
    ruo: string;
  };
};

const en: Translation = {
  nav: { features: "Features", tour: "Product tour", faq: "FAQ", download: "Download" },
  hero: {
    badge: "Research use only",
    h1: "Variant interpretation you can audit.",
    subtitle: "A Windows desktop workbench for genomics labs. Runs offline with local ClinVar, gnomAD, and MANE. Every ACMG criterion is transparent, every classification is reproducible, and your data never leaves the machine.",
    ctaPrimary: "Download for Windows",
    ctaSecondary: "See the product",
  },
  stats: {
    acmg: "ACMG agreement on 12,644 curated variants",
    cnv: "CNV scoring on a 23-event ClinGen corpus",
    mane: "MANE Select transcripts bundled offline",
    offline: "Network calls required for core annotation",
  },
  features: {
    label: "Capabilities",
    title: "Everything a genomics lab needs. Offline.",
    subtitle: "Built for labs that process PHI, work air-gapped, or simply refuse to send variant data to someone else's servers.",
    items: [
      { title: "Transparent ACMG", body: "Every classification shows exactly which criteria fired, the evidence behind each one, and what would change the call. No black-box scoring." },
      { title: "CNV and structural variants", body: "Deletions, duplications, and inversions scored against the ClinGen / Riggs 2020 framework. Sections 1-3 are automated; 4-5 are curator-controlled." },
      { title: "Family and trio inheritance", body: "Import proband and parents. Inheritance patterns are computed per variant and feed ACMG criteria automatically." },
      { title: "Cohort analysis", body: "Group samples, run PCA clustering, gene enrichment, and shared variant analysis. Everything runs locally on the same SQLite database." },
      { title: "Nextflow pipeline runner", body: "Bundled nf-core catalog (sarek, rnaseq, demo) wrapped in Docker. Runs without a system Nextflow install." },
      { title: "Reports and exports", body: "PDF with per-variant ACMG evidence. FHIR R4 DiagnosticReport plus Observations. HL7 v2 ORU^R01. Custom JSON for LIMS integration." },
    ],
  },
  tour: {
    label: "Product tour",
    title: "From install to first classification in fifteen minutes.",
    subtitle: "No cloud accounts. No reference downloads on first run. Point it at your existing ClinVar and gnomAD databases and it works.",
    steps: [
      { title: "Point it at your reference data", body: "First-run setup asks where your local ClinVar and gnomAD databases live. No cloud accounts. No credentials. No upload." },
      { title: "See the whole sample at a glance", body: "Variant count, quality metrics, top pathogenic findings, and MANE Select transcript for every variant." },
      { title: "Work the variant list", body: "Filter by gene, consequence, classification. Search live. Every row opens the full ACMG panel without losing your place." },
      { title: "Offline license activation", body: "Signed tokens bound to your machine fingerprint. Copy the fingerprint, send it, paste back the token. No phone-home." },
    ],
  },
  personas: {
    label: "Who it's for",
    title: "Built for labs that own their data.",
    items: [
      { title: "Academic genomics labs", body: "Run the full interpretation pipeline on a workstation, without depending on external services or IT-provisioned cloud accounts." },
      { title: "Bioinformatics core facilities", body: "Give every PI a self-service workbench. Same ACMG engine, same audit trail, no per-seat cloud cost." },
      { title: "Biotech R&D teams", body: "Keep candidate variant data on-prem. Every classification is reproducible, hash-stamped, and exportable to your LIMS." },
      { title: "Clinical labs (research use)", body: "Evaluate the ACMG engine against your own curated corpus before adopting it for research pipelines." },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Common questions",
    items: [
      { q: "Is it a clinical tool?", a: "No. GenomicsOps is Research Use Only. It is not intended for clinical diagnosis, treatment, or patient management. Classifications follow ACMG/AMP 2015 guidelines applied automatically and must be verified by a qualified clinical scientist before any clinical use." },
      { q: "Does it work offline?", a: "Yes. The desktop build runs entirely on your machine using local SQLite databases for ClinVar, gnomAD, and the NCBI MANE reference. Only optional enrichment (Ensembl VEP, PubMed) uses network, and both can be disabled." },
      { q: "How accurate is the ACMG classification?", a: "On a 12,644-variant expert-curated corpus from ClinGen ERepo, the combining engine agrees with the curator's final classification 95.8% of the time: 97.9% for pathogenic, 98.8% for benign, 91.6% for VUS." },
      { q: "What operating systems are supported?", a: "Windows 10 (build 19045 or later) and Windows 11, x64. macOS and Linux are on the roadmap but not yet available." },
      { q: "How does licensing work?", a: "Licenses are cryptographically signed tokens bound to a machine fingerprint. Activation is fully offline: copy your fingerprint from the License page, send it to us, and paste back the signed token." },
      { q: "Can I use it with PHI?", a: "The app is designed for research use with de-identified data. If you process PHI, ensure full-disk encryption is enabled, restrict OS user accounts, and follow your institution's IRB and HIPAA policies." },
    ],
  },
  docs: {
    label: "Documentation",
    title: "Everything a buyer asks for, before they ask.",
    subtitle: "No email capture, no gated PDFs. Read or download any of these before you install.",
    openPdf: "Open PDF",
    items: [
      { title: "Product catalog", body: "One-page overview of capabilities, validation numbers, and system requirements. Good for forwarding to a PI or lab manager." },
      { title: "Getting started guide", body: "Step-by-step install and first-run walkthrough. Covers VCF import, annotation, ACMG review, reporting, and troubleshooting." },
      { title: "Service level agreement", body: "Support channels, response time commitments, update policy, and data handling terms for commercial licenses." },
    ],
  },
  cta: {
    title: "Try it on your own variants.",
    body: "Free to evaluate. Runs on any Windows workstation. No account, no upload, no cloud dependency.",
    button: "Download for Windows",
    requirements: "Windows 10 (19045+) or Windows 11 · x64 · ~220 MB",
  },
  footer: {
    tagline: "Variant interpretation workbench for research genomics. Windows desktop. Offline-first.",
    productLabel: "Product",
    docsLabel: "Documentation",
    contactLabel: "Contact",
    download: "Download",
    features: "Features",
    faq: "FAQ",
    gettingStarted: "Getting started",
    catalog: "Product catalog",
    sla: "SLA",
    copyright: "© 2026 GenomicsOps. All rights reserved.",
    ruo: "Research Use Only · Not for clinical diagnostic use",
  },
};

const fa: Translation = {
  nav: { features: "قابلیت‌ها", tour: "معرفی محصول", faq: "سوالات متداول", download: "دانلود" },
  hero: {
    badge: "فقط برای مصارف پژوهشی",
    h1: "تفسیر واریانتی که می‌توانید آن را حسابرسی کنید.",
    subtitle: "یک محیط کاربری دسکتاپ ویندوزی برای آزمایشگاه‌های ژنومیک. این برنامه به‌صورت کاملاً آفلاین با پایگاه‌های داده محلی ClinVar، gnomAD و MANE اجرا می‌شود. تمامی معیارهای ACMG شفاف هستند، هر طبقه‌بندی قابلیت بازتولید دارد و داده‌های شما هرگز از دستگاه خارج نمی‌شوند.",
    ctaPrimary: "دانلود برای ویندوز",
    ctaSecondary: "مشاهده محصول",
  },
  stats: {
    acmg: "توافق با استاندارد ACMG روی ۱۲٬۶۴۴ واریانت بررسی و تایید شده",
    cnv: "امتیازدهی تغییرات تعداد کپی (CNV) روی مجموعه داده ۲۳ رخدادی ClinGen",
    mane: "ترانسکریپت‌های MANE Select به‌صورت آفلاین همراه برنامه",
    offline: "عدم نیاز به اتصال شبکه برای حاشیه‌نویسی‌های اصلی",
  },
  features: {
    label: "قابلیت‌ها",
    title: "هرآنچه یک آزمایشگاه ژنومیک نیاز دارد؛ کاملاً آفلاین.",
    subtitle: "طراحی‌شده برای آزمایشگاه‌هایی که با اطلاعات سلامت و درمان (PHI) سر و کار دارند، در محیط‌های ایزوله (Air-gapped) فعالیت می‌کنند یا ترجیح می‌دهند داده‌های واریانت خود را به سرورهای شخص ثالث ارسال نکنند.",
    items: [
      { title: "استاندارد ACMG شفاف", body: "هر طبقه‌بندی دقیقاً نشان می‌دهد که چه معیارهایی فعال شده‌اند، شواهد پشت هر کدام چیست و چه عواملی می‌تواند نتیجه نهایی را تغییر دهد. بدون هیچ‌گونه امتیازدهی جعبه سیاه (Black-box)." },
      { title: "تغییرات ساختاری و CNV", body: "حذف‌ها، مضاعف‌شدن‌ها و وارونگی‌ها بر اساس چارچوب ClinGen / Riggs 2020 امتیازدهی می‌شوند. بخش‌های ۱ تا ۳ به‌صورت خودکار و بخش‌های ۴ و ۵ تحت کنترل مستقیم متخصص انجام می‌شوند." },
      { title: "وراثت خانوادگی و تریو (Trio)", body: "نمونه پروباند و والدین را وارد کنید. الگوهای وراثت برای هر واریانت محاسبه شده و معیارهای ACMG را به‌طور خودکار تغذیه می‌کنند." },
      { title: "تحلیل کوهورت", body: "نمونه‌ها را گروه‌بندی کنید، خوشه‌بندی PCA، غنی‌سازی ژنی و تحلیل واریانت‌های مشترک را اجرا کنید. همه چیز به‌صورت محلی روی یک پایگاه داده SQLite واحد اجرا می‌شود." },
      { title: "اجراکننده پایپ‌لاین Nextflow", body: "شامل کاتالوگ یکپارچه nf-core (شامل sarek، rnaseq و نسخه آزمایشی) بسته‌بندی‌شده در Docker. بدون نیاز به نصب مستقل Nextflow روی سیستم اجرا می‌شود." },
      { title: "گزارش‌ها و خروجی‌ها", body: "گزارش PDF به همراه شواهد کامل ACMG برای هر واریانت. پشتیبانی از استانداردهای FHIR R4 DiagnosticReport و Observations و همچنین HL7 v2 ORU^R01 و خروجی JSON سفارشی برای اتصال به LIMS." },
    ],
  },
  tour: {
    label: "معرفی محصول",
    title: "از نصب تا نخستین طبقه‌بندی در ۱۵ دقیقه.",
    subtitle: "بدون نیاز به حساب‌های ابری یا دانلود فایل‌های مرجع در اجرای نخست. کافی است برنامه را به پایگاه‌های داده موجود ClinVar و gnomAD خود متصل کنید تا بلافاصله آماده کار باشد.",
    steps: [
      { title: "معرفی داده‌های مرجع به برنامه", body: "در راه‌اندازی اولیه، مسیر ذخیره‌سازی پایگاه‌های داده محلی ClinVar و gnomAD پرسیده می‌شود. بدون حساب ابری، بدون نام کاربری و رمز عبور و بدون آپلود داده." },
      { title: "مشاهده کلیات نمونه در یک نگاه", body: "تعداد واریانت‌ها، معیارهای کیفی، مهم‌ترین یافته‌های بیماری‌زا و ترانسکریپت‌های MANE Select برای هر واریانت قابل مشاهده است." },
      { title: "مدیریت و کار با فهرست واریانت‌ها", body: "فیلتر کردن بر اساس ژن، پیامد زیستی و نوع طبقه‌بندی با قابلیت جستجوی زنده. هر سطر پنل کامل ACMG را بدون از دست دادن موقعیت فعلی برای شما باز می‌کند." },
      { title: "فعال‌سازی آفلاین لایسنس", body: "توکن‌های رمزنگاری‌شده و امضاشده که به اثر انگشت سخت‌افزاری سیستم شما متصل هستند. اثر انگشت را کپی کرده، ارسال نمایید و توکن دریافتی را جای‌گذاری کنید. بدون نیاز به اتصال به اینترنت." },
    ],
  },
  personas: {
    label: "مخاطبان هدف",
    title: "ساخته‌شده برای آزمایشگاه‌هایی که مالکیت کامل داده‌های خود را حفظ می‌کنند.",
    items: [
      { title: "آزمایشگاه‌های ژنومیک دانشگاهی", body: "اجرای کل خط‌لوله (Pipeline) تفسیر روی یک ایستگاه کاری محلی، بدون وابستگی به سرویس‌های خارجی یا حساب‌های ابری سازمان." },
      { title: "مراکز ارائه‌دهنده خدمات بیوانفورماتیک", body: "فراهم کردن یک محیط کاری خودسرور (Self-service) برای هر محقق؛ با همان موتور دقیق ACMG و همان مسیر حسابرسی، بدون هزینه‌های ابری به ازای هر کاربر." },
      { title: "تیم‌های تحقیق و توسعه بیوتکنولوژی", body: "حفظ داده‌های واریانت‌های نامزد در داخل سازمان (On-premise). هر طبقه‌بندی قابل بازتولید، دارای مهر زمانی هش‌شده و قابل خروجی‌گرفتن به سیستم LIMS است." },
      { title: "آزمایشگاه‌های بالینی (مصارف پژوهشی)", body: "ارزیابی موتور قدرتمند ACMG با استفاده از مجموعه داده‌های اختصاصی خود قبل از به‌کارگیری در خط‌لوله‌های پژوهشی." },
    ],
  },
  faq: {
    label: "سوالات متداول",
    title: "پاسخ به پرسش‌های رایج",
    items: [
      { q: "آیا این نرم‌افزار یک ابزار بالینی است؟", a: "خیر. نرم‌افزار GenomicsOps صرفاً برای مصارف پژوهشی (Research Use Only) طراحی شده است و برای تشخیص بالینی، درمان یا مدیریت بالینی بیماران در نظر گرفته نشده است. طبقه‌بندی‌ها به‌صورت خودکار بر اساس دستورالعمل‌های ACMG/AMP 2015 انجام می‌شوند و پیش از هرگونه استفاده بالینی باید توسط یک متخصص ژنتیک بالینی واجد شرایط تأیید شوند." },
      { q: "آیا نرم‌افزار به‌‌صورت آفلاین کار می‌کند؟", a: "بله. نسخه دسکتاپ این برنامه کاملاً روی دستگاه شما و با استفاده از پایگاه‌های داده محلی SQLite برای ClinVar، gnomAD و مرجع NCBI MANE اجرا می‌شود. تنها قابلیت‌های اختیاری غنی‌سازی داده‌ها (مانند Ensembl VEP و PubMed) از اینترنت استفاده می‌کنند که هر دو قابل غیرفعال‌سازی هستند." },
      { q: "دقت طبقه‌بندی‌های ACMG چقدر است؟", a: "بر اساس ارزیابی روی مجموعه داده‌ای شامل ۱۲٬۶۴۴ واریانت که توسط متخصصان ClinGen ERepo بررسی شده‌اند، موتور ترکیبی این برنامه در ۹۵.۸ درصد موارد با طبقه‌بندی نهایی متخصصان تطابق دارد: ۹۷.۹ درصد برای واریانت‌های بیماری‌زا، ۹۸.۸ درصد برای خوش‌خیم و ۹۱.۶ درصد برای واریانت‌های با اهمیت نامشخص (VUS)." },
      { q: "چه سیستم‌عامل‌هایی پشتیبانی می‌شوند؟", a: "ویندوز ۱۰ (بیلد ۱۹۰۴۵ یا بالاتر) و ویندوز ۱۱ با معماری ۶۴ بیت (x64). نسخه‌های مک‌او‌اس (macOS) و لینوکس در نقشه راه توسعه قرار دارند اما در حال حاضر عرضه نشده‌اند." },
      { q: "سیستم لایسنس‌‌دهی چگونه کار می‌کند؟", a: "لایسنس‌ها توکن‌های رمزنگاری‌شده‌ای هستند که به اثر انگشت منحصربه‌فرد سخت‌افزار سیستم شما گره خورده‌اند. فعال‌سازی کاملاً آفلاین است: اثر انگشت خود را از صفحه لایسنس کپی کرده، برای ما ارسال می‌کنید و توکن امضاشده را در برنامه وارد می‌کنید." },
      { q: "آیا می‌توانم از این برنامه برای پردازش اطلاعات سلامت و درمان (PHI) استفاده کنم؟", a: "این برنامه برای اهداف پژوهشی با داده‌های ناشناس‌سازی‌شده طراحی شده است. چنانچه داده‌های حاوی اطلاعات شخصی سلامت را پردازش می‌کنید، حتماً از فعال بودن رمزنگاری کامل دیسک اطمینان حاصل کنید، دسترسی به حساب‌های کاربری سیستم‌عامل را محدود سازید و سیاست‌های نهاد خود (IRB و HIPAA) را رعایت فرمایید." },
    ],
  },
  docs: {
    label: "مستندات",
    title: "هرآنچه یک خریدار پیش از پرسیدن به آن نیاز دارد.",
    subtitle: "بدون نیاز به ثبت ایمیل و بدون فایل‌های PDF قفل‌شده. پیش از نصب می‌توانید هر یک از این مستندات را مطالعه یا دانلود کنید.",
    openPdf: "باز کردن PDF",
    items: [
      { title: "کاتالوگ محصول", body: "بررسی اجمالی یک‌صفحه‌ای از قابلیت‌ها، آمارهای اعتبارسنجی و الزامات سیستمی. مناسب جهت ارائه به مدیران آزمایشگاه یا سرپرست تیم پژوهشی." },
      { title: "راهنمای شروع به کار", body: "آموزش گام‌به‌گام نصب و راه‌اندازی اولیه. شامل نحوه ورود فایل VCF، حاشیه‌نویسی، بازبینی ACMG، گزارش‌گیری و عیب‌یابی." },
      { title: "توافق‌نامه سطح خدمات (SLA)", body: "شامل کانال‌های پشتیبانی، تعهدات زمان پاسخ‌گویی، سیاست به‌روزرسانی و شرایط مدیریت داده برای لایسنس‌های تجاری." },
    ],
  },
  cta: {
    title: "نرم‌افزار را روی واریانت‌های خودتان امتحان کنید.",
    body: "ارزیابی کاملاً رایگان. قابل اجرا روی هر ایستگاه کاری ویندوز. بدون نیاز به حساب کاربری، بدون آپلود و بدون وابستگی به فضای ابری.",
    button: "دانلود برای ویندوز",
    requirements: "ویندوز ۱۰ (نسخه ۱۹۰۴۵ به بالا) یا ویندوز ۱۱ · ۶۴ بیت (x64) · حدود ۲۲۰ مگابایت",
  },
  footer: {
    tagline: "محیط کاربری تفسیر واریانت برای ژنومیک پژوهشی. نسخه دسکتاپ ویندوز. با رویکرد اولویت اجرای آفلاین.",
    productLabel: "محصول",
    docsLabel: "مستندات",
    contactLabel: "تماس با ما",
    download: "دانلود",
    features: "قابلیت‌ها",
    faq: "سوالات متداول",
    gettingStarted: "شروع به کار",
    catalog: "کاتالوگ محصول",
    sla: "توافق‌نامه سطح خدمات",
    copyright: "© ۲۰۲۶ GenomicsOps. تمامی حقوق محفوظ است.",
    ruo: "فقط برای مصارف پژوهشی · غیرقابل استفاده برای تشخیص بالینی",
  },
};

const ar: Translation = {
  nav: { features: "الميزات", tour: "جولة المنتج", faq: "الأسئلة الشائعة", download: "تحميل" },
  hero: {
    badge: "للاستخدام البحثي فقط",
    h1: "تفسير للمتغيرات الجينية يمكنك تدقيقه بكل ثقة.",
    subtitle: "بيئة عمل مكتبية لنظام ويندوز مخصصة لمختبرات الجينوم. تعمل دون اتصال بالإنترنت باستخدام قواعد بيانات ClinVar وgnomAD وMANE المحلية. كل معيار من معايير ACMG يتسم بالشفافية، وكل تصنيف قابل لإعادة الإنتاج، وتبقى بياناتك آمنة داخل جهازك حصراً.",
    ctaPrimary: "تحميل لنظام ويندوز",
    ctaSecondary: "استعراض المنتج",
  },
  stats: {
    acmg: "توافق مع معايير ACMG على 12,644 متغيراً تم مراجعتها بدقة",
    cnv: "تسجيل تقييمات التغيرات في عدد النسخ (CNV) بناءً على مجموعة بيانات ClinGen المؤلفة من 23 حدثاً",
    mane: "تضمين نصوص MANE Select للعمل دون اتصال",
    offline: "لا توجد حاجة لاتصال الشبكة لإجراء التعليقات التوضيحية الأساسية",
  },
  features: {
    label: "القدرات",
    title: "كل ما يحتاجه مختبر الجينوم؛ ويعمل دون اتصال بالإنترنت.",
    subtitle: "مُصمم خصيصاً للمختبرات التي تتعامل مع معلومات الصحيّة الشخصية (PHI)، أو تعمل في بيئات معزولة (Air-gapped)، أو ترفض تماماً إرسال بيانات المتغيرات إلى خوادم خارجية.",
    items: [
      { title: "معايير ACMG شفافة", body: "يوضح كل تصنيف بدقة المعايير التي تم تفعيلها، والأدلة الكامنة خلف كل منها، والعوامل التي قد تؤدي إلى تغيير النتيجة. خالي تماماً من تقييمات الصندوق الأسود." },
      { title: "المتغيرات البنيوية وتغيرات عدد النسخ (CNV)", body: "يتم تقييم عمليات الحذف والتضاعف والانقلاب وفقاً لإطار عمل ClinGen / Riggs 2020. الأقسام من 1 إلى 3 آلية بالكامل، بينما الأقسام 4 و5 تخضع لسيطرة المشرف المختص." },
      { title: "الوراثة العائلية والثلاثية (Trio)", body: "استيراد بيانات المريض (Proband) والوالدين. يتم حساب أنماط الوراثة لكل متغير وتغذية معايير ACMG تلقائياً." },
      { title: "تحليل الأتراب (Cohort analysis)", body: "تجميع العينات، إجراء تحليل التجمع باستخدام PCA، إثراء الجينات، وتحليل المتغيرات المشتركة. يتم تشغيل كل شيء محلياً على قاعدة بيانات SQLite نفسها." },
      { title: "مشغل خطوط الأنابيب Nextflow", body: "كتالوج nf-core المدمج (sarek، rnaseq، والعروض التوضيحية) مغلف داخل بيئة Docker. يعمل بسلاسة دون الحاجة لتثبيت مسبق لنظام Nextflow على جهازك." },
      { title: "التقارير وملفات التصدير", body: "تقرير PDF يوضح أدلة ACMG الخاصة بكل متغير. دعم معايير FHIR R4 DiagnosticReport وObservations، بالإضافة إلى بروتوكول HL7 v2 ORU^R01، وملفات JSON مخصصة للتكامل مع أنظمة LIMS." },
    ],
  },
  tour: {
    label: "جولة المنتج",
    title: "من التثبيت وحتى التصنيف الأول خلال خمس عشرة دقيقة.",
    subtitle: "بلا حسابات سحابية، وبدون الحاجة لتنزيل ملفات مرجعية عند التشغيل الأول. قم بتوجيه التطبيق نحو قواعد بيانات ClinVar وgnomAD الحالية لديك ليعمل فوراً.",
    steps: [
      { title: "توجيه التطبيق إلى بياناتك المرجعية", body: "يطلب إعداد التشغيل الأول تحديد مكان تواجد قواعد بيانات ClinVar وgnomAD المحلية. لا توجد حسابات سحابية، لا بيانات اعتماد، ولا عمليات رفع للبيانات." },
      { title: "معاينة العينة بأكملها في نظرة واحدة", body: "عرض عدد المتغيرات، مؤشرات الجودة، أبرز النتائج الممرضة، ونصوص MANE Select لكل متغير على حدة." },
      { title: "العمل على قائمة المتغيرات", body: "إمكانية التصفية حسب الجين، الأثر البيولوجي، أو التصنيف، مع ميزة البحث الفوري. يتيح لك كل صف فتح لوحة ACMG الكاملة دون فقدان موضعك الحالي." },
      { title: "تفعيل الترخيص دون اتصال", body: "رموز مشفرة وموقعة رقمياً مرتبطة ببصمة جهازك الفريدة. انسخ البصمة، أرسلها إلينا، ثم الصق الرمز العائد لتفعيل البرنامج دون الحاجة للاتصال بخوادم خارجية." },
    ],
  },
  personas: {
    label: "لمن تم تصميم هذا البرنامج؟",
    title: "مصمم خصيصاً للمختبرات التي تحافظ على سيادتها الكاملة على بياناتها.",
    items: [
      { title: "مختبرات الجينوم الأكاديمية", body: "تشغيل خط أنابيب التفسير بالكامل على محطة عمل محلية، ودون الاعتماد على خدمات خارجية أو حسابات سحابية توفرها إدارة تقنية المعلومات." },
      { title: "مراكز البنى التحتية للمعلوماتية الحيوية", body: "منح كل باحث رئيسي بيئة عمل ذاتية الخدمة؛ بنفس محرك ACMG الدقيق، وبنفس سجل التدقيق، ودون تكاليف سحابية مرتبطة بعدد المستخدمين." },
      { title: "فرق البحث والتطوير في التقمية الحيوية", body: "الاحتفاظ ببيانات المتغيرات المرشحة محلياً داخل المؤسسة (On-premise). كل تصنيف قابل لإعادة الإنتاج، ومختوم ببصمة تجزئة (Hash)، وقابل للتصدير إلى نظام LIMS الخاص بك." },
      { title: "المختبرات السريرية (للاستخدام البحثي)", body: "تقييم أداء محرك ACMG مقابل مجموعة البيانات الخاصة والموثقة لديك قبل اعتماده في مسارات العمل البحثية." },
    ],
  },
  faq: {
    label: "الأسئلة الشائعة",
    title: "إجابات على الأسئلة الشائعة",
    items: [
      { q: "هل يُعد هذا التطبيق أداة سريرية؟", a: "لا. برنامج GenomicsOps مخصص للاستخدام البحثي فقط (Research Use Only). وهو غير مصمم للتشخيص السريري، أو العلاج، أو إدارة رعاية المرضى. تتبع التصنيفات إرشادات ACMG/AMP 2015 المطبقة تلقائياً، ويجب التحقق منها حصراً من قبل أخصائي وراثة سريرية مؤهل قبل أي استخدام إكلينيكي." },
      { q: "هل يعمل التطبيق دون اتصال بالإنترنت؟", a: "نعم. تعمل نسخة سطح المكتب بالكامل على جهازك باستخدام قواعد بيانات SQLite محلية مخصصة لكل من ClinVar وgnomAD ومرجع NCBI MANE. الوظائف الاختيارية وحدها (مثل Ensembl VEP وPubMed لإثراء البيانات) هي التي تستخدم الإنترنت، ويمكن تعطيل كلتيهما بسهولة." },
      { q: "ما مدى دقة تصنيفات ACMG؟", a: "بناءً على تقييم أُجري على مجموعة بيانات مكونة من 12,644 متغيراً خضعت لتدقيق الخبراء في ClinGen ERepo، يتطابق محرك الدمج مع التصنيف النهائي للمشرف في 95.8% من الحالات: بواقع 97.9% للمتغيرات الممرضة، 98.8% للمتغيرات الحميدة، و91.6% للمتغيرات ذات الأهمية غير المعروفة (VUS)." },
      { q: "ما هي أنظمة التشغيل المدعومة؟", a: "نظام ويندوز 10 (إصدار 19045 أو أحدث) وويندوز 11 بمعمارية 64-bit (x64). تتوفر نسخ نظامي macOS وLinux ضمن خطة التطوير المستقبلية ولكنها غير متوفرة حالياً." },
      { q: "كيف تعمل آلية الترخيص؟", a: "التراخيص عبارة عن رموز مشفرة رقمياً ومقيدة ببصمة الجهاز الفريدة. عملية التفعيل تتم تماماً دون اتصال: انسخ بصمة جهازك من صفحة الترخيص، أرسلها لنا، ثم الصق الرمز الموقع لتفعيل البرنامج." },
      { q: "هل يمكنني استخدام التطبيق مع بيانات الرعاية الصحية المحمية (PHI)؟", a: "تم تصميم التطبيق خصيصاً لأغراض البحث العلمي باستخدام بيانات مجهولة الهوية. في حال قمت بمعالجة بيانات صحية شخصية، يجب التأكد من تفعيل تشفير القرص الصلب بالكامل، وتقييد حسابات مستخدمي نظام التشغيل، والالتزام بسياسات حماية البيانات المؤسسية (مثل IRB وHIPAA)." },
    ],
  },
  docs: {
    label: "الوثائق",
    title: "كل ما قد يسأل عنه المشتري، قبل أن يطرح سؤاله.",
    subtitle: "بلا أي قيود على البريد الإلكتروني وبدون ملفات PDF مقفلة. يمكنك قراءة أو تنزيل أي من هذه المستندات قبل التثبيت.",
    openPdf: "فتح ملف PDF",
    items: [
      { title: "كتالوج المنتج", body: "نظرة عامة مكونة من صفحة واحدة تستعرض القدرات، وأرقام التحقق، ومتطلبات النظام. مثالية لإرسالها إلى الباحث الرئيسي أو مدير المختبر." },
      { title: "دليل البدء السريع", body: "دليل تفصيلي خطوة بخطوة لعملية التثبيت والتشغيل الأول. يغطي استيراد ملفات VCF، التعليقات التوضيحية، مراجعة ACMG، إعداد التقارير، واستكشاف الأخطاء وإصلاحها." },
      { title: "اتفاقية مستوى الخدمة (SLA)", body: "تستعرض قنوات الدعم الفني، التزامات أوقات الاستجابة، سياسات التحديث، وشروط التعامل مع البيانات الخاصة بالتراخيص التجارية." },
    ],
  },
  cta: {
    title: "جربه على متغيّراتك الخاصة الآن.",
    body: "تقييم مجاني بالكامل. يعمل على أي محطة عمل تعمل بنظام ويندوز. بدون حسابات، بدون رفع بيانات، وبدون أي اعتماد على الخدمات السحابية.",
    button: "تحميل لنظام ويندوز",
    requirements: "ويندوز 10 (إصدار 19045+) أو ويندوز 11 · معماريّة 64-bit · مساحة تقريبية 220 ميغابايت",
  },
  footer: {
    tagline: "بيئة عمل لتفسير المتغيرات مخصصة لأبحاث الجينوم. سطح مكتب ويندوز. الأولوية للعمل دون اتصال.",
    productLabel: "المنتج",
    docsLabel: "الوثائق",
    contactLabel: "اتصل بنا",
    download: "تحميل",
    features: "الميزات",
    faq: "الأسئلة الشائعة",
    gettingStarted: "بدء الاستخدام",
    catalog: "كتالوج المنتج",
    sla: "اتفاقية مستوى الخدمة",
    copyright: "© 2026 GenomicsOps. جميع الحقوق محفوظة.",
    ruo: "للاستخدام البحثي فقط · غير مخصص لأغراض التشخيص السريري",
  },
};

const zh: Translation = {
  nav: { features: "功能特性", tour: "产品演示", faq: "常见问题", download: "下载" },
  hero: {
    badge: "仅供研究使用",
    h1: "全程可审计的变异解读方案。",
    subtitle: "面向基因组实验室的 Windows 桌面工作台。支持完全离线运行，内置本地 ClinVar、gnomAD 与 MANE 数据库。每条 ACMG 标准清晰透明，每个分类结果完全可复现，您的数据绝不离开本地设备。",
    ctaPrimary: "下载 Windows 版",
    ctaSecondary: "了解产品详情",
  },
  stats: {
    acmg: "在 12,644 个专家精选变异上的 ACMG 一致性验证",
    cnv: "基于 23 个 ClinGen 事件语料库的 CNV 打分机制",
    mane: "离线打包集成 MANE Select 转录本",
    offline: "核心注释运行无需任何网络调用",
  },
  features: {
    label: "核心功能",
    title: "基因组实验室所需的一切，尽在本地离线运行。",
    subtitle: "专为需处理受保护健康信息 (PHI)、在隔离网络 (Air-gapped) 中工作、或拒绝将变异数据上传至第三方服务器的实验室量身打造。",
    items: [
      { title: "透明的 ACMG 标准", body: "每个分类结果均精确展示触发了哪些标准、各项标准背后的支持证据，以及何种条件会改变结论。杜绝黑箱式评分。" },
      { title: "CNV 与结构变异分析", body: "基于 ClinGen / Riggs 2020 框架对片段缺失、重复及倒位进行打分评估。第 1-3 节完全自动化，第 4-5 节由人工专家主导控制。" },
      { title: "家系与三人组 (Trio) 遗传分析", body: "支持导入先证者及双亲数据。系统自动计算各变异的遗传模式，并无缝注入 ACMG 评估标准中。" },
      { title: "队列分析 (Cohort analysis)", body: "支持多样本分组、PCA 聚类分析、基因富集分析以及共享变异分析。所有运算均基于同一本地 SQLite 数据库在本地高效完成。" },
      { title: "Nextflow 流程运行引擎", body: "内置封装于 Docker 中的 nf-core 分析套件（含 sarek、rnaseq 及演示流程），无需在系统中额外安装 Nextflow 即可直接运行。" },
      { title: "报告生成与数据导出", body: "一键导出包含单变异 ACMG 证据详情的 PDF 报告。支持输出 FHIR R4 DiagnosticReport 与 Observations、HL7 v2 ORU^R01，以及用于对接 LIMS 的自定义 JSON 格式。" },
    ],
  },
  tour: {
    label: "产品演示",
    title: "从安装到完成首次变异分类，仅需 15 分钟。",
    subtitle: "无需云端账号，首次运行亦无需下载外部参考数据。只需将软件指向您现有的 ClinVar 与 gnomAD 数据库目录即可立即投入工作。",
    steps: [
      { title: "指定本地参考数据库", body: "首次运行设置时，只需指明本地 ClinVar 和 gnomAD 数据库的存放路径。全程无需云端账号、无需凭证、无任何数据上传。" },
      { title: "全局样本一目了然", body: "清晰掌握变异总数、质量控制指标、核心致病性发现，以及每个变异对应的 MANE Select 转录本信息。" },
      { title: "高效处理变异列表", body: "支持按基因、突变后果或分类结果进行多维度筛选和实时搜索。点击任意一行即可直接展开完整的 ACMG 面板，且不会打乱您的当前浏览进度。" },
      { title: "离线许可证激活", body: "基于机器硬件指纹绑定的加密签名令牌机制。复制硬件指纹并发送给我们，随后将返回的签名令牌贴回即可完成激活，彻底告别联网验证。" },
    ],
  },
  personas: {
    label: "适用人群",
    title: "专为完全掌控自身数据的实验室构建。",
    items: [
      { title: "高校与科研院所基因组实验室", body: "直接在本地工作站上运行完整的解读流程，摆脱对外部服务商或 IT 部门配置的云端账号的依赖。" },
      { title: "生物信息学核心技术平台", body: "为每位项目负责人 (PI) 提供自主可控的工作台。享有相同的 ACMG 引擎与审计追踪，且无任何按席位计费的云服务成本。" },
      { title: "生物医药研发团队", body: "确保候选变异数据完全保留在本地机构内部。每个分类结果均可复现、带有哈希校验戳，且可轻松导出至实验室信息管理系统 (LIMS)。" },
      { title: "临床实验室（研究用途）", body: "在正式引入研究级流程前，利用自有精选变异语料库对 ACMG 引擎进行全面性能评估与对标。" },
    ],
  },
  faq: {
    label: "常见问题",
    title: "常见问题解答",
    items: [
      { q: "这是一个临床医疗工具吗？", a: "不是。GenomicsOps 仅供科学研究使用 (Research Use Only)，不适用于临床诊断、治疗或患者管理。分类结果遵循自动应用的 ACMG/AMP 2015 指南，在进行任何临床应用前，必须由具备资质的临床遗传学专家进行独立核实与验证。" },
      { q: "软件可以完全离线运行吗？", a: "可以。桌面客户端完全在本机运行，依托本地 SQLite 数据库加载 ClinVar、gnomAD 及 NCBI MANE 参考数据。仅有部分可选的数据丰富功能（如 Ensembl VEP、PubMed 查询）需要网络连接，且这两项功能均可随时手动禁用。" },
      { q: "ACMG 自动分类的准确度如何？", a: "在 ClinGen ERepo 包含 12,644 个专家精选变异的验证语料库上，本系统的组合推理引擎与专家最终分类结论的一致性高达 95.8%：其中致病性变异一致率为 97.9%，良性变异一致率为 98.8%，意向未明变异 (VUS) 一致率为 91.6%。" },
      { q: "支持哪些操作系统？", a: "支持 64 位 (x64) Windows 10（内部版本 19045 或更高版本）以及 Windows 11。macOS 和 Linux 版本已纳入开发路线图，目前暂未发布。" },
      { q: "软件的许可证机制是如何运作的？", a: "许可证是通过密码学签名的安全令牌，并与您的机器硬件指纹深度绑定。激活过程完全离线：只需在“许可证”页面复制您的机器指纹发送给我们，然后将收到的签名令牌填回软件即可。" },
      { q: "是否支持处理受保护的健康信息 (PHI)？", a: "本应用程序专为配合去标识化数据进行研究而设计。如果您需要处理包含 PHI 的数据，请务必启用全盘加密、严格限制操作系统用户账号权限，并遵守您所在机构的 IRB（机构审查委员会）及 HIPAA 相关合规政策。" },
    ],
  },
  docs: {
    label: "文档中心",
    title: "买家在提问之前就想了解的一切。",
    subtitle: "无需注册邮箱，所有 PDF 文档均无访问门槛。您可以在安装前的任何时刻直接在线阅读或下载。",
    openPdf: "打开 PDF",
    items: [
      { title: "产品手册（产品目录）", body: "单页精炼概览产品能力、验证性能指标与系统配置需求，非常适合转发给 PI 或实验室主管审阅。" },
      { title: "新手入门指南", body: "分步式安装与首次运行实操向导。全面涵盖 VCF 文件导入、注释处理、ACMG 审核、报告生成及故障排查。" },
      { title: "服务等级协议 (SLA)", body: "详细说明商业许可证的技术支持渠道、响应时间承诺、版本更新政策以及数据安全处理条款。" },
    ],
  },
  cta: {
    title: "立即使用您自己的变异数据进行体验。",
    body: "支持免费评估。可在任意 Windows 工作站上流畅运行。无需注册账号、无需数据上传、彻底摆脱云端依赖。",
    button: "下载 Windows 版",
    requirements: "Windows 10 (19045+) 或 Windows 11 · x64 架构 · 约 220 MB",
  },
  footer: {
    tagline: "面向基因组研究领域的变异解读工作台。Windows 桌面端。坚定推行离线优先理念。",
    productLabel: "产品",
    docsLabel: "文档",
    contactLabel: "联系我们",
    download: "下载",
    features: "功能",
    faq: "常见问题",
    gettingStarted: "新手入门",
    catalog: "产品手册",
    sla: "服务等级协议",
    copyright: "© 2026 GenomicsOps. 保留所有权利。",
    ruo: "仅供研究使用 · 不得用于临床诊断",
  },
};

export const TRANSLATIONS: Record<Locale, Translation> = { en, fa, ar, zh };