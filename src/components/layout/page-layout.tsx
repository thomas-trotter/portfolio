import TopBar from "@/components/layout/topbar";
import Footer from "@/components/layout/footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <TopBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}