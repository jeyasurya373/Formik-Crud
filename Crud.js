import React, { Component } from "react";
import axios from "axios";



class Crud extends Component {

    constructor() {
        super();
        this.state = {
            post: []
        }
    }

    componentDidMount = () => {
        this.getPost();
    }

    getPost = async () => {

        try {      //instead response we can use object destcturing { data } and console  (post:data) 
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts")
            this.setState({ post: response.data })
        } catch (err) {
            console.error(err);
        }
    }
    createPost = () => {

    }
    updatatPost = () => {

    }
    deletePost = async (postId) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        let post = [...this.state.post]
        post = post.filter(post => post.id !== postId);
        this.setState({ post })
    };


    render() {
        return (
            <>


                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Userid</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.post.map(post => {

                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td><button onClick={() => this.deletePost(post.id)}>Delete</button></td>
                                </tr>
                            )
                        })


                        }

                    </tbody>
                </table>
            </>
        )


    }
}

export default Crud;