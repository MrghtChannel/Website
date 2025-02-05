"use client";

import { FaPhone, FaEnvelope, FaCommentDots, FaQuestionCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  const contactMethods = [
    { title: t("contact.HelpCenter"), icon: <FaQuestionCircle size={30} />, description: t("contact.GotAQuestion"), link: "https://t.me/MrghtChannel_BOT" },
    { title: t("contact.SpeakWithUs"), icon: <FaPhone size={30} />, description: t("contact.GotAQuestion"), link: "https://www.youtube.com/watch?v=xvFZjo5PgG0" },
    { title: t("contact.ChatWithUs"), icon: <FaCommentDots size={30} />, description: t("contact.GotAQuestion"), link: "https://t.me/mrghtchannnel" },
    { title: t("contact.EmailUsNow"), icon: <FaEnvelope size={30} />, description: t("contact.GotAQuestion"), link: "mailto:sup.lightght@gmail.com" },
  ];

  return (
    <div id="contact" className="flex flex-col items-center py-12 px-6">
      <div className="max-w-2xl mx-auto text-center mb-4">
        <div className="flex items-center justify-center mb-2">
          <div className="w-4 h-1" style={{ backgroundColor: "#5677F8" }}></div>
          <h3 className="text-xl font-semibold text-gray-600 mb-0">{t("contact.Contact")}</h3>
        </div>
      </div>
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
        {t("contact.TechnicalIssue")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-center justify-between bg-white border border-gray-200 p-6 rounded-xl transition-all hover:bg-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-[#5677F7] text-white p-4 rounded-full">
                {method.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{method.title}</h3>
                <p className="text-gray-500 text-base">{method.description}</p>
              </div>
            </div>
            <a href={method.link} className="bg-[#5677F7] text-white px-6 py-3 rounded-full text-lg font-semibold transition-all hover:bg-[#4566d9]">
              {t("contact.Contact")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
