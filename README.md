# memory-game

The player has to pick the correct items in the order shown

## The Game
Each round adds one random item to the end of the sequence. When the sequence is finished the player has to click on the items in the order shown to pass to the next round.

#### Example
We have 4 items, lets say: **Dog, Cat, Horse and Frog**:
* the **first round Cat is highlighted** and the **user should click on Cat** to pass to the next round.
* for the **second round Cat is highlighted and then Dog**, so the **user should click on Cat and then Dog**.
* for the **third round Cat is highlighted, then Dog and then Cat again** (because it is random, so items can be repeated), so the **user should click on Cat, then Dog and then Cat again** to pass to the next round.

This is a video of another example about this game but with colors: [youtube video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4)

## Notes

* Next.js was used for Server Side Rendering and Code Splitting
* Characters are being loaded from Rick and Morty API
* Enzyme was used along with Jest for testing

## Running the app

* Run `yarn install` and then `yarn start` to boot the app at port 8080
* To run tests, run `yarn test`
