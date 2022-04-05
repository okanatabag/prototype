import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: relative;
  background: ${(props) => props.bg || '#ffffff'};
`;

export default Container;
