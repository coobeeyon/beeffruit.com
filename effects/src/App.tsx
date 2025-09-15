import { useState } from "react";
import "./App.css";
import React from "react";

function Effector({ beely }: { beely: boolean }) {
  const refBeel = React.useRef(beely);
  React.useEffect(() => {
    refBeel.current = beely;
  }, [beely]);
  return (
    <>
      <div>Effector beely is {beely ? "true" : "false"}</div>
      <div>Effector ref beely is {refBeel.current ? "true" : "false"}</div>
    </>
  );
}

function App() {
  const [beely, setBeely] = useState(false);
  return (
    <>
      <div className="card">
        <button onClick={() => setBeely((count) => !count)}>
          beely is {beely ? "true" : "false"}
        </button>
      </div>
      <Effector beely={beely} />
    </>
  );
}

export default App;
