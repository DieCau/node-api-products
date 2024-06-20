import crypto from "crypto";

export class User {
    constructor({email, password, role}){
        this.email = email
        this.password = password
        this.role = role
        this.id = crypto.randomUUID()
    }
}