import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <div className="max-w-xl mx-auto w-full">
        <div className="flex justify-center my-12">
          <div className="w-full lg:w-11/12 bg-white p-5 rounded-lg shadow-xl">
            <h3 className="pt-4 text-2xl text- font-bold">
              ¡Bienvenid@{name ? ' ' + name : ''}!
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 text-left">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="nombre"
                >
                  Nombre(s)
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu(s) nombre(s)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="my-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="apellido-paterno"
                  >
                    Apellido Paterno
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    id="apellido-paterno"
                    type="text"
                    placeholder="Tu primer apellido"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="apellido-materno"
                  >
                    Apellido Materno
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    id="apellido-materno"
                    type="text"
                    placeholder="Tu segundo apellido"
                  />
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
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="genero"
                  >
                    Género
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    id="genero"
                    type="password"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="telefono"
                  >
                    No. de teléfono
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    id="telefono"
                    type="password"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="terms" />
                <label
                  htmlFor="terms"
                  className="ml-2 mb-2 text-sm font-bold text-gray-700"
                >
                  Acepto los términos y condiciones
                </label>
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
                  ¿Olvidate tu contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
