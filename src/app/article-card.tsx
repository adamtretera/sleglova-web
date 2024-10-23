'use client'

import {useState} from 'react'
import Image from 'next/image'
import {MdCircle} from "react-icons/md";

interface ArticleCardProps {
    title: string
    content: string[]
    image: string
    imageAlt: string
}

export default function ArticleCard({title, content, image, imageAlt}: ArticleCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <article
            className="relative overflow-hidden w-80 h-80 cursor-pointer transition-all duration-300 ease-in-out rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 transition-all duration-300 ease-in-out rounded-md"
                 style={{
                     backgroundColor: isHovered ? 'var(--background)' : 'bg-background opacity-85',
                     opacity: isHovered ? 1 : 0,
                     border: isHovered ? '1px solid var(--primary)' : '1px solid transparent',
                 }}
            />
            <Image
                src={image}

                alt={imageAlt}
                width={256}
                height={256}

                className={`object-cover w-full h-full transition-opacity duration-300 ease-in-out ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                }`}/>

            <section
                className="absolute inset-0 flex flex-col justify-end text-primary-foreground   ">
                <div
                    className={`transition-all duration-300 ease-in-out min-h-28 ${
                        isHovered ? 'bg-transparent p-4' : 'bg-background opacity-85 p-4'
                    }`}
                >
                    <h2
                        className={`text-2xl font-bold mb-2 transition-all duration-300 ease-in-out  ${
                            isHovered ? 'text-lg' : 'text-2xl'
                        }`}
                    >
                        {title}
                    </h2>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        {content.map((paragraph, i) => (
                            <div key={paragraph} className={"flex gap-2 w-full"}>
                                <MdCircle className={"text-sm flex-shrink-0 fill-primary"}/>
                                <p className={" text-start"} key={i}>{paragraph}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    )
}