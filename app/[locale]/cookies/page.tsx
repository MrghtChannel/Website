'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import GrindBg from "@/components/background/gridbackground";

export default function CookiesPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <GrindBg>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('page.cookies.title')}</h1>
        <section className="prose prose-lg text-center">
          <p>{t('page.cookies.description')}</p>
          
          <h2 className="mt-6">{t('page.cookies.types')}</h2>
          <ul className="list-disc list-inside text-left sm:text-center">
            <li>{t('page.cookies.essential')}</li>
            <li>{t('page.cookies.analytics')}</li>
            <li>{t('page.cookies.marketing')}</li>
          </ul>

          <h2 className="mt-6">{t('page.cookies.managing')}</h2>
          <p>{t('page.cookies.managing_description')}</p>
        </section>
      </div>
    </GrindBg>
  );
}
