import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpLeft, Check, MapPin, Paintbrush, Phone, Sparkles, SwatchBook } from 'lucide-react';
import { Breadcrumb, CtaBand, FaqList, ServiceCard, WhatsappIcon } from '@/components/ui';
import { PortfolioGrid } from '@/components/portfolio-grid';
import { business, origin, telHref, whatsappHref } from '@/lib/business';
import { commonFaqs, services } from '@/lib/services';
import { JsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(`${business.name} | دهانات وديكورات في الرياض`, 'دهانات داخلية وخارجية وديكورات جدران في مواقع العملاء داخل الرياض. تواصل مع زايد للديكورات والدهانات على مدار الساعة.', '/');

export default function HomePage() {
  return <>
    <section className="hero"><div className="hero__image"><Image src="/images/interior.webp" alt="غرفة معيشة بألوان جدران هادئة" fill priority quality={82} sizes="(max-width: 800px) 100vw, 62vw" /></div>
      <div className="container hero__container"><div className="hero__panel"><span className="eyebrow eyebrow--light"><span className="eyebrow__line" /> زايد للديكورات والدهانات · الرياض</span><h1>المكان يبدأ<br />من <em>تفاصيله.</em></h1><p>دهانات وديكورات جدران تُختار بما يناسب مساحتك، إضاءتها وذوقك. نبدأ بفهم فكرتك، ثم نناقش الألوان والتشطيب والخطوات المناسبة.</p><div className="hero__actions"><a href={whatsappHref} className="button button--cream" target="_blank" rel="noopener noreferrer"><WhatsappIcon size={19} /> تواصل عبر واتساب</a><Link className="button button--text-light" href="/services">استكشف خدماتنا <ArrowLeft size={19} aria-hidden="true" /></Link></div><div className="hero__meta"><span><MapPin size={17} aria-hidden="true" /> نخدم الرياض في مواقع العملاء</span><span className="hero__meta-sep" /><a href={telHref} dir="ltr"><Phone size={16} aria-hidden="true" /> {business.phoneDisplay}</a></div></div></div>
      <div className="hero__side-label" aria-hidden="true">لون يليق بكل مساحة <span>01 / 03</span></div>
    </section>

    <section className="intro-section section"><div className="container intro-grid"><div className="intro-grid__heading"><span className="eyebrow">عن زايد</span><h2>تفاصيل صغيرة،<br /><em>فرق واضح.</em></h2></div><div className="intro-grid__body"><p>{business.description}</p><Link className="text-link" href="/about">تعرّف علينا <ArrowLeft size={17} aria-hidden="true" /></Link></div><div className="intro-grid__sign" aria-hidden="true">ز</div></div></section>

    <section className="section services-section" id="services"><div className="container"><div className="section-heading"><div><span className="eyebrow">خدماتنا في الرياض</span><h2>لكل جدار <em>حكاية لون.</em></h2><p>حلول دهانات وتنسيق جدران تبدأ من طبيعة المكان والنتيجة التي تتخيلها.</p></div><Link className="outline-link" href="/services">عرض جميع الخدمات <ArrowUpLeft size={19} aria-hidden="true" /></Link></div><div className="service-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div></div></section>

    <PortfolioGrid preview />

    <section className="process-section section"><div className="container process-grid"><div className="process-copy"><span className="eyebrow">من الفكرة إلى اللمسة الأخيرة</span><h2>وضوح في كل <em>خطوة.</em></h2><p>نناقش التفاصيل الأساسية قبل أي اختيار: مساحة العمل، حالة الجدران، اللون والتشطيب المناسبان. هذا يساعد على تحديد نطاق العمل بما يلائم مشروعك.</p><Link className="text-link" href="/contact">تواصل معنا <ArrowLeft size={17} aria-hidden="true" /></Link></div><div className="process-steps"><div><span className="step-icon"><SwatchBook size={27} aria-hidden="true" /></span><strong>نفهم فكرتك</strong><p>نسمع ما تريد تغييره ونطّلع على صور المساحة وحالتها.</p></div><div><span className="step-icon"><Paintbrush size={27} aria-hidden="true" /></span><strong>نحدد التفاصيل</strong><p>نناقش درجات الألوان والتشطيب ونطاق التحضير.</p></div><div><span className="step-icon"><Sparkles size={27} aria-hidden="true" /></span><strong>نراجع النتيجة</strong><p>نهتم بتناسق الجدران واللمسات النهائية ضمن العمل المتفق عليه.</p></div></div></div></section>

    <section className="location-section section"><div className="container location-grid"><div className="location-card"><div className="location-card__ornament" aria-hidden="true">ز</div><span className="eyebrow eyebrow--light">نطاق خدمتنا في الرياض</span><h2>نصل إليك،<br />أينما كان مشروعك.</h2><p>نعمل في مواقع العملاء داخل الرياض على مدار الساعة. أخبرنا بالحي ونوع العمل لنناقش تفاصيل مشروعك.</p><Link className="button button--cream" href="/contact"><MapPin size={18} aria-hidden="true" /> اطلب الخدمة في موقعك</Link></div><div className="location-image"><Image src="/images/decorative.webp" alt="جدار ديكوري بملمس هادئ" fill sizes="(max-width: 800px) 100vw, 50vw" quality={80} /></div></div></section>

    <section className="section faq-section"><div className="container faq-grid"><div><span className="eyebrow">أسئلة تساعدك تبدأ</span><h2>الأجوبة تبدأ<br /><em>من هنا.</em></h2><p>أهم ما تحتاج معرفته قبل التواصل، ومزيد من التفاصيل في صفحات الخدمات.</p><Link className="text-link" href="/faq">جميع الأسئلة <ArrowLeft size={17} aria-hidden="true" /></Link></div><FaqList items={commonFaqs.slice(0, 4)} /></div></section>
    <CtaBand />
    <JsonLd value={{ '@context': 'https://schema.org', '@type': 'WebSite', name: business.name, url: origin, inLanguage: 'ar-SA' }} />
  </>;
}
