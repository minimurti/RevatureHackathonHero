export class Message {
    constructor(message_id, messageBody, project_id, username) {
        this.message_id = message_id;
        this.messageBody = messageBody;
        this.project_id = project_id;
        this.username = username;
    }
    getMessage_id() {
        return this.message_id;
    }
    getMessageBody() {
        return this.messageBody;
    }
    getProject_id() {
        return this.project_id;
    }
    getUsername() {
        return this.username;
    }
    setMessage_id(message_id) {
        this.message_id = message_id;
    }
    setMessageBody(messageBody) {
        this.messageBody = messageBody;
    }
    setProject_id(project_id) {
        this.project_id = project_id;
    }
    setUsername(username) {
        this.username = username;
    }
}
//# sourceMappingURL=message.js.map