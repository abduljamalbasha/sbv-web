import { Component, OnInit } from "@angular/core";
import { Users } from "aws-sdk/clients/workmail";
import { bool } from "aws-sdk/clients/signer";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  user: Users;

  ngOnInit() {
    this.isLoggedIn();
  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLoggedin: bool = false;
  isLoggedIn() {
    if (localStorage.getItem("lsUser")) {
      this.user = JSON.parse(localStorage.getItem("lsUser"))[0];
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
    return this.isLoggedin;
  }

  Logout() {
    localStorage.removeItem("lsUser");
    this.router.navigate(["/home"]);
  }
  Login() {
    this.router.navigate(["/login"]);
  }
}
