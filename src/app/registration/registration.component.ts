import { Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgForm } from "@angular/forms";
import { Users } from "../models/user.module";
import { RegistrationService } from "./registration.service";

import { NotificationService } from "../shared/notification.service";
import { UploadService } from "../services/upload.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
  providers: [RegistrationService, NgbModalConfig, NgbModal]
})
export class RegistrationComponent implements OnInit {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private registrationService: RegistrationService,
    private notifyService: NotificationService,
    private uploadService: UploadService
  ) {}
  //test jamal
  selectedFiles: FileList;

  user: Users = {
    //personalDetail:{
    _id: null,
    fullname: "",
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
    //}
    //,familyDetail:{
    fathername: "",
    mothername: "",
    fatherOccupation: "",
    motherOccupation: "",
    //sibblings:{
    sibblingsMale: null,
    sibblingsFemale: null,
    //},
    //marriedSibblings:{
    marriedSibblingsMale: null,
    marriedSibblingsFemale: null,
    //},
    origin: "",
    native: "",
    assets: "",
    dowry: "",
    //},
    //horoscopeDetails:{
    star: "",
    rasi: "",
    lagnam: "",
    directionBias: "",
    year: "",
    month: "",
    day: "",
    //rasibox:{
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
    //},
    //feature:{
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
    //},
    address: "",
    district: "",
    phone1: null,
    phone2: null,
    mailid: "",
    password: "",
    expectations: "",
    otherMessage: "",
    userImage: null
    //}
  };

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.registrationService.selectedUser = {
      //personalDetail:{
      _id: null,
      fullname: "",
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
      //}
      //,familyDetail:{
      fathername: "",
      mothername: "",
      fatherOccupation: "",
      motherOccupation: "",
      //sibblings:{
      sibblingsMale: null,
      sibblingsFemale: null,
      //},
      //marriedSibblings:{
      marriedSibblingsMale: null,
      marriedSibblingsFemale: null,
      //},
      origin: "",
      native: "",
      assets: "",
      dowry: "",
      //},
      //horoscopeDetails:{
      star: "",
      rasi: "",
      lagnam: "",
      directionBias: "",
      year: "",
      month: "",
      day: "",
      //rasibox:{
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
      //},
      //feature:{
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
      //},
      address: "",
      district: "",
      phone1: null,
      phone2: null,
      mailid: "",
      password: "",
      expectations: "",
      otherMessage: "",
      userImage: null
      //}
    };
  }

  ngOnInit() {}

  open(content) {
    this.modalService.open(content, { size: "lg" });
  }

  onSelectedFile(event) {
    this.user.userImage = <File>event.target.files[0];
    console.log(event.target.files);
    if (event.target.files.lenght > 0) {
      this.user.userImage = event.target.files[0];

      //test jamal
      this.selectedFiles = event.target.files;
    }
  }
  onSubmit(NewUser: Users) {
    //console.log(NewUser);

    //test jamal upload file to s3 buket
    //this.upload();

    if (NewUser.fullname != "") {
      this.registrationService.registerMember(NewUser).subscribe(res => {
        //this.resetForm();
        //console.log(res);
        this.notifyService.showSuccessWithTimeout("hello jamla", "title", 1000);
      });
    }
  }

  //test jamal
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
  }

  // onSelectedFile(event) {
  //   this.selectedFiles = event.target.files;
  // }
}
