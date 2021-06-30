import styled from 'styled-components';

const ToggleButton = styled.div`
  height: 80%;
  width: 100%;
  background-color: white;
  border-radius: 10rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  grid-column-start: ${({ isMetric }) => (isMetric ? 1 : 2)};
`;

export default ToggleButton;
