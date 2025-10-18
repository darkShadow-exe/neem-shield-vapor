import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">NeemShield</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Biodegradable vapor-based pest defense for sustainable farming. 
              Protecting crops naturally, empowering farmers globally.
            </p>
            <p className="text-sm text-background/50">
              © 2025 NeemShield. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="/how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="/order" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="/faq" className="hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>Made with care for farmers everywhere</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
