import {render} from "react-dom";
import {Counter} from "./components/Counter";
import React from "react";

render(
    <div>
        <Counter/>
    </div>,
    document.getElementById(`root`)
)