export class Lecturer
{
	id: number;
	name: string;
	username: string;
	password: string;
	department: string;
	faculty: string;
	isPremium: boolean;
	telephone: string;
	email: string;
	modules: Module[];
	timeEntries: TimeEntry[];
	announcements: Announcement[];
	
		
	constructor()
	{
	}
}