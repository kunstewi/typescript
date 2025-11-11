// Write a function fetchData(callback: (data: string) => void) that simulates fetching data using setTimeout.

// Example:

// fetchData((data) => console.log("Received:", data));
// Output after 2 seconds: "Received: Fetched data"

// Hint: use

// setTimeout(() => callback("Fetched data"), 2000);

function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("FetchedData");
  }, 2000);
}

fetchData((data) => {
  console.log("received:", data);
});
