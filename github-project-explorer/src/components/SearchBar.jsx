export default function SearchBar({search,setSearch,handleSearch}){

return(

<div className="flex gap-2 p-4 justify-center">

<input
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search repositories..."
className="border p-2 rounded w-80"
/>

<button
onClick={handleSearch}
className="bg-blue-500 text-white px-4 py-2 rounded"
>
Search
</button>

</div>

)

}