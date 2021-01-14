import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class FunctionService {
  public Clickme() {
    window.alert("Hello World!")
  }
}
