import Cards from './(components)/Cards';

const page = () => {
    return (
        <div className='overflow-y-scroll h-[95vh] p-4 flex flex-col gap-y-4 remove-scroll'>
            <div className="w-full md:w-1/3 mb-6">
                <input
                    className="flex h-10 w-full rounded-lg border-none outline-none bg-[#262626] px-3 py-2 text-sm placeholder:text-[#ffffff77]"
                    type="text"
                    placeholder="For which case you are looking for lawyer ?"
                ></input>
            </div>
            <h3 className='text-2xl font-bold text-white'>Top Criminal Defense Lawyers Available</h3>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    )
}

export default page
