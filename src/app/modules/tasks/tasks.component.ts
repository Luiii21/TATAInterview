import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskItem: FormControl = new FormControl(null);
  taskList: { id: number; name: string; status: boolean }[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  addTask(): void {
    this.taskList.push({
      id: this.taskList.length,
      name: this.taskItem.value,
      status: false
    })
  }

  changeTaskStatus(item: { id: number; name: string; status: boolean }, check: any): void {
    const index = this.taskList.indexOf(item);
    this.taskList[index].status = check.target.checked;
  }

  deleteTask(item: { id: number; name: string; status: boolean }): void {
    const index = this.taskList.indexOf(item);
    this.taskList.splice(index, 1);
    this.taskItem.reset();
  }
}
