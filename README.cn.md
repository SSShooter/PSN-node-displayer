# PSN-node-displayer

DEMO [psn-trophy.ssshooter.com](https://psn-trophy.ssshooter.com/)

所有从 PlayStation 拿到的数据都会被缓存 24 小时，所以展示的数据未必是最新的，如果需要缩短缓存时间，可以：

- 部署后端：[PSN-node](https://github.com/ssshooter/PSN-node) 
- 修改 `.env` 里的 `VITE_REQUEST_URL`
- 部署前端（点下面按钮就行）

Deploy with Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fssshooter%2FPSN-node-displayer)

## 使用

- 进入 `/#/search` 搜索 PSN ID
- 会被重定向到 `/#/userPage?accountId=yourAccountId`
- 你也可以到 `/#/friends?accountId=yourAccountId` 偷看你好友的奖杯
- 隐藏功能：用 `pick` 筛选游戏，例如：`/#/userPage?accountId=7044269709970808941&pick=[NPWR13281_00,NPWR08199_00,NPWR25264_00,NPWR05818_00,NPWR07897_00,NPWR15587_00]`

## 技术栈

- Vue3
- TypeScript
- Vite

## API

see [PSN-node](https://github.com/ssshooter/PSN-node)

## 感谢

- https://codepen.io/Krupupakku/pen/MWKqoXW
- https://codepen.io/Airwavess/pen/ExPqoyX
- https://codepen.io/ahmed_mohaisen/pen/xxwOjre

## 截图

### 游戏列表

<img src="https://github.com/ssshooter/PSN-node-displayer/blob/master/screenshot/gameList.png?raw=true" width="300">

### 奖杯列表

<img src="https://github.com/ssshooter/PSN-node-displayer/blob/master/screenshot/trophyList.png?raw=true" width="300">