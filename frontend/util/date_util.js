
function getDate(timestamp) {
  const calendar = {
    "01":"January",
    "02":"February",
    "03":"March",
    "04":"April",
    "05":"May",
    "06":"June",
    "07":"July",
    "08":"August",
    "09":"September",
    "10":"October",
    "11":"November",
    "12":"December",
  }
  const year = timestamp.slice(0,4);
  const month = calendar[timestamp.slice(5,7)];
  const date = timestamp.slice(8,10);
  
  return month.concat(` ${date}, ${year}`)
}

export default getDate;
