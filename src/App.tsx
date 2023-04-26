import { useState } from 'react'
import './App.css'
import ModalExito from '~/components/ModalExito'

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Genero, FormValidationSchema, validationSchema } from '~/utils/form-validation'


function App() {
  const [name, setName] = useState('')
  const [formData, setFormData] = useState<FormValidationSchema | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValidationSchema> = (data) => {
    setFormData(data);
    setSuccessModalOpen(true);
  };

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);


  return (
    <>
      <div className="max-w-xl mx-auto w-full">
        <div className="flex justify-center my-12">
          <div className="w-full lg:w-11/12 bg-white p-5 rounded-lg shadow-xl">
            <h3 className="pt-4 text-2xl text- font-bold">
              ¡Bienvenid@{name ? ' ' + name : ''}!
            </h3>
            <p className="px-10 sm:px-20 mt-3 text-xs">
              Por favor llena el siguiente formulario para poder continuar con tu registro.
            </p>
            <form className="px-8 my-4 text-left" noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="nombre"
                >
                  Nombre(s)
                </label>
                <input
                  className={
                    `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline 
                    ${errors.nombre && "border-red-500"}`
                  }
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu(s) nombre(s)"
                  value={name}
                  {...register("nombre")}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.nombre && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.nombre?.message}
                  </p>
                )}
              </div>
              <div className="my-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="apellidoPaterno"
                  >
                    Apellido Paterno
                  </label>
                  <input
                    className={
                      `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline 
                      ${errors.apellidoPaterno && "border-red-500"}}`
                    }
                    id="apellidoPaterno"
                    type="text"
                    placeholder="Tu primer apellido"
                    {...register("apellidoPaterno")}
                  />
                  {errors.apellidoPaterno && (
                    <p className="text-xs italic text-red-500 mt-2">
                      {errors.apellidoPaterno?.message}
                    </p>
                  )}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="apellidoMaterno"
                  >
                    Apellido Materno
                  </label>
                  <input
                    className={
                      `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline 
                      ${errors.apellidoMaterno && "border-red-500"}`
                    }
                    id="apellidoMaterno"
                    type="text"
                    placeholder="Tu segundo apellido"
                    {...register("apellidoMaterno")}
                  />
                  {errors.apellidoMaterno && (
                    <p className="text-xs italic text-red-500 mt-2">
                      {errors.apellidoMaterno?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="my-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <input
                  className={
                    `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline 
                    ${errors.email && "border-red-500"}}`
                  }
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="genero"
                  >
                    Género
                  </label>
                  <select
                    id="genero"
                    className={
                      `mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md 
                      ${errors.genero && "border-red-500"}`
                    }
                    defaultValue={Genero.MASCULINO}
                    {...register("genero")}
                  >
                    {Object.values(Genero).map((genero) => (
                      <option key={genero} value={genero}>
                        {genero}
                      </option>
                    ))}
                  </select>
                  {errors.genero && (
                    <p className="text-xs italic text-red-500 mt-2">
                      {errors.genero?.message}
                    </p>
                  )}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="telefono"
                  >
                    No. de teléfono
                  </label>
                  <input
                    className={
                      `w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline 
                      ${errors.telefono && "border-red-500"}`
                    }
                    id="telefono"
                    type="tel"
                    {...register("telefono")}
                  />
                  {errors.telefono && (
                    <p className="text-xs italic text-red-500 mt-2">
                      {errors.telefono?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="terms" {...register("terms")} />
                <label
                  htmlFor="terms"
                  className={
                    `ml-2 mb-2 text-sm font-bold text-gray-700 
                    ${errors.terms && "border-red-500"}`
                  }
                >
                  Acepto los términos y condiciones
                </label>
                {errors.terms && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.terms?.message}
                  </p>
                )}
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Terminar registro
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
        <ModalExito open={isSuccessModalOpen} setOpen={setSuccessModalOpen} data={formData} />
      </div>
    </>
  )
}

export default App
