'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <motion.article
            variants={articleContentWRapper}
            initial="hidden"
            whileInView="animate"
            viewport={inViewPropsAll}
            className={`flex flex-col items-center gap-2 md:gap-4 max-w-[330px] ${className}`}
        >
            <motion.div variants={articleContent}>
                <Image
                    width={width}
                    height={height}
                    src={imagePath}
                    alt={imageAlt}
                />
            </motion.div>
            <motion.div
                variants={articleContent}
                className="text-white text-xl font-semibold center bg-primary-orange aspect-square w-9 rounded-full outline outline-primary-orange/20 outline-2 outline-offset-4"
            >
                {index}
            </motion.div>
            <motion.h3
                variants={articleContent}
                className="text-primary-orange text-xl md:text-2xl lg:text-[28px] font-semibold font-body"
            >
                {title}
            </motion.h3>
            <motion.p
                variants={articleContent}
                className="opacity-70 text-center text-dark-blue sm:text-base md:text-lg lg:text-xl font-medium"
            >
                {description}
            </motion.p>
        </motion.article>
    );
};

export default ArticleContent;
