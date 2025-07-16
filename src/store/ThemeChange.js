import { create } from "zustand";

const useThemeStore = create((set)=>({
    isDark:true, //defalut(here change and the set functions change)
    toggleTheme:()=>set((state)=>({isDark:!state.isDark})),
}));

export default useThemeStore;