/* =========================================================
   Petit Cocon — Espace Baby-sitter
   Navigation entre les vues du dashboard.
   Les vues seront enrichies au fur et à mesure.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll("[data-page]");
  const navButtons = document.querySelectorAll("[data-view]");
  const viewLinks = document.querySelectorAll("[data-view-link]");

  function showView(viewName) {
    pages.forEach((page) => {
      page.hidden = page.id !== viewName;
    });

    navButtons.forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.view === viewName
      );
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
    });
  });

  viewLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showView(link.dataset.viewLink);
    });
  });

  const logoutButton = document.querySelector(".logout");

  logoutButton?.addEventListener("click", () => {
    const confirmed = window.confirm("Voulez-vous vous déconnecter ?");

    if (confirmed) {
      console.log(
        "Déconnexion simulée — Supabase sera branché plus tard."
      );
    }
  });

  const notificationButton = document.querySelector(
    ".notification-button"
  );

  notificationButton?.addEventListener("click", () => {
    console.log(
      "Notifications — fonctionnalité à construire."
    );
  });
});