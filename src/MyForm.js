
import { useState } from "react";

const MyForm = () => {
  //  
  // const [firstName, setFirstName] = useState("");
  // const [password, setPassword] = useState("");

  const [userInfo , setUserInfo ] = useState ({
    firstName: "",
    password : "",
  })

  
  
  const onSubmit = (event) => {
    event.preventDefault()
    const firstNameValue = event.target.firstName.value
    // setFirstName(firstName)
    const passwordValue = event.target.password.value
    // setPassword(password)
    const user = {
      firstName : firstNameValue,
      password : passwordValue,
    };

    setUserInfo(user)
    

    
    
    // console.log(firstName, lastName);
  };
  console.log(userInfo)
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>firstName</label>
        <input name="firstName" placeholder="Enter your name"  />
      </div>
      <div>
        <label>password</label>
        <input name="password" placeholder="password"  />
      </div>
      <button type="submit" >submit</button>
    </form>
  );
};

export default MyForm;
