export interface DummyPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface DummyComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}