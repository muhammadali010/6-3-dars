import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    age: '',
  });
  const [userList, setUserList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (user.name && user.surname && user.age) {
      setUserList([...userList, user]);
      setUser({ name: '', surname: '', age: '' });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ism"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Familiya"
          value={user.surname}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Yosh"
          value={user.age}
          onChange={handleChange}
        />
        <button type="submit">Qo'shish</button>
      </form>

      <div className="user-cards">
        {userList.map(function(u, index) {
          return (
            <div key={index} className="user-card">
              <h3>{u.name} {u.surname}</h3>
              <p>Yoshi: {u.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
