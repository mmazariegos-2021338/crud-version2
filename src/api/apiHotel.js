import axios from "axios"
import Swal from "sweetalert2"
const URL = 'http://localhost:3000/api';

export const getHotel = async () => {

    try {

        const { data: { listaHotel } } = await axios.get(`${URL}/hotel/`)

        console.log(listaHotel);

        return listaHotel;

    } catch (error) {
        console.log('Error en la peticion');
    }
}

export const postHotel = async (nombre, direccion, evento) => {

    try {
        const response = await axios.post(`${URL}/hotel/agregar`, {
            nombre, direccion, evento
        }, {headers: {"x-token": token}} 
        )

        if (response) {
            Swal.fire({
                icon: "success",
                title: "! Felicidades a Agregado un Nuevo Hotel !",
                text: "! Correcto !",
                confirmButtonText: "Ok",
            })};

            return response;

        } catch (error) { {response: {data: { msg }}}
            Swal.fire({
                icon: "error",
                title: "Error no se pudo agregar",
                text: `${ msg }`,
            });
            return false;
        }

}
