import { User } from "./user";

export interface Activity {
    id?: number;
    name: string;
    description?: string | null;
    image?: string | null;
    isActive: boolean;
    createdBy?: number;
    user?: User;
    createdAt?: Date;
    updatedAt?: Date;
}
