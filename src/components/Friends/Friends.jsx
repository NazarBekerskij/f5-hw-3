export default function Friends({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline ? "онлайн" : "офлайн"}</span>

          <img className="avatar" src={avatar} alt="User avatar" width="48" />

          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}