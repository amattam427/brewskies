import React, {useState} from 'react';


function Login({onLogin}){

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })

    function handleInputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((user) => console.log(user))
          }
        });
      }





    

    return (
        <div className="login-body">
        <div className="login-p">Login Into Your Account!</div>
        <form onSubmit={handleSubmitLogin}>
        {/* <label className="email" htmlFor="email">Email: </label> */}
        <input 
        className = "login"
        type="text"
        id="email"
        autoComplete="off"
        placeholder="Enter email" 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        />

        <input
        className = "login"
        type="password"
        id="password"
        autoComplete="current-password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleInputChange}
        />

    <button className= "email-btn" type="submit">Login</button>


        </form>
        </div>
    )
}



export default Login;