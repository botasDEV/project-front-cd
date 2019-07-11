import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { RegisterClientService } from '../register-client.service';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(
    private modalService: ModalService,
    private registerClientService: RegisterClientService
  ) {}

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  addClient(form: NgForm) {
    if (this.name.value == '' || this.username.value == '' || this.email.value == '' || this.password.value == '') {
      alert("You must fill all the fields.")
    }

    let client = {
      'name': this.name.value,
      'username': this.username.value,
      'email': this.email.value,
      'password': this.password.value
    }

    this.registerClientService.addClient(client).subscribe(response => console.log('Client Registered'));
  }

}
