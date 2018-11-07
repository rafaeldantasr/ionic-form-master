import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public person: FormGroup;

  constructor(public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    ) {
      this.person = this.formBuilder.group({
        'first_name': [ null, Validators.required ],
        'second_name': [ null, Validators.required ],
        'email': [ null, Validators.required ],
        'password': [ null, Validators.required ]
      });
    }

  ngOnInit() {
  }

  async savePerson() {
    // To do
    // this.http.post....
    console.log(this.person.value);
    this.router.navigateByUrl('/login');
  }

}
