import { Component, OnInit } from "@angular/core";
import { Users } from "../../models/user.module";
import { RegistrationService } from "src/app/registration/registration.service";
import { Router } from "@angular/router";
import { UserDetail } from "src/app/models/userDetail.module";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: Users = {
    id: null,
    mailid: "",
    password: ""
  };

  lblErrorMsg = "";
  userDetail: UserDetail;

  constructor(
    private reginsterServices: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {}
  onSubmit(LoginInput: Users) {
    this.reginsterServices.CheckUserLogin(LoginInput).subscribe(
      data => {
        this.userDetail = Object.assign(data);
        if (data[0].error) {
          this.lblErrorMsg = data[0].error;
          localStorage.removeItem("lsUser");
        } else if (data[0].message) {
          localStorage.setItem("lsUser", JSON.stringify(data));
          this.router.navigate(["/registration"]);
        }

        if (this.userDetail[0].Id > 0) {
          localStorage.setItem("lsUser", JSON.stringify(data));
          this.router.navigate(["/members"]);
        }
      },
      error => {
        localStorage.removeItem("lsUser");
        console.log("Error on User Login Check");
      }
    );
  }
}
