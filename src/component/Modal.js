import React,{useState}from "react";
import styled from 'styled-components';

function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const onSetIsVisible = (active) => {
    setIsVisible(active);
  };
  const HelloModal = ({setIsVisible}) => {
    const onCancelBtn = () => {
      setIsVisible(false);
    };
    return(
      <>
        <button onClick={() => onCancelBtn()}>X</button>
        <div> HELLO CODESTATES</div>
      </>
    )
  }
  return(
    <>
      <OpenButton onClick={() => onSetIsVisible(true)}>
         open Modal
      </OpenButton>
      <OpenModal>
        {isVisible && (
          <HelloModal setIsVisible={setIsVisible}> </HelloModal>
        )}
      </OpenModal>
    </>
  )
};
const OpenButton = styled.div`
  color: #fff;
  padding: 0 8px;
  background: #0052cc;
  border-radius: 6px;
`
const OpenModal = styled.div`
  border-radius: 6px;
`
export default Modal;