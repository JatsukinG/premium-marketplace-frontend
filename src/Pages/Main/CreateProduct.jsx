import { useForm } from "react-hook-form";
import HorizontalInput from "../../components/Inputs/HorozontalInput.jsx"
import FormSelectInput from "../../components/Inputs/FormSelectInput.jsx";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import CREATE_PRODUCT from "../../mutations/createProduct.js";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [createProductMutation, { loading, error }] = useMutation(CREATE_PRODUCT, {
    context: {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`
      }
    }
  });

  useEffect(() => {
    if (error) {
      toast.dismiss()
      toast.error("Ups!, Ha fallado la creacion de producto, verifica los datos ingresados y vuelve a intentarlo.")
    }
  }, [error])

  const onSubmit = async (formData) => {

    const loadingToast = toast.loading('Estamos creando tu producto')

    let result = await createProductMutation({
      variables: {
        data: {
          name: formData.name,
          vehicleType: formData.vehicleType,
          price: Number(formData.price),
          description: formData.description,
          offPercent: formData.offPercent ? Number(formData.offPercent) : 0,
          user_id: "1"
        }
      }
    })

    if(result.data){
      toast.success(`Tu producto se ha creado exitosamente!`, {id: loadingToast})
      reset()
    }

  }

  return (
    <div className="w-full flex flex-col px-4 md:px-48 py-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full bg-white flex flex-col gap-4 rounded-md shadow-xl p-4 md:px-12 md:py-12">
          <p className="font-bold text-xl mb-4">Crear un producto</p>
          <p>¡Únete a nuestra comunidad y convierte tus repuestos en ventas exitosas. Comienza hoy mismo y comparte
            tus piezas con compradores interesados. ¡Es hora de vender tus repuestos!</p>
        </div>
        <div className="w-full bg-white flex flex-col gap-4 rounded-md shadow-xl px-4 py-8 md:px-12 md:py-32">
          <h3 className="font-bold mb-8">Informacion del Producto</h3>
          <HorizontalInput label="Nombre del producto" hookForm={{ ...register('name') }} />
          <FormSelectInput label="Tipo de vehiculo" hookForm={{ ...register('vehicleType') }} />
          <HorizontalInput label="Categorias" hookForm={{ ...register('categories') }} />
          <div className="w-full flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-1/3 font-bold text-gray-700 text-sm">
              Fotos
              <span className="text-red-400">*</span>
            </label>
            <div className="w-full md:w-2/3 flex justify-between items-center gap-1 md:gap-2">
              <div className="w-full h-12 bg-gray-100 rounded-md"></div>
              <div className="w-full h-12 bg-gray-100 rounded-md"></div>
              <div className="w-full h-12 bg-gray-100 rounded-md"></div>
              <div className="w-full h-12 bg-gray-100 rounded-md"></div>
              <div className="w-full h-12 bg-gray-100 rounded-md"></div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center gap-2">
            <label className="w-full md:w-1/3 font-bold text-gray-700 text-sm">
              Descripcion
              <span className="text-red-400">*</span>
            </label>
            <div className="w-full md:w-2/3 flex items-center gap-2">
              <textarea className="w-full h-32 border rounded-xl p-4" {...register('description')} />
            </div>
          </div>
        </div>

        <div className="w-full bg-white flex flex-col gap-4 rounded-md shadow-xl p-4 md:px-12 md:py-12">
          <h3 className="font-bold mb-8">Informacion de ventas</h3>
          <HorizontalInput label="Precio del producto" type="number" hookForm={{ ...register('price') }} />
          <HorizontalInput label="Stock" type="number" />
          <HorizontalInput label="Porcentaje de descuento" type="number" hookForm={{ ...register('offPercent') }} />
        </div>

        <div className="w-full bg-white flex flex-col gap-4 rounded-md shadow-xl p-4 md:px-12 md:py-12">
          <h3 className="font-bold mb-8">Informacion de envio</h3>
          <HorizontalInput label="Tipo de envio" type="number" />
          <HorizontalInput label="Precio minimo del envio" type="number" />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full w-max">
          Guardar cambios
        </button>
      </form>
    </div>
  )
}

export default CreateProduct