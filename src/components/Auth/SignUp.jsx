import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import REGISTER from "../../mutations/register.js"
import FormInput from "../Inputs/FormInput.jsx"
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const SignUp = ({ setComponent }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [registerMutation, { loading, error }] = useMutation(REGISTER);

  useEffect(()=>{
    if(error){
      toast.dismiss()
      toast.error(`Ha fallado la creación de tu cuenta!, este correo ya se encuentra en uso`)
    }
  }, [error])

  const onSubmit = async (data) => {
    let email = data.email.toString().trim()
    let password = data.password.toString().trim()
    let username = email.substring(0, email.indexOf("@"))

    const loadingToast = toast.loading(`${username}, Estamos creando tu cuenta`)

    if (password !== data.confirmPassword.toString().trim()) {
      toast.error("Las contraseñas no coinciden")
    } else {
      let result = await registerMutation({
        variables: {
          username: username,
          email: email,
          password: password
        }
      })

      if (result.data.register.jwt) {
        toast.success(`${username}, Tu cuenta se ha creado exitosamente!`, {id: loadingToast})
        setComponent(1)
      }
    }
  }

  return (
    <form className="w-full flex flex-col my-auto text-gray-700 p-8 items-center overflow-y-scroll animate-in" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="w-full font-bold text-2xl text-left">Registro</h3>
      <p className="w-full text-sm text-left">Crea una cuenta para ingresar</p>
      <div className="w-full grid grid-cols-1 gap-2 mt-8">
        <FormInput type="email" label="Correo" size="small" placeholder="Ingresa el correo..." hookForm={{ ...register('email') }} />
        <FormInput type="password" label="Contraseña" size="small" placeholder="Ingresa el correo..." hookForm={{ ...register('password') }} />
        <FormInput type="password" label="Confirmar contraseña" size="small" placeholder="Ingresa el correo..." hookForm={{ ...register('confirmPassword') }} />
      </div>
      <div className="w-full flex flex-col text-xs py-4 gap-2">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="politicy" />
          <label htmlFor="politicy">
            Acepto las <span className="underline hover:cursor-pointer hover:text-blue-700">Politicas de privacidad</span>
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="termins" />
          <label htmlFor="termins">
            Acepto los <span className="underline hover:cursor-pointer hover:text-blue-700">Terminos de servicio</span>
          </label>
        </div>
      </div>
      <button className="w-full rounded-full py-1 font-bold text-sm text-white bg-green-prospect">
        Crear cuenta
      </button>
      <p className="w-full py-2 text-sm text-left">
        Regresar a <span className="underline hover:cursor-pointer hover:text-blue-700" onClick={() => setComponent(1)}>
          Iniciar sesión
        </span>
      </p>
    </form>
  )
}

export default SignUp