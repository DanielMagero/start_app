import Title from "../components/Title";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function Home() {
  function goToNextPage() {}
  const [showBlog, setShowBlog] = useState(false);
  const [randomText, setRandomText] = useState("No button has been clicked!");
  const [moviesData, setMoviesData] = useState([]);

  

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
