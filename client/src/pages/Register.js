import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`登録成功！（ダミー）\nユーザー名: ${username}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 16 }}>
      <h2>ユーザー登録（ダミー）</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: "block", margin: "10px 0", width: "100%" }}
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px 0", width: "100%" }}
          required
        />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default Register;
