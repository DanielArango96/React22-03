import Input from "./Input"
import Usuario from "./Usuario"
import espacio from './assets/espacio.jpg'


function App() {


  return (
    <div class="login-container">
    <form class="login-form">
      <img src={espacio} alt="" />
      <h2>Iniciar sesión</h2>
     <Usuario/>
      <div class="input-group">
        <label for="password">Contraseña:</label>
        <Input />
        </div>
      <div class="input-group">
        <label for="email">Correo electrónico:</label>
        <Input />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
  )
}

export default App
