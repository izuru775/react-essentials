import { render } from "@testing-library/react";
import React from "react"
import App from "./App"

test("Renders an h1",()=>{
    const { getByText } = render(<App />);
    const h1 = getByText(/Loadin.../);
    expect(h1).toHaveTextContent(
        "Loadin..."
    );
})