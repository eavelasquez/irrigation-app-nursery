export class User {
  constructor(
    public CC: string,
    public nombre: string,
    public apellido: string,
    public contrasena: string,
    public email?: string,
    public _id?: string
  ) {}
}

export class AuthUser {
  constructor(
    public CC: string,
    public contrasena: string
  ) {}
}

export class UpdateUser {
  constructor(
    public CC: string,
    public nombre: string,
    public apellido: string,
  ) {}
}
