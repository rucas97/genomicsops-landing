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
    badge: "فقط برای پژوهش",
    h1: "تفسیر واریانتی که می‌توانید بازبینی کنید.",
    subtitle: "یک برنامه دسکتاپ ویندوزی برای آزمایشگاه‌های ژنومیک. به‌صورت آفلاین با ClinVar، gnomAD و MANE محلی اجرا می‌شود. هر معیار ACMG شفاف است، هر طبقه‌بندی قابل بازتولید است، و داده‌های شما هرگز از دستگاه خارج نمی‌شود.",
    ctaPrimary: "دانلود برای ویندوز",
    ctaSecondary: "مشاهده محصول",
  },
  stats: {
    acmg: "توافق ACMG روی ۱۲٬۶۴۴ واریانت بررسی‌شده",
    cnv: "امتیازدهی CNV روی ۲۳ رخداد ClinGen",
    mane: "ترانسکریپت‌های MANE Select همراه برنامه",
    offline: "تماس شبکه‌ای مورد نیاز برای حاشیه‌نویسی اصلی",
  },
  features: {
    label: "قابلیت‌ها",
    title: "هر آنچه یک آزمایشگاه ژنومیک نیاز دارد. آفلاین.",
    subtitle: "ساخته‌شده برای آزمایشگاه‌هایی که با اطلاعات سلامت کار می‌کنند، در محیط‌های ایزوله فعالیت دارند، یا نمی‌خواهند داده‌های واریانت را به سرورهای دیگران بفرستند.",
    items: [
      { title: "ACMG شفاف", body: "هر طبقه‌بندی نشان می‌دهد کدام معیارها فعال شده‌اند، شواهد پشت هر کدام چیست، و چه چیزی نتیجه را تغییر می‌دهد. بدون امتیازدهی جعبه‌سیاه." },
      { title: "CNV و واریانت‌های ساختاری", body: "حذف‌ها، مضاعف‌شدن‌ها و وارونگی‌ها بر اساس چارچوب ClinGen / Riggs 2020 امتیازدهی می‌شوند. بخش‌های ۱ تا ۳ خودکار و بخش‌های ۴ و ۵ توسط متخصص کنترل می‌شود." },
      { title: "وراثت خانواده و تریو", body: "پروپوزیت و والدین را وارد کنید. الگوهای وراثت برای هر واریانت محاسبه و به‌طور خودکار به معیارهای ACMG متصل می‌شوند." },
      { title: "تحلیل کوهورت", body: "نمونه‌ها را گروه‌بندی کنید، خوشه‌بندی PCA، غنی‌سازی ژنی و تحلیل واریانت‌های مشترک را اجرا کنید. همه چیز به‌صورت محلی روی همان پایگاه داده SQLite اجرا می‌شود." },
      { title: "اجراکننده پایپ‌لاین Nextflow", body: "کاتالوگ nf-core (sarek، rnaseq، demo) که در Docker بسته‌بندی شده. بدون نیاز به نصب Nextflow روی سیستم اجرا می‌شود." },
      { title: "گزارش‌ها و خروجی‌ها", body: "PDF با شواهد ACMG برای هر واریانت. FHIR R4 و HL7 v2 ORU^R01. JSON سفارشی برای یکپارچه‌سازی با LIMS." },
    ],
  },
  tour: {
    label: "معرفی محصول",
    title: "از نصب تا اولین طبقه‌بندی در پانزده دقیقه.",
    subtitle: "بدون حساب ابری. بدون دانلود منابع در اجرای اول. آن را به پایگاه‌های داده ClinVar و gnomAD موجود خود متصل کنید و کار می‌کند.",
    steps: [
      { title: "به داده‌های مرجع خود متصل کنید", body: "تنظیمات اجرای اول می‌پرسد که پایگاه‌های داده محلی ClinVar و gnomAD کجا هستند. بدون حساب ابری. بدون اعتبارنامه. بدون بارگذاری." },
      { title: "کل نمونه را در یک نگاه ببینید", body: "تعداد واریانت، معیارهای کیفیت، یافته‌های بیماری‌زای اصلی و ترانسکریپت MANE Select برای هر واریانت." },
      { title: "روی لیست واریانت‌ها کار کنید", body: "بر اساس ژن، پیامد و طبقه‌بندی فیلتر کنید. جستجوی زنده. هر ردیف پنل کامل ACMG را بدون از دست دادن موقعیت باز می‌کند." },
      { title: "فعال‌سازی آفلاین مجوز", body: "توکن‌های امضاشده متصل به اثر انگشت دستگاه شما. اثر انگشت را کپی کنید، ارسال کنید، توکن را برگردانید. بدون تماس با سرور." },
    ],
  },
  personas: {
    label: "برای چه کسانی",
    title: "ساخته‌شده برای آزمایشگاه‌هایی که مالک داده‌های خود هستند.",
    items: [
      { title: "آزمایشگاه‌های ژنومیک دانشگاهی", body: "کل خط لوله تفسیر را روی یک ایستگاه کاری اجرا کنید، بدون وابستگی به سرویس‌های خارجی یا حساب‌های ابری." },
      { title: "مراکز بیوانفورماتیک", body: "به هر پژوهشگر یک میز کار سلف‌سرویس بدهید. همان موتور ACMG، همان ردپای حسابرسی، بدون هزینه ابری به ازای هر کاربر." },
      { title: "تیم‌های تحقیق و توسعه بیوتک", body: "داده‌های واریانت را در محل نگه دارید. هر طبقه‌بندی قابل بازتولید، دارای هش و قابل خروجی به LIMS است." },
      { title: "آزمایشگاه‌های بالینی (کاربرد پژوهشی)", body: "موتور ACMG را با کورپوس بررسی‌شده خودتان قبل از پذیرش برای خط لوله‌های پژوهشی ارزیابی کنید." },
    ],
  },
  faq: {
    label: "سوالات متداول",
    title: "سوالات رایج",
    items: [
      { q: "آیا ابزار بالینی است؟", a: "خیر. GenomicsOps فقط برای پژوهش است. برای تشخیص بالینی، درمان یا مدیریت بیمار طراحی نشده است. طبقه‌بندی‌ها از دستورالعمل‌های ACMG/AMP 2015 پیروی می‌کنند و باید توسط متخصص ژنتیک بالینی قبل از هر کاربرد بالینی تأیید شوند." },
      { q: "آیا آفلاین کار می‌کند؟", a: "بله. نسخه دسکتاپ کاملاً روی دستگاه شما با پایگاه‌های داده محلی SQLite برای ClinVar، gnomAD و مرجع NCBI MANE اجرا می‌شود. فقط غنی‌سازی اختیاری (Ensembl VEP، PubMed) از شبکه استفاده می‌کند که هر دو قابل غیرفعال‌سازی هستند." },
      { q: "دقت طبقه‌بندی ACMG چقدر است؟", a: "روی کورپوس ۱۲٬۶۴۴ واریانتی بررسی‌شده از ClinGen ERepo، موتور ترکیب در ۹۵.۸ درصد موارد با طبقه‌بندی نهایی متخصص توافق دارد: ۹۷.۹٪ برای بیماری‌زا، ۹۸.۸٪ برای خوش‌خیم و ۹۱.۶٪ برای VUS." },
      { q: "چه سیستم‌عاملی پشتیبانی می‌شود؟", a: "ویندوز ۱۰ (بیلد ۱۹۰۴۵ یا جدیدتر) و ویندوز ۱۱، x64. نسخه‌های macOS و Linux در نقشه راه هستند اما هنوز موجود نیستند." },
      { q: "مجوز چگونه کار می‌کند؟", a: "مجوزها توکن‌های رمزنگاری‌شده امضاشده و متصل به اثر انگشت دستگاه هستند. فعال‌سازی کاملاً آفلاین است: اثر انگشت خود را از صفحه مجوز کپی کنید، برای ما ارسال کنید و توکن امضاشده را بازگردانید." },
      { q: "آیا می‌توانم از آن با اطلاعات سلامت استفاده کنم؟", a: "این برنامه برای پژوهش با داده‌های بی‌نام طراحی شده است. اگر با اطلاعات سلامت کار می‌کنید، اطمینان حاصل کنید که رمزنگاری کامل دیسک فعال است، حساب‌های کاربری سیستم‌عامل را محدود کنید و سیاست‌های IRB و HIPAA مؤسسه خود را رعایت کنید." },
    ],
  },
  docs: {
    label: "مستندات",
    title: "هر آنچه خریدار می‌پرسد، پیش از آن که بپرسد.",
    subtitle: "بدون ثبت ایمیل، بدون PDF قفل‌شده. هر کدام را قبل از نصب بخوانید یا دانلود کنید.",
    openPdf: "باز کردن PDF",
    items: [
      { title: "کاتالوگ محصول", body: "مرور یک‌صفحه‌ای قابلیت‌ها، اعداد اعتبارسنجی و نیازمندی‌های سیستم. مناسب برای ارسال به پژوهشگر یا مدیر آزمایشگاه." },
      { title: "راهنمای شروع", body: "نصب گام‌به‌گام و آشنایی با اجرای اول. شامل وارد کردن VCF، حاشیه‌نویسی، بازبینی ACMG، گزارش‌گیری و رفع اشکال." },
      { title: "توافق‌نامه سطح خدمات", body: "کانال‌های پشتیبانی، تعهدات زمان پاسخ، سیاست به‌روزرسانی و شرایط مدیریت داده برای مجوزهای تجاری." },
    ],
  },
  cta: {
    title: "روی واریانت‌های خودتان امتحان کنید.",
    body: "ارزیابی رایگان. روی هر ایستگاه کاری ویندوز اجرا می‌شود. بدون حساب، بدون بارگذاری، بدون وابستگی ابری.",
    button: "دانلود برای ویندوز",
    requirements: "ویندوز ۱۰ (۱۹۰۴۵+) یا ویندوز ۱۱ · x64 · حدود ۲۲۰ مگابایت",
  },
  footer: {
    tagline: "میز کار تفسیر واریانت برای ژنومیک پژوهشی. دسکتاپ ویندوز. آفلاین.",
    productLabel: "محصول",
    docsLabel: "مستندات",
    contactLabel: "تماس",
    download: "دانلود",
    features: "قابلیت‌ها",
    faq: "سوالات متداول",
    gettingStarted: "شروع کار",
    catalog: "کاتالوگ محصول",
    sla: "توافق‌نامه خدمات",
    copyright: "© ۲۰۲۶ GenomicsOps. تمامی حقوق محفوظ است.",
    ruo: "فقط برای پژوهش · برای تشخیص بالینی نیست",
  },
};

