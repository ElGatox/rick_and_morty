import { useEffect, useState } from "react"

import validation from "./Validation";

const Form = ({login}) => {
    
    const [userData, setUserData] = useState({
        username:"",
        password:""
      });

    const [errors, setErrors] = useState({
        username:"",
        password:""
    })
     
 

 

    const handleInputChange = (event) => {
           setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
        const handleSubmit = (event) => {
            event.preventDefault()
            login(userData);
        }
    
return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
        {errors.username && <p>{errors.username}</p>}

        <label htmlFor="password">Password</label>
        <input type="password" name="password"  value={userData.password} onChange={handleInputChange}/>
        {errors.password&& <p>{errors.password}</p>}
        <button type="submit">Submit</button>

    </form>
)

}

export default Form