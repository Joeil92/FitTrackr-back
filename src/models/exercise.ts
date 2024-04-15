export default class Exercise
{
    constructor(
        private id: number | null,
        private name: string,
        private description: string,
        private muscularGroup: number
    ) {}

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getDescription() {
        return this.description;
    }

    public getMuscularGroup() {
        return this.muscularGroup;
    }
}