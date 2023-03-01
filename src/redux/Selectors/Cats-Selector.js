export const getCatsFromState = (state) => {
    return state.catsPage.cats
}
export const getCatsCategoriesFromState = (state) => {
    return state.catsPage.categories
}

export const getIsLoadingFromState = (state) => {
    return state.catsPage.isLoading
}
