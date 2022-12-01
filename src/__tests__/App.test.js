// test Menu component with passed in menuItems
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu";
import { testMenuItems } from "../sampleTestData";

test("renders menu items", () => {
  render(<Menu menuItems={testMenuItems} />);
  const menuItem = screen.getByText("Burger");
  expect(menuItem).toBeInTheDocument();
});
