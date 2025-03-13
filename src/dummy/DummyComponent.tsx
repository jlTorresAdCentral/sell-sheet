import { useEffect, useState } from "react"
import { DummyComment, DummyPost } from "./model/DummyData"
import { getDummyCommentData, getDummyPostData, searchDummyCommentData, searchDummyPostData } from "./repository/dummy.repository"

const DummyComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [posts, setPosts] = useState<DummyPost[]>([])
    const [comments, setComments] = useState<DummyComment[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(await getDummyPostData())
        }
        const fetchComments = async () => {
            setComments(await getDummyCommentData())
        }

        fetchPosts()
        fetchComments()
    }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            setPosts(await searchDummyPostData(searchQuery))
        }
        const fetchComments = async () => {
            setComments(await searchDummyCommentData(searchQuery))
        }

        fetchPosts()
        fetchComments()
    }, [searchQuery])

    return (
        <>
            <h1>Dummy Page</h1>

            <input
                className="input-test"
                placeholder="Search in posts or comments"
                value={searchQuery}
                onChange={(event) => {
                    setSearchQuery(event.target.value)
                }}
            />

            <div className="separate-tabs">
                <div>
                    <p><b>Posts</b></p>
                    <ul>
                        {posts.map((post) => (
                            <div key={post.id}>
                                <b>Title:</b> {post.title}
                                <b>Body:</b> {post.body}
                            </div>
                        ))}
                    </ul>
                </div>

                <div>
                    <p><b>Comments</b></p>
                    <ul>
                        {comments.map((comment) => (
                            <div key={comment.id}>
                                <b>Name:</b> {comment.name}
                                <b>Body:</b> {comment.body}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DummyComponent