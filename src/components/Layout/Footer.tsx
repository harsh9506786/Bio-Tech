import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
  SendIcon,
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Research", href: "#research" },
  { name: "Sustainability", href: "#sustainability" },
  { name: "Careers", href: "#" },
  { name: "News", href: "#" },
];

const certifications = [
  { name: "ISO 9001", abbr: "ISO" },
  { name: "GLP Certified", abbr: "GLP" },
  { name: "IMO Organic", abbr: "IMO" },
  { name: "cGMP", abbr: "cGMP" },
];

export  const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-green-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="font-poppins font-bold text-lg text-green-primary">
                  B
                </span>
              </div>
              <span className="font-poppins font-semibold text-xl">
                Biotech International
              </span>
            </div>
            <p className="font-inter text-white/70 text-sm leading-relaxed mb-6">
              Biological Innovation. Sustainable Growth. Pioneering microbial
              technology for eco-friendly agriculture and public health since
              the 1990s.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert.abbr}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs font-inter text-white/80"
                >
                  {cert.abbr}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-white/70 hover:text-gold-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon
                  size={20}
                  className="text-gold-accent flex-shrink-0 mt-0.5"
                />
                <span className="font-inter text-white/70 text-sm">
                  123 Biotech Park, Innovation District,
                  <br />
                  Bangalore, India 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon
                  size={20}
                  className="text-gold-accent flex-shrink-0"
                />
                <a
                  href="tel:+911234567890"
                  className="font-inter text-white/70 text-sm hover:text-gold-accent transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon
                  size={20}
                  className="text-gold-accent flex-shrink-0"
                />
                <a
                  href="mailto:info@biotechintl.com"
                  className="font-inter text-white/70 text-sm hover:text-gold-accent transition-colors"
                >
                  info@biotechintl.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <LinkedinIcon size={20} />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <YoutubeIcon size={20} />,
                  href: "#",
                  label: "YouTube",
                },
                {
                  icon: <TwitterIcon size={20} />,
                  href: "#",
                  label: "Twitter",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold-accent hover:text-green-dark transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">
              Newsletter
            </h3>
            <p className="font-inter text-white/70 text-sm mb-4">
              Subscribe to receive updates on our latest innovations and
              industry insights.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                e.preventDefault()
              }
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 font-inter text-sm focus:outline-none focus:border-gold-accent transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-gold-accent flex items-center justify-center text-green-dark hover:bg-gold-light transition-colors duration-300"
                aria-label="Subscribe"
              >
                <SendIcon size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent" />

      {/* Bottom Bar */}
      <div className="bg-green-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/50 text-sm">
            © {new Date().getFullYear()} Biotech International Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-inter text-white/50 text-sm hover:text-gold-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-inter text-white/50 text-sm hover:text-gold-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
