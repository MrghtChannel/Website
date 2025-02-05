import { FC } from 'react';
import Maintenance from './component/maintenance';
import Hero from './component/hero';
import Header from './component/header';
import Portfolio from "./component/portfolio";
import AboutMe from './component/about';
import Footer from './component/footer';
import Contact from './component/contact';

const Index: FC = () => {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  if (maintenanceMode) {
    return <Maintenance />;
  }

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
        <Header />
      </div>
      <Hero />
      <div className="bg-white p-4">
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
