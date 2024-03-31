// Print "Hello, world!"
console.log("Hello, world!");

// Get the current date and time
const currentDate = new Date();

// Extract individual components of the date and time
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the date and time components
const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

// Print the current date and time
console.log("Current Date:", formattedDate);
console.log("Current Time:", formattedTime);

