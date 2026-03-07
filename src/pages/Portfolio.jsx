import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "../components/layout/PageLayout";
import PortfolioHero from "../components/sections/PortfolioHero";
import PortfolioGrid from "../components/sections/PortfolioGrid";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <PageLayout>
      <Helmet>
        <title>
          Portfolio | Anchala Sharma Makeup Artist | Bridal & Party Makeup Work
          in Patna
        </title>
        <meta
          name="description"
          content="View stunning bridal makeup portfolio by Anchala Sharma - Best makeup artist in Patna. Browse wedding makeup, party makeup, and professional makeup transformations."
        />
        <meta
          name="keywords"
          content="makeup portfolio patna, bridal makeup gallery, anchala sharma portfolio, wedding makeup photos patna, makeup artist work patna"
        />
        <link rel="canonical" href="https://www.makeupbyanchala.in/portfolio" />
        <meta
          property="og:title"
          content="Portfolio | Anchala Sharma Makeup Artist | Bridal & Party Makeup Work"
        />
        <meta
          property="og:description"
          content="View stunning bridal makeup portfolio by Anchala Sharma - Best makeup artist in Patna."
        />
        <meta
          property="og:url"
          content="https://www.makeupbyanchala.in/portfolio"
        />
      </Helmet>

      {/* SEO: Visually hidden H1 for search engine ranking */}
      <h1 className="sr-only">Bridal & Wedding Makeup Portfolio – Best Makeup Artist in Patna, Bihar | Anchala Sharma</h1>

      <div className="flex flex-col w-full">
        <PortfolioHero
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <PortfolioGrid activeFilter={activeFilter} />
      </div>
    </PageLayout>
  );
};

export default Portfolio;
