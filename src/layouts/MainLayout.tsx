import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { PathBreadcrumbs } from "@/components/PathBreadcrumbs";
import Topbar from "@/components/topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const location = useLocation();

  const navbarVisiblePaths = ["/"];

  return (
    <div>
      <header className="sticky top-0 z-50">
        <Topbar />
        {navbarVisiblePaths.includes(location.pathname) && <Navbar />}
      </header>
      <PathBreadcrumbs />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
