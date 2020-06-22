class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0;
        this.Hi = ['Hello.'];
        this.a = this.n = this.s = -1;
    }
    setAge(age) {
        this.age = age;
        if (this.a < 0){
             
            this.Hi.push(` I am ${this.age}.`);
            this.a = this.Hi.length -1; 
            
        } 
        else{
            this.Hi[this.a] = ` I am ${this.age}.`;
        }
        
        return this
    }

    setSex(sex) {
        this.sex = sex;
        if (this.s < 0){
             
            this.Hi.push(` I am ${this.sex == 'M' ? "male" : "female"}.`);
            this.s = this.Hi.length -1; 
            
        } 
        else{
            this.Hi[this.s] = ` I am ${this.sex == 'M' ? "male" : "female"}.`;
        }
        
        return this
    }
        


    setName(name) {
        this.name = name;
        if (this.n < 0){
             
            this.Hi.push(` My name is ${this.name}.`);
            this.n = this.Hi.length -1; 
            
        } 
        else{
            this.Hi[this.n] = ` My name is ${this.name}.`;
        }
        
        return this
    }
        


    hello() {
        return this.Hi.join('');
        // return `Hello. My name is ${this.name}. I am ${this.age}. I am ${this.sex == 'M' ? "male" : "female"}.`
    }

}
let me = new Dinglemouse ();
me.setAge('15');
me.setSex('M');
me.setName('Nat');



me.setAge('45');
me.setSex('F');
me.setName('AA');

// me.sex = 'male';
console.log(me.hello());
console.log(me);