const Home = () => {
  return (
    <>
      <div
        className="d-flex align-items-center bg-light"
        style={{ height: "100vh", padding: "50px" }}
      >
        <div className="container d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                Welcome to the{" "}
                <span style={{ color: "blue" }}>Author Database</span>
              </h1>
              <p style={{ fontSize: "20px", marginTop: "20px" }}>
                Explore the biographies of over 149,000 modern novelists, poets,
                playwrights, nonfiction writers, journalists, and scriptwriters.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="image-hover"
                src="author.jpg"
                style={{
                  width: "90%",
                  height: "100%",
                  borderRadius: "10%",
                  marginBottom: "100px",
                }}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
