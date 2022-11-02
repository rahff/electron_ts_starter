import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2";

export class AlertService {

    constructor(){}

    public makeAlert(icon: SweetAlertIcon, text: string): Promise<SweetAlertResult<any>> {
        return Swal.fire({
            position: 'center',
            icon: icon,
            title: text,
            showConfirmButton: false,
            timer: 2000
          })
    }
}

export const alertService = new AlertService();