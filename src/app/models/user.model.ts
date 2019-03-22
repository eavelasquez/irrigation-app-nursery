export class User {
  constructor(
    public document: string,
    public name: string,
    public surname: string,
    public password: string,
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
