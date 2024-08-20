const ageCalculate = () => {
  const today = new Date();
  const inputDate = new Date(document.getElementById("date-input").value);

  if (isNaN(inputDate.getTime())) {
    alert("Please enter a valid date.");
    displayResult("-", "-", "-");
    return;
  }

  const birthDetails = {
    day: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };

  if (isFutureDate(birthDetails, today)) {
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
  }

  const age = calculateAge(birthDetails, today);
  displayResult(age.days, age.months, age.years);
};

const isFutureDate = (birthDetails, currentDate) => {
  const birthDate = new Date(birthDetails.year, birthDetails.month - 1, birthDetails.day);
  return birthDate > currentDate;
};

const calculateAge = (birthDetails, currentDate) => {
  let years = currentDate.getFullYear() - birthDetails.year;
  let months = currentDate.getMonth() + 1 - birthDetails.month;
  let days = currentDate.getDate() - birthDetails.day;

  if (days < 0) {
    months--;
    days += getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {years, months, days};
};

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const displayResult = (days, months, years) => {
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
};

document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);
