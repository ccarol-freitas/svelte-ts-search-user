function searchUser(userName: string) {
    return fetch(
        `https://api.github.com/users/${userName}`
    );
}

function searchRepos(userName: string) {
    return fetch(
        `https://api.github.com/users/${userName}/repos?sort=created&per_page=5`
    );

}

export { searchUser, searchRepos }