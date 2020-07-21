class user{
    constructor(name,age,email,coins)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course =  [];
    }

    login(){
        console.log('${this.name}has logged in');
        return this;
    }

    logout(){
        console.log('${this.name}has logged out');
        return this;
    }
    getDetails(){
        console.log(`user is ${this.name}, email is ${this.email},and has${this.coins}`);
        return this;
    }

}

class moderator extends user {
    // constructor(name,age,email)
     
        adcoins()
        {
            this.coins++;
            console.log(`${this.name} has ${this.coins} coins`);
            return this;
        }
         removeCoins()
         {
            this.coins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
         }


     
}

class adminn extends moderator{
    addcourse(user,course){
        user.course.push(course);
        console.log(user);
    }
    delcourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }


}


let user1 = new user('rushi',21,'rushi@gmail.com')
let user2 = new user('chetan',24,'che@gmai.com')
let mod = new moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new adminn('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(el => {
    console.log(el);
});
admin.addcourse(user1,'Javascript');

user1.login().adcoins().getDetails().logout();
