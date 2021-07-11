import "../index.css";

export default function CalCard({ calory, food }) {
  return (
    <div className="Card">
      <h1>{food && food}</h1>
      <h2>you have consumed {calory && calory} cals today</h2>
    </div>
  );
}