
export async function apiFetch<T>(
    endpoint: string,
    method?: string,
    data?: any,
    credentials: RequestCredentials = 'include'
): Promise<T>{
    
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await fetch(`${url}/${endpoint}`, { 
        method: method,
        credentials: credentials,
        headers: {'Content-Type': 'application/json'},
        body: data ? JSON.stringify(data) : undefined,
    })

    //si res.ok es false, significa que el servidor respondió con un error 400 o 500
    //en ese caso, throw interrumpe el flujo de la fn y termina inmediatamente, retornando un promesa rechazada
    if (!res.ok) {
        // Intenta parsear el cuerpo del error como JSON.
        // Si falla (porque no es JSON), usa el texto del status como fallback.
        let errorData;
        try {
            errorData = await res.json();
        } catch (error) {
            errorData = { message: `Error HTTP ${res.status}: ${res.statusText}` };
        }
        throw new Error(errorData?.message || errorData?.error || `Error HTTP ${res.status}`);
    }

    // Si la respuesta es "204 No Content", no hay cuerpo para parsear.
    // Retornamos `undefined` casteado al tipo esperado.
    if (res.status === 204) {
        return undefined as T;
    }

    return res.json() as Promise<T>;

}
