// // features/usuarios/hooks/useUsuarios.ts
// import { useQuery } from "@tanstack/react-query";
// import { getUsuarios, getUsuarioById } from "../api/usuario.api";

// export function useUsuarios() {
//   return useQuery({
//     queryKey: ["usuarios"],
//     queryFn: getUsuarios,
//   });
// }

// export function useUsuario(id: string) {
//   return useQuery({
//     queryKey: ["usuarios", id],
//     queryFn: () => getUsuarioById(id),
//     enabled: !!id, // solo corre si hay id
//   });
// }
