export enum Role{admin=1,user=2}
export class User{

    private _name:string;
    private _email:string;
    private _role:Role=2;

    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }
    getInfo(){
        console.log(`thông tin người dùng ${this.role} ${this.name} ${this.email}`)
    }
    isAdmin(){
        if(this.role==2) return 'người dùng'
        else return 'is admin'
    }
}