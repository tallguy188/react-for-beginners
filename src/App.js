import { useState } from "react";

function App() {
  const [toDo, settoDo] = useState(""); // state는 직접적으로 수정하지 않는게 원칙. 항상 setstate함수를 통해 수정한다.
  const [toDos, settoDos] = useState([]);
  const onChange = (event) => {
    settoDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    settoDo("");
    settoDos((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To DO</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
