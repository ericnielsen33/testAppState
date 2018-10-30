import React from "react";

export default function ({ resident, incrementResident}) {
    const { name, level } = resident;
    return <div className="row">
        <div>My name is {name}.</div>
        <div>I am a level {level} resident.</div>
        <button id={resident.id} onClick={incrementResident}>Up Level</button>
      </div>;
}