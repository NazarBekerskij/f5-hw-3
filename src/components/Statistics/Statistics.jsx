export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {/* Якщо title передається, відображаємо його */}
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}