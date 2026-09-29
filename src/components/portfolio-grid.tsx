import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import { business } from '@/lib/business';
import { portfolio } from '@/lib/portfolio';

export function PortfolioGrid({ preview = false }: { preview?: boolean }) {
  return <section className="section portfolio-section" id="portfolio"><div className="container">
    <div className="section-heading"><div><span className="eyebrow">من صور ملفنا التجاري</span><h2>تفاصيل من <em>أعمالنا.</em></h2><p>لقطات منشورة على ملف {business.name} في خرائط Google، بين تفاصيل مكتملة ومراحل عمل.</p></div>{preview && <Link className="outline-link" href="/portfolio">شاهد المعرض كاملًا <ArrowUpLeft size={18} aria-hidden="true" /></Link>}</div>
    <div className={`portfolio-grid ${preview ? 'portfolio-grid--preview' : ''}`}>{(preview ? portfolio.slice(0, 4) : portfolio).map((item, index) => <figure className="portfolio-card" key={item.image}><div className="portfolio-card__image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" quality={82} /></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{item.title}</figcaption></figure>)}</div>
    <div className="portfolio-section__source"><span>صور من أعمال الدهانات والديكور في الرياض.</span></div>
  </div></section>;
}
