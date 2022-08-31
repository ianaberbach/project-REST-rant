const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <h3>Located in {data.place.city}, {data.place.state}</h3>
        <h3>{data.place.showEstablished()}</h3>
        <h4>Server {data.place.cuisines}</h4>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Comments</h2>
        <p>No comments yet!</p>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
