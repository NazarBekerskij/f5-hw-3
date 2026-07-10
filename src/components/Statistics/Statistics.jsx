export default function Statistics({stats}) {
  return (
    <ul>
      <h2>UPLOAD STATS</h2>
      {stats.map(({id, label, percentage}) => (
        <li key={id}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}