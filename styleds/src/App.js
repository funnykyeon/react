import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import StyledA from "./components/StyledA";
import styled, { createGlobalStyle } from "styled-components";

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: ${(props) => props.color || "palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "๐";
  }
`;

const GlobalStyle = createGlobalStyle`
button {
  color: yellow;  
}
  `;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>๋ฒํผ</StyledButton>
          <StyledButton primary>๋ฒํผ</StyledButton>
          <PrimaryStyledButton>๋ฒํผ</PrimaryStyledButton>
          <StyledButton as="a" href="/">
            ๋ฒํผ
          </StyledButton>
          <StyledButton as={UppercaseButton}>button</StyledButton>
          <StyledMyButton>button</StyledMyButton>
          <StyledMyButton color="green">button</StyledMyButton>
          <StyledA href="https://google.com">
            ํ๊ทธ
          </StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
