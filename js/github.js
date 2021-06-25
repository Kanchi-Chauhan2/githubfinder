class Github{
    constructor(){
        this.clientId='ba81cab597bff22e6b53';
        this.clientSecret='3fc78e825f11dbcdfe69ebfdac94582260023eb4';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    async getUser(user){
        const profileResponse=await fetch
        (`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const repoResponse=await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

        const profileData=await profileResponse.json();
        const repos=await repoResponse.json();


        return{
            profileData,
            repos
        }
    }
}


