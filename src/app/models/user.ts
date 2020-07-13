export interface Roles{
    professional?: boolean;
    client?: boolean;
    }

export interface UserInterface{
id?: string;
name?: string;
email?: string;
password?: string;
roles: Roles;
}