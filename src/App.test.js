import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders header and nav links", () => {
    render(<App />);
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
  });

  test("renders search input and filters games", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Поиск игр...");
    fireEvent.change(searchInput, { target: { value: "witcher" } });
    expect(screen.getByText(/The Witcher 3/i)).toBeInTheDocument();
  });

  test("adds a recommendation", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Введите название игры");
    const button = screen.getByText("Добавить");

    fireEvent.change(input, { target: { value: "Portal 2" } });
    fireEvent.click(button);

    expect(screen.getByText("Portal 2")).toBeInTheDocument();
  });

  test("does not add empty recommendation", () => {
    render(<App />);
    const button = screen.getByText("Добавить");
    fireEvent.click(button);
    expect(screen.queryByText(" ")).not.toBeInTheDocument();
  });

  test("renders slider section", () => {
    render(<App />);
    expect(screen.getByText(/Лучшие релизы десятилетия/i)).toBeInTheDocument();
  });
});
