'use server'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";



export async function login(formData) {
  const LOGIN_URL = '/'

  // Obtener usuario datos del formulario
  const name = formData.get('name') || 'medico1'
  const password = formData.get('password') || 'medico1'
  const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

  const medicos = [
    { name: 'medico1', key: 'medico1' },
    { name: 'medico2', key: 'medico2' },
  ]

  const medicoEncontrado = medicos.find((medico) =>
    (medico.name === name && medico.key === key)
  )

  if (!medicoEncontrado) return

  // Si hay autenticación correcta, creamos cookie de sesión
  await setCookie('session', { name, email, password });

  redirect(callbackUrl);
}



export async function logout() {
  // Eliminamos cookie de sesión
  deleteCookie('session')

  // redirect("/");   // No recarga si ya estamos en esta página

  // Hack to reload page! https://github.com/vercel/next.js/discussions/49345#discussioncomment-6120148
  redirect('/?' + Math.random())
}


