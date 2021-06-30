import styled from 'styled-components';

const ToggleButton = styled.div`
  height: 80%;
  width: 90%;
  background-color: white;
  border-radius: 0.3rem;
  grid-column-start: ${({ isMetric }) => (isMetric ? 1 : 2)};
`;

export default ToggleButton;
