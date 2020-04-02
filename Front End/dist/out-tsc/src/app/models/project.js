export class Project {
    constructor(id, pname, description) {
        this.id = id;
        this.pname = pname;
        this.description = description;
    }
    getId() {
        return this.id;
    }
    getPname() {
        return this.pname;
    }
    getDescription() {
        return this.description;
    }
    setId(id) {
        this.id = id;
    }
    setPname(pname) {
        this.pname = pname;
    }
    setDescription(description) {
        this.description = description;
    }
}
//# sourceMappingURL=project.js.map