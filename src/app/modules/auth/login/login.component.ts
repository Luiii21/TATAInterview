import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulary: FormGroup = new FormBuilder().group({
    user: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });
  hasError: string | null = null;
  loading: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  auth(): void {
    const form = this.formulary.value;

    if (this.formulary.invalid) {
      this.formulary.reset();
    }

    if (form.user === 'test01' && form.password === 'test01') {
      localStorage.setItem('user', JSON.stringify(form));
      this.router.navigate(['task']).then();
    }

    this.hasError = 'Itentelo de nuevo X'
    this.loading = false;
  }

  send() {
    this.loading = true
    this.hasError = null;
    setTimeout(() => {
      this.auth();
    }, 3000);
  }
}
