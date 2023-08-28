import FormInput from "../Inputs/FormInput.jsx"

const SignUp = ({ setComponent }) => {
  return (
      <form className="w-full flex flex-col my-auto text-gray-700 p-8 items-center overflow-y-scroll animate-in">
        <h3 className="w-full font-bold text-2xl text-left">Registro</h3>
        <p className="w-full text-sm text-left">Crea una cuenta para ingresar</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
          <FormInput label="Nombre" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Telefono" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Contraseña" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Club" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Categoria" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Deparatamento" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Municipio" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Nombre" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Nombre" size="small" placeholder="Ingresa el correo..."/>
          <FormInput label="Nombre" size="small" placeholder="Ingresa el correo..."/>
        </div>
        <div className="w-full flex flex-col text-xs py-4 gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="politicy"/>
            <label htmlFor="politicy">
              Acepto las <span className="underline hover:cursor-pointer hover:text-blue-700">Politicas de privacidad</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="termins"/>
            <label htmlFor="termins">
              Acepto los <span className="underline hover:cursor-pointer hover:text-blue-700">Terminos de servicio</span>
            </label>
          </div>
        </div>
        <button className="w-full rounded-full py-1 font-bold text-sm text-white bg-green-prospect">
          Crear cuenta
        </button>
        <p className="w-full py-2 text-sm text-left">
          Regresar a <span className="underline hover:cursor-pointer hover:text-blue-700" onClick={()=>setComponent(1)}>
          Iniciar sesión
        </span>
        </p>
      </form>
  )
}

export default SignUp