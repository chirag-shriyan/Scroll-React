import { create } from "zustand";

type State = {
    user: string | null;
    isLoggedIn: boolean;
};

type Action = {
    login: () => void;
    signup: () => void;
    logout: () => void;
};

const useAuthStore = create<State & Action>((set, get) => ({
    user: null,
    isLoggedIn: false,

    login: () => {
        set(() => ({ isLoggedIn: true }));
    },
    signup: () => {
        set(() => ({ isLoggedIn: true }));
    },
    logout: () => {
        set(() => ({ isLoggedIn: false }));
    },
}));

export default useAuthStore;
