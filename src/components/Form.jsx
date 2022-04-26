import React from "react";
import { useState } from "react";

const Form = () => {
  // const [tasks, setTaske] = useState([]);
  // const [input, setinput] = useState("");
  // const [terminer, setterminer] = useState([]);
  // return (
  //   <div>
  //     <input
  //       onChange={(e) => {
  //         setinput(e.target.value);
  //       }}
  //       type="text"
  //       placeholder="Tapez votre task.."
  //     />
  //     <button
  //       type="submit"
  //       onClick={(e) => {
  //         e.preventDefault();
  //         setTaske([...tasks, input]);
  //         console.log(tasks);
  //       }}
  //     >
  //       Add task
  //     </button>
  //     <ul>
  //       {tasks.map((e, i) => (
  //         <>
  //           <li
  //             style={{
  //               textDecorationLine: terminer.includes(i)
  //                 ? "line-through"
  //                 : "none",
  //             }}
  //           >
  //             {e}
  //           </li>
  //           <button
  //             onClick={(e1) => {
  //               setTaske((tasks) => tasks.filter((el, j) => i !== j));
  //               console.log(tasks);
  //             }}
  //           >
  //             Suprimer
  //           </button>
  //           <button
  //             onClick={(e) => {
  //               if (terminer.includes(i)) {
  //                 setterminer(terminer.filter((x) => x != i));
  //               } else {
  //                 setterminer([...terminer, i]);
  //               }
  //             }}
  //           >
  //             Terminer
  //           </button>
  //         </>
  //       ))}
  //     </ul>
  //   </div>
  // );

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [Done, setDone] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    input ? setTodos([...todos, input]) : alert("Veuillez entrer une valeur");
    setInput("");
    console.log(todos);
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={input}
        placeholder="Write task here..."
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Add Task
      </button>
      <ul>
        {todos.map((todo, i) => (
          <>
            <li
              style={{
                textDecorationLine: Done.includes(i) ? "line-through" : "none",
              }}
            >
              {todo}
            </li>
            <button
              onClick={(e) => {
                setTodos(todos.filter((x, j) => i !== j));
              }}
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                if (Done.includes(i)) {
                  setDone(Done.filter((x) => x !== i));
                } else {
                  setDone([...Done, i]);
                }
              }}
            >
              Done
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Form;
//  Done.includes(i)
//   //                   ? setDone(Done.filter((y) => y !== i))
//   //                   : setDone([...Done, i])
