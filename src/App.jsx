import './styles/App.css'
import { Counter } from './components/Counter'
import PostItem from './components/PostItem'
import { useState } from 'react';
import PostList from './components/PostList';

function App() {
	const [posts, setPosts] = useState(
		[
			{id: "1", title: 'Javascript', body: 'Description'},
			{id: "2", title: 'Javascript', body: 'Description'},
			{id: "3", title: 'Javascript', body: 'Description'},
			{id: "4", title: 'Javascript', body: 'Description'}
		]
	);
	const [posts2, setPosts2] = useState(
		[
			{id: "1", title: 'Python', body: 'Description'},
			{id: "2", title: 'Python', body: 'Description'},
			{id: "3", title: 'Python', body: 'Description'},
			{id: "4", title: 'Python', body: 'Description'}
		]
	);
  return (
    <>
      <div className="App">
		<PostList posts={posts} title="List of Posts"/>
		<PostList posts={posts2} title="List of Posts about Python"/>
	  </div>
    </>
  )
}

export default App
