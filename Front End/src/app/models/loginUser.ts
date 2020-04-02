export class loginUser {
    username: string;
    password: string;


    constructor(username: string, password: string) {

        this.username = username;
        this.password = password;


    }

    public getUsername(): string {
        return this.username;
    }
    public getPassword(): string {
        return this.password;
    }


    public setUsername(username: string): void {
        this.username = username;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
}
