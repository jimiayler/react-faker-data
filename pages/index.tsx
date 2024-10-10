import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { faker } from '@faker-js/faker';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const users = [];
for (let i = 0; i < 10; i++) {
        users.push({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          address: faker.location.streetAddress(),
        });
}

export default function Home() {
  // Prevent HTML hydration errors
  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
  return (
    <>
    <div className="p-4">
    <h1>Employee List</h1>
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="border-b dark:border-slate-600 font-black p-4 pl-8 pt-0 pb-3 text-left text-xl">Name</th>
              <th className="border-b dark:border-slate-600 font-black p-4 pt-0 pb-3 text-left text-xl">Email</th>
              <th className="border-b dark:border-slate-600 font-black p-4 pl-8 pt-0 pb-3 text-left text-xl">Address</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.name}</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.email}</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </>
  );
}
