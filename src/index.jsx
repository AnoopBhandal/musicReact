import React from "react";
import {createRoot} from "react-dom/client"
import Musician from "./app"

const root = createRoot(document.getElementById("root"))
root.render(<Musician />)