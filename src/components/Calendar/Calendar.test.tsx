import { render, screen } from "@testing-library/react";
import TodoCalendar from ".";
import userEvent from "@testing-library/user-event";
import { getDaysOfMonth, monthAfter, monthBefore } from "../../utils/date";
import { act } from "react-dom/test-utils";

const getRandomDate = (
  dateArr: HTMLElement[],
  excludeDay: number,
): HTMLElement => {
  const randomItem = dateArr[Math.floor(Math.random() * dateArr.length)];
  if (randomItem.innerText === excludeDay.toString()) {
    return getRandomDate(dateArr, excludeDay);
  }
  return randomItem;
};

describe("Calendar", () => {
  it("render test", () => {
    render(<TodoCalendar />);
  });

  it("render this month first", () => {
    render(<TodoCalendar />);
    const thisMonth = (new Date().getMonth() + 1).toString();
    const domMonth = screen.getByTestId("month");

    expect(domMonth).toHaveTextContent(thisMonth);
  });

  it("render and mark today first", () => {
    render(<TodoCalendar />);
    const today = new Date().getDate();
    const domToday = screen.queryByTestId(`day_${today}`);

    expect(domToday).toHaveClass("on");
  });

  it("render correct number of dates", () => {
    render(<TodoCalendar />);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const daysOfMonth = getDaysOfMonth(year, month);
    const domToday = screen.getAllByTestId(`day_`, { exact: false });

    expect(domToday).toHaveLength(daysOfMonth);
  });

  it("should mark to clicked day", () => {
    render(<TodoCalendar />);
    const today = new Date().getDate();
    const dates = screen.queryAllByTestId("day_", { exact: false });

    const domToday = screen.queryByTestId(`day_${today}`);
    expect(domToday).toHaveClass("on");

    const someRandomDay = getRandomDate(dates, today);
    userEvent.click(someRandomDay);
    expect(domToday).not.toHaveClass("on");
    expect(someRandomDay).toHaveClass("on");
  });

  it("could be change to prev month", () => {
    render(<TodoCalendar />);
    const prev = screen.getByTestId("prev_month");
    const thisMonth = new Date().getMonth() + 1;
    const domMonth = screen.getByTestId("month");
    expect(domMonth).toHaveTextContent(thisMonth.toString());

    userEvent.click(prev);
    expect(domMonth).toHaveTextContent(monthBefore(thisMonth).toString());
  });
  it("could be change to next month", () => {
    render(<TodoCalendar />);
    const next = screen.getByTestId("next_month");
    const thisMonth = new Date().getMonth() + 1;
    const domMonth = screen.getByTestId("month");
    expect(domMonth).toHaveTextContent(thisMonth.toString());

    userEvent.click(next);
    expect(domMonth).toHaveTextContent(monthAfter(thisMonth).toString());
  });

  it("could be change dates position to each month", () => {
    render(<TodoCalendar />);

    const next = screen.getByTestId("next_month");
    const thisMonth = new Date().getMonth() + 1;
    const domMonth = screen.getByTestId("month");
    expect(domMonth).toHaveTextContent(thisMonth.toString());

    userEvent.click(next);
    expect(domMonth).toHaveTextContent(monthAfter(thisMonth).toString());
  });
});
