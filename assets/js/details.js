function initServiceDetailsSection() {
    const serviceLinks = document.querySelectorAll(".services-list .service-item a");
    const serviceDescriptions = document.querySelectorAll(".service-description");
  
    // Set the initial active service
    let activeService = 0;
    serviceDescriptions[activeService].classList.add("visible-description");
  
    serviceLinks.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default link behavior
        serviceDescriptions.forEach((description) => description.classList.remove("visible-description"));
        serviceDescriptions[index].classList.add("visible-description");
      });
    });
  }
  
  initServiceDetailsSection();