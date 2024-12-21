import { create } from "zustand";

type AuthState = {
    authenticated: boolean;
    registered: boolean;
    zustandServerName: string | null;
    loading: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    setAuthenticated: (authenticated: boolean) => void;
    setRegistered: (registered: boolean) => void;
    setLoading: (loading: boolean) => void;
    setTokens: (accessToken: string, refreshToken: string) => void;
    setZustandServerName: (zustandServerName: string) => void;
};

const useAuthStore = create<AuthState>((set) => ({
    authenticated: false,
    registered: false,
    zustandServerName: null,
    loading: false,
    accessToken: null,
    refreshToken: null,
    setAuthenticated: (authenticated: boolean) =>
        set(() => ({ authenticated })),
    setRegistered: (authenticated: boolean) => set(() => ({ authenticated })),
    setLoading: (loading: boolean) => set(() => ({ loading })),
    setTokens: (accessToken: string, refreshToken: string) =>
        set(() => ({
            accessToken,
            refreshToken,
        })),
    setZustandServerName: (zustandServerName: string) =>
        set(() => ({
            zustandServerName,
        })),
}));

export default useAuthStore;
