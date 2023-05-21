import { useForm } from "../hooks/useForm"

const Login = () => {
  const { login, inputChange, } = useForm()

  return (
    <>
      <form onSubmit={login}>
        <input type="text" name="username" onChange={inputChange} />
        <input type="password" name="password" onChange={inputChange} />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login