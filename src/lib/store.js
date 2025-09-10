import { create } from "zustand";

export const useAppStore = create((set) => ({
  showLogin: false,
  setShowLogin: (value) => set({ showLogin: value }),
}));

// ✅ Add this for auth-specific state
export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
