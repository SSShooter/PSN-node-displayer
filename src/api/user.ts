import link from './link'

interface Result {
  id: string
  score: number
  socialMetadata: any
  type: string
}
interface DomainResponse {
  results: Result[]
}
interface SearchResult {
  domainResponses: DomainResponse[]
}

interface FriendListResponse {
  friends: string[]
  totalItemCount: number
}
export function fetchFriends(params: {
  accountId: string
}): Promise<FriendListResponse> {
  return link.get('/friends', { params })
}

export function fetchProfiles(params: {
  accountIds: string
}): Promise<ProfilesResponse> {
  return link.get('/profiles', { params })
}

export function searchPlayer(searchTerm: string): Promise<SearchResult> {
  return link.post('/searchPlayer', {
    searchTerm,
    domainRequests: [
      {
        domain: 'SocialAllAccounts',
      },
    ],
  })
}
