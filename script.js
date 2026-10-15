document.getElementById("btn").onclick = () => {
  document.getElementById("btn").style.display = "none";
  document.querySelector("p").textContent = "Тебя зарикроллили 😎";
  document.getElementById("video").innerHTML =
    '<iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
};
