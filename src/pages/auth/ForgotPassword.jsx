import FormInput from "../../components/Inputs/FormInput.jsx"
import { Link } from "react-router-dom"

const ForgotPassword = () => {

  return (
      <form className="w-full flex flex-col my-auto text-gray-700 px-16 items-center animate-in">
        <h3 className="w-full font-bold text-2xl text-left">Recuperación de cuenta</h3>
        <p className="w-full text-sm text-left">Recupera tu cuenta si has olvidado la constraseña</p>
        <div className="w-full mt-8">
          <FormInput label="Correo" placeholder="Ingresa el correo..."/>
          <p className="text-xs font-bold py-2 text-justify">
            Ingresa tu correo para enviar un codigo de verificación al numero de celular registrado, y poder continuar
            con el proceso de recuperación
          </p>
        </div>
        <button className="w-full rounded-xl py-2 font-bold text-white bg-green-prospect mt-4">
          Enviar codigo
        </button>
        <p className="w-full py-2 text-sm text-left">
          Regresar a <span className="underline hover:cursor-pointer hover:text-blue-700">
          <Link to="/auth/login">
            Iniciar sesión
          </Link>
        </span>
        </p>
      </form>
  )
}

export default ForgotPassword