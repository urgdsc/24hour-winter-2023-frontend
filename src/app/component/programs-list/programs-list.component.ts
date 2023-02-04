import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Program} from "../../models/university";
import {ProgramService} from "../../services/program.service";

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  public formGroup: FormGroup;

  public programs: Program[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private programService: ProgramService
  ) {
  }

  ngOnInit() {
    this.generateFormGroup();
    this.getPrograms();
  }

  generateFormGroup() {
    this.formGroup = this.formBuilder.group({
      searchQuery: "",
      location: "",
      program: "",
      avgTuition: 20000
    });
  }

  private getPrograms(filters = "") {
    this.programService.getProgramsList(filters).subscribe(
      _programs => {
        this.programs = _programs
      }
    )
  }

  onSubmit() {
    const searchQuery = this.formGroup.get("searchQuery")?.value;
    const location = this.formGroup.get("location")?.value;
    const program = this.formGroup.get("program")?.value;
    const avgTuition = this.formGroup.get("avgTuition")?.value;

    // TODO: Add validation

    let filter = "search=" + searchQuery;
    this.getPrograms(filter);
  }
}
