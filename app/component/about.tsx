'use client';

import React, { useEffect, useState } from "react";
import Terminal from "./terminal";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const getInitialLanguage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  };

  const [language ] = useState(getInitialLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <div id="about" className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20 overflow-hidden">
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-stretch justify-between">
          <div className="mb-16 text-center lg:mb-0 lg:max-w-lg lg:text-left flex flex-col justify-center">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-4 inline-block rounded-full bg-[#5677F8] px-3 py-px text-sm font-semibold tracking-wider text-white">
                  {t("about_me.title")}
                </p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                {t("about_me.intro")} <br />
                ---&gt;
                <span className="inline-block text-[#5677F8]">MrghtChannel</span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {t("about_me.description")}
              </p>
            </div>
          </div>

          <figure className="relative z-[1] w-full h-[400px] max-w-[50rem] flex flex-col justify-between shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg overflow-hidden">
            <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
              <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                <span className="size-2 bg-red-500 rounded-full dark:bg-red-600"></span>
                <span className="size-2 bg-yellow-500 rounded-full dark:bg-yellow-600"></span>
                <span className="size-2 bg-green-500 rounded-full dark:bg-green-600"></span>
              </div>
              <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
                www.mrghtchannel.com
              </div>
            </div>

            <div className="bg-gray-800 rounded-b-lg">
              <Terminal />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
