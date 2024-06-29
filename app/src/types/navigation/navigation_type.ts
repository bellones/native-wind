import { CategoryType } from "../category/category_type";

export type CategoryNavigationType = {
    Categories: {
        category: CategoryType | undefined;
    }
}
export type LoginNavigationType = {
    Login: undefined;
}
export type MainNavigationType = {
    Home: undefined;
    Search: undefined;
    Cart: undefined;
    Profile: undefined;
}
export type AccountNavigationType = {
    CreateAccount: undefined;
    ForgotPass: undefined;
}
