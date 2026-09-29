export const business = {
  name: 'زايد للديكورات والدهانات',
  phoneDisplay: '053 597 1142',
  phoneE164: '+966535971142',
  whatsapp: '966535971142',
  city: 'الرياض',
  description: 'زايد للديكورات والدهانات يقدم خدمات طلاء الجدران وأعمال الديكور في مواقع العملاء داخل الرياض على مدار الساعة. نبدأ بفهم احتياج العميل وطبيعة المساحة، ثم نوضح خيارات الألوان والتشطيبات ونطاق العمل قبل التنفيذ. نهتم بتناسق التفاصيل واللمسات النهائية لتخرج المساحة بالشكل الذي يناسب ذوقك. تواصل معنا لمناقشة مشروعك ومعرفة الخدمة المناسبة له.',
} as const;

export const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://zayed-decor-riyadh.vercel.app';
export const telHref = `tel:${business.phoneE164}`;
export const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent('مرحبًا، أود الاستفسار عن خدمات الدهانات والديكور في الرياض.')}`;
