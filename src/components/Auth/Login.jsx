import LOGIN from "../../mutations/login.js"
import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth.js"

const Login = ({ setComponent }) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loginMutation, { loading, error }] = useMutation(LOGIN);
  const { login } = useAuth();

  const navigate = useNavigate()

  if (loading) return 'Submitting...';
  // if (error) return `Submission error! ${error.message}`;

  const onSubmit = async (data) => {
    let result = await loginMutation({
      variables: {
        identifier: data.identifier,
        password: data.password
      }
    })

    if(result.data.login.jwt){
      login(result.data.login.jwt)
      navigate('/dashboard')
    }
  }

  return (
      <form className="w-full flex flex-col my-auto text-gray-700 px-16 items-center animate-in" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="w-full font-bold text-2xl text-left">Iniciar sesión</h3>
        <p className="w-full text-sm text-left">Accede desde tu cuenta</p>
        <div className="w-full flex flex-col mt-12">
          <label className="text-sm font-bold text-gray-700">Correo<span className="text-red-400">*</span></label>
          <input
              type="text"
              placeholder="Ingresa el correo..."
              {...register("identifier")}
              className="w-full bg-white/30 border px-4 py-2 rounded-xl mt-1"
          />
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="text-sm font-bold text-gray-700">Contraseña<span className="text-red-400">*</span></label>
          <input
              type="text"
              placeholder="Ingresa la contraseña..."
              {...register("password")}
              className="w-full bg-white/30 border px-4 py-2 rounded-xl mt-1"
          />
        </div>
        <div className="w-full flex items-center gap-2 mt-4">
          <input type="checkbox" id="remember-me"/>
          <label htmlFor="remember-me">Recordarme</label>
        </div>
        <button className="w-full rounded-xl py-2 font-bold text-white bg-green-prospect mt-4">
          Ingresar
        </button>
        <div className="w-full flex justify-between text-sm underline mt-4">
          <p onClick={() => setComponent(3)} className="hover:text-blue-700 hover:cursor-pointer">
            Olvide mi contraseña
          </p>
          <p onClick={() => setComponent(2)} className="hover:text-blue-700 hover:cursor-pointer">
            No tengo una cuenta
          </p>
        </div>
      </form>
  )
}

export default Login