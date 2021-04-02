import Alert from "../components/alert";
import Footer from "../components/footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <p>Im a paragraph</p>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
