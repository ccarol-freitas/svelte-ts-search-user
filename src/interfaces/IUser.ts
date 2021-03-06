import type IRepos from './IRepos'

export default interface IUser {
    login: string
    name: string
    avatar_url: string
    profile_url: string
    id: number
    followers: number
    public_repos: number
    recent_repo: IRepos[]
}