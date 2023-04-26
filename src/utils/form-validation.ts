import { z } from "zod";
import isMobilePhone from 'validator/es/lib/isMobilePhone'

export enum Genero {
  MASCULINO = 'Masculino',
  FEMENINO = 'Femenino',
  NO_BINARIO = 'No Binario',
  NO_ESPECIFICADO = 'Prefiero no especificar',
}

export const validationSchema = z
  .object({
    nombre: z.string().min(2, { message: "Nombre es un campo requerido" }),
    apellidoPaterno: z.string().min(2, { message: "Apellido Paterno es un campo requerido" }),
    apellidoMaterno: z.string().min(2, { message: "Apellido Materno es un campo requerido" }),
    email: z.string().min(1, { message: "Correo Electrónico es un campo requerido" }).email({
      message: "Correo Electrónico debe ser una dirección de correo válida",
    }),
    telefono: z
      .string().min(1, { message: "Teléfono es un campo requerido" })
      .refine((value) => isMobilePhone(value, 'es-MX'), {
        message: "Teléfono debe ser un número de teléfono válido",
      }),
    genero: z.nativeEnum(Genero),
    terms: z.literal(true, {
      errorMap: () => ({ message: "Por favor acepta los términos y condiciones" }),
    }),
  })

export type FormValidationSchema = z.infer<typeof validationSchema>;
