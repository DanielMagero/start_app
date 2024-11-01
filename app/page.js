import Title from "../components/Title";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Title heading="Tuesday" />
      <Title heading="Wednesday" />
      <Content details="Yvonne" />
      <Content king="life" />
      <Footer />
      <Footer />
    </div>
  );
}
