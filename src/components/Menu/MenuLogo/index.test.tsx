import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Component from "./index";

const setup = () =>
  render(
    <MemoryRouter>
      <Component />
    </MemoryRouter>
  );

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});
