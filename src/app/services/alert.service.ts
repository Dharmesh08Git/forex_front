import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(message: string) {
    Swal.fire("Warning", message, 'warning');
  }

  success(message: string) {
    return Swal.fire("Success", message, 'success');
  }

  apiFail(res: any) {
    Swal.fire(res?.error?.error || 'Warning..', res?.error?.message || 'Something went wrong', 'error');
  }
  apiSuccess(res: any) {
    Swal.fire('Success', res?.message, 'success');
  }
}
