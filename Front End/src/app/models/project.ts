export class Project {
    id: number;
    pname: string;
    description: string;


    constructor(id: number, pname: string, description: string) {

        this.id = id;
        this.pname = pname;
        this.description = description;

    }

    public getId(): number {
        return this.id;
    }
    public getPname(): string {
        return this.pname;
    }
    public getDescription(): string {
        return this.description;
    }


    public setId(id: number): void {
        this.id = id;
    }
    public setPname(pname: string): void {
        this.pname = pname;
    }
    public setDescription(description: string): void {
        this.description = description;
    }

}
