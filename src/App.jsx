import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: aliceblue;
  padding: 20px;
`;
export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">The Wild Oasis</Heading>
        <Button>Click me</Button>
        <Heading as="h2">Form</Heading>
        <Input type="text" placeholder="Enter your name" />
      </StyledApp>
    </>
  );
}
