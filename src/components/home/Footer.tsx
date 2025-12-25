import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              WalletHub
            </h3>
            <p className="text-sm text-muted-foreground">
              Secure digital wallet management for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 WalletHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
