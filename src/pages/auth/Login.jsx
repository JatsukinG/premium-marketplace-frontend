import { useMutation } from "@apollo/client"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import LOGIN from "../../mutations/login.js"
import useAuth from "../../modules/auth/hooks/useAuth.js"
import AuthForm from "../../modules/auth/components/AuthForm.jsx"
import AuthTextLink from "../../modules/auth/components/AuthTextLink.jsx"

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
      <AuthForm
          title="Iniciar sesión"
          subtitle="Accede desde tu cuenta">
        <AuthForm.Section>
          <form
              onSubmit={handleSubmit(onSubmit)}>
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
              <label className="text-sm font-bold text-gray-700">Contraseña<span
                  className="text-red-400">*</span></label>
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
          </form>
        </AuthForm.Section>
        <AuthForm.Footer>
          <AuthTextLink to="/auth/forgot-password" text="Olvide mi contraseña"/>
          <AuthTextLink to="/auth/signup" text="No tengo una cuenta"/>
        </AuthForm.Footer>
      </AuthForm>
  )
}

export default Login