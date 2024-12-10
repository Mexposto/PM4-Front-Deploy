import Link from "next/link";
import UserWidget from "../UserWidget/UserWidget";

const Navbar = () => {
  return (
    <nav className="w-full bg-secondary fixed">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
        <Link
          href="/"
          className="text-primary text-2xl font-bold hover:text-accent transition-colors"
        >
          E-Store
        </Link>
        <ul className="flex items-center gap-4 text-base font-semibold text-primary">
          <li>
            <Link
              href="/products"
              className="hover:text-accent transition-colors"
            >
              Products
            </Link>
          </li>
        </ul>
        <UserWidget />
      </div>
    </nav>
  );
};

export default Navbar;
