// Later port over to supabase to access the database service instead of local posts
export interface Post {
    id: string;
    title: string;
    category: string;
    date: string;
    summary: string;
}

export const DEV_LOG_POSTS: Post[] = [
    {
        id: 'linear transformations',
        title: "Visualizing Linear Transformations with Matrices",
        category: "Math",
        date: "2026-09-04",
        summary: "An interactive view seeing the correlation of multiplying matrices to transform vectors in space ($\\mathbf{A}\\mathbf{x} = \\mathbf{b}$)."
    },
    {
        id: "kawase blur",
        title: "Speedy Image Processing with Kawase Blur",
        category: "Computer Graphics",
        date: "2026-09-05",
        summary: "Showcasing a blur method that achieves high quality results while being real-time efficient."
    }
]