import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react"
import { useRouter } from "next/router"
import { useCallback } from "react";

export const Search = () => {
    const router = useRouter();
    const query = (router.query.q as string) ?? '';
    //const q = router.query.q as string;
    //const [query, setQuery] = useState("");

    //Faz a mesma coisa da função handleQueryChange mas serve so  pra caso o usuario precione Enter no teclado
    const handleSearch = useCallback((event: React.FormEvent) => {
        event.preventDefault();

        if(query.trim()) {
            router.push(`/blog?q=${encodeURIComponent(query)}`)
        }
    }, [query, router])

    function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newQuery = e.target.value

        router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
            shallow: true,//Atualiza o path da pagina atual sem recarregar a pagina
            scroll: false//A cada atualização ele retorna para o topo da pagina
        })
    }

    function resetSearch() {
        router.push("/blog", undefined, {
            shallow: true,
            scroll: false
        })
    }

    // useEffect(() => {
    //     setQuery(q);
    // }, [q]);

    return (
        <form onSubmit={handleSearch} className="relative group w-full md:w-60">
            <SearchIcon className={cn("text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300", query ? 'text-blue-300' : '')}/>
            <input 
                onChange={handleQueryChange} 
                placeholder="Buscar" 
                value={query}
                className="w-full h-10 md:w-72 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
            />
            {query && (
                <CircleX className="text-gray-300 h-4 w-4 absolute top-1/2 -translate-y-1/2 right-3" onClick={resetSearch}/>
            )}
            

        </form>
    )
}