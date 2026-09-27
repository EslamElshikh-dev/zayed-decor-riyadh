'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpLeft, ChevronLeft, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { whatsappHref } from '@/lib/business';
import { siteLinks as links } from '@/lib/navigation';

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isOpen]);

  const active = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return <>
    <nav className="desktop-nav" aria-label="التنقل الرئيسي">
      {links.map(item => <Link key={item.href} href={item.href} aria-current={active(item.href) ? 'page' : undefined} className={active(item.href) ? 'is-current' : undefined}>{item.label}</Link>)}
    </nav>
    <a className="header-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">اطلب استشارة <ArrowUpLeft size={17} aria-hidden="true" /></a>
    <div className="mobile-menu">
      <button className="mobile-menu__trigger" type="button" aria-label={isOpen ? 'أغلق القائمة' : 'افتح القائمة'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(value => !value)}>{isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}</button>
      {isOpen && <nav id="mobile-navigation" aria-label="التنقل للجوال">
        {links.map(item => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} aria-current={active(item.href) ? 'page' : undefined}>{item.label}<ChevronLeft size={17} aria-hidden="true" /></Link>)}
        <a className="mobile-menu__cta" href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>اطلب استشارة <ArrowUpLeft size={17} aria-hidden="true" /></a>
      </nav>}
    </div>
  </>;
}
