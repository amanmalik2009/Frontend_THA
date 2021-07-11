import "./index.css";
import CalCard from "./components/CalCard";
export default function App() {
  return (
    <div className="App">
      
      <h1>whohoo this is my calorie card</h1>

      <div className="cal-app-container">
        <CalCard calory="56" food="chole bhuture" />
        <CalCard calory="69" food="Burger" />
        <CalCard calory="500" food="Coke" />
        <CalCard calory="180" food="munchurian" />
        <CalCard calory="90" food="Fried Rice" />
        <CalCard calory="200" food="Lassania" />
        <CalCard calory="10" food="Pani Puri" />
      </div>
    </div>
  );
}