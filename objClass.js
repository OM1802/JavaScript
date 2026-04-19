const students={
    fullName: "Om Jaiswal",
    age: 18,
    getInfo: function () {
        console.log("Name: ",this.fullName, "Age: ",this.age);
    },
};

const om={
    fullName: "OM J",
    age: 20,
}

om.__proto__=students;

max=Object.create(students);
max.fullName="Max Hillary";
max.age=55;

//object method has precedence to reference method in case of same method name

class Cars{
    constructor(model){
        this.model=model;
        console.log("CONSTRUCTOR CALLED, DEFAULT TYPE SET.")
    }

    start(){
        console.log("CAR HAS STARTED");
    }

    stop(){
        console.log("CAR HAS STOPPED")
    }
};

ferrari=new Cars("f1");

//INHERITANCE

class ford extends Cars{
    constructor(model,brand){
        super(model);
        this.brand=brand;
    }
};

mustang=new ford("mustang");

//practice Qs

let data="*****"
class User{
    constructor(fname,email){
        this.fname=fname;
        this.email=email;
    }
    viewData(){
        console.log("DATA:",data);
    }
};

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="changed data****"
    }
};

let s1=new User("MAX MACALLISTER", "maxmac1990@hotmail.com");
let admin1=new Admin("admin1","admin@hotmail.com");
