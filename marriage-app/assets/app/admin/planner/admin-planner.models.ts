export class Checklist{
    name : string;
    description : string;
    tasks : ChecklistTask[];
}

export class ChecklistTask{
    name : string;
    isCompleted : boolean;
    description : string;
}