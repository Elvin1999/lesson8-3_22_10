import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import TestMemo from "./TestMemo";
import Form from "./Form";

// function App() {
//   return (
//     <>
//       {/* <h1>Hello Fragment</h1>
//       <>
//         <h2>Hello</h2>
//         <h2>Hello</h2>
//       </>
//       <>
//         <h2>Bye Bye</h2>
//         <h2>Bye Bye</h2>
//       </> */}
//       {/* <Counter></Counter> */}
//       {/* <Form></Form> */}
//     </>
//   );
// }

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   });

//   return <video ref={ref} src={src}></video>;
// }

// function App() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setIsPlaying(!isPlaying);
//         }}
//       >
//         {isPlaying ? "Pause" : "Play"}
//       </button>

//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       ></VideoPlayer>
//     </>
//   );
// }

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const total = useRef(0);

  function handleClick1() {
    setScore1(score1 + 1);
  }

  function handleClick2() {
    setScore2(score2 + 1);
  }

  // useEffect(() => {
  //   total.current = score1 + score2;
  //   console.log(total.current);
  //   console.log("Use effect works in every last");
  // }); // every render in last

  // useEffect(() => {
  //   total.current = score1 + score2;
  //   console.log(total.current);
  //   console.log("Use effect works in every last");
  // }, [score1, score2]);  // it depends only  score1,score2

  // useEffect(() => {
  //   total.current = score1 + score2;
  //   console.log(total.current);
  //   console.log("Use effect works in every last");
  // }, []); // only one time in last

  const [value, setValue] = useState(0);
  const [array, setArray] = useState([10, 20, 30, 40, 50]);

  function handleAdd() {
    setArray([...array, value]);
  }

  return (
    <>
      {/* <h1>Score 1 : {score1}</h1>
      <h1>Score 2 : {score2}</h1>
      <section>
        <button onClick={handleClick1}>Add Score 1</button>
        <button onClick={handleClick2}>Add Score 2</button>
      </section>
      <h1>Total : {total.current}</h1> */}
      <TestMemo items={array}></TestMemo>
      <input
        type="number"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      ></input>
      <button onClick={handleAdd}>Add new </button>
    </>
  );
}

export default App;
