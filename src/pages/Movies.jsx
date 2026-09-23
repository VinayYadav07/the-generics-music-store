import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  Form,
} from "react-bootstrap";

const DATABASE_URL =
  "https://ecommerce-movies-2c252-default-rtdb.firebaseio.com";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");
  const [retrying, setRetrying] = useState(false);
  const retryTimer = useRef(null);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      setRetrying(false);

      const response = await fetch(`${DATABASE_URL}/movies.json`);
      if (!response.ok) throw new Error("Could not fetch movies");

      const data = await response.json();
      if (data) {
        const loadedMovies = Object.entries(data).map(([id, movie]) => ({
          id,
          ...movie,
        }));
        setMovies(loadedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong ....Retrying");
      setRetrying(true);
      retryTimer.current = setTimeout(() => fetchMovies(), 5000);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
    return () => clearTimeout(retryTimer.current);
  }, [fetchMovies]);

  const addMovieHandler = async (event) => {
    event.preventDefault();
    const NewMovieObj = { title, openingText, releaseDate };
    console.log("NewMovieObj:", NewMovieObj);

    try {
      setIsAdding(true);
      setError("");

      const response = await fetch(`${DATABASE_URL}/movies.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewMovieObj),
      });

      if (!response.ok) throw new Error("Could not add movie");

      setTitle("");
      setOpeningText("");
      setReleaseDate("");
      await fetchMovies();
    } catch (error) {
      setError("Could not add movie");
    } finally {
      setIsAdding(false);
    }
  };

  const deleteMovieHandler = async (id) => {
    try {
      const response = await fetch(`${DATABASE_URL}/movies/${id}.json`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Could not delete movie");
      setMovies((prev) => prev.filter((movie) => movie.id !== id));
    } catch (error) {
      setError("Could not delete movie");
    }
  };

  const cancelRetryHandler = () => {
    clearTimeout(retryTimer.current);
    setRetrying(false);
    setError("");
  };

  return (
    <>
      <div
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          padding: "clamp(2rem, 5vw, 4rem) 1rem",
        }}
      >
        <Container>
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "2px",
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            🎬 Movie Collection
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              opacity: 0.85,
              fontWeight: "300",
            }}
          >
            Add, view, and manage your favorite movies
          </p>
        </Container>
      </div>

      <Container className="my-4 my-md-5">
        <Card className="p-3 p-md-4 shadow-sm border-0 rounded-4 mb-5">
          <h4
            className="fw-bold mb-4"
            style={{
              fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
              color: "#1a1a2e",
            }}
          >
            Add a New Movie
          </h4>

          <Form onSubmit={addMovieHandler}>
            <Row className="g-3 g-md-4">
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter movie title"
                    required
                    className="py-2"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Opening Text</Form.Label>
                  <Form.Control
                    type="text"
                    value={openingText}
                    onChange={(e) => setOpeningText(e.target.value)}
                    placeholder="Brief description"
                    required
                    className="py-2"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-semibold">Release Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    required
                    className="py-2"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-4">
              <Button
                type="submit"
                variant="primary"
                className="px-4 py-2 fw-semibold"
                style={{
                  borderRadius: "30px",
                  background: "linear-gradient(135deg, #e94560, #c73652)",
                  border: "none",
                  transition: "transform 0.3s ease",
                }}
                disabled={isAdding}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {isAdding ? "Adding..." : "Add Movie"}
              </Button>
            </div>
          </Form>
        </Card>

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        {retrying && (
          <Button
            variant="outline-danger"
            className="mb-4"
            onClick={cancelRetryHandler}
          >
            Cancel Retry
          </Button>
        )}

        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "#1a1a2e",
          }}
        >
          Your Movies
        </h2>

        {isLoading && (
          <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
            <p className="mt-2 text-secondary">Loading movies...</p>
          </div>
        )}

        {!isLoading && !error && movies.length === 0 && (
          <div className="text-center py-5">
            <p className="text-secondary fs-5">
              No movies added yet. Start adding now!
            </p>
          </div>
        )}

        <Row className="g-3 g-md-4">
          {!isLoading &&
            movies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm border-0 rounded-4 product-card">
                  <Card.Body className="d-flex flex-column">
                    <div
                      className="text-center mb-3"
                      style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                    >
                      🎬
                    </div>
                    <Card.Title
                      className="fw-bold text-center"
                      style={{ fontSize: "clamp(1rem, 1.2vw, 1.2rem)" }}
                    >
                      {movie.title}
                    </Card.Title>
                    <Card.Text
                      className="text-secondary text-center"
                      style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
                    >
                      {movie.openingText}
                    </Card.Text>
                    <Card.Text
                      className="text-muted text-center small mb-3"
                      style={{ fontSize: "clamp(0.75rem, 0.9vw, 0.85rem)" }}
                    >
                      <strong>Release:</strong> {movie.releaseDate}
                    </Card.Text>
                    <div className="mt-auto text-center">
                      <Button
                        variant="danger"
                        size="sm"
                        className="px-3"
                        style={{ borderRadius: "20px" }}
                        onClick={() => deleteMovieHandler(movie.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Movies;
