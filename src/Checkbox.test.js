import React from "react";
// Pull render & fireEvent from library
import { render,fireEvent } from "@testing-library/react"; 
import {Checkbox} from "./Checkbox.js";


test("Selecting checkbox",()=>{
    // Sellecting the check box
    const {getByLabelText} = render(<Checkbox/>); 
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})