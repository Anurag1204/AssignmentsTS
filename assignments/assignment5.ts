function calculateHike(baseSalary: number, experience: number, rating: number): number {
    const REWARD: number = 5000;
    let hike: number;
    let total: number = 0;
    if (experience >= 5) {
        if (rating > 4) {
            total = (baseSalary * 1.15) + 1500 + REWARD;

        }
        else if (rating > 3 && rating < 4) {
            total = (baseSalary * 1.1) + 1200 + REWARD;

        }
        else if (rating < 3) {
            total = (baseSalary * 1.03) + 300 + REWARD;
        }
    }

    if (experience < 5) {
        if (rating > 4) {
            total = (baseSalary * 1.15) + 1500;
        }
        else if (rating > 3 && rating < 4) {
            total = (baseSalary * 1.1) + 1200;
        }
        else if (rating < 3) {
            total = (baseSalary * 1.03) + 300;
        }
    }

    hike = total - baseSalary;

    let hikePercent = (hike / baseSalary) * 100;
    return hikePercent;
}

let employeeMap: Map<string, number> = new Map();
employeeMap.set("Alice Johnson", calculateHike(75000, 5.1, 4.2));
employeeMap.set("Bob Smith", calculateHike(68000, 3.2, 3.8));
employeeMap.set("Carol Davis", calculateHike(82000, 7.1, 4.5));
employeeMap.set("David Brown", calculateHike(90000, 10.2, 2.5));
employeeMap.set("Eva Green", calculateHike(60000, 2.4, 3.5));

console.log(employeeMap);