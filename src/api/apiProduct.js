import axios from "axios"
import Swal from "sweetalert2"
const URL = 'http://localhost:3000/api';

export const getProducts = async () => {

    try {

        const { data: { listaProductos } } = await axios.get(`${URL}/productos/`)

        console.log(listaProductos);

        return listaProductos;

    } catch (error) {
        console.log('Error en la peticion');
    }
}

export const postProduct = async (nombre, precio, descripcion, categoria) => {

    try {
        const response = await axios.post(`${URL}/productos/agregar`, {
            nombre, precio, descripcion, categoria
        }, {headers: {"x-token": token}} 
        )

        if (response) {
            Swal.fire({
                icon: "success",
                title: "! Inicio de sesion completado !",
                text: "! Correcto !",
                confirmButtonText: "Ok",
            })};

            return response;

        } catch (error) { {response: {data: { msg }}}
            Swal.fire({
                icon: "error",
                title: "Error al iniciar sesion",
                text: `${ msg }`,
            });
            return false;
        }

}
