import Link from 'next/link';
import { CtaBand, FaqList, PageIntro } from '@/components/ui';
import { commonFaqs, services } from '@/lib/services';
import { breadcrumbSchema, JsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('الأسئلة الشائعة عن الدهانات والديكور في الرياض', 'إجابات عملية عن الدهانات الداخلية والخارجية وديكورات الجدران، وطريقة التواصل مع زايد للديكورات والدهانات في الرياض.', '/faq');

export default function FaqPage() {
  return <><PageIntro eyebrow="الأسئلة الشائعة" title="إجابات تساعدك تختار بثقة." body="جمعنا أسئلة عن الخدمات، تحضير الجدران، اختيار الألوان، وطريقة التواصل في الرياض." /><div className="container faq-page"><section className="faq-page__section"><div><span className="eyebrow">معلومات عامة</span><h2>عن النشاط والتواصل</h2></div><FaqList items={commonFaqs} /></section>{services.map(service => <section className="faq-page__section" key={service.slug}><div><span className="eyebrow">{service.title}</span><h2>ما تحتاج معرفته</h2><Link className="text-link" href={`/services/${service.slug}`}>تفاصيل الخدمة ←</Link></div><FaqList items={service.faqs} /></section>)}</div><CtaBand /><JsonLd value={breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'الأسئلة الشائعة', path: '/faq' }])} /></>;
}
