import { Link } from "react-router-dom";

const footerNavigationsArr = [
  {
    title: "Privacy Policy",
    links: [
      { name: "Return & Exchange", path: "/return-exchange" },
      { name: "Payment Methods", path: "/payment-methods" },
      { name: "Delivery Time", path: "/delivery-time" },
      { name: "Payment & Pricing", path: "/payment-pricing" },
      { name: "Terms of Use", path: "/terms-of-use" },
      { name: "Our Policy", path: "/our-policy" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "What We Do", path: "/what-we-do" },
      { name: "Our Goals", path: "/our-goals" },
      { name: "Orders & Shopping", path: "/orders-shopping" },
      { name: "Supply Origin", path: "/supply-origin" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Customer Care", path: "/customer-care" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Smart Phones", path: "/smart-phones" },
      { name: "Headphones", path: "/headphones" },
      { name: "Laptop & Tablet", path: "/laptop-tablet" },
      { name: "Graphics Card", path: "/graphics-card" },
      { name: "Monitor", path: "/monitor" },
      { name: "Gadgets", path: "/gadgets" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { name: "My Account", path: "/my-account" },
      { name: "Share Location", path: "/share-location" },
      { name: "Customer Service", path: "/customer-service" },
      { name: "Return/Exchange", path: "/return-exchange" },
      { name: "Product Support", path: "/product-support" },
      { name: "FAQs", path: "/faqs" },
    ],
  },
];

const FooterNavigations = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-white mb-4">
      {footerNavigationsArr.map((section, index) => (
        <div key={index}>
          <h5 className="text-lg font-medium mb-4">{section.title}</h5>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link to={link.path} className="text-sm hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterNavigations;
