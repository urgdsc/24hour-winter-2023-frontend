import {Component, OnInit} from '@angular/core';
import {Program} from "../../models/university";
import {ActivatedRoute} from "@angular/router";
import {ProgramService} from "../../services/program.service";

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  public program : Program;
  public programTab : boolean = true;
  public scholarshipTab : boolean = false;
  public tuitionFeesTab : boolean = false;
  public transferCreditTab : boolean = false;
  public string: string = "hi";

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
  ) {
  }

  ngOnInit() {
    this.getProgram();
  }

  getProgram(): void {
    const id = String(this.route.snapshot.paramMap.get("id"));
    this.programService.getProgram(id).subscribe(program => {
      this.program = program;
    })
  }

  toggleTab(tabName : string) {
    debugger;
    if(tabName == "program") {
      this.programTab = true;
      this.scholarshipTab = false;
      this.tuitionFeesTab = false;
      this.transferCreditTab = false;
    }
    else if(tabName == "scholarship") {
      this.programTab = false;
      this.scholarshipTab = true;
      this.tuitionFeesTab = false;
      this.transferCreditTab = false;
    }
    else if(tabName == "tuition") {
      this.programTab = false;
      this.scholarshipTab = false;
      this.tuitionFeesTab = true;
      this.transferCreditTab = false;
    }
    else {
      this.programTab = false;
      this.scholarshipTab = false;
      this.tuitionFeesTab = false;
      this.transferCreditTab = true;
    }
  }
}
