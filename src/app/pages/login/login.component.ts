import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
    });
  }
  ngOnDestroy() {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSignInClick() {
    this.submitted = true;

    console.log("This.Form--.", this.form);

    if (this.form.invalid) {
      console.log("Invalid");
    }

    console.log("Valid Data Clicked");
  }
}
