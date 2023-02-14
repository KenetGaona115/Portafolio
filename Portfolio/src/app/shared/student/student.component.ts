import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Class } from 'src/app/interfaces/assigment.inteface';
import { User } from 'src/app/interfaces/user.interface';
import { AlertService } from 'src/app/services/alert.service';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  student: User = new User();
  $studentData: Observable<User> = new Observable;
  private subscription: Subscription = new Subscription;
  class: Class[] = []
  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private alertService: AlertService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.$studentData = this.apiService.getUserByID((this.rutaActiva.snapshot.params["id"]))

    this.subscription =
      this.$studentData.subscribe(
        (response: User) => {
          console.log(response)
          if (response.id)
            this.student = response
          this.form = this.fb.group({
            firstName: [this.student.firstName, [Validators.required, Validators.minLength(3)]],
            lastName: [this.student.lastName, [Validators.required, Validators.minLength(5)]],
            age: [this.student.age, [Validators.required, Validators.min(18)]],
            gener: [this.student.gender, [Validators.required]],
            email: [this.student.email, [Validators.email]],
            assigemts: [this.student.assigemts]
          })
        }
      )
  }

  saveChanges(): void {
    this.apiService.updateStudent(this.form, this.student.id).subscribe(
      (data: any) => {
        if (data.code == 200) {
          this.alertService.success("Cambios guardados")
          this.router.navigate(['/group'])
        } else
          this.alertService.error("Error al guardar alumno")
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
