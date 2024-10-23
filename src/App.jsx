import Footer from "./components/Footer";
import HeaderPage from "./components/HeaderPage";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <>
      <HeaderPage />
      <main className="max-w-xl mx-auto p-4">
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
