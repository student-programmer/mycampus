"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import l from "./LoginForm.module.scss";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/profile");
  };

  return (
    <div className={l.login_form}>
      <Button type="primary" onClick={handleLogin} className={l.login_button}>
        login via UNI
      </Button>
    </div>
  );
};

export default LoginForm;
