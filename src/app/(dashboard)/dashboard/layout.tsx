import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Footer from "@/components/footer/Footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <DashboardNavbar />
      {children}
     <Footer />
    </body>
  </html>
  );
}
