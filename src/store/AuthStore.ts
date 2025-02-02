import { create } from "zustand";

type State = {
    user: string | null;
    isLoggedIn: boolean;
};

type Action = {};

const useAuthStore = create<State & Action>((set, get) => ({
    user: null,
    isLoggedIn: false,
}));


export default useAuthStore
