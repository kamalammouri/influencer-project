import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
//declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  constructor(private router: Router,private tokenService: TokenService) {}
  logout($event:MouseEvent){
    event.preventDefault();
    this.tokenService.remove();
    this.router.navigateByUrl('admin/login');
  }
}
