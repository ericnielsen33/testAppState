import React from "react";

export default function ({name, level}) {
    return (
        <div>
            <div>My name is {name}.</div>
            <div>I am a level {level} resident.</div>
        </div>
    );
}