import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

interface FooterLink {
  label: string;
  route: string;
}

type FooterData = {
  [key: string]: FooterLink[];
};

const Footer: React.FC = () => {
  const data: FooterData = {
    quickLinks: [
      { label: "Home", route: "/" },
      { label: "Features", route: "/features" },
      { label: "Services", route: "/services" },
      { label: "Pricing", route: "/pricing" },
      { label: "FAQ", route: "/faq" },
    ],
    company: [
      { label: "About", route: "/about" },
      { label: "Careers", route: "/careers" },
      { label: "Press", route: "/press" },
      { label: "Blog", route: "/blog" },
      { label: "Events", route: "/events" },
      { label: "Partners", route: "/partners" },
    ],
    resources: [
      { label: "Support Center", route: "/support-center" },
      { label: "Knowledge Base", route: "/knowledge-base" },
      { label: "Video Tutorials", route: "/video-tutorials" },
      { label: "Case Studies", route: "/case-studies" },
      { label: "White Papers", route: "/white-papers" },
      { label: "E-books", route: "/e-books" },
      { label: "Tutorials", route: "/tutorials" },
    ],
    product: [
      { label: "Dashboard Overview", route: "/dashboard-overview" },
      { label: "Integration Options", route: "/integration-options" },
      { label: "API Documentation", route: "/api-documentation" },
      { label: "Security Features", route: "/security-features" },
      { label: "Feature Roadmap", route: "/feature-roadmap" },
      { label: "Product Updates", route: "/product-updates" },
      { label: "Mobile Access", route: "/mobile-access" },
      { label: "Demo Videos", route: "/demo-videos" },
    ],
  };

  return (
    <footer className="px-6 py-8">
      <div className="flex flex-wrap justify-between gap-8 flex-col-reverse md:flex-col">
        <div className="max-w-sm">
          <Image
            src="/assets/svg/logo.svg"
            alt="Logo"
            width={150}
            height={50}
          />
          <div className="mt-4">
            <p className="font-semibold">Offices</p>
            <p>Indonesia, 23 Finance Avenue, Suite 456, Business City</p>
            <br/>
            <p>USA, 23 Finance Avenue, Suite 456, Business City</p>
            <p className="mt-4 font-semibold">Drop us a line</p>
            <a
              href="mailto:info@magnolia.finance"
              className="text-blue-600 hover:underline"
            >
              info@magnolia.finance
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-between w-full md:w-auto">
          {Object.entries(data).map(([key, links]) => (
            <div key={key} className="min-w-[150px]">
              <p className="font-semibold mb-3">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, route }, index) => (
                  <li key={index}>
                    <a
                      href={route}
                      className="text-gray-600 hover:underline hover:text-blue-600"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Social Media */}
      <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">© 2024, Magnolia</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Instagram/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           <Facebook/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter/>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
           <Youtube/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
