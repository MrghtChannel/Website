"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, AlertCircleIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactProps {
  discord?: string;
  email?: string;
  steam?: { label: string; url: string };
}

const Contact = ({
  discord = "mrghtchannel",
  email = "mrghtchannel@gmail.com",
  steam = { label: "https://st.com/ght", url: "https://steamcommunity.com/id/Mrghtchannel/" },
}: ContactProps) => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email.includes("@")) {
      setAlertMessage(t("contact.invalidEmail"));
      setAlertType("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setAlertMessage(data.message || t("contact.success"));
      setAlertType("success");
      setShowAlert(true);

      setForm({ firstname: "", lastname: "", email: "", subject: "", message: "" });
    } catch (err) {
      setAlertMessage(t("contact.failed"));
      setAlertType("error");
      setShowAlert(true);
    }

    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <section className="pt-57 pb-42">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">{t("contact.title")}</h1>
              <p className="text-muted-foreground">{t("contact.description")}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">{t("contact.detailsTitle")}</h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">{t("contact.discordLabel")}: </span>
                  {discord}
                </li>
                <li>
                  <span className="font-bold">{t("contact.emailLabel")}: </span>
                  <a href={`mailto:${email}`} className="underline">{email}</a>
                </li>
                <li>
                  <span className="font-bold">{t("contact.steamLabel")}: </span>
                  <a href={steam.url} target="_blank" className="underline">{steam.label}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
            {showAlert && (
              <Alert variant={alertType === "success" ? "default" : "destructive"}>
                {alertType === "success" ? <CheckCircle2Icon /> : <AlertCircleIcon />}
                <AlertTitle>{alertType === "success" ? t("contact.successTitle") : t("contact.errorTitle")}</AlertTitle>
                <AlertDescription>{alertMessage}</AlertDescription>
              </Alert>
            )}

            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">{t("contact.form.firstName")}</Label>
                <Input type="text" id="firstname" value={form.firstname} onChange={handleChange} placeholder={t("contact.form.firstName")} />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">{t("contact.form.lastName")}</Label>
                <Input type="text" id="lastname" value={form.lastname} onChange={handleChange} placeholder={t("contact.form.lastName")} />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">{t("contact.form.email")}</Label>
              <Input type="email" id="email" value={form.email} onChange={handleChange} placeholder={t("contact.form.email")} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">{t("contact.form.subject")}</Label>
              <Input type="text" id="subject" value={form.subject} onChange={handleChange} placeholder={t("contact.form.subject")} />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">{t("contact.form.message")}</Label>
              <Textarea id="message" value={form.message} onChange={handleChange} placeholder={t("contact.form.messagePlaceholder")} />
            </div>
            <Button className="w-full" onClick={handleSubmit}>{t("contact.form.send")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
