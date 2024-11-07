import { ReactNode } from "react";
import Footer from "../ui/footer";
import Sidebar from "../ui/sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
