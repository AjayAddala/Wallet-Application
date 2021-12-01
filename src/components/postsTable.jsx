import React from 'react';

const PostsTable = (props) => {
    const { posts } = props;

    return (
        <div className="container">
            <input type="submit" value="add" className="btn btn-primary float-end  my-3" />
            <table className="table table-striped table-success   mx-auto mt-8 ">
                    <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Post Id </th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr>
                            <td>{post.userId} </td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <input type="button" value="update" className="btn btn-secondary mb-2 " />
                                <input type="button" value="delete" className="btn btn-outline-dark mt-2" />
                            </td>
                        </tr>

                    ))}

                    )
                </tbody>
            </table>
        </div >
    );
}

export default PostsTable;



//for taking the components from other file,first you have to use props in child in cc,in parent you have to import that and give a self tag for it,and in the child class use object destruction.