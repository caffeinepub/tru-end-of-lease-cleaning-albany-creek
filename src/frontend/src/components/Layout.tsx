import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" data-ocid="nav.link" className="flex items-center gap-3">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru End of Lease Cleaning Albany Creek logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.primary_button"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Get Free Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Get Free Quote
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl text-white mb-3">
                Tru End of Lease Cleaning
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Albany Creek's most trusted bond cleaning company. We help you
                get your full bond back, guaranteed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      data-ocid="nav.link"
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Contact Us</h4>
              <div className="space-y-2">
                <p className="text-white/70 text-sm">
                  Albany Creek, QLD 4035, Australia
                </p>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: 0488 841 883
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Tru End of Lease Cleaning Albany Creek.
            All rights reserved. ·{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/61488841883"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="nav.primary_button"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-105 flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-sm font-semibold">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
