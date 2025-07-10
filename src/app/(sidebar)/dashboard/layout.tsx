import Footer from "@/components/footer/Footer";
import Sidebar from "./components/Sidebar";
import SidebarNavbar from "@/components/navbar/SidebarNavbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarNavbar />
        <div className="flex w-full">
        <Sidebar/>
          <main className="flex flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
