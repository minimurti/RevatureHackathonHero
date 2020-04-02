export class DisplayMessage {

    messageBody: string;
    username: string;

    constructor(messageBody: string, username: string) {

        this.messageBody = messageBody;
        this.username = username;
    }

    public getMessageBody(): string {
        return this.messageBody;
    }

    public getUsername(): string {
        return this.username;
    }

    public setMessageBody(messageBody: string): void {
        this.messageBody = messageBody;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

}