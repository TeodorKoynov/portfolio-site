import {motion} from "framer-motion";

import {staggerContainer} from "@/utils/motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                initial='hidden'
                whileInView='show'
                variants={staggerContainer()}
                viewport={{ once: true, amount: 0.25 }}
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto mt-5 relative z-0`}
            >
                <span className={"hash-span"} id={idName}>
                    &nbsp;
                </span>
                <Component/>
            </motion.section>
        )
    }

export default SectionWrapper;