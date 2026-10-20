class Student{

    constructor(jmeno, rocnik){
        this.jmeno = jmeno;
        this.rocnik = rocnik;
    }

    set rocnik(rocnik){   // setter: ověří ročník a uloží ho
        if(rocnik < 1 || rocnik > 4){
            throw new Error("Neplatny rocnik");
        }else{
            this._rocnik = rocnik;   // _rocnik setter se znovu nespustí
        }
    }

    get rocnik(){   // getter: vratí ročník 
        return this._rocnik;
    }
}

const student = new Student("Petr", 4);
console.log(student);
