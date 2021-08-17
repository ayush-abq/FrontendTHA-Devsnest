const updatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData = (place) => {
    return (dispatch) => {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=e585a8bb4a3e4a2e96c62853211308&q=${place}`
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "UPDATE_PLACE_DATA",
                    payload: data,
                });
            });
    };

};

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    };
};

export { updatePlace, updatePlaceData, toggleTheme };

