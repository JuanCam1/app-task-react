import { User } from "../../login/models/user.model";

export interface Project {
	idProject: string;
	nameProject: string;
	descriptionProject: string;
	dateCreateProject: string;
	typeProject: string;
	priorityProject: string;
	user: User;
}