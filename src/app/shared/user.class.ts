export class User{
   
        email: string;
        password: string;
    
        construtor(email: string, password:string){           
            this.email=email;
            this.password= password;
        }
}