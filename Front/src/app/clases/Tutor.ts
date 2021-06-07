
export default class Tutor {

    // // PROPIEDADES 
    public nombre: string;
    public telefono: number; 
    public direccion: string;
    public fechaNac: Date;
    public email: string; 
    public password: string;
    public genero: string;
  
    public static CrearTutor(
        
        // PARAMETROS 
        nombre: string,
        telefono: number, 
        direccion: string,
        fechaNac: Date,
        email: string,
        password: string,
        genero: string

        ): Tutor {

            let _tutor = new Tutor();

            // PROPIEDADES = PARAMETROS
            _tutor.nombre = nombre;
            _tutor.telefono = telefono;
            _tutor.direccion = direccion;
            _tutor.fechaNac = fechaNac;
            _tutor.email = email;
            _tutor.password = password;
            _tutor.genero = genero;

        return _tutor;
    }
}
