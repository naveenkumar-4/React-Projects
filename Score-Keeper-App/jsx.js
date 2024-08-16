let score = 0;
let wicket = 0;
let ballWiseResult = [];

let hit = 0;
let inputRef = React.createRef();

// function addOne() {
//   score += 1;
//   rootElement.render(<App />);
//   console.log(score);
// }

// function addScore(num) {
//   if (wicket < 10) {
//     ballWiseResult.push(num);
//     score += num;
//     rootElement.render(<App />);
//     console.log(score);
//     console.log(ballWiseResult);
//   }
// }

// function addWicket() {
//   if (wicket < 10) {
//     ballWiseResult.push("W");
//     wicket += 1;
//     rootElement.render(<App />);
//     console.log(score);
//     console.log(ballWiseResult);
//   }
// }

function addScore(num) {
  hit = num;
  rootElement.render(<App />);
  console.log(hit);
}

function addWicket() {
  hit = "W";
  rootElement.render(<App />);
  console.log(hit);
}

const ScoreButtons = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);

const Result = () => (
  <div>
    {ballWiseResult.map((res, index) => (
      <>
        {index % 6 == 0 ? <br /> : null}
        <span key={index} style={{ color: res === "W" ? "red" : "black" }}>
          {res === 0 ? <strong>.</strong> : res}
        </span>
        &nbsp;&nbsp;&nbsp;
      </>
    ))}
  </div>
);

function handleSubmit(event) {
  event.preventDefault();
  if (hit === "W") wicket += 1;
  else score += hit;

  ballWiseResult.unshift(
    // <span>
    //   {hit}
    //   {","}
    //   {inputRef.current.value}
    // </span>
    <span>{`${hit} - ${inputRef.current.value}`}</span>
  );
  hit = 0;
  inputRef.current.value = "";
  console.log(ballWiseResult);

  console.log(inputRef.current.value);
  rootElement.render(<App />);
}
const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <input value={hit} />
      <input ref={inputRef} placeholder="Add a comment" />
      <button>Submit</button>
    </form>
  </>
);

const App = () => (
  <>
    <h1>Score Keeper</h1>
    <h2>
      Score : {score}/{wicket}
    </h2>
    <ScoreButtons />
    <br />
    {/* <Result /> */}
    <Form />
    <hr />
    {ballWiseResult.map((res, index) => (
      <p key={index}>{res}</p>
    ))}
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
