"use client";

/**
 * Summary. Frontend Mentor Challenge.
 *
 * Description. An age calculator app.
 *
 * @link https://www.freecodecamp.org/news/how-to-build-forms-in-react/
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function Home() {
  const date = new Date();

  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const currentFullDate = `${currentDay}-${currentMonth}-${currentYear}`;

  console.log(currentFullDate);

  const [isDay, setDay] = useState(currentDay);
  const [isMonth, setMonth] = useState(currentMonth);
  const [isYear, setYear] = useState(currentYear);

  const [isSubmittedDate, setSubmittedDate] = useState();

  function Form() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      // setDay(data.day);
      // setMonth(data.month);
      // setYear(data.year);
      // console.log(isDay, isMonth, isYear);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="day"
              className={`text-xs font-bold tracking-[0.2em] uppercase mb-1 ${
                errors.day ? "text-lightRed" : "text-smokeyGrey"
              }`}
            >
              Day
            </label>
            <input
              id="day"
              type="text"
              name="day"
              className={`font-extrabold text-xl rounded-lg p-3 focus:ring-transparent hover:cursor-pointer ${
                errors.day
                  ? "text-lightRed border-lightRed hover:border-lightRed focus:border-lightRed"
                  : "border-lightGrey hover:border-purple focus:border-purple"
              }`}
              placeholder="DD"
              inputMode="numeric"
              maxLength={2}
              aria-invalid={errors.day ? "true" : "false"}
              {...register("day", {
                required: true,
                pattern: "(0[1-9]|[12][0-9]|3[01])",
                maxLength: 2,
              })}
            />
            {errors.day && errors.day.type === "required" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                This field is required
              </span>
            )}
            {errors.day > 31 || errors.day < 1 && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid day
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="month"
              className={`text-xs font-bold tracking-[0.2em] uppercase mb-1 ${
                errors.month ? "text-lightRed" : "text-smokeyGrey"
              }`}
            >
              Month
            </label>
            <input
              id="month"
              type="text"
              name="month"
              className={`font-extrabold text-xl rounded-lg px-4 py-3 focus:ring-transparent hover:cursor-pointer ${
                errors.month
                  ? "text-lightRed border-lightRed hover:border-lightRed focus:border-lightRed"
                  : "border-lightGrey hover:border-purple focus:border-purple"
              }`}
              placeholder="MM"
              maxLength={2}
              aria-invalid={errors.month ? "true" : "false"}
              {...register("month", {
                required: true,
                pattern: "(0[1-9]|1[1,2])",
                maxLength: 2,
                valueAsNumber: true,
              })}
            />
            {errors.month && errors.month.type === "required" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className={`text-xs font-bold tracking-[0.2em] uppercase mb-1 ${
                errors.year ? "text-lightRed" : "text-smokeyGrey"
              }`}
            >
              Year
            </label>
            <input
              id="year"
              type="text"
              name="year"
              className={`font-extrabold text-xl rounded-lg px-4 py-3 focus:ring-transparent hover:cursor-pointer ${
                errors.year
                  ? "text-lightRed border-lightRed hover:border-lightRed focus:border-lightRed"
                  : "border-lightGrey hover:border-purple focus:border-purple"
              }`}
              placeholder="YYYY"
              minLength={4}
              maxLength={4}
              aria-invalid={errors.year ? "true" : "false"}
              {...register("year", {
                required: true,
                pattern: "(19|20)d{2}",
                minLength: 4,
                maxLength: 4,
                valueAsNumber: true,
              })}
            />
            {errors.year && errors.year.type === "required" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="relative my-16 md:my-20">
          <hr className="border-t-2 border-lightGrey" aria-hidden={true} />
          <button
            type="submit"
            className="absolute top-0 -translate-y-[50%] left-0 right-0 md:left-auto mx-auto w-16 md:w-20 h-16 md:h-20 rounded-full bg-purple hover:bg-offBlack focus:bg-offBlack transition duration-200 ease-in-out text-center"
          >
            <Image
              src="/icon-arrow.svg"
              alt="arrow icon"
              width={46}
              height={44}
              aria-hidden={true}
              className="inline"
            />
            <span className="sr-only">Calculate age</span>
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="container">
      <main
        id="main"
        className="flex flex-col items-center justify-center min-h-screen"
        aria-label="Content"
        aria-live="polite"
      >
        <div className="w-full md:max-w-[700px] bg-white p-6 md:p-12 rounded-3xl rounded-br-[4.5rem] md:rounded-br-[9rem]">
          <Form />
          <ul className="list-none font-extrabold italic text-5xl md:text-7xl">
            <li>
              <span className="text-purple">--</span> years
            </li>
            <li>
              <span className="text-purple">--</span> months
            </li>
            <li>
              <span className="text-purple">--</span> days
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
