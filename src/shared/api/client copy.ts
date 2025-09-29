
const URL_1 = 'http://localhost:3000';

export async function apiFetch<T>(
    endpoint: string,
    data?: RequestInit //esto qué significa?
): Promise<T>{

    const res = await fetch(`${URL_1}/${endpoint}`, {
        headers: {
            "Content-Type": "Aplication/json" 
        },
        ...data
    })

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Error en la petición");
    }else{
        console.log('peticion correcta')
        console.log(res)
    }

    return res.json() as Promise<T>;

}
