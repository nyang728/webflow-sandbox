import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "OneTrust Sandbox Inc",
    template: "%s | OneTrust Sandbox Inc",
  },
  description: "Fictional Next.js test site for Webflow and Webflow Cloud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
