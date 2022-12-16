# PSN-node-displayer

[中文文档](https://github.com/ssshooter/PSN-node-displayer/blob/master/README.cn.md)

DEMO [psn-trophy.ssshooter.com](https://psn-trophy.ssshooter.com/)

All data fetched from playstation API will be cached 24 hours, so you may not get the newest data. 

If you want to keep data new, You can:

- Deploy [PSN-node](https://github.com/ssshooter/PSN-node) 
- Modify `VITE_REQUEST_URL` in `.env`
- Deploy PSN-node-displayer

Deploy with Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fssshooter%2FPSN-node-displayer)

## How to use

- Navigate to `/` or `/#/search`, search your PSN ID
- Then it will redirect to `/#/userPage?accountId=yourAccountId`
- Also you can go to `/#/friends?accountId=yourAccountId` to observe your friends' status
- Hidden function: use `pick` to filter specific games, eg: `/#/userPage?accountId=7044269709970808941&pick=[NPWR13281_00,NPWR08199_00,NPWR25264_00,NPWR05818_00,NPWR07897_00,NPWR15587_00]`

## Tech stack

- Vue3
- TypeScript
- Vite

## APIs

see [PSN-node](https://github.com/ssshooter/PSN-node)

## Thanks

- https://codepen.io/Krupupakku/pen/MWKqoXW
- https://codepen.io/Airwavess/pen/ExPqoyX
- https://codepen.io/ahmed_mohaisen/pen/xxwOjre

## Screensot

### Game list

<img src="https://github.com/ssshooter/PSN-node-displayer/blob/master/screenshot/gameList.png?raw=true" width="300">

### Trophy list

<img src="https://github.com/ssshooter/PSN-node-displayer/blob/master/screenshot/trophyList.png?raw=true" width="300">