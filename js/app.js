const github=new Github;

const ui=new UI;

const searchuser=document.getElementById('searchUser');

searchuser.addEventListener('keyup',(e)=>{
    const userText=e.target.value;

    if(userText!==''){

        github.getUser(userText)
        .then(data=>{
            if(data.profileData.message==='Not Found'){
                ui.showAlert('user not found','alert alert-danger')
            }else{
                ui.showProfile(data.profileData);
                ui.showRepos(data.repos);
            }
        })
    }else{
        ui.clearProfile();
    }
});