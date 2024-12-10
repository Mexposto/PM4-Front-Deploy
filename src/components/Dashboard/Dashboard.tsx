"use client";

import { UserContext } from "@/contexts/userContext";
import { IOrder } from "@/interfaces/IOrder";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const { name, email, orders } = user.user;

  return (
    <div className="max-w-4xl w-full px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          User Details
        </h2>
        <p className="text-lg text-primary">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-lg text-primary">
          <strong>Email:</strong> {email}
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        {orders.length > 0 ? (
          <div className="flex flex-col gap-2">
            {orders.map((order: IOrder, i) => (
              <div
                key={i}
                className="flex justify-between bg-secondary p-2 rounded-lg shadow-md text-primary"
              >
                <p>
                  <strong>ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-600">No orders available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
