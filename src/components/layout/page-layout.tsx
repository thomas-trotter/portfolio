import TopBar from "@/components/layout/topbar";
import Footer from "@/components/layout/footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}