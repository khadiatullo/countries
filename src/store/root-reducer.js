import { controlsReducer } from "./controls/controls-reducer";
import { countriesReducer } from "./countries/countries-reducer";
import { detailsReducer } from "./details/details-reducer";
import { themeReducers } from "./theme/theme-reducers";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
    theme: themeReducers,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer
});