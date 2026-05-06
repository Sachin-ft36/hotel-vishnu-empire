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
      "name": "Hotel Vishnu Empire",
      "description": "Best Luxury Hotel and Banquet Hall in Rewa, Madhya Pradesh.",
      "image": "https://hotelvishnuempire.com/vishnuempire/reception/2.avif",
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
      "hasMap": "https://www.google.com/maps/place/Vishnu+Empire+:+Hotel+in+Rewa+%7C+Banquet+in+Rewa+%7C+Restaurant+in+Rewa+%7C+Bar+in+Rewa/@24.5434469,81.2744514,17z/data=!4m6!3m5!1s0x39845bc2a44aca41:0x9a97b96f386805a9!8m2!3d24.5434469!4d81.2744514!16s%2Fg%2F11csb0nygl",
      "telephone": "+918815393403",
      "url": "https://hotelvishnuempire.com",
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
