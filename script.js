// Simulasikan loading sebelum konten muncul
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 1500);
});

// Drawer Sidebar Toggle
const btnHamburger = document.getElementById("btn-hamburger");
const btnCloseDrawer = document.getElementById("btn-close-drawer");
const drawerNav = document.getElementById("drawer-nav");
const drawerOverlay = document.getElementById("drawer-overlay");
function openDrawer() {
  drawerNav.classList.add("open");
  drawerOverlay.style.display = "block";
}
function closeDrawer() {
  drawerNav.classList.remove("open");
  drawerOverlay.style.display = "none";
}
btnHamburger.addEventListener("click", openDrawer);
btnCloseDrawer.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

// Settings Popover Toggle
const btnProfile = document.getElementById("btn-profile");
const popoverOverlay = document.getElementById("popover-overlay");
const settingsPopover = document.getElementById("settings-popover");
function togglePopover() {
  const isOpen = settingsPopover.classList.contains("open");
  if (isOpen) {
    settingsPopover.classList.remove("open");
    popoverOverlay.style.display = "none";
  } else {
    settingsPopover.classList.add("open");
    popoverOverlay.style.display = "block";
  }
}
btnProfile.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover();
});
popoverOverlay.addEventListener("click", togglePopover);
document.addEventListener("click", (e) => {
  if (!settingsPopover.contains(e.target) && !btnProfile.contains(e.target)) {
    settingsPopover.classList.remove("open");
    popoverOverlay.style.display = "none";
  }
});

// Dark Mode Toggle
const toggleDarkMode = document.getElementById("toggle-dark-mode");
toggleDarkMode.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("dark-theme");
  toggleDarkMode.classList.toggle("on");
});

// FAB & Modal Toggle
const fabCreate = document.getElementById("fab-create-post");
const modalOverlay = document.getElementById("modal-overlay");
const btnCloseModal = document.getElementById("btn-close-modal");
const cancelPost = document.getElementById("cancel-post");
function openModal() {
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
fabCreate.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
cancelPost.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
