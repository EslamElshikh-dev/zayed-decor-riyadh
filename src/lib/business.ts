export const business = {
  name: 'زايد للديكورات والدهانات',
  phoneDisplay: '053 597 1142',
  phoneE164: '+966535971142',
  whatsapp: '966535971142',
  streetAddress: '7973 محمد بن عبدالله بن عبداللطيف',
  neighborhood: 'المرسلات',
  postalCode: '12463',
  additionalCode: '2385',
  city: 'الرياض',
  country: 'SA',
  latitude: 24.751574,
  longitude: 46.683131,
  mapsUrl: 'https://www.google.com/maps/place/%D8%B2%D8%A7%D9%8A%D8%AF+%D9%84%D9%84%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA+%D9%88%D8%A7%D9%84%D8%AF%D9%87%D8%A7%D9%86%D8%A7%D8%AA%E2%80%AD/@24.751574,46.683131,17z/data=!4m6!3m5!1s0x956c3079b86abdb:0x1a5628572ad40c83!8m2!3d24.751574!4d46.683131!16s%2Fg%2F11nw7v7mp9',
  description: 'زايد للديكورات والدهانات يقدم خدمات طلاء الجدران وأعمال الديكور في الرياض. نبدأ بفهم احتياج العميل وطبيعة المساحة، ثم نوضح خيارات الألوان والتشطيبات ونطاق العمل قبل التنفيذ. نهتم بتناسق التفاصيل واللمسات النهائية لتخرج المساحة بالشكل الذي يناسب ذوقك. تواصل معنا لمناقشة مشروعك ومعرفة الخدمة المناسبة له.',
} as const;

export const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://zayed-decor-riyadh.vercel.app';
export const telHref = `tel:${business.phoneE164}`;
export const whatsappHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent('مرحبًا، أود الاستفسار عن خدمات الدهانات والديكور في الرياض.')}`;
export const addressLine = `${business.streetAddress}، ${business.neighborhood}، ${business.additionalCode}، ${business.city} ${business.postalCode}`;
