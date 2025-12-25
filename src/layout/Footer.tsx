import { Link } from "react-router-dom";
import logo from "/public/logo.jpg"


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto container space-y-8 px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-foreground">
              <img
                src={logo}
                alt="logo"
                className="w-20 h-20 rounded-full object-cover  "
              />
              <h2 className="text-2xl font-bold">
                {/* Text with gradient animation */}
                <span className="hidden sm:inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Digital Wallet
                </span>
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-muted-foreground">
              Manage your digital wallet effortlessly with a modern, secure, and
              intuitive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-foreground">Product</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/feature"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Feture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:arman.miaa36@gmail.com"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/arman-miaa"
                    className="text-muted-foreground transition hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/arman2mia"
                    className="text-muted-foreground transition hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801736550601"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    WhatsApp: +8801736550601
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Digital Wallet Management System. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}