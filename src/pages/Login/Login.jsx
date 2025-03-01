import React from "react";
import "./styles.css";
import useAuth from "../../hooks/useAuth";

function Login() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    showPassword,
    setShowPassword,
    signIn,
  } = useAuth();

  return (
    <div className="container-bg">
      <header>
        <div className="container-logo">
          <img src="./src/assets/images/LogoProvisoria.png" />
          <label className="font-2-s c6">
            Uma rua reparada não é apenas um conserto, mas o caminho para o
            progresso.
          </label>
        </div>
      </header>
      <main>
        <div className="container-login">
          <h1 className="font-1-xl p1 title-login">Login</h1>

          <div className="form">
            <div className="input-view">
              <img className="icon" src="/src/assets/icons/icon-person.png" />
              <input
                className="input-text"
                type="email"
                placeholder="Digite aqui seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-view">
              <img className="icon" src="/src/assets/icons/icon-look.png" />
              <input
                className="input-text"
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui seu email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="toggle-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button className="buttonSubmit" onClick={signIn}>
              ENTRAR
            </button>
          </div>
        </div>
      </main>
      <footer>
        <p className="font-1-xs c7">
          Copyright ©2020 Produced by Ant Finance Experience Technology
          Department
        </p>
      </footer>
    </div>
  );
}

export default Login;
