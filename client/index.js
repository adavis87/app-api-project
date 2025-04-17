async function fetchApiResponse() {
  const response = await fetch("http://localhost:8000/api/example");
  const data = await response.json();
  document.getElementById("api-response").textContent = data.message;
}

fetchApiResponse();