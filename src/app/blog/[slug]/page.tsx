import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{
        slug: string; //Aqui o nome tem que ser igual da pasta
    }>
}

//export const revalidate = 60;//Transformou o compoenete em ISR

export async function generateStaticParams() { //Aqui transformeu o componente em SSG
    return allPosts.map((post) => ({
        slug: post.slug
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if(!post) {
        notFound();//Função do next navigation que redireciona para pagina de notFound
    }

    return (
        <PostPage post={post} />
    )
}