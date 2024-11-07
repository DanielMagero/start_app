import Title from "../components/Title";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";

export default function Home() {
  function goToNextPage() {}

  return (
    <div>
      <Title heading="Tuesday" onClick={goToNextPage} />
      <Content details="Beginnings" />
      <Button variant="contained" disabled>
        Contained
      </Button>
      <Footer />
      <br />

      <Title heading="Wednesday" />
      <Content king="life" />
      <Button variant="text">Submit</Button>
      <Footer />
      <br />

      <Title heading="Thursday" />
      <Content king="milds" />
      <Button variant="outlined">GO!</Button>
      <Footer />
    </div>
  );
}
