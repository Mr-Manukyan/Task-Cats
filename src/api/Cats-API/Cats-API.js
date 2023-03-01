import { instance } from "../axios_instance"

export const catsAPI = {

    getCatsByCategory(categoryID) {
        return instance.get(`images/search?category_ids=${categoryID}&limit=10&page=0`)
            .then((res) => res)
            .catch((err) => console.log(err))
    },

    getCatsCategories() {
        return instance.get('categories')
            .then((res) => res)
            .catch((err) => console.log(err))
    }
}