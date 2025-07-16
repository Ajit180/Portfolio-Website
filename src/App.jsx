import AppRoutes from "./AppRoutes"
import useThemeStore from "./store/ThemeChange";


const App = () => {
  const {isDark} = useThemeStore();
  return (
    <>
    <div className={`${isDark?'bg-black text-white':'bg-gray-50 text-black'} transition-colors duration-900 ease-in-out`}>
      <AppRoutes/>
    </div>
    </>
  )
}

export default App

