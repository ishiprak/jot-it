import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(prop) {
  var [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  var [booled, setbooled] = useState(false);

  function handleClick(event) {
    event.target.placeholder = "Title";
    setbooled(true);
  }

  function handleChange(event) {
    var { name, value } = event.target;
    setInputText((prevInputText) => {
      return {
        ...prevInputText,
        [name]: value
      };
    });
  }

  function submit(event) {
    prop.addNewNotes(inputText);
    event.preventDefault();
    setInputText({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note" autoComplete="off">

        <input
          onClick={handleClick}
          onChange={handleChange}
          name="title"
          placeholder="Take a note..."
          value={inputText.title}
        />
        {
          booled
          &&
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={inputText.content}
          />
        }
        <Zoom in={booled}>
          <Fab onClick={submit}><AddIcon /></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
