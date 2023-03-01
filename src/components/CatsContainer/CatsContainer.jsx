import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCatsFromState } from '../../redux/Selectors/Cats-Selector'
import { Cat } from './Cat/Cat'
import style from './CatsContainer.module.css'

export const CatsContainer = () => {

    const cats = useSelector(getCatsFromState)
    const [visible, setVisible] = useState(4)


    const showMore = () => {
        setVisible(count => count + count)
    }

    useEffect(() => {
        setVisible(4)
    }, [cats])

    return (

        <div className={style.container}>
            <div className={style.catsWrapper}>
                {
                    cats.slice(0, visible).map(cat => <Cat cat={cat} key={cat.id} />)
                }
            </div>

            {visible < cats.length &&
                <button className={style.visible} onClick={showMore}>Show More</button>
            }

        </div>
    )
}
