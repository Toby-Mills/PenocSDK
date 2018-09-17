import { ResultModel } from './result.model';

export class CourseResultSummaryModel 
{
    id: number;
    eventId: number;
    name: string;
    venueId: number;
    length: number;
    climb: number;
    controls: number;
    difficultyId: number;
    difficulty: string;
    listOrder: number;
    topResults: ResultModel[];
} 