import UserFixtures from "./userFixtures";
import WorkoutFixtures from "./workoutFixtures";

const fixtures = [
    new UserFixtures(),
    new WorkoutFixtures()
]

function exitProcess(exitCode: number): void {
    console.log('Fixtures added !');
    process.exit(exitCode);
}

async function main() {
    for(const fixture of fixtures) {
        await fixture.load();
    }

    exitProcess(0);
}

main();