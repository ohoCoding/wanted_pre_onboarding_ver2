import React ,{useState} from "react";
import styled from 'styled-components';
function Toggle() {
            //switchOn의 초기값은 false로 설정.
  const [switchOn, switchChange] = useState(false);
 
    function switchstate() {
        switchChange(!switchOn)    
    }
 
  return (
    <>
      <ToggleBtn isCheck={switchOn !== true} onClick={() => switchstate()}>
          <span className="circle" />
      </ToggleBtn>
      {/* <div className="slide-arrow" onClick={switchstate}></div>
      <i className="fas fa-arrow-circle-right"></i> */}
    
      {switchOn === false ? <div>Toggle Switch Off</div> : <div>Toggle Switch On</div>}
    </>
    
    //   <div>
    //     <div
    //       className="slide-arrow"
    //       onClick={switchstate}
    //     >
    //       <i className="fas fa-arrow-circle-right"></i>
    //     </div>
    //     {switchOn === true ? <List /> : null}
    //   </div>
    // </div>
  );
}
const ToggleBtn = styled.div`
  width: 30px;
  height: 14px;
  padding: 3px;
  display: flex;
  justify-content: ${(props) => (props.isCheck ? 'flex-start' : 'flex-end')};
  background: ${(props) => (props.isCheck ? '#cfcfcf' : '#6e41ea')};
  border-radius: 15px;
  cursor: pointer;

  & > .circle {
    width: 14px;
    height: 14px;
    background: #ffffff;
    border-radius: 50%;
  }
`;
export default Toggle;