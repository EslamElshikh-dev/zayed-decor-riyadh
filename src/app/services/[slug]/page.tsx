import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, MapPin } from 'lucide-react';
import { Breadcrumb, CtaBand, FaqList, ServiceCard } from '@/components/ui';
import { business, origin } from '@/lib/business';
import { services } from '@/lib/services';
import { breadcrumbSchema, JsonLd, pageMetadata } from '@/lib/seo';

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) return {};
  return pageMetadata(service.keyword, `${service.summary} تعرف على خطوات العمل والأسئلة الشائعة، وتواصل مع ${business.name} في الرياض.`, `/services/${slug}`, service.image.replace('.webp', '-og.jpg'));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();
  const otherServices = services.filter(item => item.slug !== slug);
  return <>
    <section className="service-hero"><div className="container"><Breadcrumb items={[{ label: 'الخدمات', href: '/services' }, { label: service.title }]} /><div className="service-hero__grid"><div className="service-hero__text"><span className="eyebrow">{service.eyebrow} · الرياض</span><h1>{service.keyword}</h1><p>{service.introduction}</p><a className="button button--dark" href="#details">اكتشف التفاصيل <ArrowLeft size={18} aria-hidden="true" /></a></div><div className="service-hero__image"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 53vw" quality={82} /><span className="image-note">صورة توضيحية</span></div></div></div></section>
    <section className="section" id="details"><div className="container detail-grid"><div><span className="eyebrow">متى تختار هذه الخدمة؟</span><h2>عندما يحتاج المكان<br /><em>نظرة جديدة.</em></h2><p className="detail-lede">لكل مشروع ظروفه ومساحته. هذه أمثلة تساعدك على وصف احتياجك عند التواصل:</p></div><ul className="feature-list">{service.suitableFor.map(item => <li key={item}><span><Check size={17} aria-hidden="true" /></span>{item}</li>)}</ul></div></section>
    <section className="section process-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">طريقة مناقشة العمل</span><h2>من أول فكرة <em>إلى تفاصيلها.</em></h2><p>الخطوات التالية توضح كيف ننظم الحديث عن مشروع {service.title} قبل تحديد نطاقه.</p></div></div><div className="four-steps">{service.steps.map((step, index) => <div key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.body}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">ما الذي يصنع الفرق؟</span><h2>قبل أن تختار <em>اللون.</em></h2></div></div><div className="detail-cards">{service.details.map(detail => <article key={detail.title}><span className="detail-cards__line" /><h3>{detail.title}</h3><p>{detail.body}</p></article>)}</div></div></section>
    <section className="section faq-section"><div className="container faq-grid"><div><span className="eyebrow">أسئلة عن {service.title}</span><h2>توضيح يساعدك<br /><em>تقرر.</em></h2><p>أجوبة عامة تساعدك في اختيار الاتجاه، والتفاصيل الدقيقة تتضح بعد معاينة حالة السطح ومناقشة طلبك.</p><Link className="text-link" href="/faq">المزيد من الأسئلة <ArrowLeft size={17} aria-hidden="true" /></Link></div><FaqList items={service.faqs} /></div></section>
    <section className="section other-services"><div className="container"><div className="section-heading"><div><span className="eyebrow">قد يهمك أيضًا</span><h2>مسارات أخرى <em>للمساحة.</em></h2></div></div><div className="service-grid service-grid--two">{otherServices.map((item, index) => <ServiceCard service={item} index={index} key={item.slug} />)}</div></div></section>
    <CtaBand title={`ناقش معنا ${service.title} في الرياض`} body="أرسل صورة واضحة للمكان والحي والمساحة التقريبية، ونوضح لك الخيارات المناسبة." />
    <JsonLd value={breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'الخدمات', path: '/services' }, { name: service.title, path: `/services/${slug}` }])} />
    <JsonLd value={{ '@context': 'https://schema.org', '@type': 'Service', '@id': `${origin}/services/${slug}#service`, name: service.title, description: service.introduction, image: `${origin}${service.image}`, areaServed: { '@type': 'City', name: 'الرياض' }, provider: { '@id': `${origin}/#business` }, url: `${origin}/services/${slug}` }} />
  </>;
}
