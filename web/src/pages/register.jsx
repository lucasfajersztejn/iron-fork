import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/api.service";

function Register() {
  const navigate = useNavigate();
  const latitude = useRef(0);
  const longitude = useRef(0);
  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(ref.current);
      latitude.current = position.coords.latitude;
      longitude.current = position.coords.longitude;
    });
  }, []);

  async function onSubmit(data) {
    try {
      setError(false);

      await createUser({
        ...data,
        location: {
          type: "Point",
          coordinates: [latitude.current, longitude.current],
        },
      });

      navigate("/login");
    } catch (err) {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="alert alert-danger">error. Review form data</div>
      )}

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          required
          id="name"
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          {...register("name")}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          required
          id="email"
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email")}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          {...register("password")}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          {...register("username")}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="birthDate" className="form-label">
          Birth date
        </label>
        <input
          required
          id="birthDate"
          type="date"
          className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
          {...register("birthDate")}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Register
      </button>
    </form>
  );
}

export default Register;
