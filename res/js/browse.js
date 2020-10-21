$(document).ready(function() {

    fetchAccounts()
        .then((res) => {
            let accounts = res.map(acc => createAccountDiv(acc));
            $('#accounts-container').html(accounts.map(acc => acc.html));
            accounts.forEach(acc => {
                let id = '#' + acc.id
                $(id).click(function() {
                    let btn = $(this);
                    if (btn.hasClass('followed')) {
                        btn.removeClass('followed');
                        btn.text('Follow');
                    } else {
                        btn.addClass('followed');
                        btn.text('Followed');
                    }
                })
            });
        })
        .catch(() => {
            alert("Could not load accounts")
        })
});


function createAccountDiv(account) {
    let id = `${account.firstname.toLowerCase()}-${account.lastname.toLowerCase()}-${String(Math.round(Math.random() * 100))}`
    return {
        id: id,
        html: `
        <div class="account">
            <img src="${account.avatar}" alt="Image not found">
            <h2>${account.firstname} ${account.lastname}</h2>
            <button id="${id}">Follow</button>
        </div>
        `
    }
}

function fetchAccounts() {
    return $.get({
        url: 'https://private-anon-85f42dd4b7-wad20postit.apiary-mock.com/profiles',
        success: function(response) {
            return response;
        },
        error: function() {
            console.log("Failed to load data")
        }
    });
}