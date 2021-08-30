const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },

    menu:
    {
        salad: 10,
        cheese: 10,
        beef: 10
    },

    total: 30
}

export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_MIDDLE': {
            let { propsBurger, amount } = action;

            if (amount === -1 && state.burger[propsBurger] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger };
            burgerUpdate[propsBurger] += amount;
            state.burger = burgerUpdate
            //Tính tổng
            state.total += amount * state.menu[propsBurger];
            return { ...state }
        }
    }

    return { ...state }
}
