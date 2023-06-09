import styled from '@emotion/styled';

export const MainWrapper = styled.main<{ anyClick: boolean }>`
  width: 100%;
  height: 100vh;

  display: flex;
  & > * {
    display: flex;
    cursor: ${(props) => (props.anyClick ? 'default' : 'pointer')};
  }
`;

export const LeftSection = styled.section<{ introduce: boolean; project: boolean }>`
  width: ${(props) => (props.introduce ? '100%' : props.project ? '0%' : '50%')};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
  :hover {
    ${(props) => (props.introduce ? 'none' : 'width: 70%')}
  }
  background-color: #f6f6f6;
  background-image: linear-gradient(
      90deg,
      #efefef 0px,
      #d6d6d6 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(#efefef 0px, #d6d6d6 1px, transparent 1px, transparent 99px, transparent 100px),
    linear-gradient(#fafafa 0px, #d6d6d6 1px, transparent 1px, transparent 99px, transparent 100px),
    linear-gradient(
      90deg,
      #e1e1e1 0px,
      #ffffff 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      90deg,
      #ffffff 0px,
      #c9c9c9 1px,
      transparent 1px,
      transparent 99px,
      #ffffff 99px,
      #e0e0e0 100px
    ),
    linear-gradient(
      90deg,
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 1px,
      #f6f6f6 1px,
      #f6f6f6 99px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(#cdcccc, #f2f2f2);
  background-size: 100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px, 100px 100%, 100px 100%,
    100px 100px, 100px 100px;
  transition: all 0.5s ease 0s;
`;
export const RightSection = styled.section<{ introduce: boolean; project: boolean }>`
  width: ${(props) => (props.project ? '100%' : props.introduce ? '0%' : '50%')};

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;

  :hover {
    ${(props) => (props.project ? 'none' : 'width: 70%')}
  }

  background-color: #161616;

  background-size: 20px 20px;
  transition: all 0.5s ease 0s;
`;

export const LeftTitle = styled.strong<{ introduce: boolean; project: boolean; clicked: boolean }>`
  color: #000000;
  font-size: 30px;
  font-weight: 800;
  display: ${(props) => (props.project ? 'none' : 'flex')};
  margin: auto 65px auto auto;
  transition: all 1s;
`;
export const RightTitle = styled.strong<{ introduce: boolean; project: boolean; clicked: boolean }>`
  color: #f2f2f2;
  font-size: 30px;
  font-weight: 800;
  display: ${(props) => (props.introduce ? 'none' : 'flex')};
  margin: auto auto auto 65px;
  transition: all 1s;
`;
