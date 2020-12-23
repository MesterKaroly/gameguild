import {Component, OnInit} from '@angular/core';
import {Role} from '../../model/Role';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

interface MenuItem {
  link: String;
  title: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: MenuItem[];
  isloggedin: boolean;
  private roleMenus = new Map<String, MenuItem[]>([
    [Role.GUEST, [
      {link: '/login', title: 'Belépés'},
      {link: '/registration', title: 'Regisztráció'},
      {link: '/welcome', title: 'Főoldal'}
      ]
    ],
    [Role.USER, [
      {link: '/selectForm', title: 'Karakter Lekérdező'},
      ]
    ],
    [Role.ADMIN, [
      {link: '/login', title: 'Belépés'},
      {link: '/registration', title: 'Regisztráció'},
      {link: '/welcome', title: 'Főoldal'},
      {link: '/selectForm', title: 'Karakter Lekérdező'},
      ]
    ],
  ]);

  constructor(private router: Router,private authService: AuthService,) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenus();
      }
    });
  }

  setMenus() {
    if (this.authService.isLoggedIn) {
      this.menus = this.roleMenus.get(this.authService.user.role.toString());
    } else {
      this.menus = this.roleMenus.get(Role.GUEST)
    }
    this.isloggedin = this.authService.isLoggedIn;
  }

}
