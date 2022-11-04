import { CostUnit } from "./costUnit";
import {Status} from "../gqlSchema";

export class ServiceAppointment {
    sender: string;
    reportnr: string;
    caseNumber: number;
    patientNumber: string;
    costUnit: CostUnit;
    status: Status;
  
    constructor(sender: string, reportnr: string, caseNumber: number, costUnit: CostUnit, status: Status, patientNumber: string) {
      this.sender = sender;
      this.reportnr = reportnr;
      this.caseNumber = caseNumber;
      this.costUnit = costUnit;
      this.status = status;
      this.patientNumber = patientNumber;
    }
  }