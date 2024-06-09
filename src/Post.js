function Post() {
	return (
      <div className="post">
          <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-at-4.17.25%E2%80%AFPM.jpg?w=725"/>
          </div>
          <div className="texts">
            <h2>Humanoid robots are learning to fall well</h2>
            <p className="info">
              <a className="author">Dawid Paszko</a>
              <time>2023-01-06 16:45</time>
            </p>
            <p className="summary">The savvy marketers at Boston Dynamics produced two major robotics news cycles last week. The larger of the two was, naturally, the electric Atlas announcement. As I write this, the sub-40 second video is steadily approaching five million views. More will coming...</p>
          </div>
      </div>
	);
}
export default Post;