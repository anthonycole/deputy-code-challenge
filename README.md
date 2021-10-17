# 🧮 Code Challenge

## 🗒 Notes

- I've used Nuxt with Vue 2 and Tailwind to build this. This my first time using Vue. I thought about using scoped CSS but ended up going for Tailwind as it is a very light framework allowed me to implement a consistent grid and set of units across the app. I've added a color override with the brand colors.
- The margins on the designs (at least in Figma were off) a little bit. I've used their equivalent in REM components and made assumptions where I needed to. I've gotten creative with the responsive layout.
- I've used VueX for state management and pulled the API response into a store. I've used two stores here; If I had more time to think through the way this is strucuted or a more comprehensive API I would probably redesign this.
- My unit tests are centered around what is most likely to break. I've tried to mainly look at the reducers and added a few snapshot tests of the critical components
- There are spelling mistakes and duplicate labels. I've left them in; I would have probably pushed back on the API team for this.
- I made a call and didn't paginate my results as there were no design resources or catering to do so and there weren't many results.
- There was no link to follow for the clients and no more relevant data to display so I just left them as going to nowhere.

## ⏰ What I would have done with more time

- Added Pagination
- Written more comprehensive tests (targeting more edge cases, e2e with Puppeteer)

## 🏗️ Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
