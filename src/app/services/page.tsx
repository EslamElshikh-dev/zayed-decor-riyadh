import { CtaBand, PageIntro, ServiceCard } from '@/components/ui';
import { services } from '@/lib/services';
import { breadcrumbSchema, JsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('خدمات الدهانات والديكور في الرياض', 'تعرف على خدمات الدهانات الداخلية والخارجية وديكورات الجدران من زايد للديكورات والدهانات بالرياض، واختر الخدمة الأنسب لمساحتك.', '/services');

export default function ServicesPage() {
  return <><PageIntro eyebrow="خدماتنا" title="دهانات وديكورات تناسب كل مساحة." body="من جدران الغرف إلى الواجهات واللمسات الجدارية، تعرف على أنواع العمل التي يمكنك مناقشتها معنا في الرياض." /><section className="section section--tight"><div className="container"><div className="service-grid">{services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}</div><p className="illustrative-note">الصور المعروضة توضيحية للأفكار والتشطيبات، وليست صورًا لمشاريع منفذة.</p></div></section><CtaBand title="حددت الخدمة المناسبة؟" body="أرسل تفاصيل المساحة وصورها وموقعها داخل الرياض، ونناقش معك نطاق العمل." /><JsonLd value={breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'الخدمات', path: '/services' }])} /></>;
}
