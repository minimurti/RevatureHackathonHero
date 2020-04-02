export class Message {
    message_id: number;
    messageBody: string;
    project_id: number;
    username: string;


    constructor(message_id: number, messageBody: string, project_id: number, username: string) {

        this.message_id = message_id;
        this.messageBody = messageBody;
        this.project_id = project_id;
        this.username = username;
    }

    public getMessage_id(): number {
        return this.message_id;
    }
    public getMessageBody(): string {
        return this.messageBody;
    }

    public getProject_id(): number {
        return this.project_id;
    }

    public getUsername(): string {
        return this.username;
    }



    public setMessage_id(message_id: number): void {
        this.message_id = message_id;
    }
    public setMessageBody(messageBody: string): void {
        this.messageBody = messageBody;
    }

    public setProject_id(project_id: number): void {
        this.project_id = project_id;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

}
