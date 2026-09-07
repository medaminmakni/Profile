"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: [0, 0.2, 0.6] },
    );
    navigation.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
          <span>{profile.monogram}</span>
          <span className="wordmark-name">Mohamed Amin MAKNI</span>
        </a>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`/#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link href="/notes" onClick={() => setMenuOpen(false)}>
            Notes
          </Link>
          {profile.cv.available ? (
            <a className="cv-link" href={profile.cv.path} download>
              Download CV
            </a>
          ) : (
            <span className="cv-disabled" aria-disabled="true">CV unavailable</span>
          )}
        </div>

        <div className="nav-actions">
          <button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle color theme">
            <Sun className="sun-icon" size={18} />
            <Moon className="moon-icon" size={18} />
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
