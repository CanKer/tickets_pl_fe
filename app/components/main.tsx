import Header from "./header";
import Footer from "./footer";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-[100vh] relative">
        <Header />
        <div className="h-[calc(100vh_-_9rem)]">{children}</div>
        <Footer />
      </div>
    </>
  );
}
