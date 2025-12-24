import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, Heart, TrendingUp } from "lucide-react";
import { MadeWithDyad } from "./made-with-dyad";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            SkillCraft Academy
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" />
            <NavLink to="/library" icon={<BookOpen className="h-5 w-5" />} text="Library" />
            <NavLink to="/favorites" icon={<Heart className="h-5 w-5" />} text="Favorites" />
            <NavLink to="/progress" icon={<TrendingUp className="h-5 w-5" />} text="Progress" />
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center shadow-inner">
        <MadeWithDyad />
      </footer>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg md:hidden z-50">
        <div className="flex justify-around py-2">
          <NavLink to="/" icon={<Home className="h-6 w-6" />} text="Home" mobile />
          <NavLink to="/library" icon={<BookOpen className="h-6 w-6" />} text="Library" mobile />
          <NavLink to="/favorites" icon={<Heart className="h-6 w-6" />} text="Favorites" mobile />
          <NavLink to="/progress" icon={<TrendingUp className="h-6 w-6" />} text="Progress" mobile />
        </div>
      </nav>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, text, mobile = false }) => (
  <Link
    to={to}
    className={`flex ${mobile ? 'flex-col items-center text-xs' : 'items-center space-x-2'} p-2 rounded-md hover:bg-primary-foreground hover:text-primary transition-colors`}
  >
    {icon}
    <span className={mobile ? 'mt-1' : ''}>{text}</span>
  </Link>
);

export default Layout;