import { useState } from "react"

export const useForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }
  
  const onLogin = (event) => {
    event.preventDefault();
    let user = {
        username: data.username,
        password: data.password,
    }
    console.log(user);
}

  return {
    login: onLogin,
    inputChange: handleInputChange
  }
}
