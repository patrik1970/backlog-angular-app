import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Issue } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private dataStore: { issues: Issue[] };

  constructor(private http: HttpClient) {
    this.dataStore = { issues: [] };
   }

  getAllIssues(): Observable<Issue[]> {
     const issuesUrl = 'https://localhost:7121/api/Issue';
     if (this.dataStore.issues.length > 0) {
      return of(this.dataStore.issues)
     }
     return this.http
      .get<Issue[]>(issuesUrl)
      .pipe(tap((issues) => (this.dataStore.issues = issues)));
  }
}
