"use client";

// Hooks
import useSignIn from "../hooks/useSignIn";

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import SmallWrapper from "../components/SmallWrapper";
import Logo from "../components/Logo";

export default function LoginForm() {
  const { email, setEmail, password, setPassword, errors, signIn } = useSignIn();

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
