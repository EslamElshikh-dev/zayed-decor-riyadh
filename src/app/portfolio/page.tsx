import { PortfolioGrid } from '@/components/portfolio-grid';
import { PageIntro } from '@/components/ui';
import { business } from '@/lib/business';
import { breadcrumbSchema, JsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(`معرض أعمال ${business.name} في الرياض`, 'صور منشورة في ملف زايد للديكورات والدهانات على خرائط Google، تشمل تفاصيل جدران وتشطيبات وديكورات داخلية في الرياض.', '/portfolio');

export default function PortfolioPage() {
  return <><PageIntro eyebrow="معرض الأعمال" title="تفاصيل تحكي حكاية المكان." body="تصفّح صورًا منشورة في ملف زايد للديكورات والدهانات، من تشطيبات الجدران إلى اللمسات الداخلية والإضاءة." /><PortfolioGrid /><JsonLd value={breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'معرض الأعمال', path: '/portfolio' }])} /></>;
}
