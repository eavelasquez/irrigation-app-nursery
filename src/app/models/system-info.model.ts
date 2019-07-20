export class SystemInfo {
    constructor(
      public bateria: { value: number },
      public tanque: { value: number },
      public lineas: Array<{ id: string, sensores: Array<{ id: string, value: string }> }>,
      public humedad: number,
      public estado: boolean
    ) {}
}
