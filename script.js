// Unsplash API
// API Docs: https://unsplash.com/documentation#location
const count = 10;
const apiKey = "-S0hkdst8Ukx-auNBnAsYtemgV4EHMB-TOJrwjKJSXE";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Cath Error Here
  }
}

// On Load
getPhotos();
