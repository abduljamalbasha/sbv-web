import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../models/user.module";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  selectedUser: Users;
  users: Users[];

  readonly baseURL = "http://localhost:2000/users/";

  constructor(private http: HttpClient) {}

  convertObjectToFormdata(user: Users) {
    const fd = new FormData();
    fd.append("fullname", user.fullname);
    fd.append("gender", user.gender);
    fd.append("userImage", user.userImage);
    fd.append("motherTongue", user.motherTongue);
    fd.append("Clause", user.Clause);
    var dob = new Date(user.dob).toUTCString();
    fd.append("start", dob);
    fd.append("birthTime", user.birthTime);
    fd.append("age", user.age.toString());
    fd.append("height", user.height.toString());
    fd.append("color", user.color);
    fd.append("qualificaton", user.qualificaton);
    fd.append("occupation", user.occupation);
    fd.append("work", user.work);
    fd.append("earnings", user.earnings);
    fd.append("physicalFitness", user.physicalFitness);
    fd.append("maritalStatus", user.maritalStatus);
    fd.append("religion", user.religion);
    fd.append("familyGod", user.familyGod);
    fd.append("fathername", user.fathername);
    fd.append("mothername", user.mothername);
    fd.append("fatherOccupation", user.fatherOccupation);
    fd.append("motherOccupation", user.motherOccupation);
    fd.append("sibblingsMale", user.sibblingsMale.toString());
    fd.append("sibblingsFemale", user.sibblingsFemale.toString());
    fd.append("marriedSibblingsMale", user.marriedSibblingsMale.toString());
    fd.append("marriedSibblingsFemale", user.marriedSibblingsFemale.toString());
    fd.append("origin", user.origin);
    fd.append("native", user.native);
    fd.append("assets", user.assets);
    fd.append("dowry", user.dowry);
    fd.append("star", user.star);
    fd.append("rasi", user.rasi);
    fd.append("lagnam", user.lagnam);
    fd.append("directionBias", user.directionBias);
    fd.append("year", user.year);
    fd.append("month", user.month);
    fd.append("day", user.day);
    fd.append("ra1", user.ra1);
    fd.append("ra2", user.ra2);
    fd.append("ra3", user.ra3);
    fd.append("ra4", user.ra4);
    fd.append("ra5", user.ra5);
    fd.append("ra6", user.ra6);
    fd.append("ra7", user.ra7);
    fd.append("ra8", user.ra8);
    fd.append("ra9", user.ra9);
    fd.append("ra10", user.ra10);
    fd.append("ra11", user.ra11);
    fd.append("ra12", user.ra12);
    fd.append("f1", user.f1);
    fd.append("f2", user.f2);
    fd.append("f3", user.f3);
    fd.append("f4", user.f4);
    fd.append("f5", user.f5);
    fd.append("f6", user.f6);
    fd.append("f7", user.f7);
    fd.append("f8", user.f8);
    fd.append("f9", user.f9);
    fd.append("f10", user.f10);
    fd.append("f11", user.f11);
    fd.append("f12", user.f12);
    fd.append("address", user.address);
    fd.append("district", user.district);
    fd.append("phone1", user.phone1.toString());
    fd.append("phone2", user.phone2.toString());
    fd.append("mailid", user.mailid);
    fd.append("password", user.password);
    fd.append("expectations", user.expectations);
    fd.append("otherMessage", user.otherMessage);

    return fd;
  }

  registerMember(user: Users) {
    const userDetail = this.convertObjectToFormdata(user);
    return this.http.post(this.baseURL, userDetail);
  }

  getAllMember() {
    return this.http.get(this.baseURL);
  }

  getMemberById(id: string) {
    return this.http.get(this.baseURL + id);
  }
}
