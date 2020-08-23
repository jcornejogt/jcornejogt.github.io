export interface Roles {
    professional?: boolean;
    client?: boolean;
}

export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    roles?: Roles;
}

export interface PersonInterface {
    firstName?: string;
    lastName?: string;
    professions?: ProfessionInterface[];
    userUid?: string;
}

export interface ProfessionInterface {
    professionName?: string;
    professionSysName?: string;
    id?: string;
}

export interface ServiceInterface {
    serviceName?: string;
    serviceDescription?: string;
    idProfesional?: string;
    userUid?: string;
    markerId?: string;
}