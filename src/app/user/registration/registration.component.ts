import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RegistrationService } from "src/app/registration/registration.service";
import { NotificationService } from "src/app/shared/notification.service";
import { UploadService } from "src/app/services/upload.service";
import { UserDetail } from "src/app/models/userDetail.module";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponentNew implements OnInit {
  constructor(
    private modalService: NgbModal,
    private registrationService: RegistrationService,
    private notifyService: NotificationService,
    private uploadService: UploadService
  ) {}

  //test jamal
  selectedFiles: FileList;
  defaultimg = "../../../assets/Images/uploadphoto.png";

  user: UserDetail = {
    Id: null,
    fullname: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    motherTongue: "",
    Clause: "",
    dob: null,
    birthTime: "",
    age: null,
    height: null,
    color: "",
    qualificaton: "",
    occupation: "",
    work: "",
    earnings: "",
    physicalFitness: "",
    maritalStatus: "",
    religion: "",
    familyGod: "",

    fathername: "",
    mothername: "",
    fatherOccupation: "",
    motherOccupation: "",

    sibblingsMale: null,
    sibblingsFemale: null,

    marriedSibblingsMale: null,
    marriedSibblingsFemale: null,

    origin: "",
    native: "",
    assets: "",
    dowry: "",

    star: "",
    rasi: "",
    lagnam: "",
    directionBias: "",
    year: "",
    month: "",
    day: "",

    ra1: "",
    ra2: "",
    ra3: "",
    ra4: "",
    ra5: "",
    ra6: "",
    ra7: "",
    ra8: "",
    ra9: "",
    ra10: "",
    ra11: "",
    ra12: "",

    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
    f8: "",
    f9: "",
    f10: "",
    f11: "",
    f12: "",

    address: "",
    district: "",
    phone1: null,
    phone2: null,
    mailid: "",
    password: "",
    expectations: "",
    otherMessage: "",
    userImage: null
  };

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.registrationService.selectedUser = {
      Id: null,
      fullname: "",
      firstname: "",
      middlename: "",
      lastname: "",
      gender: "",
      motherTongue: "",
      Clause: "",
      dob: null,
      birthTime: "",
      age: null,
      height: null,
      color: "",
      qualificaton: "",
      occupation: "",
      work: "",
      earnings: "",
      physicalFitness: "",
      maritalStatus: "",
      religion: "",
      familyGod: "",

      fathername: "",
      mothername: "",
      fatherOccupation: "",
      motherOccupation: "",

      sibblingsMale: null,
      sibblingsFemale: null,

      marriedSibblingsMale: null,
      marriedSibblingsFemale: null,

      origin: "",
      native: "",
      assets: "",
      dowry: "",

      star: "",
      rasi: "",
      lagnam: "",
      directionBias: "",
      year: "",
      month: "",
      day: "",

      ra1: "",
      ra2: "",
      ra3: "",
      ra4: "",
      ra5: "",
      ra6: "",
      ra7: "",
      ra8: "",
      ra9: "",
      ra10: "",
      ra11: "",
      ra12: "",

      f1: "",
      f2: "",
      f3: "",
      f4: "",
      f5: "",
      f6: "",
      f7: "",
      f8: "",
      f9: "",
      f10: "",
      f11: "",
      f12: "",

      address: "",
      district: "",
      phone1: null,
      phone2: null,
      mailid: "",
      password: "",
      expectations: "",
      otherMessage: "",
      userImage: null
    };
  }

  ngOnInit() {}

  open(content) {
    this.modalService.open(content, { size: "lg" });
  }

  onSelectedFile(event) {
    //Load your image while selecting the DP
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.defaultimg = e.target["result"];
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    this.user.userImage = <File>event.target.files[0];
    console.log(event.target.files);
    if (event.target.files.lenght > 0) {
      this.user.userImage = event.target.files[0];
      this.selectedFiles = event.target.files;
    }
  }
  onSubmit(NewUser: UserDetail) {
    if (NewUser.firstname != "") {
      this.registrationService.registerMember(NewUser).subscribe(res => {
        this.resetForm();
        //console.log(res);
        this.notifyService.showSuccessWithTimeout(
          "Your information inserted Successfully",
          "Sucess",
          1000
        );
      });
    }
  }

  //test jamal
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
  }
}
