import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MySelect } from '../Common/ReactSelect/MySelect'
import { getCatsByCategory, getCatsCategories } from '../../redux/Reducers/Cats-Reducer'
import { getCatsCategoriesFromState } from '../../redux/Selectors/Cats-Selector'
import catIcon from '../../assets/icons/catIcon.png'
import style from './Header.module.css'



export const Header = () => {

    const dispatch = useDispatch()
    const categories = useSelector(getCatsCategoriesFromState)

    const getCatsByCategoryID = (categoryID) => {
        dispatch(getCatsByCategory(categoryID))
    }

    useEffect(() => {
        dispatch(getCatsCategories())
    }, [])

    useEffect(() => {
        dispatch(getCatsByCategory(5))
    }, [])


    return (
        <div className={style.container}>
            <div className={style.iconWrapper}>
                <Link to='/'>
                    <img src={catIcon} alt='cat-icon' className={style.icon} />
                </Link>

            </div>
            <div className={style.selectBody}>
                <h1 className={style.selectParagraph}>Choose Cats Category</h1>
                <MySelect categories={categories} getCatsByCategoryID={getCatsByCategoryID} />
            </div>
        </div>
    )
}

