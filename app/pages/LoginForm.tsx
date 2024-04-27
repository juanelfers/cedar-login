"use client";

import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import SmallWrapper from "../components/SmallWrapper";
import Logo from "../components/Logo";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};

  return (
    <SmallWrapper>
      <header className="text-center">
        <Logo />
        <h3 className="text-dark-blue text-2xl font-bold mt-6 mb-6">
          Sign in to your account
        </h3>
      </header>
      <form>
        <div className="flex flex-col gap-4 mb-5">
          <Input label="Email address" value={email} onChange={setEmail} />
          <Input label="Password" value={password} onChange={setPassword} />
        </div>
        <Button onClick={signIn}>Sign In</Button>
      </form>
    </SmallWrapper>
  );
}
