export interface UserBody {
    id?: number
    email: string
    password: string
    firstname: string
    lastname: string
    phone: string
    weight?: number
    size?: number
    imageUrl?: string
    roles?: string[]
}