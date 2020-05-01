
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    },
    action
    )
    {
        switch(action.type) {
            case 'ADD_RESTAURANT':
                const newRestaurant = {
                    ...action.restaurant,
                    id: cuid()
                }
                return {
                    ...state,
                    restaurants: [...state.restaurants, newRestaurant]
                }
            case 'DELETE_RESTAURANT':
                return {
                    ...state,
                    restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
                }
            case 'ADD_REVIEW':
                const newReview = {
                    ...action.review,
                    id: cuid()
                }
                return {
                    ...state,
                    reviews: [...state.reviews, newReview]
                }
            case 'DELETE_REVIEW':
                return {
                    ...state,
                    reviews: state.reviews.filter(review => review.id !== action.id)
                }
            default:
                return state
        }

}
