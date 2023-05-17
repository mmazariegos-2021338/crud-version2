import axios from "axios"
import Swal from "sweetalert2"
const URL = 'http://localhost:3000/api';

export const getCategories = async () => {

    try {

        const { data: { listaCategorias } } = await axios.get(`${URL}/categorias/`)

        console.log(listaCategorias);

        return listaCategorias;
        
    } catch (error) {
        console.log('Error en la peticion');
    }
}
