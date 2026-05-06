import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export const SEO = ({ title, description, keywords }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) metaKeywords.setAttribute("content", keywords);

    // Schema.org Hotel Markup
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "Hotel Vishnu Vilas",
      "description": "Best Luxury Hotel and Banquet Hall in Rewa, Madhya Pradesh.",
      "image": "https://hotelvishnuvilas.com/vishnu_vilas/2.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Opp. Samarth Tower",
        "addressLocality": "Rewa",
        "addressRegion": "MP",
        "postalCode": "486001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.5467386",
        "longitude": "81.3039102"
      },
      "hasMap": "https://www.google.com/maps/place/Hotel+Vishnu+Vilas/@24.5467386,81.3039102,21z/",
      "telephone": "+919424953899",
      "url": "https://hotelvishnuvilas.com",
      "priceRange": "₹₹₹",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Banquet Hall", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, keywords]);

  return null;
};
