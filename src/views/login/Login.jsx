function Login() {

    return (
      <div className="login">
        <h1>Login</h1>

        <p>Texto gracioso y descriptivo</p>

        <label htmlFor="user">User:
          <input type="text" id="user" />
        </label>

        <label htmlFor="password">Password:
          <input type="password" id="password" />
        </label>

      </div>
    )
  }
  
  export default Login