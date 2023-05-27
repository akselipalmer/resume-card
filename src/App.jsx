import { Container, Typography } from "@mui/joy";
import Header from "./Header Components/Header";
import Body from "./Body Components/Body";

function App() {
  return (
    <Container maxWidth="md" sx={{ height: "100vh" }} disableGutters>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
