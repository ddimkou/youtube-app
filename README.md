# **This is a follow up tutorial of Javascript Mastery:**
* https://www.youtube.com/watch?v=FHTbsZEJspU&t=1390s&ab_channel=JavaScriptMastery
* https://www.jsmastery.pro/
* https://github.com/adrianhajdin


# Youtube-app

This project is a React app that allows users to explore and watch videos. It utilizes the YouTube Data API to fetch video data and display it in an organized manner.

### Live Preview:
https://ddimkou-youtube-app.netlify.app/

## Features

- View a feed of videos based on different categories.
- Watch individual videos with information(like views, likes etc) and related videos.
- Explore channels and view their videos.
- Search for videos based on specific keywords.

## Dependencies

This project relies on the following dependencies:

- React
- React Router
- Material-UI: A popular React UI framework for building responsive and beautiful user interfaces.
- YouTube Data API


## How to download and run locally
- Create a folder and copy the path
- on the console type  
-  ` cd <your-path eg: C:\Users\Folder > ` without < >
- ` git clone git@github.com:ddimkou/youtube-app.git `
- ` npm install ` to install dependencies
- Get an API Key from ` https://rapidapi.com/ytdlfree/api/youtube-v31 `
- You will need to create a file on the root named `.env `
- Inside type ` VITE_REACT_APP_RAPID_API_KEY= your-api-key-value `
- then `npm run dev`



