import {Guide} from "./guide";
import {Notice} from "./notice";

export class sousGuide {
  id: number;
  version: number;
  notice: Notice;
  guideUtilisation: Guide;



  constructor(id?:number, version?:number, notice?:Notice, guideUtilisation?: Guide) {
    this.id = id;
    this.version = version;
    this.notice = notice;
    this.guideUtilisation = guideUtilisation;
  }
}
