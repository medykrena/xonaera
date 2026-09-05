// Affichage des prix indicatifs sur la page Services, depuis services.json
document.addEventListener("DOMContentLoaded", () => {
  fetch("/services.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Impossible de charger les données des services.");
      }
      return response.json();
    })
    .then(services => {
      Object.keys(services).forEach(key => {
        const el = document.getElementById(`prix-${key}`);
        if (el) {
          el.textContent = services[key].prix_base_chf;
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
});
