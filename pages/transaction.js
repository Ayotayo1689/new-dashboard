const searchBar = document.getElementById('search-bar');
const characterList = document.getElementById('table-body');
let ulegoUsers = [];
searchBar.addEventListener('keyup',(e) =>{
    const searchTarget = e.target.value.toLowerCase();


    const filteredUsers = ulegoUsers.filter(user => {
       return (
        user.name.toLowerCase().includes(searchTarget)
       );
    });
    displayusers(filteredUsers);
})
 
const loadUsers = async () => {
    try{
        const res = await fetch('Dailytransaction.json');
       ulegoUsers = await res.json();
        displayusers(ulegoUsers); 
    } catch (err) {
        console.error(err);
    }
};

const displayusers = (users) => {
    const htmlString = users.map((user) => {

      const sumAll = user.amount.toLocaleString("en-US");
        return    `
                  <tr>
                                  <td>
                                    <div class="d-flex px-2">
                                      <div>
                                        <img src="../assets/img/small-logos/2022_08_13_05_49_IMG_3850.JPG" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                                      </div>
                                      <div class="my-auto">
                                        <h6 class="mb-0 text-sm">${user.name}</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="text-sm font-weight-bold mb-0">$${sumAll}</p>
                                  </td>
                                  <td>
                                    <span class="text-xs font-weight-bold">${user.status}</span>
                                  </td>
                                  <td class="align-middle text-center">
                                    <div class="d-flex align-items-center justify-content-center">
                                      <span class="text-xs font-weight-bold">${user.date}</span>
                                      
                                      </div>
                                    </div>
                                  </td>
                                  <td class="align-middle" style="display:flex; justify-content:center;">
                                    <button class="viewBtn" aria-haspopup="true" aria-expanded="false">
                                      view
                                    </button>
                                  </td>
                                </tr>
                  `;
            }).join('');
            characterList.innerHTML = htmlString
};
loadUsers();

document.getElementById('click-me').addEventListener('click', function(){
  console.log("hello world")
})


