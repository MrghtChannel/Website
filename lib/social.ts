"use client";

import React from "react";
import {
  FaTwitter,
  FaTelegram,
  FaFacebook,
  FaGithub,
  FaReddit,
  FaInstagram,
  FaDiscord,
  FaMastodon,
  FaTwitch,
  FaTiktok,
} from "react-icons/fa6";
import { FaBluesky, FaSquareThreads } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export interface SocialItem {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
}

export const useSocialLinks = (): SocialItem[] => {
  const { t } = useTranslation();

  return [
    {
      name: "Twitter",
      href: "https://x.com/mrghtchannel",
      icon: FaTwitter,
      description: t("social.twitter"),
    },
    {
      name: "Telegram",
      href: "https://t.me/mrghtchannel",
      icon: FaTelegram,
      description: t("social.telegram"),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100089807778533",
      icon: FaFacebook,
      description: t("social.facebook"),
    },
    {
      name: "Github",
      href: "https://github.com/mrghtchannel",
      icon: FaGithub,
      description: t("social.github"),
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/user/MrghtChannel/",
      icon: FaReddit,
      description: t("social.reddit"),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mrghtchannel",
      icon: FaInstagram,
      description: t("social.instagram"),
    },
    {
      name: "Bluesky",
      href: "https://bsky.app/profile/mrghtchannel.bsky.social",
      icon: FaBluesky,
      description: t("social.bluesky"),
    },
    {
      name: "Threads",
      href: "https://threads.com/mrghtchannel",
      icon: FaSquareThreads,
      description: t("social.threads"),
    },
    {
      name: "Discord",
      href: "https://discord.gg/4Wq3rRMtS3",
      icon: FaDiscord,
      description: t("social.discord"),
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@mrghtchannel",
      icon: FaMastodon,
      description: t("social.mastodon"),
    },
    {
      name: "Twitch",
      href: "https://twitch.tv/mrghtchannel",
      icon: FaTwitch,
      description: t("social.twitch"),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@mrghtchannel",
      icon: FaTiktok,
      description: t("social.tiktok"),
    },
  ];
};