const ar: Translation = {
  nav: { features: "الميزات", tour: "جولة المنتج", faq: "الأسئلة الشائعة", download: "تحميل" },
  hero: {
    badge: "للبحوث فقط",
    h1: "تفسير المتغيرات الجيني القابل للتدقيق.",
    subtitle: "برنامج سطح مكتب لنظام ويندوز لمختبرات الجينوم. يعمل بلا اتصال بالإنترنت مع قواعد بيانات ClinVar وgnomAD وMANE المحلية. كل معيار ACMG شفاف، وكل تصنيف قابل لإعادة الإنتاج، وبياناتك لا تغادر الجهاز أبداً.",
    ctaPrimary: "تحميل لويندوز",
    ctaSecondary: "استعراض المنتج",
  },
  stats: {
    acmg: "توافق ACMG على 12,644 متغيراً منسقاً",
    cnv: "تقييم CNV على 23 حدثاً من ClinGen",
    mane: "نصوص MANE Select مضمنة بلا اتصال",
    offline: "استدعاءات شبكية مطلوبة للتعليق الأساسي",
  },
  features: {
    label: "القدرات",
    title: "كل ما يحتاجه مختبر الجينوم. بلا اتصال.",
    subtitle: "مصمم للمختبرات التي تتعامل مع معلومات صحية، أو تعمل في بيئات معزولة، أو ترفض إرسال بيانات المتغيرات إلى خوادم الآخرين.",
    items: [
      { title: "ACMG شفاف", body: "كل تصنيف يوضح بدقة المعايير المُفعّلة والأدلة وراء كل منها وما قد يغيّر القرار. لا توجد تقييمات صندوق أسود." },
      { title: "CNV والمتغيرات البنيوية", body: "الحذف والتضاعف والانقلاب يُقيَّم وفق إطار ClinGen / Riggs 2020. الأقسام 1-3 آلية والأقسام 4-5 تحت تحكم المشرف." },
      { title: "وراثة العائلة والثالوث", body: "استورد المريض والوالدين. تُحسب أنماط الوراثة لكل متغير وتُغذّي معايير ACMG تلقائياً." },
      { title: "تحليل الأتراب", body: "جمّع العينات، شغّل تجميع PCA وإثراء الجينات وتحليل المتغيرات المشتركة. يعمل كل ذلك محلياً على نفس قاعدة بيانات SQLite." },
      { title: "مشغّل خطوط أنابيب Nextflow", body: "كتالوج nf-core مضمن (sarek وrnaseq وdemo) مغلف في Docker. يعمل دون تثبيت Nextflow على النظام." },
      { title: "التقارير والتصدير", body: "PDF مع أدلة ACMG لكل متغير. FHIR R4 وHL7 v2 ORU^R01. JSON مخصص للتكامل مع LIMS." },
    ],
  },
  tour: {
    label: "جولة المنتج",
    title: "من التثبيت إلى أول تصنيف في خمس عشرة دقيقة.",
    subtitle: "بلا حسابات سحابية. بلا تنزيل مراجع عند التشغيل الأول. أشر إليه إلى قواعد بيانات ClinVar وgnomAD الحالية ويعمل.",
    steps: [
      { title: "أشره إلى بياناتك المرجعية", body: "يسألك الإعداد الأول عن موقع قواعد بيانات ClinVar وgnomAD المحلية. لا حسابات سحابية. لا بيانات اعتماد. لا رفع." },
      { title: "شاهد العينة كاملة بنظرة واحدة", body: "عدد المتغيرات ومقاييس الجودة وأهم النتائج الممرضة ونص MANE Select لكل متغير." },
      { title: "اعمل على قائمة المتغيرات", body: "صفِّ حسب الجين أو النتيجة أو التصنيف. بحث مباشر. كل صف يفتح لوحة ACMG الكاملة دون فقدان موضعك." },
      { title: "تفعيل الترخيص بلا اتصال", body: "رموز موقّعة مرتبطة ببصمة جهازك. انسخ البصمة، أرسلها، ألصق الرمز العائد. بلا اتصال بالخادم." },
    ],
  },
  personas: {
    label: "لمن هذا",
    title: "مصمم للمختبرات التي تملك بياناتها.",
    items: [
      { title: "مختبرات الجينوم الأكاديمية", body: "شغّل خط التفسير الكامل على محطة عمل دون الاعتماد على خدمات خارجية أو حسابات سحابية." },
      { title: "مراكز المعلوماتية الحيوية", body: "امنح كل باحث محطة عمل ذاتية الخدمة. نفس محرك ACMG ونفس سجل التدقيق دون تكلفة سحابية لكل مستخدم." },
      { title: "فرق البحث والتطوير في التقنية الحيوية", body: "احتفظ ببيانات المتغيرات في الموقع. كل تصنيف قابل لإعادة الإنتاج وموقّع بالتجزئة وقابل للتصدير." },
      { title: "المختبرات السريرية (للاستخدام البحثي)", body: "قيّم محرك ACMG مقابل مجموعتك المنسقة الخاصة قبل تبنيه في خطوط البحث." },
    ],
  },
  faq: {
    label: "الأسئلة الشائعة",
    title: "أسئلة متكررة",
    items: [
      { q: "هل هو أداة سريرية؟", a: "لا. GenomicsOps للاستخدام البحثي فقط. غير مخصص للتشخيص السريري أو العلاج أو إدارة المرضى. تتبع التصنيفات إرشادات ACMG/AMP 2015 ويجب أن يتحقق منها أخصائي وراثة سريرية مؤهل قبل أي استخدام سريري." },
      { q: "هل يعمل بلا اتصال؟", a: "نعم. نسخة سطح المكتب تعمل بالكامل على جهازك باستخدام قواعد بيانات SQLite محلية لـ ClinVar وgnomAD ومرجع NCBI MANE. فقط الإثراء الاختياري (Ensembl VEP وPubMed) يستخدم الشبكة ويمكن تعطيلهما." },
      { q: "ما مدى دقة تصنيف ACMG؟", a: "على مجموعة من 12,644 متغيراً منسقاً من ClinGen ERepo، يوافق محرك الدمج التصنيف النهائي للمشرف في 95.8% من الحالات: 97.9% للممرض و98.8% للحميد و91.6% للمتغيرات مجهولة الأهمية." },
      { q: "ما أنظمة التشغيل المدعومة؟", a: "ويندوز 10 (إصدار 19045 أو أحدث) وويندوز 11 بمعمارية x64. macOS وLinux على خارطة الطريق لكن غير متوفرين بعد." },
      { q: "كيف يعمل الترخيص؟", a: "التراخيص رموز مشفرة وموقّعة مرتبطة ببصمة الجهاز. التفعيل بلا اتصال: انسخ بصمتك من صفحة الترخيص وأرسلها إلينا ثم ألصق الرمز الموقّع." },
      { q: "هل يمكنني استخدامه مع معلومات صحية؟", a: "البرنامج مصمم للبحث ببيانات مجهولة الهوية. إذا تعاملت مع معلومات صحية، تأكد من تفعيل تشفير القرص بالكامل وقصر حسابات النظام واتبع سياسات IRB وHIPAA في مؤسستك." },
    ],
  },
  docs: {
    label: "الوثائق",
    title: "كل ما يسأل عنه المشتري، قبل أن يسأل.",
    subtitle: "بلا التقاط بريد إلكتروني، بلا ملفات PDF مقفلة. اقرأ أو نزّل أي منها قبل التثبيت.",
    openPdf: "فتح PDF",
    items: [
      { title: "كتالوج المنتج", body: "نظرة عامة من صفحة واحدة على القدرات وأرقام التحقق ومتطلبات النظام. مناسب لإرساله إلى الباحث الرئيسي أو مدير المختبر." },
      { title: "دليل البدء", body: "التثبيت خطوة بخطوة وجولة التشغيل الأول. يشمل استيراد VCF والتعليق ومراجعة ACMG والتقارير واستكشاف الأخطاء." },
      { title: "اتفاقية مستوى الخدمة", body: "قنوات الدعم والتزامات زمن الاستجابة وسياسة التحديث وشروط التعامل مع البيانات للتراخيص التجارية." },
    ],
  },
  cta: {
    title: "جرّبه على متغيراتك الخاصة.",
    body: "تقييم مجاني. يعمل على أي محطة عمل ويندوز. لا حساب، لا رفع، لا اعتماد على السحابة.",
    button: "تحميل لويندوز",
    requirements: "ويندوز 10 (19045+) أو ويندوز 11 · x64 · حوالي 220 ميغابايت",
  },
  footer: {
    tagline: "محطة عمل لتفسير المتغيرات في الجينوم البحثي. سطح مكتب ويندوز. بلا اتصال أولاً.",
    productLabel: "المنتج",
    docsLabel: "الوثائق",
    contactLabel: "الاتصال",
    download: "تحميل",
    features: "الميزات",
    faq: "الأسئلة الشائعة",
    gettingStarted: "بدء الاستخدام",
    catalog: "كتالوج المنتج",
    sla: "اتفاقية الخدمة",
    copyright: "© 2026 GenomicsOps. جميع الحقوق محفوظة.",
    ruo: "للبحوث فقط · ليس للتشخيص السريري",
  },
};

