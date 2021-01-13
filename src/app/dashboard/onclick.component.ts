import { Component } from "@angular/core";
import { FunctionService } from "../function.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class onClickComponent {
  constructor(private functionService: FunctionService) {}
  public Clickme() {
    this.functionService.Clickme();
  }
}
