# 🧮 Code Challenge

## 🌎 Demo Site

Published on Netlify [here](https://awesome-poitras-eb0891.netlify.app/)

## 🗒 Notes

- I've used Nuxt with Vue 2 and Tailwind to build this. This my first time using Vue. I thought about using scoped CSS but ended up going for Tailwind as it is a very light framework allowed me to implement a consistent grid and set of units across the app. I've added a color override with the brand colors.
- The margins on the designs (at least in Figma were off) a little bit. I've used their close equivalent in REM units and made assumptions where I needed to. I've also tried my hand at putting together a responsive layout.
- I've used VueX for state management and pulled the API response into a store. I've used two stores here; If I had more time to think through the way this is strucuted or a more comprehensive API I would probably redesign this as well as asked for pagination results in the API response.
- My unit tests and mocks are centered around what is most likely to break. I've tried to focus on the state reducers and added a few snapshot tests of the critical components used in the app.
- There are spelling mistakes and duplicate labels in the API response. I've left them in; In a team context I would have tried to collaborate with the API team in order to fix this.
- I'vw used Nuxt and added pagination with page routing.
- There was no link to follow and no more relevant data to display in the API response so I added a blank link for "Read More".

## ⏰ What I would have done with more time

- Written more comprehensive tests (targeting more edge cases, e2e with Puppeteer)

## 🏗️ Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# Test
$ yarn test

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
