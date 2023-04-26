import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type { FormValidationSchema } from '~/utils/form-validation'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void,
  data?: FormValidationSchema
}

export default function ModalExito({ open, setOpen, data }: Props) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-999 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="0" y="0" width="20" height="20" fill="none" stroke="none" /><path fill="currentColor" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893l7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    ¡Tu registro ha sido exitoso!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Bienvenid@ {data?.nombre} {data?.apellidoPaterno} {data?.apellidoMaterno}.
                      <br />
                      Tu registro ha sido confirmado.
                    </p>

                    <p className="text-left text-xs text-gray-500 mt-4" >
                      Estos son los datos que nos proporcionaste:
                    </p>

                    <dl className="space-y-8 text-left sm:space-y-0 sm:divide-y sm:divide-gray-200">
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-30 sm:flex-shrink-0">
                          Nombre(s)
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          <p>
                            {data?.nombre}
                          </p>
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-30 sm:flex-shrink-0">
                          Apellido Paterno
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          {data?.apellidoPaterno}
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-30 sm:flex-shrink-0">
                          Apellido Materno
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          {data?.apellidoMaterno}
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-30 sm:flex-shrink-0">
                          Correo electrónico
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          {data?.email}
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-30 sm:flex-shrink-0">
                          Género
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          {data?.genero}
                        </dd>
                      </div>
                      <div className="sm:flex sm:px-6 sm:py-5">
                        <dt className="text-sm font-medium text-gray-500 sm:w-30 sm:flex-shrink-0">
                          Teléfono
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 sm:ml-6">
                          {data?.telefono}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
