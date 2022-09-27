var page = document.location.pathname.slice(1).split("/").filter(d => d !== "");

console.log(`Hello ${page}!`);