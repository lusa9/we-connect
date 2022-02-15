import { render } from "@testing-library/react";
import Component from "./index";

const setup = () => render(<Component expanded={true} />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});
