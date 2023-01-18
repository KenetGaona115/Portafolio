import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AlertService } from 'src/app/services/alert.service';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  $userData: Observable<User[]> = new Observable;
  private subscription: Subscription = new Subscription;
  //  users: User[] = [];
  users: any;

  constructor(
    private apiService: ApiServiceService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.$userData = this.apiService.getUsers()
    this.subscription = this.$userData.subscribe(response => { this.users = response });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  deleteStudent(student: User): void {
    this.users = this.users.filter((alu: any) => alu.id !== student.id);
    this.apiService.deleteStudent(student).subscribe(
      (response: any) => {
        response.code == 200 ?
          this.alertService.success("Alumno eliminado")
          : this.alertService.error("Error al eliminar")
      }
    )
  }
}



