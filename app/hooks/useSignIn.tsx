// Hooks
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignIn() {
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

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    signIn,
  };
}
