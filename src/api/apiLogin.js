import axios from "axios";
import Swal from "sweetalert2";

const URL = 'http://localhost:3000/api';

export const login = async (correo, password) => {
    try {
        const response = await axios.post(`${URL}/auth/login`, {
            correo,
            password,
        });
        const token = response.data.token;
        // Guardar token en el almacenamiento local
        token ? localStorage.setItem("token", token) : null;

        if (response) {
            Swal.fire({
                icon: "success",
                title: "! Inicio de sesion completado !",
                text: "! Correcto !",
                confirmButtonText: "Ok",
            })};

            return token;
        } catch (error) { {response: {data: { msg }}}
            Swal.fire({
                icon: "error",
                title: "Error al iniciar sesion",
                text: `${ msg }`,
            });
            return false;
        }
    };