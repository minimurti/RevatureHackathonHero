import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ViewpService } from '../services/viewp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewp',
  templateUrl: './viewp.component.html',
  styleUrls: ['./viewp.component.css']
})
export class ViewpComponent implements OnInit {

  projectList: Project[];

  constructor(private viewpService: ViewpService, 
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.viewpService.listProjects().subscribe(projectList => this.projectList  = projectList);
    console.log(this.projectList);
  }

  viewChat(project_id: number){
    this.router.navigate(['chat', project_id]);
  }

  // tslint:disable-next-line: variable-name
  addMembers(project_id: number){
    this.router.navigate(['adduser', project_id]);
  }

  // tslint:disable-next-line: variable-name
  viewMembers(project_id: number){
    this.router.navigate(['viewmember', project_id]);
  }

  return(){
    this.router.navigate(['home']);
  }

}
