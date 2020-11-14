import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        //this.props.fetchPosts()
        this.props.fetchPostsAndUsers()
    }

    renderList() {
        return this.props.posts.map((p) => {
            return (
                <div className="item" key={p.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{p.id}. {p.title}</h2>
                            <p>{p.body}</p>
                        </div>
                        <UserHeader userId={p.userId} />
                    </div>

                </div>
            )
        })
    }
    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
//export default connect(mapStateToProps, { fetchPosts })(PostList);
// fetchPosts:fetchPosts



