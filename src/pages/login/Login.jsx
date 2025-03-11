import React from "react";
import "./styles.css";
import useAuth from "../../hooks/useAuth";

function Login() {
  const {
    // Estado e manipulação do e-mail
    email,
    setEmail,

    // Estado e manipulação da senha
    password,
    setPassword,

    showPassword,
    setShowPassword,

    loginError,

    // Função de autenticação
    signIn,
  } = useAuth();

  return (
    <div className="container-bg container-login">
      <header className="login-header">
        <div className="login-container-logo">
          <img src="./src/assets/images/LOGO.svg" />
          <label className="font-s c6">
            Uma rua reparada não é apenas um conserto, mas o caminho para o
            progresso.
          </label>
        </div>
      </header>
      <main className="login-main">
        <div className="login-container-form">
          <h1 className="font-xl p1 title-login">Login</h1>

          <div className="login-form">
            <div>
              <div className={`login-input-view `}>
                <img src="/src/assets/icons/user.svg" />
                <input
                  className={`font-s c4 login-input-text `}
                  type="email"
                  placeholder="Digite aqui seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div className={`login-input-view`}>
                <img className="icon" src="/src/assets/icons/lock.svg" />
                <input
                  className={`font-s c4 login-input-text`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite aqui seu email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="input__icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img className="img" src=" /src/assets/icons/hidden.svg" />
                  ) : (
                    <img className="img" src=" /src/assets/icons/show.svg" />
                  )}
                </button>
              </div>
              <span className={loginError ? "font-xs input__legend" : "hidden"}>
                Verifique se seu email ou senha foram corretamente digitado
              </span>
            </div>

            <button className="font-m-b login-buttonSubmit" onClick={signIn}>
              ENTRAR
            </button>
          </div>
        </div>
      </main>
      <footer className="login-footer">
        <p className="font-xs c7">
          Copyright ©2020 Produced by Ant Finance Experience Technology
          Department
        </p>
      </footer>
    </div>
  );
}

export default Login;
