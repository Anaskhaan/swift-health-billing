import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";


export default function AppLayout() {
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}