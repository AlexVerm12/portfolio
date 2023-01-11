import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  openPopUp(){
    document.getElementById(`popUp`)?.classList.remove('d-none');
    document.getElementById(`openMenu`)?.classList.remove('show-mobile');
    document.getElementById(`closeMenu`)?.classList.remove('d-none');
  }

  closePopUp(){
    document.getElementById(`popUp`)?.classList.add('d-none');
    document.getElementById(`openMenu`)?.classList.add('show-mobile');
    document.getElementById(`closeMenu`)?.classList.add('d-none');
  }

}
