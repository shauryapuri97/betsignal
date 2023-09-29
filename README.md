![betsignalLogo](https://github.com/shauryapuri97/betsignal/assets/23358500/7a51d201-5a37-424f-ba51-61124b2d8940)

Yep, the wordplay from BatSignal to BetSignal was intentional. This is a mock UI platform designed as a test project, it uses Smarkets' API to get exchange info and display it to the user.

Technologies: Vite, React, MaterialUI, React-Icons

Time taken: 4 hours

https://github.com/shauryapuri97/betsignal/assets/23358500/eee3c88c-712f-44fa-9e03-34bef8d57894


## How to run
Go to the project folder and run the following command.

`npm install` -> `npm run dev`

Note: Please make sure you are connected to the internet.

## Features
### Sport book
From the left hand side side bar navigation, you should be able to select a sport and it would automatically update the data grid in the main panel with the most popular single game events including their calculated odds and back stake in Pound sterlin values.

In one of the sports i.e. Basketball, there are some User actions added via a reusable hook that allow the user to add an event to their watchlist or show more info. We'll talkmore about watchlist below, the show more info opens a Dialog using React Portals, outside the DOM Hierarchy to allow for optimised rendering of the application.

### Watchlist
This is a nice to have feature to give an idea of what could be a good extention had I more time. Ideally, there would be a UserData API which would return watchlisted event ids for instance that would then get rendered here. The action to add to a watchlist in the blotter does nothing for now, however, it would be nice to dispatch an action there to add a new item to watchlist via the API.

### Navbar User Icon
Similarly to the above Userdata API, it could also return the username which can be passed down as a Context to the Sidebar / other components as needed. You can see the user upon hovering on the profile icon. This is hardcoded for now.

## Design
I tried to use figma to come up with a minimal logo for the platform.

<img width="1439" alt="Screenshot 2023-09-29 at 10 38 02" src="https://github.com/shauryapuri97/betsignal/assets/23358500/b9dbd542-1483-4fce-91bf-4904763bb9d2">


## Scalability
1. Would get rid of inline styles moving towards production as they can hit performance quite bad, redrawing styles each render.
2. Would look into a more robust library such as AGGrid for grids to manage big datasets.
3. Add pagination on blotters for users to be able to load more rows.
4. Add Filtering in blotters that fetch data using params.
5. Use a graphing library such as React Flow / Highcharts to be able to show account / order info to users in a more intuitive way.
