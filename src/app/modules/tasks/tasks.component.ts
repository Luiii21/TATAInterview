import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskItem: FormControl = new FormControl('');
  taskList: { id: number; name: string; status: boolean }[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.taskItem.valid) {
      this.taskList.push({
        id: this.taskList.length,
        name: this.taskItem.value,
        status: false
      });
    }
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

  customTextValidator(event: any): boolean {
    const inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
