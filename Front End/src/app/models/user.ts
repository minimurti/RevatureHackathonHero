export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;

    constructor(username: string, password:string, firstName: string, lastName: string,
        email: string, dateOfBirth: string) {
            
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;

    }

    public getUsername(): string {
        return this.username;
    }
    public getPassword(): string {
        return this.password;
    }
    public getFirstName(): string {
        return this.firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public getEmail(): string{
        return this.email;
    }
    public getDateOfBirth(): string{
        return this.dateOfBirth;
    }


    public setUsername(username: string): void {
        this.username = username;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setDateOfBirth(dateOfBirth: string): void {
        this.dateOfBirth = dateOfBirth;
    }
}
