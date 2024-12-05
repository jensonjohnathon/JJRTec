import { create } from "zustand";

type AuthState = {
  authenticated: boolean;
  loading: boolean;
  setAuthenticated: (authenticated: boolean) => void;
  setLoading: (loading: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  authenticated: false,
  loading: false,
  setAuthenticated: (authenticated: boolean) => set(() => ({ authenticated })),
  setLoading: (loading: boolean) => set(() => ({ loading })),
}));

export default useAuthStore;
