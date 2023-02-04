import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.generateFormGroup();
  }

  generateFormGroup() {
    this.formGroup = this.formBuilder.group({
      searchQuery: "",
      location: "",
      program: "",
      avgTuition: 20000
    });
  }
}
