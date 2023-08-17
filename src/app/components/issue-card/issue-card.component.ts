import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Issue } from 'src/app/models/issue.model';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {
  id: number;
  title: string;
  priority: any;
  issueType: any;
  description: string;
  created: string;
  completed: string;

  constructor(@Inject(MAT_DIALOG_DATA) data:Issue) { 
    this.id = data.id;
    this.title = data.title;
    this.priority = data.priority;
    this.issueType = data.issueType;
    this.description = data.description;
    this.created = data.created;
    this.completed = data.completed;
  }

  ngOnInit(): void {
  }

}
