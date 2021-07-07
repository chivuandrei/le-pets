export interface PetModel {
	id?: number;
	category: {
		id?: number;
		name?: string;
	};
	name: string;
	photoUrls: Array<string>;
	tags?: [
		{
			id?: number;
			name: string;
		}
	];
	status: PetStatus;
}

export enum PetStatus {
	Available = "available",
	Pending = "pending",
	Sold = "sold"
}
