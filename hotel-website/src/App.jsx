import React from 'react'
import Navbar from './navbar/navbar'
import './index.css';

const App = () => {
    function App() {
        const [isLoading, setIsLoading] = React.useState(true);
      
        React.useEffect(() => {
          const timer = setTimeout(() => {
            setIsLoading(false);
          }, 1000); // simulate delay
      
          return () => clearTimeout(timer);
        }, []);
      
        if (isLoading) {
          return <div className="app-loader"></div>;
        }
      
        return (
          <div className="App">
            {/* your routes/components */}
          </div>
        );
      }
      
  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
