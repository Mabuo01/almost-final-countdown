import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [name, setName] = useState(null);
  const inputRef = useRef();

  function handleClick() {
    setName(inputRef.current.value);
    inputRef.current.value = '';
  }
  
  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
