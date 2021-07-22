export const chooseCity = (city) => {
    return {
        type: 'CITY_CHOSEN',
        payload: city
    }
}