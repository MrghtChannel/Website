"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  archived: boolean;
}

export const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const { t } = useTranslation();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();
        const sorted = data
          .sort(
            (a: Repo, b: Repo) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, 9);
        setRepos(sorted);
      } catch (err) {
        console.error("Failed to fetch repositories:", err);
      } finally {
        setLoading(false);
      }
    };
    if (username) fetchRepos();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">{t("projects.loading")}</p>
      </div>
    );
  }

  return (
    <section className="py-32">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
          {t("projects.title")}
        </h2>
        <p className="font-medium text-muted-foreground md:text-xl">
          {t("projects.description")}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {repos.map((repo) => (
          <a
            key={repo.id}
            className="group rounded-md border border-border p-6 transition-all hover:bg-accent flex flex-col justify-between"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-lg">{repo.name}</h3>
                <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>

              {repo.description && (
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                  {repo.description}
                </p>
              )}
            </div>

            <span className="mt-3 text-xs font-medium text-primary">
              {repo.archived ? t("projects.publicArchive") : repo.language ?? "—"}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
