import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Software Engineer & AI Engineer · Sfax, Tunisia</p>
      </div>
    </footer>
  );
}
