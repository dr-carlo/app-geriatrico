
export default class Paciente {
    // // PROPIEDADES
    public nombre: string;
    public email: string;
    public dni: number;
    public obsocial: string;
  
    public static CrearPaciente(
        // PARAMETROS 
        nombre: string,
        dni: number, 
        email: string, 
        obsocial: string
        ): Paciente {

            let _paciente = new Paciente();
            // PROPIEDADES = PARAMETROS
            _paciente.nombre = nombre;
            _paciente.email = email;
            _paciente.dni = dni;
            _paciente.obsocial = obsocial;
        return _paciente;
    }
}
