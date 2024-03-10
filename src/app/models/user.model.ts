export class User{
    _id:String;
    name: String;
    address: String;
    mail: String;
    password: String;
    constructor( name: string, address: string, mail: string, password: string) {
        this.name = name;
        this.address = address;
        this.mail = mail;
        this.password = password;
    }
}