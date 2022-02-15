import React,{useState} from "react";
import styled from 'styled-components';
function AddTags(){
  const selectedTags = tags => {
    console.log(tags);
  };
  const Add = (props) =>{
    const [tags, setTags] = useState([]);
    const addTags = (event) => {
      if (event.key === "Enter" && event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = "";
      }
    }
    const removeTags = (index) => {
      setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    }
    return(
        <TagsInput>
              <Tags>
                  {tags.map((tag, index) => (
                      <TagItem key={index}>
                          <TagTitle>{tag}</TagTitle>
                          <TagCloseIcon
                             onClick={() => removeTags(index)}
                          >x</TagCloseIcon>
                      </TagItem>
                  ))}
              </Tags>
              <StyledInput type="text" onKeyUp={event => addTags(event)} placeholder="Press enter to add tags"/>
        </TagsInput>
    )
  }

  return(
    <div>
      <Add selectedTags={selectedTags}></Add>
    </div>
  )

}

const TagsInput = styled.div`
   display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  &:focus-within {
    border: 1px solid #0052cc;
  }
`;
const StyledInput = styled.input`
   flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    &:focus {
      outline: transparent;
    }
`;
const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;
  
const TagItem = styled.li`
   width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background: #0052cc;
`;
const TagTitle = styled.span`
  margin-top: 3px;
`;
const TagCloseIcon = styled.span`
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #0052cc;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
`;
export default AddTags;