import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import { CtaBand, PageIntro } from '@/components/ui';
import { addressLine, business } from '@/lib/business';
import { breadcrumbSchema, JsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(`عن ${business.name}`, 'تعرف على زايد للديكورات والدهانات في حي المرسلات بالرياض، وطريقتنا في مناقشة الألوان والدهانات والتشطيبات المناسبة لكل مساحة.', '/about');

export default function AboutPage() {
  return <><PageIntro eyebrow="من نحن" title="لأن التفاصيل تغيّر شعور المكان." body={business.description} />
    <section className="section"><div className="container about-grid"><div className="about-grid__image"><Image src="/images/interior.webp" alt="مساحة داخلية بألوان جدران متناسقة" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="about-grid__copy"><span className="eyebrow">فكرة تناسب بيتك</span><h2>نسمع فكرتك، ثم نختار <em>تفاصيلها.</em></h2><p>تبدأ المساحة الجميلة من قرار واضح: ما الذي تريد تغييره؟ هل تحتاج لونًا جديدًا لجدران غرفة، أم تنسيقًا للواجهة، أم جدارًا يحمل لمسة مختلفة؟ نناقش احتياجك وطبيعة المكان قبل اختيار الدرجة أو التشطيب.</p><p>نركز في حديثنا معك على علاقة اللون بالضوء والأثاث وحالة السطح، وعلى نطاق العمل المطلوب للوصول إلى نتيجة منسجمة مع ذوقك.</p><Link className="text-link" href="/services">تعرف على الخدمات <ArrowLeft size={18} aria-hidden="true" /></Link></div></div></section>
    <section className="section section--muted"><div className="container about-values"><div><span className="eyebrow">ما يهمنا</span><h2>قرار مناسب <em>للمساحة.</em></h2></div><div><h3>فهم قبل اختيار اللون</h3><p>مساحة العمل وطبيعة الإضاءة والاستخدام اليومي عناصر تساعد في مناقشة الخيارات المناسبة.</p></div><div><h3>وضوح في نطاق العمل</h3><p>حالة الجدار والتجهيز المطلوب والتشطيب المرغوب تفاصيل تُناقش قبل التنفيذ.</p></div><div><h3>انسجام في اللمسة الأخيرة</h3><p>نهتم بأن تخدم الألوان والتفاصيل صورة المكان كاملة، لا أن تبدو عناصر منفصلة.</p></div></div></section>
    <section className="section"><div className="container address-panel"><div><span className="eyebrow">عنواننا المثبت</span><h2>في المرسلات، الرياض.</h2><p>{addressLine}</p></div><a className="button button--dark" href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> افتح الموقع على الخرائط</a></div></section>
    <CtaBand /><JsonLd value={breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'من نحن', path: '/about' }])} />
  </>;
}
