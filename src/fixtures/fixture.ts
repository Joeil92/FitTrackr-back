import { Faker, fr } from '@faker-js/faker';

export default class Fixture {
    private readonly faker = new Faker({ locale: [fr] })

    public endMessage(entity: string) {
        console.log(entity + ' fixture has been added !');
    }

    public getFaker() {
        return this.faker;
    }
}