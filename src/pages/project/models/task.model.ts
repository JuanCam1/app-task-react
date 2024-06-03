import { Project } from "./project.model";


export interface TaskI {
	idTask: string;
	nameTask: string;
	createdTask: string;
	descriptionTask: string;
	stateTask: string;
	project?: Project;
}
