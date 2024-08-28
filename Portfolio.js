function showProjectDetails(projectId) {
  // Hide all project details sections
  const projectDetailsSections = document.querySelectorAll(".project-details");
  projectDetailsSections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected project details section
  const selectedProjectSection = document.getElementById(projectId);
  if (selectedProjectSection) {
    selectedProjectSection.classList.add("active");
    selectedProjectSection.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");
  const lazyVideos = document.querySelectorAll("video.lazy");

  function lazyLoad() {
    lazyImages.forEach((img) => {
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.src = img.dataset.src;
        img.classList.add("loaded");
        img.classList.remove("lazy");
      }
    });

    lazyVideos.forEach((video) => {
      if (video.getBoundingClientRect().top < window.innerHeight) {
        video.querySelectorAll("source").forEach((source) => {
          source.src = source.dataset.src;
        });
        video.load();
        video.classList.add("loaded");
        video.classList.remove("lazy");
      }
    });
  }

  window.addEventListener("scroll", lazyLoad);
  lazyLoad(); // initial load
});
