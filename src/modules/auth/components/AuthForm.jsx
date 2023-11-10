const AuthForm = ({ title, subtitle, children }) => {
  return (
      <div className="w-full flex flex-col my-auto text-gray-700 px-16 items-center animate-in">
        <h3 className="w-full font-bold text-2xl text-left">
          {title}
        </h3>
        {
            subtitle &&
            <p className="w-full text-sm text-left">
              {subtitle}
            </p>
        }
        <div className="w-full">
          {children}
        </div>
      </div>
  )
}

const AuthFormSection = ({ children }) => {
  return <div className="w-full">{children}</div>
}
const AuthFormFooter = ({ children }) => {
  return <div className="w-full flex justify-between text-sm mt-4">{children}</div>
}

AuthForm.Section = AuthFormSection
AuthForm.Footer = AuthFormFooter

export default AuthForm