"use client";

/**
 * Summary. A basic form example.
 *
 * @link https://www.freecodecamp.org/news/how-to-build-forms-in-react/
 */

import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <span role="alert">An email is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span role="alert">An email must be formatted correctly</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type === "required" && (
          <span role="alert">A password is required</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
