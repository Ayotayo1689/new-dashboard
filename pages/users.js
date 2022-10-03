const searchBar = document.getElementById('search-bar');
const characterList = document.getElementById('user-body');
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
        const res = await fetch('users.json');
       ulegoUsers = await res.json();
        displayusers(ulegoUsers); 
    } catch (err) {
        console.error(err);
    }
};

const displayusers = (users) => {
    const htmlString = users.map((user) => {
        return      `
                    <tr>
                                    <td>
                                      
                                        
                                        <div class="my-auto" style="margin-top:50px;">
                                          <h6 class="mb-0 text-sm">${user.name}</h6>
                                        </div>
                                      
                                    </td>
                                    <td>
                                      <p class="text-sm font-weight-bold mb-0">${user.accountNumber}</p>
                                    </td>
                                    <td>
                                      <p class="text-sm font-weight-bold mb-0">${user.phoneNo}</p>
                                    </td>
                                    <td>
                                    <p class="text-sm font-weight-bold mb-0">${user.date}</p>
                                  </td>
                                    
                                    
                                    
                                  </tr>
                    `;
            }).join('');
            characterList.innerHTML = htmlString
};
loadUsers();
