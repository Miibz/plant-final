import {GuideUtilisation} from "./guideUtilisation";
import {Notice} from "./notice";

export class sousGuide {
  id: number;
  version: number;
  notice: Notice;
  guideUtilisation: GuideUtilisation;



  constructor(id?:number, version?:number, notice?:Notice, guideUtilisation?: GuideUtilisation) {
    this.id = id;
    this.version = version;
    this.notice = notice;
    this.guideUtilisation = guideUtilisation;
  }
}
