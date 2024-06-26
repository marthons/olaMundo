import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from 'componente/postModelo';
import ReactMarkdown from 'react-markdown';
import './Post.css';
import NaoEncontrada from "../../componente/naoEncontrada";
import PaginaPadrao from "../../componente/paginaPadrao";

export default function Post() {

    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }


    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo>
                        <h1>{post.titulo}</h1>
                        <img src={`/assets/posts/${post.id}/capa.png`} alt={post.titulo} />

                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>}
                />
            </Route>
        </Routes>
    )
}