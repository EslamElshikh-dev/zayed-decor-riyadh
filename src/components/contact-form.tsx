'use client';

import type { FormEvent } from 'react';
import { Send } from 'lucide-react';
import { business } from '@/lib/business';

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = {
      name: String(data.get('name') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      service: String(data.get('service') || '').trim(),
      area: String(data.get('area') || '').trim(),
      details: String(data.get('details') || '').trim(),
    };
    const message = [
      `مرحبًا ${business.name}، أود الاستفسار عن مشروع في الرياض.`,
      `الاسم: ${fields.name}`,
      fields.phone && `رقم التواصل: ${fields.phone}`,
      `الخدمة: ${fields.service}`,
      `الحي: ${fields.area}`,
      `تفاصيل الطلب: ${fields.details}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return <form className="inquiry-form" onSubmit={handleSubmit}>
    <div className="inquiry-form__row">
      <label>الاسم <input name="name" type="text" autoComplete="name" placeholder="اسمك الكريم" maxLength={80} required /></label>
      <label>رقم التواصل <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="05xxxxxxxx" maxLength={20} dir="ltr" /></label>
    </div>
    <div className="inquiry-form__row">
      <label>الخدمة المطلوبة <select name="service" defaultValue="" required><option value="" disabled>اختر الخدمة</option><option>الدهانات الداخلية</option><option>الدهانات الخارجية</option><option>ديكورات الجدران</option><option>استفسار عن مشروع</option></select></label>
      <label>الحي داخل الرياض <input name="area" type="text" placeholder="مثال: المرسلات" maxLength={80} required /></label>
    </div>
    <label>احكِ لنا عن فكرتك <textarea name="details" rows={4} placeholder="صف المساحة وحالة الجدار واللون أو اللمسة التي ترغب فيها" maxLength={1000} required /></label>
    <button className="button button--dark inquiry-form__submit" type="submit">جهّز الرسالة عبر واتساب <Send size={18} aria-hidden="true" /></button>
    <p className="inquiry-form__notice">ستُفتح رسالة واتساب لتراجعها وترسلها بنفسك. لا تُحفظ بيانات النموذج على الموقع.</p>
  </form>;
}
