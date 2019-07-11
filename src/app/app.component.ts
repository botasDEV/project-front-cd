import { Component } from '@angular/core';
import { ModalService } from './_services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Front CD';
  isLogged: Boolean;
  greetings = 'Welcome ';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    if(sessionStorage.getItem("token") && sessionStorage.getItem("username")) {
      this.greetings += sessionStorage.getItem('username');
      this.isLogged = true;
    } else {
      this.greetings += 'guest';
      this.isLogged = false;
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}
