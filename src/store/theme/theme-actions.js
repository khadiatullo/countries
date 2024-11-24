export const ADD_THEME = '@@theme/ADD_THEME';

export const addTheme = (theme) => (
    {
        type: ADD_THEME,
        payload: theme
    }
);