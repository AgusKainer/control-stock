import React from "react";
import { formHook } from "../../CustomHooks/FormHooks";

const Login = () => {
  const initialLogin = {
    email: "",
    password: "",
  };
  const { producto, change } = formHook(initialLogin);
  const login = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={change}
          value={producto.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={change}
          value={producto.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
