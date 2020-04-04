import React from 'react'


function TodoFile(props) {
    return (
        <div>
<input onClick={() => console.log("clicked")}
 type = "checkbox" checked={props.item.completed}
  onChange={() => console.log('changed!')}/>
    <p>{props.item.text}</p>
    <hr />
        </div>
    )
}

export default TodoFile