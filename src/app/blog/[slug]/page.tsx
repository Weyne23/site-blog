import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{
        slug: string; //Aqui o nome tem que ser igual da pasta
    }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;;
    const post = allPosts.find((post) => post.slug === slug);

    if(!post) {
        return {};
    }

    return{
        title: post.title,
        description: post.description,
        authors: [{name:post.author.name}],
        robots: 'index, follow',
        openGraph: {
            images: [post.image]
        }
    }
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