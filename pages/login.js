// var email = document.getElementById('txtEmail');
// var password = document.getElementById('txtPass');
// var msg = document.getElementById('message');
// var mainmsg = document.getElementById('msg-div');
// document.getElementById('validate').addEventListener('click', validate )



// // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// // var filter2 = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/;

// function validate(){
//     if(email.value.includes('@','.')){
//         mainmsg.style.display = "block";
//         msg.innerHTML = "login sucess!!";
//         mainmsg.style.cssText += "color:green; border-left:5px solid #fff;"
//     } else {
//         mainmsg.style.display = "block";
//         msg.innerHTML = "login unsucess XXX";
//         mainmsg.style.cssText += "color:red; border-left:5px solid #fff;"
//     }
// }

document.getElementById('signIn').addEventListener('click', function(e){
    e.preventDefault
const login = async () =>  {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    try{ 
        const res = await fetch('admin.json');
       adminLogin = await res.json();
        } catch (err) {
        console.error(err);
    };
    // console.log(adminLogin)
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    for(i = 0; i < adminLogin.length; i++) {
        if(username == adminLogin[i].username && password == adminLogin[i].password) {
            console.log('youre logged in')
        }
    }
     
};
login();
})

// var obj = [
//     {
//         username: 'admin',
//         password: 'admin11',
//     },{
//         username: 'admins',
//         password: 'admin113',
//     },{
//         username: 'adminos',
//         password: 'admin1100',
//     }
// ]
// function get(){
//     for(i = 0; i < obj.length; i++) {
//         if(username == obj[i].username && password == obj[i].password) {
//             console.log('youre logged in')
//         }
//     }
// }
// get();
