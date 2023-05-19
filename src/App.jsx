
import './App.css'
import Navigation from './Components/NavigationTemplate/Navigation.jsx';
import { ThemeContext } from './ThemeContext';

function App() {
  

  return (
    <ThemeContext>
     <div className= "App">
    < Navigation />
    {/* < Main /> */}
    </div> 
    </ThemeContext>
  );
    
      
}

export default App
