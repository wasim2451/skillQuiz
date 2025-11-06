import 'server-only'
export async function saveEmployeeRegistartonDetails(data: { firstname: string; lastname: string, email: string, phone: string, file: File | null }) {
    const { firstname, lastname, email, phone, file } = data;
    if (firstname && lastname && email && phone && file) {
        console.log("Saved To Data Base");
        return {
            status: true
        }
    }else{
        return{
            status: false
        }
    }

}