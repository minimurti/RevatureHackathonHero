import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { CreatepService } from '../services/createp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createp',
  templateUrl: './createp.component.html',
  styleUrls: ['./createp.component.css']
})
export class CreatepComponent implements OnInit {

  constructor(private createpService: CreatepService,
              private route: ActivatedRoute,
              private router: Router) { }

  id = 1;

  project: Project;

  add(pname: string, description: string): void {

      const newProject = new Project(
        this.id,
        pname,
        description
      );
      this.createpService.addProject(newProject as Project).subscribe();

      }

      return() {
        this.router.navigate(['home']);
      }


  ngOnInit() {
  }

}
