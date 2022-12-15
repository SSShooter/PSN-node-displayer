import link from './link'

const dayOption: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour12: false,
}

const option: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit', 
  hour12: false,
}



export interface EarnedTrophy {
  earned: false
  trophyEarnedRate: '3.4'
  trophyHidden: false
  trophyId: 0
  trophyRare: 0
  trophyType: TrophyType
  earnedDateTime?: string
  timestamp: number
}
interface EarnedTrophyResponse {
  trophies: EarnedTrophy[]
  hasTrophyGroups: true
  lastUpdatedDateTime: '2022-05-21T09:48:47Z'
  rarestTrophies: any[]
  totalItemCount: 52
  trophySetVersion: '01.02'
}

export function fetchProfile(params: {
  accountId: string
}): Promise<Profile> {
  return link.get('/profile', { params })
}

export function fetchSummary(params: {
  accountId: string
}): Promise<SummaryResponse> {
  return link.get('/trophySummary', { params })
}

export async function fetchTrophyList(params: {
  accountId: string
  offset?: number
}): Promise<TrophyResponse> {
  const data: TrophyResponse = await link.get('/trophyTitles', { params })
  data.trophyTitles.forEach((trophy) => {
    const d = new Date(trophy.lastUpdatedDateTime)
    trophy.lastUpdatedDateTime = d.toLocaleString('zh-Hant', dayOption)
  })
  return data
}

export async function fetchEarnedTrophyList(params: {
  npCommunicationId: string
  trophyGroupId: string
  accountId: string
  npServiceName: string
}): Promise<EarnedTrophyResponse> {
  const data: EarnedTrophyResponse = await link.get('/earnedTrophy', { params })
  data.trophies.forEach((trophy) => {
    if (trophy.earnedDateTime) {
      const d = new Date(trophy.earnedDateTime)
      trophy.timestamp = +d
      trophy.earnedDateTime = d.toLocaleString('zh-Hant', option)
    }
  })
  return data
}

export async function fetchGameInfo(params: {
  npCommunicationId: string
}): Promise<TrophyTitleResponse> {
  return link.get('/trophyTitle', { params })
}

export interface Trophy {
  trophyDetail: string
  trophyGroupId: string
  trophyHidden: false
  trophyIconUrl: string
  trophyId: 0
  trophyName: string
  trophyType: TrophyType
}
interface GameTrophyResponse {
  hasTrophyGroups: true
  totalItemCount: 52
  trophies: Trophy[]
  trophySetVersion: '01.02'
}
export function fetchGameTrophyList(params: {
  npCommunicationId: string
}): Promise<GameTrophyResponse> {
  return link.get('/gameTrophy', { params })
}
