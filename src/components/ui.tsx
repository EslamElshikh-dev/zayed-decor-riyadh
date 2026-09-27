import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpLeft, MapPin, Phone, Menu, Instagram, ChevronLeft } from 'lucide-react';
import { addressLine, business, telHref, whatsappHref } from '@/lib/business';
import type { FAQ, Service } from '@/lib/services';

const nav = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/faq', label: 'أسئلة شائعة' },
  { href: '/contact', label: 'تواصل معنا' },
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`brand ${inverse ? 'brand--inverse' : ''}`} aria-label={`${business.name}، الصفحة الرئيسية`}>
    <span className="brand__mark" aria-hidden="true"><span>ز</span></span>
    <span className="brand__text"><strong>زايد</strong><small>للديكورات والدهانات</small></span>
  </Link>;
}

export function Header() {
  return <header className="site-header">
    <div className="site-header__top"><div className="container top-row"><span><MapPin size={14} aria-hidden="true" /> المرسلات، الرياض</span><a href={telHref} dir="ltr"><Phone size={14} aria-hidden="true" /> {business.phoneDisplay}</a></div></div>
    <div className="container header-row">
      <Brand />
      <nav className="desktop-nav" aria-label="التنقل الرئيسي">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <a className="header-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">اطلب استشارة <ArrowUpLeft size={17} aria-hidden="true" /></a>
      <details className="mobile-menu"><summary aria-label="افتح القائمة"><Menu size={25} aria-hidden="true" /></summary><nav aria-label="التنقل للجوال">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}<ChevronLeft size={17} aria-hidden="true" /></Link>)}</nav></details>
    </div>
  </header>;
}

export function WhatsappIcon({ size = 25 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" role="img" aria-label="واتساب"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.273.297-1.04 1.016-1.04 2.478s1.065 2.874 1.213 3.072c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.49 1.693.627.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.255h-.004a9.936 9.936 0 0 1-5.067-1.387l-.363-.214-3.765.987 1.005-3.671-.236-.376a9.929 9.929 0 0 1-1.524-5.3C2.098 6.173 6.173 2.1 11.999 2.1a9.887 9.887 0 0 1 7.021 2.909 9.886 9.886 0 0 1 2.907 7.03c-.002 5.826-4.076 9.9-9.9 9.9m8.419-18.318A11.892 11.892 0 0 0 12.002 0C5.383 0 .005 5.376.002 11.995a11.95 11.95 0 0 0 1.603 5.988L0 24l6.196-1.627a11.992 11.992 0 0 0 5.802 1.478h.005c6.618 0 11.997-5.376 12-11.995a11.89 11.89 0 0 0-3.512-8.449" /></svg>;
}

export function FloatingActions() {
  return <aside className="floating-actions" aria-label="تواصل سريع">
    <a className="floating-actions__whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب" title="واتساب"><WhatsappIcon size={27} /></a>
    <a className="floating-actions__phone" href={telHref} aria-label={`اتصل بنا على ${business.phoneDisplay}`} title="اتصل بنا"><Phone size={24} strokeWidth={2.2} aria-hidden="true" /></a>
  </aside>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-intro"><Brand inverse /><p>ألوان مدروسة، تفاصيل متناسقة، ومساحة تعكس ذوقك. دهانات وديكورات في الرياض.</p></div>
      <div><h2>استكشف الموقع</h2><ul>{nav.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></div>
      <div><h2>الخدمات</h2><ul><li><Link href="/services/interior-painting">الدهانات الداخلية</Link></li><li><Link href="/services/exterior-painting">الدهانات الخارجية</Link></li><li><Link href="/services/decorative-walls">ديكورات الجدران</Link></li></ul></div>
      <div><h2>تواصل معنا</h2><address><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17} aria-hidden="true" />{addressLine}</a><a href={telHref} dir="ltr"><Phone size={17} aria-hidden="true" />{business.phoneDisplay}</a></address></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}. جميع الحقوق محفوظة.</span><span>تصميم وتطوير: <strong>إسلام الشيخ</strong></span></div>
  </div></footer>;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return <article className="service-card"><Link href={`/services/${service.slug}`} className="service-card__link" aria-label={`تفاصيل ${service.title}`}>
    <div className="service-card__image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={78} /><span className="service-card__number">{String(index + 1).padStart(2, '0')}</span><span className="image-note image-note--card">صورة توضيحية</span></div>
    <div className="service-card__content"><span className="eyebrow">{service.eyebrow}</span><h3>{service.title}</h3><p>{service.summary}</p><span className="text-link">اكتشف الخدمة <ArrowLeft size={17} aria-hidden="true" /></span></div>
  </Link></article>;
}

export function FaqList({ items }: { items: FAQ[] }) {
  return <div className="faq-list">{items.map((item, index) => <details className="faq-item" key={item.question} open={index === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>;
}

export function CtaBand({ title = 'جاهز تبدأ تغيير مساحتك؟', body = 'قل لنا وش تحتاج، وشاركنا صور المساحة والحي داخل الرياض لنناقش تفاصيل مشروعك.' }: { title?: string; body?: string }) {
  return <section className="cta-band"><div className="container cta-band__inner"><div><span className="eyebrow eyebrow--light">خلّنا نبدأ من التفاصيل</span><h2>{title}</h2><p>{body}</p></div><div className="cta-band__actions"><a className="button button--cream" href={whatsappHref} target="_blank" rel="noopener noreferrer"><WhatsappIcon size={20} /> راسلنا عبر واتساب</a><a className="button button--outline-light" href={telHref}><Phone size={19} aria-hidden="true" /> اتصال مباشر</a></div></div></section>;
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumb" aria-label="مسار الصفحة"><Link href="/">الرئيسية</Link>{items.map((item, i) => <span key={i}><ChevronLeft size={15} aria-hidden="true" />{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}

export function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <div className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{body}</p></div></div>;
}
