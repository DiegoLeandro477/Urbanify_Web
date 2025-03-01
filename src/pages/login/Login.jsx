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
    <div className="container-bg container-login">
      <header className="login-header">
        <div className="login-container-logo">
          <img src="./src/assets/images/LogoProvisoria.png" />
          <label className="font-2-s c6">
            Uma rua reparada não é apenas um conserto, mas o caminho para o
            progresso.
          </label>
        </div>
      </header>
      <main className="login-main">
        <div className="login-container-form">
          <h1 className="font-1-xl p1 title-login">Login</h1>

          <div className="login-form">
            <div className="login-input-view">
              <img src="/src/assets/icons/icon-person.png" />
              <input
                className="login-input-text"
                type="email"
                placeholder="Digite aqui seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-input-view">
              <img className="icon" src="/src/assets/icons/icon-look.png" />
              <input
                className="login-input-text"
                type={showPassword ? "text" : "password"}
                placeholder="Digite aqui seu email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button className="login-buttonSubmit" onClick={signIn}>
              ENTRAR
            </button>
          </div>
        </div>
      </main>
      <footer className="login-footer">
        <p className="font-1-xs c7">
          Copyright ©2020 Produced by Ant Finance Experience Technology
          Department
        </p>
      </footer>
    </div>
  );
}

export default Login;
