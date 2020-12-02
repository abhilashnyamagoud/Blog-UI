import React from 'react'
import {Link,Route} from 'react-router-dom'
import UsersList from './UsersList'
import Home from './Home'
import Post from './Posts'
import Posts from './Posts'
import UserShow from './UserShow'
import ShowPage from './ShowPage'
const App=(props)=>{

  return(
    <div>
      <p><Link to='/'>Home</Link>| <Link to='/users'>Users</Link>|<Link to='/posts'>Posts</Link> </p>
      <Route path='/' component={Home} exact={true} />
      <Route path='/users' component={UsersList} exact={true} />
      <Route path='/posts' component={Posts} exact={true} />
      <Route path='/users/:id' component={UserShow} />
      <Route path='/posts/:id' component={ShowPage} />
    </div>
  )
}

export default App