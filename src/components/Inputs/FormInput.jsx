const FormInput = ({ label, size, ...rest }) => {
  return (
      <div className="w-full flex flex-col">
        <label className={`font-bold text-gray-700 ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
          {label}
          <span className="text-red-400">*</span>
        </label>
        <input
            {...rest}
            className={`w-full bg-white/30 border mt-1 ${size === 'small' ? 'px-2 py-1 text-sm rounded-md' : 'px-4 py-2 rounded-xl'}`}
        />
      </div>
  )
}

export default FormInput