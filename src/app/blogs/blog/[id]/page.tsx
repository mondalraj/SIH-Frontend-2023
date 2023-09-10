"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { blogs } from '../../blogs';

const Singleblog = () => {
    const { id } = useParams();
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [author, setauthor] = useState("");
    const [image, setimage] = useState("");

    useEffect(() => {
        blogs.map((blog) => {
            if (blog.id === (id)) {
                settitle(blog.title);
                setcontent(blog.content);
                setauthor(blog.author);
                setimage(blog.image);
            }
        })
    }, [id]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-12 bg-black text-white">
            <div className="text-3xl font-bold">
                {title}
            </div>
            <div className="flex w-1/2 h-1/3 justify-center pt-5">
                <img
                    src={image || "https://user-images.githubusercontent.com/86917304/265525358-1876345d-594c-4300-94d2-9dda07d063d8.png"}
                    alt="image"
                    className="w-full"
                />
            </div>
            <div className="leading-7 py-10 w-[90%]">
                {content}
            </div>
            <div className="flex-grow border-t-2 border-gray-700 w-[94%] relative top-[3.8rem] -z-20 text-black">
                .
            </div>
            <div className="flex justify-center flex-col items-center">
                <img
                    className="inline-block h-20 w-20 rounded-full"
                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                    alt="Dan_Abromov"
                />
                <div className="text-lg font-semibold">{author}</div>
                <div>Advocate</div>
            </div>
        </div>
    )
}

export default Singleblog
