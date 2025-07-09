import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "./components/Sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardNavbar />
        <div className="flex w-full">
         <Sidebar/>
          <main className="flex flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
