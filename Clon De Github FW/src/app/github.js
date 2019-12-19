class Github {
  constructor (clientId, clientSecret) {
    if(!clientId || !clientSecret) {
      return console.warn('Please use a client_id and a client_secret');
    }
    this.client_id = clientId;
    this.client_secret = clientSecret;
    this.repos_count = 7;
    this.repos_sort = 'created: asc';
  }

  async fetchUser(user) {
    console.log(user);
    let userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    let repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    let userData = await userDataRequest.json();
    let repositories = await repositoriesRequest.json();

    return {
      userData,
      repositories
    }
  }

}

module.exports = Github;