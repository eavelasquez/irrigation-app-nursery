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
