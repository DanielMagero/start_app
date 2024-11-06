import Title from "../components/Title";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home() {
  function goToNextPage() {}

  return (
    <div>
      <Title heading="Tuesday" onClick={goToNextPage} />
      <Content details="Beginnings" />
      <Footer />
      <br />

      <Title heading="Wednesday" />
      <Content king="life" />
      <Footer />
      <br />

      <Title heading="Thursday" />
      <Content king="milds" />
      <Footer />
    </div>
  );
}
