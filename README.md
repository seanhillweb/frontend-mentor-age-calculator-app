# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [View on Netlify](https://fem-newsletter-signup-seanhillweb.netlify.app/)
- Project URL: [View on Github](https://github.com/seanhillweb/frontend-mentor-age-calculator-app)

## My process

### Built with

- [React](https://reactjs.org/)
- [React Hook Forms](https://www.react-hook-form.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Date-FNS](https://date-fns.org/)

### What I learned

Having seperate input fields for date management turned out to be pretty tricky for validation. My initial structure looks clean, but resulted in a lot of overhead. Using `date-fns` helped with utilities and formatting.

```js
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
```

### Continued development

For future projects, I want to explore creating a form schema, using a library like [Yup](https://www.npmjs.com/package/yup) or [Zod](https://www.npmjs.com/package/zod).

### Useful resources

- [Regex Example](https://www.freecodecamp.org/news/regex-for-date-formats-what-is-the-regular-expression-for-matching-dates/) - This helped structure the expected values for each input vield.
- [Validation Example](https://catalins.tech/react-forms-with-react-hook-form/) - This helped structure the individual error messages for each input.

## Author

- Website - [Sean Hill](https://www.seanhillweb.com)
- Frontend Mentor - [@seanhillweb](https://www.frontendmentor.io/profile/seanhillweb)