import React from 'react';
import { motion } from 'framer-motion';

export const PageLoader = () => {
    return (
        <>
            {/* Mount Out */}
            <motion.div
                className="bg-grey w-screen h-full fixed top-0 left-0 pointer-events-none z-[1000]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            />
            {/* Mount In */}
            <motion.div
                className="bg-grey w-screen h-full fixed top-0 left-0 pointer-events-none z-[1000]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            />
        </>
    );
};
