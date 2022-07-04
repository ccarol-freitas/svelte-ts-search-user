import type IRepos from "../interfaces/IRepos";
import type IUser from "../interfaces/IUser";

export default function assembleUser(userData: any, repoData: any): IUser {
    const recent_repo = repoData.map((repo) => {
        return {
            name: repo.name,
            url: repo.url
        } as IRepos
    })

    return {
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        profile_url: userData.profile_url,
        id: userData.id,
        followers: userData.followers,
        public_repos: userData.public_repos,
        recent_repo
    }
}