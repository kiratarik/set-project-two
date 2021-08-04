// import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Home from './components/Home'
// import History from './components/History'
import Search from './components/Search'

function App() {
  console.log('My key', process.env.REACT_APP_MY_API_KEY)
  return (
    <>
      <Search />
    </>
  )
}

export default App

// <BrowserRouter>
//   <Switch>
//     <Route exact path='/'>
//       <Home />
//     </Route>
//     <Route exact path='/search'>
//       <Search />
//     </Route>
//     <Route path='/history'>
//       <History />
//     </Route>
//   </Switch>
// </BrowserRouter>