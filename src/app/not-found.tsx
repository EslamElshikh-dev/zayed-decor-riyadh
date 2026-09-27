import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() { return <section className="not-found container"><span className="eyebrow">404</span><h1>الصفحة غير موجودة.</h1><p>قد يكون الرابط تغيّر. يمكنك العودة للصفحة الرئيسية واستعراض خدماتنا.</p><Link className="button button--dark" href="/">العودة للرئيسية <ArrowLeft size={18} aria-hidden="true" /></Link></section>; }
