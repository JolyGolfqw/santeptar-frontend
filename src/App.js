import { useState } from "react";
import Signin from "./components/Signin/Signin";

function App() {

  const [opened, setOpened] = useState(false)
  return (
    <>
    <div onClick={() => setOpened(!opened)} className="App">
      Hello world
    </div>
    {opened ? <Signin></Signin> : null}
    </>
  );
}

export default App;
