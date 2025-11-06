
import {apiFetch} from "../../../shared/api/client"

interface IFormInput {
  correo: string
  password: string
}

export class AuthService{

    public static async login(dataForm: IFormInput): Promise<any>{

        const data = {
            email: dataForm.correo,
            password: dataForm.password
        }

        const response = await apiFetch<{ message: string }>('auth/login', 'POST', data)

        return response;
    }


}
