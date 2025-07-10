import Footer from "@/components/footer/Footer";
import SidebarNavbar from "@/components/navbar/SidebarNavbar";
import Sidebar from "@/components/sidebar/Sidebar";


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
