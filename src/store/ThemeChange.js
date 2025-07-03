import { create } from "zustand";

const useThemeStore = create((set)=>({
    isDark:true, //defalut
    toggleTheme:()=>set((state)=>({isDark:!state.isDark})),
}));

export default useThemeStore;