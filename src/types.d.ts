type TrophyType = 'bronze' | 'silver' | 'gold' | 'platinum'

interface Pic {
  url: string
  size: string
}

interface TrophyCount {
  platinum: number
  gold: number
  silver: number
  bronze: number
}

interface TrophyTitleResponse {
  definedTrophies: TrophyCount
  earnedTrophies: TrophyCount
  npCommunicationId: string
  npServiceName: 'trophy'
  trophyTitleDetail: 'KINGDOM HEARTS III Trophy Set'
  trophyTitleIconUrl: 'https://image.api.playstation.com/trophy/np/NPWR16532_00_00E345EACCED73B43141D2A10E60C0EC171941DC7A/0586E4714D50D8527FF0C47E2E4925D3808C5757.PNG'
  trophyTitleName: 'KINGDOM HEARTS III'
  trophyTitlePlatform: 'PS4'
  progress: number
  lastUpdatedDateTime: string
}

interface SummaryResponse {
  accountId: string
  earnedTrophies: TrophyCount
  progress: 10
  tier: 3
  trophyLevel: 255
}

interface TrophyResponse {
  nextOffset: 100
  totalItemCount: 122
  trophyTitles: TrophyTitleResponse[]
}

interface Profile {
  aboutMe: ''
  avatars: Pic[]
  isOfficiallyVerified: false
  isPlus: true
  languages: string[]
  onlineId: string
  accountId?: string
  personalDetail?: { profilePictures: Pic[] }
}
interface ProfilesResponse {
  profiles: Profile[]
}