import React from  'react';
import './form.css';

function FORM(props) {


  
  return (
    <React.Fragment>
      <form>
        <input type="text" placeholder={props.placeholdertext}id="coursename" />

        <input
          className="sub"
          type="submit"
          value="add courses"
          onClick={(e) =>
            props.addcourse(
              document.querySelector("#coursename").value,e)
          }
        />
      </form>
    </React.Fragment>
  );
}

export default FORM ;