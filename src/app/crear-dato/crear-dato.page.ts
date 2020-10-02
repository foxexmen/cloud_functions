import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../shared/appointment.service';


@Component({
  selector: 'app-crear-dato',
  templateUrl: './crear-dato.page.html',
  styleUrls: ['./crear-dato.page.scss'],
})
export class CrearDatoPage implements OnInit {

  bookingForm: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      director: [''],
      desarrollador: [''],
      distribuidor: [''],
      mododejuego: [''],
      plataforma: [''],
      motor: [''],
      idioma: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}