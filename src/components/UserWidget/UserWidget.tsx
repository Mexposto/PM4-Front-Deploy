"use client";

import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import Link from "next/link";
import { cartContext } from "@/contexts/cartContext";
import { useRouter } from "next/navigation";

const UserWidget = () => {
  const { isLogged, user, logout } = useContext(UserContext);
  const { cart } = useContext(cartContext);
  const router = useRouter();

  return (
    <div className="flex items-center gap-4 font-medium text-lg text-primary">
      {isLogged() ? (
        <>
          <Link
            href="/dashboard"
            className="text-base font-medium hover:text-accent transition-colors"
          >
            {user?.user.name}
          </Link>
          <Link
            href="/cart"
            className="text-base font-medium hover:text-accent transition-colors"
          >
            {`Cart${cart.length > 0 ? `(${cart.length})` : ""}`}
          </Link>
          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="text-base font-medium hover:text-accent transition-colors"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          href="/login"
          className="text-base font-medium text-primary hover:text-accent transition-colors"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default UserWidget;
