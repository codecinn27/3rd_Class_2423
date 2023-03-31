let user1 =[
    {
        username: "yc27",
        password: "12345678",
        name: "Hee Yee Cinn",
        email:"kobe9systems@gmail.com"
    },
    {
        username: "cb22",
        password: "23456789",
        name:"Chan Bee",
        email:"hahah@gmail.com"
    },
    {
        username:"fariq8_10",
        password:"qqqq1234",
        name:"Fariq",
        email:"fariq@gmail.com"
    }
]

function login_all(){
    user1.find(Element =>
        console.log(Element)
    )
}

function login(username, password){
    console.log("Someone try to login with", username, password)
    let matched = user1.find(Element=>
        Element.username == username
    )
    if(matched){
        if(matched.password==password){
            return matched
        }else{
            return "password is not matched"
        }
    }else{
        return "username not found"
    }

}

function register(newusername, newpassword, newname , newemail){
    //todo: check if username exist
    let matched = user1.find(Element=>
        Element.username == newusername
    )
    if(matched){
        console.log("Username exist");
    }else{
            user1.push({
                username: newusername,
                password: newpassword,
                name: newname,
                email: newemail
            })
            console.log("push successfully");
        }
}

// try to login
// login_all()

// console.log(login("yc27", "12345678"));
// console.log(login("yc27", "2343"));

register("yc27", "ggggg", "Hadina", "hadina@gmail.com")

// login_all()