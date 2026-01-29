const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <h2 style={{ padding: "40px" }}>Please login first</h2>;

  return (
    <div style={{ padding: "60px" }}>
      <h2>My Profile</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
};

export default Profile;
