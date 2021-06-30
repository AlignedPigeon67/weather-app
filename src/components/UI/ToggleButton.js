import styled from 'styled-components';

const ToggleButton = styled.div`
  height: 80%;
  width: 45%;
  background-color: white;
  border-radius: 0.3rem;
  justify-self: ${props => (props.isMetric ? 'flex-start' : 'flex-end')};
`;

export default ToggleButton;
