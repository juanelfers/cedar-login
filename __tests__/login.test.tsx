import { vi, expect, test, beforeAll, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../app/pages/LoginForm";
import mockRouter from "next-router-mock";

const email = "user1@cedar.com";
const password = "password123";

beforeAll(async () => {
  // Mock router
  vi.mock("next/navigation", () => require("next-router-mock"));

  // .env vars
  process.env.EMAIL = email;
  process.env.PASSWORD = password;

  // Clean up
  return async () => {};
});

const performLogin = async (emailValue: string, passwordValue: string) => {
  const component = render(<LoginForm />);
  const emailInput = screen.getByLabelText("Email address");
  const passwordInput = screen.getByLabelText("Password");
  const submitButton = screen.getByRole("button");

  fireEvent.change(emailInput, { target: { value: emailValue } });
  fireEvent.change(passwordInput, { target: { value: passwordValue } });
  fireEvent.click(submitButton);

  return { component };
};

// Test for invalid login (wrong email, correct password)
test("Invalid login - Wrong email", async () => {
  const { component } = await performLogin("wrongemail@wrong.com", password);

  const emailErrorMessage = await screen.queryByText("Email is incorrect");
  const passwordErrorMessage = await screen.queryByText(
    "Password is incorrect"
  );

  // Expect email error to be there and no path change
  expect(emailErrorMessage).toBeTruthy();
  expect(passwordErrorMessage).toBeFalsy();
  expect(mockRouter).toMatchObject({
    pathname: "/",
  });

  component.unmount();
});

// Test for invalid login (wrong password, correct email)
test("Invalid login - Wrong password", async () => {
  const { component } = await performLogin(email, "wrongpassword");

  const emailErrorMessage = await screen.queryByText("Email is incorrect");
  const passwordErrorMessage = await screen.queryByText(
    "Password is incorrect"
  );

  // Expect email error to be there and no path change
  expect(emailErrorMessage).toBeFalsy();
  expect(passwordErrorMessage).toBeTruthy();
  expect(mockRouter).toMatchObject({
    pathname: "/",
  });

  component.unmount();
});

// Test for successful login
test("Succesful login", async () => {
  const { component } = await performLogin(email, password);

  expect(mockRouter).toMatchObject({
    pathname: "/dashboard",
  });

  component.unmount();
});
