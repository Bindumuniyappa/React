import { Outlet } from 'react-router-dom'
import CharecterLimiterTask from './CharecterLimiterTask'
import CountDownTask from './CountDownTask'
import FireFlinkTask from './FireFlinkTask'
import ImageLoader from './ImageLoader'
import ParentComp from './ParentComp'
import RandomColorGenTask from './RandomColorGenTask'
import RandomEmojiGen from './RandomEmojiGen'
import Nav from './Routing/Nav'
import ScrollProgress from './ScrollProgress'
import SimpleTimerTask from './SimpleTimerTask'
import TicTacToeTask from './TicTacToeTask'
import ToDoListTask from './ToDoListTask'
import ToggleTask from './ToggleTask'
import WeatherTask from './WeatherTask'

function App() {
  
  return (
    <>
    {/* <FireFlinkTask/> */}
    {/* <ToggleTask/> */}
    {/* <ToDoListTask/> */}
    {/* <SimpleTimerTask/> */}
    {/* <RandomColorGenTask/> */}
    {/* <CountDownTask/> */}
    {/* <CharecterLimiterTask/> */}
    {/* <RandomEmojiGen/> */}
    {/* <ImageLoader/> */}
    {/* <WeatherTask/> */}
    {/* <TicTacToeTask/> */}
    {/* <ScrollProgress/> */}
    {/* <ParentComp/> */}
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App
