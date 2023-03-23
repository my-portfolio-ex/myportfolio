import styled from '@emotion/styled';

export const ProjectPageSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;

  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: #131313;
  background-size: 20px 20px;
  transition: all 0.5s ease 0s;
`;
