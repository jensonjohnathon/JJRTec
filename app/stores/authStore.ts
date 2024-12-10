import { create } from "zustand";

type AuthState = {
    authenticated: boolean;
    loading: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    setAuthenticated: (authenticated: boolean) => void;
    setLoading: (loading: boolean) => void;
    setTokens: (accessToken: string, refreshToken: string) => void;
};

const useAuthStore = create<AuthState>((set) => ({
    authenticated: false,
    loading: false,
    accessToken: null,
    refreshToken: null,
    setAuthenticated: (authenticated: boolean) =>
        set(() => ({ authenticated })),
    setLoading: (loading: boolean) => set(() => ({ loading })),
    setTokens: (accessToken: string, refreshToken: string) =>
        set(() => ({
            accessToken,
            refreshToken,
        })),
}));

export default useAuthStore;
