function formatDate(dateInput) {
  const date = new Date(dateInput);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

  return formattedDate;
}

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function calculateAge(birthdate) {
  if (birthdate) {
    const today = new Date();
    const birthdateArray = birthdate.split('/');
    const birthDay = parseInt(birthdateArray[0], 10);
    const birthMonth = parseInt(birthdateArray[1], 10) - 1;
    const birthYear = parseInt(birthdateArray[2], 10);

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      const lastMonth = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        birthDate.getDate(),
      );
      const daysInLastMonth = daysInMonth(
        lastMonth.getMonth(),
        lastMonth.getFullYear(),
      );
      ageDays += daysInLastMonth;
      ageMonths--;
    }

    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }

    return `${ageYears} tahun ${ageMonths} bulan ${ageDays} hari`;
  }
  return '';
}

export { formatDate, calculateAge };
