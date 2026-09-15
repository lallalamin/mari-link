import profilePic from "../assets/profile.jpg";

function Profile() {
  return (
    <section className="profile">
      <div className="profile-image-wrapper">
        <div className="profile-image-ring">
          <img
            src={profilePic}
            alt="Mari"
            className="profile-image"
          />
        </div>

        <span className="profile-flower flower-one">
          ✿
        </span>

        <span className="profile-flower flower-two">
          ♡
        </span>
      </div>

      <h1 className="profile-name">
        mari <span>♡</span>
      </h1>

      <p className="profile-bio">
        software engineer
        <span> • </span>
        artist
        <span> • </span>
        maker
      </p>

      <p className="profile-note">
        making a cozy little corner of the internet
      </p>
    </section>
  );
}

export default Profile;