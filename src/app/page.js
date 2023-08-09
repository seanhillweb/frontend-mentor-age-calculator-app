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
import { intervalToDuration } from "date-fns";
import Image from "next/image";

export default function Home() {
  const date = new Date();

  const currentDay = date.getUTCDate();
  const currentMonth = date.getUTCMonth() + 1;
  const currentYear = date.getUTCFullYear();

  const [isDay, setDay] = useState();
  const [isMonth, setMonth] = useState();
  const [isYear, setYear] = useState();

  const compareCurrentDate = date;
  let compareSubmittedDate = new Date(
    currentYear,
    currentMonth - 1,
    currentDay
  );

  if (isYear && isMonth && isDay) {
    compareSubmittedDate = new Date(isYear, isMonth - 1, isDay);
  }

  const dateDuration = intervalToDuration({
    start: compareCurrentDate,
    end: compareSubmittedDate,
  });

  function formatDateValue(value) {
    return !value ? "--" : value;
  }

  function Form() {
    const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm();

    const onSubmit = () => {
      setDay(getValues("day"));
      setMonth(getValues("month"));
      setYear(getValues("year"));
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
              defaultValue={isDay}
              onChange={(e) => setDay(e.target.value)}
              placeholder="DD"
              inputMode="numeric"
              maxLength={2}
              aria-invalid={errors.day ? "true" : "false"}
              {...register("day", {
                required: true,
                valueAsNumber: true,
                validate: {
                  minValue: (value) => value >= 1,
                  maxValue: (value) => value <= 31,
                  matchPattern: (value) =>
                    /^(3[01]|[12][0-9]|0?[1-9])+$/.test(value),
                },
              })}
            />
            {errors.day?.type === "required" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                This field is required
              </span>
            )}
            {errors.day?.type === "minValue" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid day
              </span>
            )}
            {errors.day?.type === "maxValue" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid day
              </span>
            )}
            {errors.day?.type === "validate" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a number
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
              defaultValue={isMonth}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
              inputMode="numeric"
              maxLength={2}
              aria-invalid={errors.month ? "true" : "false"}
              {...register("month", {
                required: true,
                valueAsNumber: true,
                pattern: /^(1[0-2]|0?[1-9])+$/,
                validate: {
                  minValue: (value) => value >= 1,
                  maxValue: (value) => value <= 12,
                  matchPattern: (value) => /^(1[0-2]|0?[1-9])+$/.test(value),
                },
              })}
            />
            {errors.month?.type === "required" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                This field is required
              </span>
            )}
            {errors.month?.type === "minValue" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid month
              </span>
            )}
            {errors.month?.type === "maxValue" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid month
              </span>
            )}
            {errors.month?.type === "validate" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid month
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
              defaultValue={isYear}
              onChange={(e) => setYear(e.target.value)}
              placeholder="YYYY"
              inputMode="numeric"
              maxLength={4}
              aria-invalid={errors.year ? "true" : "false"}
              {...register("year", {
                required: true,
                valueAsNumber: true,
                pattern: /[\d]{4}/,
                validate: {
                  maxValue: (value) => value <= currentYear,
                  matchPattern: (value) => /[\d]{4}/.test(value),
                },
              })}
            />
            {errors.year?.type === "required" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                This field is required
              </span>
            )}
            {errors.year?.type === "maxValue" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be in the past
              </span>
            )}
            {errors.year?.type === "validate" && (
              <span role="alert" className="text-lightRed text-xs italic mt-1">
                Must be a valid year
              </span>
            )}
          </div>
        </div>
        <div className="relative my-16 md:my-10">
          <hr className="border-t-2 border-lightGrey" aria-hidden={true} />
          <button
            type="submit"
            className="absolute top-0 -translate-y-[50%] left-0 right-0 md:left-auto mx-auto w-16 md:w-20 h-16 md:h-20 p-4 md:p-2 rounded-full bg-purple hover:bg-offBlack focus:bg-offBlack transition duration-200 ease-in-out text-center"
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
        <div className="w-full md:max-w-[700px] bg-white p-6 md:p-12 rounded-3xl rounded-br-[6rem] md:rounded-br-[9rem]">
          <Form />
          <ul className="list-none font-extrabold !leading-[1.2em] italic text-5xl md:text-7xl">
            <li>
              <span className="text-purple">
                {formatDateValue(dateDuration.years)}
              </span>{" "}
              years
            </li>
            <li>
              <span className="text-purple">
                {formatDateValue(dateDuration.months)}
              </span>{" "}
              months
            </li>
            <li>
              <span className="text-purple">
                {formatDateValue(dateDuration.days)}
              </span>{" "}
              days
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
