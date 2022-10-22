import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-table',
  templateUrl: './issue-table.component.html',
  styleUrls: ['./issue-table.component.css']
})
export class IssueTableComponent implements OnInit {
  issues!: Issue[];
  displayedColumns: string[] = ['id', 'title', 'description', 'priority', 'issueType', 'created', 'completed', 'action'];
  dataSource!: MatTableDataSource<Issue>;

  constructor(private issueservice: IssueService) { }

  ngOnInit(): void {
    this.loadAllIssues();
  }

  loadAllIssues() {
    this.issueservice.getAllIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      this.dataSource = new MatTableDataSource<Issue>(this.issues);
    });
  }
}
