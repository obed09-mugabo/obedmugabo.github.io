
alert("Bienvenue sur le site d'Obed")
const titre=
document.getElementById("titre-principal");

titre.addEventListener("click", function() {
	titre.classList.remove("animation-titre");
	void titre.offsetWidth; 
	titre.classList.add("animation-titre");
});	

<button onclick="direBonjour()">Clique ici</button>

<script>
  function direBonjour() {
    alert("Bonjour Obed !");
  }
</script>

function searchSection() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const sections = {
    "accueil": "accueil",
    "objectif": "objectifs",
    "objectifs": "objectifs",
    "projets": "projets",
    "contact": "contact"
  };

  if (sections[input]) {
    document.getElementById(sections[input]).scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Section non trouvée !");
  }
}
