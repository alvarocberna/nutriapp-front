import {Usuario} from '../../features/usuario/types/usuario'
const URL_1 = 'http://localhost:3000';

export async function apiFetch<T>(
    endpoint: string,
    mehtod?: string,
    data?: Usuario 
): Promise<T>{

    const res = await fetch(`${URL_1}/${endpoint}`, {
        method: mehtod,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Error en la petici    ón");
    }else{
        console.log('peticion correcta')
        console.log(res)
    }

    return res.json() as Promise<T>;

}
