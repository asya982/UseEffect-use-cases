## useEffect(callback, [, dependency]) -  Hook for handling side-effects
useEffect is called when function renders, but itself it's not causing the re-render

### Use cases
- When component renders the first time
- When component changes and we need to make some side-effect
- Clean up some data

### Main code structure
 - `./src/App.tsx` - Counter logic
 - `./src/Cat.tsx` - Cat messages change logic
 - `./src/api.ts` - 'fetching data' function

 ### How to setup project
 `git clone https://github.com/asya982/UseEffect-use-cases.git`
 `cd UseEffect-use-cases`
 `npm install`
 `npm run dev`

 ### Useful information about useEffect
 [best practice](https://dmitripavlutin.com/react-useeffect-explanation/#5-useeffect-in-practice)
 [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)