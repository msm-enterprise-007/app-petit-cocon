/* =========================================================
   Petit Cocon — Espace Parent
   Navigation entre les vues du dashboard
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll("[data-page]");
    const navButtons = document.querySelectorAll("[data-view]");
    const viewLinks = document.querySelectorAll("[data-view-link]");

    /* ==========================================
       Affichage des vues
    ========================================== */

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

    /* ==========================================
       Navigation principale
    ========================================== */

    navButtons.forEach((button) => {

        button.addEventListener("click", () => {

            showView(button.dataset.view);

        });

    });

    /* ==========================================
       Liens internes
    ========================================== */

    viewLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            showView(link.dataset.viewLink);

        });

    });

    /* ==========================================
       Notifications (démo)
    ========================================== */

    const notificationButton = document.querySelector(
        ".notification-button"
    );

    notificationButton?.addEventListener("click", () => {

        alert(
            "Les notifications seront bientôt disponibles."
        );

    });

    /* ==========================================
       Déconnexion (démo)
    ========================================== */

    const logoutButton = document.querySelector(".logout");

    logoutButton?.addEventListener("click", () => {

        const confirmed = confirm(
            "Voulez-vous vraiment vous déconnecter ?"
        );

        if (confirmed) {

            alert(
                "Déconnexion simulée.\n\nSupabase sera connecté ultérieurement."
            );

            // Plus tard :
            // supabase.auth.signOut();

        }

    });

});