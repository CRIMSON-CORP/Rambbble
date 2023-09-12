'use client';
import { m } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import {
    articleContent,
    articleContentWRapper,
    inViewPropsAll,
} from '@/utils/framer-motion-variants';

interface ArticleContentProps {
    /**Path to the image */
    imagePath: string;
    /**Width of the image */
    width: number;
    /**Height of the image */
    height: number;
    /**Alternative for the image */
    imageAlt: string;
    /**Article index */
    index: number;
    /**Article Title */
    title: string;
    /**Article Description */
    description: string;
    /**Article class names, if any */
    className?: string;
}

const ArticleContent: FC<ArticleContentProps> = ({
    width,
    height,
    imagePath,
    imageAlt,
    index,
    title,
    description,
    className,
}) => {
    return (
        <m.article
            variants={articleContentWRapper}
            initial="hidden"
            whileInView="animate"
            viewport={inViewPropsAll}
            className={`flex flex-col items-center gap-2 md:gap-4 max-w-[330px] ${className}`}
        >
            <m.div variants={articleContent}>
                <Image
                    width={width}
                    height={height}
                    src={imagePath}
                    alt={imageAlt}
                />
            </m.div>
            <m.div
                variants={articleContent}
                className="text-white text-xl font-semibold center bg-primary-orange aspect-square w-9 rounded-full outline outline-primary-orange/20 outline-2 outline-offset-4"
            >
                {index}
            </m.div>
            <m.h3
                variants={articleContent}
                className="text-primary-orange text-xl md:text-2xl lg:text-[28px] font-semibold font-body"
            >
                {title}
            </m.h3>
            <m.p
                variants={articleContent}
                className="opacity-70 text-center text-dark-blue sm:text-base md:text-lg lg:text-xl font-medium"
            >
                {description}
            </m.p>
        </m.article>
    );
};

export default ArticleContent;
