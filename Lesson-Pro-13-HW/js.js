function task1() {
    let student = {
        firstName: 'firstName',
        lastName: 'lastName',
        averageScore: 4.8,

        getFullName: function () {
            return `${this.firstName}, ${this.lastName}`;
        },

        isGrantHolder: function () {
            if (this.averageScore >= 4) {
                return 'true';
            }
            return 'false';
        },
    }

    function Aspirant() {
        this.dissertationTopic = 'topic';
        this.isDissertationComplete = false;
        this.isGrantHolder = function () {
            if (student.averageScore >= 4.5 && this.isDissertationComplete === 'true') {
                return 'true';
            }
            return 'false';
        }
    }

    Aspirant.prototype = student;

    let aspirant = new Aspirant();
    for (let i in aspirant) {
        console.log(i);
    }

    console.log(student.isGrantHolder()); // true
    console.log(aspirant.isGrantHolder()); // false
}

function task2() {
    class Plane extends Object {
        constructor (name) {
            super();
            this.name = name;
            this.isFlying = false;
        }

        takeOff() {
            return this.isFlying = true;
        }

        land() {
            return this.isFlying = false;
        }
    }

    let airport = {
        planes: [],
        getFlyingPlanes(i = 0) {
            for (let value of this.planes) {
                if (value.isFlying === true) i++;
            }
            return i;
        },
    }
    let plane1 = new Plane("First");
    let plane2 = new Plane("Killer");
    plane1.takeOff();
    plane2.takeOff();
    airport.planes.push(plane1, plane2);
    console.log(airport.getFlyingPlanes());
}

