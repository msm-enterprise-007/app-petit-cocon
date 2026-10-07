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

    /* =========================================================
   PAGE RECHERCHE
========================================================= */

const searchInput = document.getElementById("babysitter-search");
const cards = document.querySelectorAll(".babysitter-card");
const filterButtons = document.querySelectorAll(".search-filter");
const noResults = document.getElementById("no-results");

let currentFilter = "all";

function filterBabysitters() {

    const search = searchInput.value.toLowerCase().trim();

    let visibleCards = 0;

    cards.forEach((card) => {

        const name = card.dataset.name;
        const location = card.dataset.location;
        const available = card.dataset.available;
        const experienced = card.dataset.experienced;

        let matchesSearch =
            name.includes(search) ||
            location.includes(search);

        let matchesFilter = true;

        switch (currentFilter) {

            case "available":
                matchesFilter = available === "true";
                break;

            case "nearby":
                matchesFilter = location.includes("15");
                break;

            case "experienced":
                matchesFilter = experienced === "true";
                break;

        }

        const show = matchesSearch && matchesFilter;

        card.style.display = show ? "" : "none";

        if (show) visibleCards++;

    });

    noResults.hidden = visibleCards !== 0;

}

searchInput?.addEventListener("input", filterBabysitters);

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterBabysitters();

    });

});

filterBabysitters();

/* =========================================================
   PAGE MES DEMANDES
========================================================= */

const requestFilters = document.querySelectorAll(".filter-button");
const requestCards = document.querySelectorAll(".request-card");

let currentStatus = "all";

function filterRequests() {

    requestCards.forEach((card) => {

        const status = card.dataset.status;

        const show =
            currentStatus === "all" ||
            status === currentStatus;

        card.style.display = show ? "" : "none";

    });

}

requestFilters.forEach((button) => {

    button.addEventListener("click", () => {

        requestFilters.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentStatus = button.dataset.status;

        filterRequests();

    });

});


/* =========================================================
   Actions des demandes
========================================================= */

document.querySelectorAll(".cancel-request").forEach((button) => {

    button.addEventListener("click", () => {

        if (confirm("Annuler cette demande ?")) {

            alert("La demande a été annulée.");

        }

    });

});


document.querySelectorAll(".message-request").forEach((button) => {

    button.addEventListener("click", () => {

        showView("messages");

    });

});


document.querySelectorAll(".contact-button").forEach((button) => {

    button.addEventListener("click", () => {

        showView("messages");

    });

});


document.querySelectorAll(".profile-button").forEach((button) => {

    button.addEventListener("click", () => {

        alert("Le profil complet sera disponible prochainement.");

    });

});


filterRequests();

});