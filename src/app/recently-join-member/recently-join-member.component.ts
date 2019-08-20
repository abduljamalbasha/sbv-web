import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RegistrationService } from "../registration/registration.service";
import { Users } from "../models/user.module";
import { environment } from "../../environments/environment";

import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import { Router } from "@angular/router";
import { UserDetail } from "../models/userDetail.module";

@Component({
  selector: "app-recently-join-member",
  templateUrl: "./recently-join-member.component.html",
  styleUrls: ["./recently-join-member.component.css"]
})
export class RecentlyJoinMemberComponent implements OnInit {
  users: Users;
  usersDetail: UserDetail[];

  serverdomain = environment.GCPStorageBucketUrl; //environment.Serverdomain;

  constructor(
    private memberServices: RegistrationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.memberServices.getAllMember().subscribe(data => {
      this.usersDetail = Object.assign(data);
    });
  }

  // public downloadFile() {
  //   var data = document.getElementById("pdfcontent");
  //   html2canvas(data).then(canvas => {
  //     // Few necessary setting options
  //     var imgWidth = 208;
  //     var pageHeight = 295;
  //     var imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     var heightLeft = imgHeight;

  //     const contentDataURL = canvas.toDataURL("image/png");
  //     let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
  //     var position = 0;
  //     pdf.addImage(contentDataURL, "jpeg", 0, position, imgWidth, imgHeight);
  //     pdf.save("MYPdf.pdf"); // Generated PDF
  //   });
  // }

  // @ViewChild("pdfcontent") pdfcontent: ElementRef;
  downloadFile(event) {
    //console.log(event.target.id);
    this.router.navigate(["/userDetail", event.target.id]);

    // this.router.navigate([]).then(result => {
    //   window.open(["/userDetail", event.target.id], "_blank");
    // });

    // const doc = new jspdf();
    // const content = this.pdfcontent.nativeElement;
    // html2canvas(content).then(canvas => {
    //   const imgData = canvas.toDataURL("image/png");
    //   // Few necessary setting options
    //   const imgWidth = 208;
    //   const pageHeight = 295;
    //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //   const doc = new jspdf("p", "mm");
    //   let heightLeft = imgHeight;
    //   let position = 0;

    //   doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    //   heightLeft -= pageHeight;
    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     doc.addPage();
    //     doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    //     heightLeft -= pageHeight;
    //   }
    //   // Generated PDF
    //   doc.save("asdfghj" + ".pdf");
    //});
  }
}
