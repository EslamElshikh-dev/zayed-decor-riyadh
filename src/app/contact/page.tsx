import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { PageIntro, WhatsappIcon } from '@/components/ui';
import { business, telHref, whatsappHref } from '@/lib/business';
import { breadcrumbSchema, JsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(`تواصل مع ${business.name}`, `اتصل أو راسل ${business.name} لخدمات الدهانات والديكورات في مواقع العملاء داخل الرياض. الهاتف: ${business.phoneDisplay}. متاحون على مدار الساعة.`, '/contact');

export default function ContactPage() {
  return <><PageIntro eyebrow="تواصل معنا" title="فكرتك تبدأ بمحادثة." body="أرسل لنا نوع الخدمة وصور المساحة والحي داخل الرياض، أو اتصل بنا لنناقش التفاصيل." />
    <section className="section"><div className="container contact-grid"><a className="contact-card" href={telHref}><span className="contact-card__icon"><Phone size={27} aria-hidden="true" /></span><span className="eyebrow">اتصال مباشر</span><h2 dir="ltr">{business.phoneDisplay}</h2><p>تواصل معنا هاتفيًا لعرض تفاصيل طلبك.</p><span className="text-link">اتصل الآن <ExternalLink size={16} aria-hidden="true" /></span></a><a className="contact-card" href={whatsappHref} target="_blank" rel="noopener noreferrer"><span className="contact-card__icon contact-card__icon--green"><WhatsappIcon size={27} /></span><span className="eyebrow">رسالة واتساب</span><h2>ارسل تفاصيل المساحة</h2><p>صور الجدران، نوع العمل، والحي تساعدنا نفهم طلبك.</p><span className="text-link">افتح واتساب <ExternalLink size={16} aria-hidden="true" /></span></a><div className="contact-card"><span className="contact-card__icon"><MapPin size={27} aria-hidden="true" /></span><span className="eyebrow">نطاق الخدمة</span><h2>الرياض</h2><p>نصل إليك في موقع العمل داخل الرياض. لا يوجد مقر لاستقبال الزوار.</p><span className="text-link">متاحون على مدار الساعة</span></div></div></section>
    <section className="section section--muted"><div className="container contact-note"><div><span className="eyebrow">لتكون المحادثة أوضح</span><h2>وش ترسل لنا؟</h2></div><ol><li>صور واضحة للمساحة أو الجدار.</li><li>نوع الخدمة والنتيجة التي ترغب فيها.</li><li>الحي داخل الرياض والمساحة التقريبية إن توفرت.</li></ol></div></section>
    <JsonLd value={breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'تواصل معنا', path: '/contact' }])} />
  </>;
}
