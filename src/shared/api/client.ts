const URL = 'http://localhost:3000';


export async function apiFetch<T>(
    endpoint: string,
    method?: string,
    data?: any,
    credentials: RequestCredentials = 'include'
): Promise<T>{

    const res = await fetch(`${URL}/${endpoint}`, { 
        method: method,
        credentials: credentials,
        headers: {'Content-Type': 'application/json'},
        body: data ? JSON.stringify(data) : undefined,
    })

    //si res.ok es false, significa que el servidor respondió con un error 400 o 500
    //en ese caso, throw interrumpe el flujo de la fn y termina inmediatamente, retornando un promesa rechazada
    if (!res.ok) {
        //FUNCIONA
        // const text = await res.text();
        // const errorData = JSON.parse(text);
        // throw new Error(errorData.message || errorData.error || `Error HTTP ${res.status}`)
        //NO FUNCIONA - solo funciona si el servidor devuelve un JSON valido, sino, lanza error 
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.message || errData?.error || `Error HTTP ${res.status}`); 
    }

    return res.json() as Promise<T>;

}
