import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class FunctionService {
  clickMessage: string;
  public Clickme() {
    this.clickMessage = "Yeah!";
  }
}
