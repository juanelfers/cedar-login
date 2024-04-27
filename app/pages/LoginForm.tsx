"use client";

// Hooks
import { useRouter } from "next/navigation";
import { useState } from "react";

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import SmallWrapper from "../components/SmallWrapper";
import Logo from "../components/Logo";

export default function LoginForm() {
  // Hooks
  const router = useRouter();

  // Component state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    email: string | null;
    password: string | null;
  }>({ email: null, password: null });

  // Sign in callback
  const signIn = () => {
    const err = {
      email: email !== process.env.EMAIL ? "Email is incorrect" : null,
      password:
        password !== process.env.PASSWORD ? "Password is incorrect" : null,
    };

    setErrors(err);

    const hasErrors = Object.values(err).some(Boolean);
    if (!hasErrors) {
      router.push("/dashboard", { scroll: false });
    }
  };

  return (
    <SmallWrapper>
      <header className="text-center">
        <Logo />
        <h3 className="text-dark-blue text-2xl font-bold mt-8 mb-6">
          Sign in to your account
        </h3>
      </header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          signIn();
        }}
      >
        <div className="flex flex-col gap-4 mb-6">
          <Input
            type="text"
            label="Email address"
            value={email}
            onChange={setEmail}
            error={errors.email}
            placeholder={process.env.EMAIL}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
            error={errors.password}
            placeholder={process.env.PASSWORD}
          />
        </div>
        <Button>Sign In</Button>
      </form>
    </SmallWrapper>
  );
}
