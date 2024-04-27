"use client";

import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};

  return (
    <div>
      Sign in to your account
      <Input label="Email address" value={email} onChange={setEmail} />
      <Input label="Email address" value={password} onChange={setPassword} />
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}
