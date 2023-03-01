import { catsAPI } from "../../api/Cats-API/Cats-API"

const SET_CATS = "APP/SET_CATS"
const SET_CATS_CATEGORIES = "APP/SET_CATS_CATEGORIES"
const SET_IS_LOADING = "APP/SET_IS_LOADING"



let initialState = {
    cats: [],
    isLoading: false,
    categories: [],
}

export const catsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CATS:
            return {
                ...state,
                cats: action.cats.map(cat => {
                    return {
                        ...cat,
                        isFavorite: false
                    }
                }),
            }

        case SET_CATS_CATEGORIES:
            return {
                ...state,
                categories: action.categories.map(category => {
                    return {
                        value: category.id,
                        label: category.name.charAt(0).toUpperCase() + category.name.slice(1)
                    }
                }),
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state
    }
}

// ActionCreator

export const catsActions = {

    setCats: (cats) =>
    ({
        type: SET_CATS,
        cats,
    }),

    setCatCategories: (categories) =>
    ({
        type: SET_CATS_CATEGORIES,
        categories,
    }),

    setIsLoading: (isLoading) =>
    ({
        type: SET_IS_LOADING,
        isLoading
    }),

}

// Thunk

export const getCatsByCategory = (categoryID) => {
    return async (dispatch) => {
        try {
            dispatch(catsActions.setIsLoading(true))
            const data = await catsAPI.getCatsByCategory(categoryID)
            if (data.status === 200) {
                dispatch(catsActions.setCats(data.data))
            }
            dispatch(catsActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(catsActions.setIsLoading(false))
        }
    }
}

export const getCatsCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(catsActions.setIsLoading(true))
            const data = await catsAPI.getCatsCategories()
            if (data.status === 200) {
                dispatch(catsActions.setCatCategories(data.data))
            }
            dispatch(catsActions.setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(catsActions.setIsLoading(false))
        }
    }
}












