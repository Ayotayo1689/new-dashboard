const userProgress = document.getElementById('userprogress');
const userNum = document.getElementById('user-num');
const loadTransactions = async () => {
    try{
        const res = await fetch('Dailytransaction.json');
       ulegoUsers = await res.json();
        } catch (err) {
        console.error(err);
    };
    const sum = ulegoUsers.map(user => user.amount).reduce((acc, user) => user + acc);
    const sumAll = sum.toLocaleString("en-US");
     document.getElementById('daily-money').innerHTML = `$${sumAll}`;
     
};
loadTransactions();

// console.log(ulegoUsers.length)

const loadUsers = async () =>  {
    try{ 
        const res = await fetch('http://localhost:3001/employees');
       ulegoUsers = await res.json();
        } catch (err) {
        console.error(err);
    };
     document.getElementById('total-users').innerHTML = (kFormatter(ulegoUsers.length)); 
// userProgress.classList.add(`w-${ulegoUsers.length}`);

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}
userNum.innerText = (kFormatter(ulegoUsers.length)); 
// console.log(kFormatter(ulegoUsers.length)); // 1.2k

     
};
loadUsers();

