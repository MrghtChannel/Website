'use client';

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
};

const GitHubProjects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getInitialLanguage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/MrghtChannel/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error: any) {
        setError(t("github.FetchError"));
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [t]);

  return (
    <section id="projects" className="relative py-10 bg-gray-50 sm:py-16 lg:py-24 rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center -mt-80">
        <h1 className="text-7xl sm:text-9xl font-bold text-gray-200 opacity-30 select-none">
          Explore My GitHub Projects
        </h1>
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-1" style={{ backgroundColor: "#5677F8" }}></div>
            <h3 className="text-xl font-semibold text-gray-600">{t("github.Repositories")}</h3>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {t("github.ExploreProjects")}
          </h2>
          <p className="mt-1 text-lg text-gray-500">
            {t("github.CheckRepos")}
          </p>
        </div>

        <div id="repos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out overflow-hidden relative"
                style={{
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "15px",
                  width: "400px",
                  height: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3 className="text-xl font-semibold text-gray-700" style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {repo.description || t("github.NoDescription")}
                </p>

                <div className="absolute top-2 right-2 text-xl text-black hover:text-gray-700 mt-2">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4568_566)">
                      <path
                        d="M10.5 6V8H5.5V19H16.5V14H18.5V20C18.5 20.2652 18.3946 20.5196 18.2071 20.7071C18.0196 20.8946 17.7652 21 17.5 21H4.5C4.23478 21 3.98043 20.8946 3.79289 20.7071C3.60536 20.5196 3.5 20.2652 3.5 20V7C3.5 6.73478 3.60536 6.48043 3.79289 6.29289C3.98043 6.10536 4.23478 6 4.5 6H10.5ZM21.5 3V11H19.5V6.413L11.707 14.207L10.293 12.793L18.085 5H13.5V3H21.5Z"
                        fill="black"
                        fillOpacity="0.4"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_4568_566">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
