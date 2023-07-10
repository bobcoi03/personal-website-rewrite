

export default async function Page({ params }) {
    const getBlogData = async () => {
        const res = await fetch(`http://192.168.0.63:3000/api/blog/search?id=${params.blog_title}`,{ cache: 'no-store' })
        if (!res.ok) {
            throw new Error("Failed to fetch blog data")
        }
        return res.json()
    }

    const data = await getBlogData()

    const RenderAsset = data.text.map((obj) => {
        return (
            <p className="text-base font-light mb-8">
                {obj}
            </p>
        )
    })

    return (
        <div className="flex w-full min-h-screen h-full bg-base-200 justify-center p-4">
            <div className="w-full h-max sm:w-1/2 flex flex-col gap-4 mt-4">
                <text className="text-4xl font-light break-words">{data.title}</text>
                <text className="text-sm font-light">{data.dateString}</text>
                <text className="text-base font-light">
                    {RenderAsset}
                </text>
            </div>
        </div>
    )
}