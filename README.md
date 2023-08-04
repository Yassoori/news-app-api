# **News App API**

## https://news-app-api-yasser-saeed.vercel.app/

This is a React news app "Daily Planet" (from Superman) using the API from [newsapi.org](newsapi.org), which shows news from around the world

Built using VS Code, Terminal and Chrome Dev Tools by myself, Yasser Saeed. I am a Yoobee UX and Web design student, as well as a mulitidisciplinary artist and photographer.

### NPM packages:

- React
  - Used to create fast loading single page sites, which are organised into managable components.
  - Main.jsx : `import react from 'react'`
- React DOM
  - Used to interact with the DOM (Document Object Model)
  - Main.jsx : `import ReactDOM from 'react-dom/client'`
- React router DOM
  - Used to Used to navigate between pages and components.
  - App.jsx : `import { HashRouter, Routes, Route } from 'react-router-dom'`
- React loader spinner

  - show a cool spinning thing while the site loads
  - Homepage.jsx : `import { Puff } from 'react-loader-spinner'`

  ```
  {loading ? (
      <Puff color="#00BFFF" height={100} width={100}/>
      ) : news.length === 0 ? (<p>No Articles Found</p>)` :
      ()}
  ```
