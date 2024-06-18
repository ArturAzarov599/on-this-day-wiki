// import { render, screen } from "@testing-library/react";
// import App from "./App";
import { generateUniqueId } from "./utils/generateUuid";

// test("renders button with text", () => {
// render(<Button onClick={() => {}}>Show more</Button>);
// const buttonElement = screen.getByText(/Show more/i);
// expect(buttonElement).toBe(HTMLElement);
// });

test("check generateUniqueId", () => {
  const uuid = generateUniqueId();
  expect(uuid).toBeTruthy();
  expect(uuid).toHaveLength(15);
});

// test("calls onClick handler when clicked", () => {
//   // const handleClick = jest.fn();
//   // render(<Button onClick={handleClick}>Click Me</Button>);
//   // const buttonElement = screen.getByText(/Click Me/i);
//   // fireEvent.click(buttonElement);
//   // expect(handleClick).toHaveBeenCalledTimes(1);

//   render(<App />);

//   const buttonElement = screen.getByText(/Show more/i);
//   expect(buttonElement).toBe(HTMLElement);
// });
