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

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Error en la petición");
    }else{
        console.log('peticion correcta')
    }

    return res.json() as Promise<T>;

}
