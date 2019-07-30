import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { RegistrationService } from "src/app/registration/registration.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "aws-sdk/clients/quicksight";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
import { UserDetail } from "src/app/models/userDetail.module";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent
  implements
    OnInit,
    OnDestroy,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked {
  constructor(
    private registrationServices: RegistrationService,
    private route: ActivatedRoute
  ) {}

  serverdomain = environment.Serverdomain;

  user: User;
  userdetail: UserDetail;
  @ViewChild("pdfcontent") pdfcontent: ElementRef;

  downloadpdf() {
    //Download html to PDF
    const doc = new jspdf();
    const content = this.pdfcontent.nativeElement;
    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      // Few necessary setting options
      const imgWidth = 250;
      const pageHeight = 320;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const doc = new jspdf("p", "mm");
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      // Generated PDF
      doc.save("asdfghj" + ".pdf");
    });
  }
  ngOnInit() {
    this.registrationServices
      .getMemberDetailById(this.route.snapshot.paramMap.get("id"))
      .subscribe(data => {
        //this.user = data;
        this.userdetail = Object.assign(data);
        console.log(this.userdetail);
        //this.downloadpdf();
      });
  }
  ngOnDestroy() {
    //this.downloadpdf();
  }
  ngAfterContentInit() {
    //this.downloadpdf();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.downloadpdf();
    }, 2000);
    //this.downloadpdf();
  }
  ngAfterViewChecked() {
    //this.downloadpdf();
  }
}
