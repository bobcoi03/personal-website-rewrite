import Link from "next/link"
import { blogsData } from "../api/blog/[blog_title]/route"

const BlogPreview = ({ data }) => {
    return (
        <>
        <Link className="text-lg font-light link" href={`/blogs/${data.id}`}>{data.title}</Link>
        <text className="text-xs font-light">{data.dateString}</text> 
        </>
    )
}

const RenderBlogPreviews = []

for (const property in blogsData) {
    RenderBlogPreviews.push(<BlogPreview data={blogsData[property]}/>)
}

export const metadata = {
    title: "Minh | Blogs",
    description: "This is where I provide links to my projects and write about investments, such as joyy, nl industries and many others"
}

export default function Blog() {
    return (
        <div className="flex w-full min-h-screen h-full bg-base-200 justify-center p-4">
            <div className="w-full h-max sm:w-1/2 flex flex-col gap-4 mt-4">
                <Link className="text-lg font-light link" href="https://pengapp.pics" target="__blank">Peng: a new take on photo sharing</Link>
                <text className="text-xs font-light">08.07.23</text>
                {RenderBlogPreviews}
            </div>
        </div>
    )
}