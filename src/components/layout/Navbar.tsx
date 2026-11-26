import Link from "next/link";

const navigation = [
  { label: "home", href: "/" },
  { label: "about_us", href: "/about_us" },
  { label: "services", href: "/services" },
  { label: "projects", href: "/projects" },
  { label: "news", href: "/news" },
  { label: "contacts", href: "/contacts" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="brand">
          NUSANTARAEXPRESS<span> LOGISTIK</span>
        </Link>

        <nav aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};