export default function Filters() {
  return (
    <div className="card filter-row">
      <select>
        <option>All Interns</option>
        <option>Intern 1</option>
      </select>

      <input type="date" />

      <button>Apply</button>
    </div>
  );
}
