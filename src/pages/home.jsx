import { Container } from "@mui/system";
import React from "react";
import Posts from "./posts";

function Home() {
  return (
    <Container maxWidth="lg">
      <Posts />
    </Container>
  );
}

export default Home;
