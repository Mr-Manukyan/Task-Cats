import { motion } from 'framer-motion'
import style from './Cat.module.css'

export const Cat = ({ cat }) => {
    return (
        <motion.div className={style.container}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: .3 }}
            layoutId={cat.id}
        >
            <div className={style.imageWrapper}>
                <img src={cat.url} alt='cat' className={style.catImage} />
            </div>
        </motion.div>
    )
}

