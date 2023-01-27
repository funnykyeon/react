import styled from "styled-components";

const SytledA = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: ${(props) => props.color};
`;

export default SytledA;
