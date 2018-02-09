enum GenderType {
  FEMALE,
  MALE
}

interface IJob {
  title: string;
  salary: number;
  dangerous?: boolean;
}

class Person {
  private _fname: string;
  public gender: GenderType;
  public familyMember: Person[];
  public job: IJob;

  constructor(fname: string, gender?: GenderType, job?: IJob) {
    this._fname = fname;
    this.gender = gender;
    this.job = job;
  }

  get fname(): string {
    return this._fname;
  }

  set fname(newName: string) {
    this._fname = newName;
  }
}

const bob: Person = new Person('Bob', GenderType.MALE, {title: 'Warrior', salary: 3000});
const david: Person = new Person('Bob', GenderType.MALE);
const dany: Person = new Person('Dany', GenderType.MALE);
const dez: Person = new Person('Dez', GenderType.FEMALE);

bob.familyMember = [david, dany, dez];

console.log('bob : ' + bob.fname, ' / ', bob.gender);


