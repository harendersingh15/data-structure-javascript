// let obj = {
//     name: 'harender',
//     lastName: 'singh',
//     fullName: function() {
//         console.log(this.lastName + ' ' + this.name);
//     }
// }

// obj.fullName.call(obj);

function Person() {
    let firstName = 'harender';
    let lastName = 'singh';

    this.fullName = function() {
        console.log(`${firstName} ${lastName}`);
    }

    let a = function add() {
        console.log(`${firstName} ${lastName}`);
    }

    Object.defineProperties(this, {
        'firstName1': {
            get: function() {
                return a;
            }
        },
        'testing': {
            get: () => {
                return someMethod;
            }
        }
    })
}

const someMethod = () => {
    return 'someMethod!!!';
}

const person = new Person();
person.fullName();
person.firstName1();
console.log(person.testing());

class Student {
    constructor(fName) {
        this.firstName = fName;
    }

    static fullName() {
        return 'harender Singh';
    }


}

const address = () => {
    return 'Amroha';
}

Object.defineProperties(Student, {
    'Address': {
        value: address,
        writable: false
    }
});

debugger;

console.log(Student.fullName());
Student.Address = 'harender'
console.log(Student.Address);
let s = new Student();
s.address;