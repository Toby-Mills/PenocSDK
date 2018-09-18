import {CourseResultSummaryModel} from './course-result-summary.model';
import { OEventModel } from './oevent.model';

export class OEventResultSummaryModel{
    oEvent: OEventModel;
    courseResults: CourseResultSummaryModel[];
}