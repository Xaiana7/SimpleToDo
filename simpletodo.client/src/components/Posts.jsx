import { useEffect, useState } from 'react';

const  URL = '/api/Post';

const Posts = () => {

    const [allPosts, setPosts] =  useState([]);

    const getPosts = async () => {
        try {
        const options = { 
            method: 'GET', 
            header: new  Headers()
        };
        const result = await fetch(URL, options);

        console.log('status:', result.status);

        if (result.ok) {
            const posts = await result.json();
            console.log('данные:', posts);
            setPosts(posts);
            return posts;
        } else {
            console.error('Ошибка при запросе:', result.status);
        }
    } catch (error) {
        console.error('Ошибка запроса:', error); // 👈 вот это покажет ошибку в сети
    }
        return [];
    }

    const addPost = async () =>{
        const headerFromUser = document.querySelector('#header').value;
        const textFromUser = document.querySelector('#text').value;

        const newPost  =  {
            header: headerFromUser,
            text: textFromUser,
        }
        try {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json')
        const options = { 
            method: 'POST', 
            headers: headers,
            body: JSON.stringify(newPost)
        };
        const result = await fetch(URL, options);

        if (result.ok) {
            const post = await result.json();
            allPosts.push(post);
            setPosts(allPosts.slice());
                  
        } else {
            console.error('Ошибка при запросе:', result.status);
        }
    } catch (error) {
        console.error('Ошибка запроса:', error); // 👈 вот это покажет ошибку в сети
    }
        return [];
    }

        const updatePost = async (id) =>{
        const headerFromUser = document.querySelector('#header').value;
        const textFromUser = document.querySelector('#text').value;

        const updatedPost  =  {
            id: id,
            header: headerFromUser,
            text: textFromUser,
        }
        try {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json')
        const options = { 
            method: 'PATCH', 
            headers: headers,
            body: JSON.stringify(updatedPost)
        };
        const result = await fetch(URL, options);

        if (result.ok) {
            const returnedPost = await result.json();
            const updatedPosts = allPosts.map(post =>
                post.id === returnedPost.id ? returnedPost : post
            );
            setPosts(updatedPosts);
                  
        } else {
            console.error('Ошибка при запросе:', result.status);
        }
    } catch (error) {
        console.error('Ошибка запроса:', error); // 👈 вот это покажет ошибку в сети
    }
        return [];
    }

    const deletePost = async  (id) =>{
        const options ={
            method: 'DELETE',
            headers:  new Headers()
        }
        const result = await fetch(`${URL}/${id}`, options);
        setPosts(allPosts.filter(x=> x.id !=  id))
    }

    useEffect(()=>{
        getPosts();
    },[])
    
    return (
        <div>
            <div>
                <p>Создание постов</p>
                <div style={{margin:"10px"}}><input id='header' type="text" /></div>
                <div  style={{margin:"10px"}}><textarea id="text"></textarea></div>
                <button onClick={()=> addPost()}> Add post</button>
            </div>
            <div>
                {allPosts.map(x => <PostItem key={x.id}  post={x} deleteAction={deletePost} updateAction={updatePost}/>)}
            </div>
        </div>
    ) 
}

export default Posts;

const PostItem = ({post, deleteAction,  updateAction}) =>{
    return (
        <div key={post.id}>
            <h2>{post.header}</h2>
            <p>{post.text}</p>
            <button onClick={() => deleteAction(post.id)}>Delete</button>
            <button onClick={() => updateAction(post.id)}>Update</button>
        </div>
    );
}