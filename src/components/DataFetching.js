import React ,{useState ,useEffect  }from 'react';
import axios from "axios";

function DataFetching(props) {
    const[post,setPost] = useState([]);

    useEffect(() => {
        axios.get('https://5fe2dd2b7a94870017682a5e.mockapi.io/names')
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <ul>
             {
                 post.map(post => <li key={post.id}>{post.name}</li>)
             }
            </ul>
        </div>
    );
}

export default DataFetching;