import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
    const router = useRouter();
    const slug = router.query.slug as string;
    const post = allPosts.find((post) => post.slug.toLowerCase().includes(slug.toLowerCase()))

    return (
        <main className="mt-32 text-gray-100">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild className="text-action-sm">
                            <Link href="/blog">Blog</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <span className="text-blue-200 text-action-sm">{post?.title}</span>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div>
                
            </div>
        </main>
    )
}