const zh: Translation = {
  nav: { features: "功能", tour: "产品之旅", faq: "常见问题", download: "下载" },
  hero: {
    badge: "仅供研究使用",
    h1: "可审计的变异解读。",
    subtitle: "面向基因组实验室的 Windows 桌面工作台。使用本地 ClinVar、gnomAD 和 MANE 离线运行。每条 ACMG 标准透明可查，每个分类结果可复现，数据永不离开本机。",
    ctaPrimary: "下载 Windows 版",
    ctaSecondary: "查看产品",
  },
  stats: {
    acmg: "在 12,644 个精选变异上与 ACMG 判断一致",
    cnv: "在 23 个 ClinGen 事件上的 CNV 打分结果",
    mane: "内置离线 MANE Select 转录本",
    offline: "核心注释所需的网络请求",
  },
  features: {
    label: "功能",
    title: "基因组实验室所需的一切。离线可用。",
    subtitle: "专为处理健康信息、运行在隔离网络、或不希望将变异数据上传到第三方服务器的实验室而构建。",
    items: [
      { title: "透明的 ACMG", body: "每个分类结果都精确显示触发了哪些标准、每条标准的证据、以及哪些因素会改变结论。无黑箱打分。" },
      { title: "CNV 与结构变异", body: "缺失、重复和倒位按 ClinGen / Riggs 2020 框架打分。第 1-3 节自动完成，第 4-5 节由策划人控制。" },
      { title: "家系与三人组遗传", body: "导入先证者与父母。每个变异的遗传模式自动计算并直接输入 ACMG 标准。" },
      { title: "队列分析", body: "对样本分组，运行 PCA 聚类、基因富集与共享变异分析。全部在同一个本地 SQLite 数据库上运行。" },
      { title: "Nextflow 流程运行器", body: "内置 nf-core 目录（sarek、rnaseq、demo），封装在 Docker 中，无需系统安装 Nextflow。" },
      { title: "报告与导出", body: "带每个变异 ACMG 证据的 PDF。FHIR R4、HL7 v2 ORU^R01，以及用于 LIMS 集成的自定义 JSON。" },
    ],
  },
  tour: {
    label: "产品之旅",
    title: "从安装到首次分类只需十五分钟。",
    subtitle: "无需云账号，首次运行无需下载参考数据。指向你现有的 ClinVar 和 gnomAD 数据库即可使用。",
    steps: [
      { title: "指向你的参考数据", body: "首次运行设置会询问本地 ClinVar 和 gnomAD 数据库的位置。无需云账号，无需凭据，无需上传。" },
      { title: "一眼纵览整个样本", body: "变异数量、质量指标、主要致病变异，以及每个变异的 MANE Select 转录本。" },
      { title: "处理变异列表", body: "按基因、后果或分类筛选。实时搜索。每一行都能打开完整 ACMG 面板而不丢失当前位置。" },
      { title: "离线许可证激活", body: "与机器指纹绑定的签名令牌。复制指纹、发送、取回令牌。无需回连服务器。" },
    ],
  },
  personas: {
    label: "适用对象",
    title: "为拥有自己数据的实验室构建。",
    items: [
      { title: "学术基因组实验室", body: "在工作站上运行完整的解读流程，无需依赖外部服务或 IT 提供的云账号。" },
      { title: "生物信息学核心设施", body: "为每位 PI 提供自助工作台。同一 ACMG 引擎、同一审计追踪，无按用户计费的云成本。" },
      { title: "生物技术研发团队", body: "将候选变异数据保留在本地。每个分类结果可复现、带哈希戳、可导出至你的 LIMS。" },
      { title: "临床实验室（研究用途）", body: "在采纳用于研究流程之前，用自己的精选语料评估 ACMG 引擎。" },
    ],
  },
  faq: {
    label: "常见问题",
    title: "常见问题解答",
    items: [
      { q: "它是临床工具吗？", a: "不是。GenomicsOps 仅供研究使用，不用于临床诊断、治疗或患者管理。分类遵循自动应用的 ACMG/AMP 2015 指南，须由合格的临床遗传学家在任何临床使用前验证。" },
      { q: "能离线使用吗？", a: "可以。桌面版完全在本机运行，使用本地 SQLite 数据库存放 ClinVar、gnomAD 和 NCBI MANE 参考。只有可选的富集功能（Ensembl VEP、PubMed）使用网络，均可禁用。" },
      { q: "ACMG 分类有多准确？", a: "在来自 ClinGen ERepo 的 12,644 个专家精选变异上，合并引擎与策划人最终分类的一致率为 95.8%：致病 97.9%，良性 98.8%，意义未明 91.6%。" },
      { q: "支持哪些操作系统？", a: "Windows 10（版本 19045 或更高）与 Windows 11，x64。macOS 和 Linux 已在规划中但尚未推出。" },
      { q: "许可证如何工作？", a: "许可证是绑定到机器指纹的加密签名令牌。激活完全离线：从许可证页面复制指纹，发送给我们，再把签名令牌粘贴回来。" },
      { q: "能与 PHI 一起使用吗？", a: "该应用设计用于匿名数据的研究用途。如处理 PHI，请启用全盘加密、限制操作系统账号，并遵循所在机构的 IRB 和 HIPAA 政策。" },
    ],
  },
  docs: {
    label: "文档",
    title: "买家在开口之前想要了解的一切。",
    subtitle: "无需留邮箱，PDF 不加门禁。安装前即可阅读或下载。",
    openPdf: "打开 PDF",
    items: [
      { title: "产品目录", body: "一页纸的能力概览、验证数据与系统要求。适合转发给 PI 或实验室主管。" },
      { title: "入门指南", body: "逐步安装与首次运行讲解。涵盖 VCF 导入、注释、ACMG 复核、报告与故障排查。" },
      { title: "服务级别协议", body: "商业许可证的支持渠道、响应时间承诺、更新政策与数据处理条款。" },
    ],
  },
  cta: {
    title: "用自己的变异试一试。",
    body: "免费评估。可在任何 Windows 工作站运行。无需账号、无上传、无云依赖。",
    button: "下载 Windows 版",
    requirements: "Windows 10（19045+）或 Windows 11 · x64 · 约 220 MB",
  },
  footer: {
    tagline: "面向研究基因组的变异解读工作台。Windows 桌面。离线优先。",
    productLabel: "产品",
    docsLabel: "文档",
    contactLabel: "联系",
    download: "下载",
    features: "功能",
    faq: "常见问题",
    gettingStarted: "入门",
    catalog: "产品目录",
    sla: "服务级别协议",
    copyright: "© 2026 GenomicsOps. 保留所有权利。",
    ruo: "仅供研究使用 · 不用于临床诊断",
  },
};

export const TRANSLATIONS: Record<Locale, Translation> = { en, fa, ar, zh };
