const FormSelectInput = ({ label, size, hookForm, ...rest }) => {

    return (
        <div className="w-full flex flex-col gap-1">
            <label className={`font-bold text-gray-700 ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
                {label}
                <span className="text-red-400">*</span>
            </label>
            <select class="w-full py-3 px-4 block border border-gray-200 rounded-md text-sm" {...hookForm} {...rest}>
                <option value="moto" selected>moto</option>
                <option value="carro">carro</option>
            </select>
        </div>
    )
}

export default FormSelectInput