// Logique du formulaire de devis
document.addEventListener("DOMContentLoaded", () => {
  const serviceSelect = document.getElementById("service");
  const surfaceInput = document.getElementById("surface");
  const progressBar = document.getElementById("progression");
  const totalDisplay = document.getElementById("total");

  const serviceFormSelect = document.getElementById("service-demande");
  const serviceFormSurface = document.getElementById("surface-demande");

  const MAX_SURFACE_RAISONNABLE = 5000;

  let services = {};

  fetch("/services.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Impossible de charger les données des services.");
      }
      return response.json();
    })
    .then(data => {
      services = data;
      updateEstimate();
    })
    .catch(error => {
      console.error(error);
      totalDisplay.textContent = "Indisponible";
    });

  function updateEstimate() {
    const selectedService = serviceSelect.value;
    const service = services[selectedService];

    if (!service) {
      totalDisplay.textContent = "—";
      return;
    }

    let surface = parseFloat(surfaceInput.value);

    if (isNaN(surface) || surface < 0) {
      surface = 0;
    }

    if (surface > MAX_SURFACE_RAISONNABLE) {
      surface = MAX_SURFACE_RAISONNABLE;
      surfaceInput.value = MAX_SURFACE_RAISONNABLE;
    }

    const total =
      service.prix_base_chf +
      service.prix_par_m2_chf * surface;

    totalDisplay.textContent = Math.round(total);

    const maxSurface = 1000;
    progressBar.value = Math.min(surface, maxSurface);
    progressBar.textContent = `${surface} m²`;

    serviceFormSelect.value = selectedService;
    serviceFormSurface.value = surface;
  }

  serviceSelect.addEventListener("change", updateEstimate);
  surfaceInput.addEventListener("input", updateEstimate);

  serviceFormSelect.addEventListener("change", () => {
    serviceSelect.value = serviceFormSelect.value;
    updateEstimate();
  });

  serviceFormSurface.addEventListener("input", () => {
    surfaceInput.value = serviceFormSurface.value;
    updateEstimate();
  });
});
