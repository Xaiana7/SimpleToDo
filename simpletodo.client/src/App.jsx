import { useEffect, useState } from 'react';
import Posts from "./components/Posts";
import  {BrowserRouter, Route, Routes, Link}  from "react-router-dom";
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <BrowserRouter>
        <div>
            <header> 
                <nav>
                    <Link to="/">Weather</Link> | <Link to="/posts">ToDo</Link>
                </nav>
            </header>
            <Routes>
            <Route path='/' element={
                <>
                <h1 id="tableLabel">Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </> } />
            <Route path='/posts' element={<Posts/>}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        if (response.ok) {
            const data = await response.json();
            setForecasts(data);
        }
    }
}

export default App;