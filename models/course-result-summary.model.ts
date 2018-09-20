import { ResultModel } from './result.model';
import { CourseModel } from './course.model';

export class CourseResultSummaryModel 
{
    course: CourseModel;
    topResults: ResultModel[];
} 