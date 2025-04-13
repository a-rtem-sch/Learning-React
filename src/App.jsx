import './styles/App.css'
import { Counter } from './components/Counter'
import PostItem from './components/PostItem'
import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/Button';
import MyInput from './components/UI/input/MyInput';

function App() {
	const [posts, setPosts] = useState(
		[
			{id: "1", title: 'Javascript', body: 'Description'},
			{id: "2", title: 'Javascript', body: 'Description'},
			{id: "3", title: 'Javascript', body: 'Description'},
			{id: "4", title: 'Javascript', body: 'Description'}
		]
	);
	const [title, setTitle] = useState('aaavav');
	const addNewPost = (e) => {
		e.preventDefault()
		console.log(title);
	}

  return (
    <>
      <div className="App">
		<form action="">
			<MyInput 
				value={title}
				onChange={e => setTitle(e.target.value)}
				type="text"  
				placeholder="Enter title" />
			<MyInput type="text" name="body" placeholder="Enter body" />
			<MyButton onClick={addNewPost}>Add Post</MyButton>
		</form>
		<PostList posts={posts} title="List of Posts"/>

	  </div>
    </>
  )
}

export default App
