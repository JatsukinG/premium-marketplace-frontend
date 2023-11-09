import { useMutation } from "@apollo/client"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import LOGIN from "../../mutations/login.js"
import useAuth from "../../modules/auth/hooks/useAuth.js"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [loginMutation, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const from = searchParams.get('from')
      if (data.login.jwt) {
        login(data?.login.jwt)
        navigate(from ? from : '/')
      }
    }
  })

  if (loading) return 'Submitting...'
  // if (error) return `Submission error! ${error.message}`;

  const onSubmit = async (data) => {
    await loginMutation({
      variables: {
        identifier: data.identifier,
        password: data.password
      }
    })
  }

  return (
      <form className="w-full flex flex-col my-auto text-gray-700 px-16 items-center animate-in"
            onSubmit={handleSubmit(onSubmit)}>
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
          <Link to="/auth/forgot-password" className="hover:text-blue-700">
            Olvide mi contraseña
          </Link>
          <Link to="/auth/signup" className="hover:text-blue-700">
            No tengo una cuenta
          </Link>
        </div>
      </form>
  )
}

export default Login