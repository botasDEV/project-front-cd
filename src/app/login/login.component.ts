import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openRegister () {
    this.modalService.close('custom-modal-1');
    this.modalService.open('custom-modal-2');
  }

}
