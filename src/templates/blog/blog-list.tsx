import { Search } from "@/components/Search";
import { useRouter } from "next/router";
import { PostCard } from "./components/PostCard";
import { PostGridCard } from "./components/PostGridCard";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";

export default function BlogList() {
    const router = useRouter();
    const query = (router.query.q as string);
    const pageTitle = query ? `Resultado para busca de: "${query}"` : 'Dicas e estrategias para impulsionar seu negócio';

    const posts = !query ? allPosts : allPosts.filter((post) => post.title.toLowerCase()?.includes(query.toLowerCase()));

    const hasPosts = posts.length > 0;

    return (
        <div className="flex flex-col py-24 flex-grow h-full">
            <header className="pb-14">
                <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
                    {/*TAG*/}
                    <div className="flex flex-col gap-4 md:px-0">
                        <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center uppercase md:text-left py-2 px-4 bg-cyan-300">Blog</span>
                        {/*Titulo*/}
                        <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
                            {pageTitle}
                        </h1>
                    </div>
                    {/*Search*/}
                    <Search />
                </div>
            </header>
            {/*Listagem de posts*/}
            {hasPosts && (
                <PostGridCard>
                    {posts.map((post) => (
                        <PostCard
                            key={post._id}
                            slug={post.slug}
                            title={post.title}
                            description={post.description}
                            date={new Date(post.date).toLocaleDateString("pt-BR")}
                            image={post.image}
                            author={{
                                name: post.author.name,
                                avatar: post.author.avatar
                            }}
                        />
                    ))}
                </PostGridCard>
            )}
            {!hasPosts && (
                <div className="container px-8">
                    <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-fray-300 p-8 md:p-12 rounded-lg">
                        <Inbox className="h-12 w-12 text-cyan-100"/>

                        <p className="text-gray-100 text-center">Nenhum post encontrado.</p>
                    </div>
                </div>
            )}
        </div>
    )
}