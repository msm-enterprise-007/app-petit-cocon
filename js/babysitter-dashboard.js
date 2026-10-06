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

  /* ==========================================================
   PAGE : MES DEMANDES
========================================================== */

// Filtres
const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// Accepter une demande
document.querySelectorAll(".accept-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".request-card");

        const badge = card.querySelector(".pill");

        badge.textContent = "Acceptée";
        badge.classList.remove("pending");
        badge.classList.add("pill--success");

        button.disabled = true;
        button.textContent = "Acceptée";

    });

});


// Refuser une demande
document.querySelectorAll(".decline-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".request-card");

        const badge = card.querySelector(".pill");

        badge.textContent = "Refusée";
        badge.classList.remove("pending");

        badge.style.background = "#FBE5E5";
        badge.style.color = "#C0392B";

        button.disabled = true;
        button.textContent = "Refusée";

    });

});

/* ==========================================================
   PAGE : MESSAGES
========================================================== */

// Sélection des conversations
const conversationCards = document.querySelectorAll(".conversation-card");

conversationCards.forEach((card) => {

    card.addEventListener("click", () => {

        conversationCards.forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});


// Envoi d'un message
const chatForm = document.querySelector(".chat-input");

if (chatForm) {

    chatForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const input = chatForm.querySelector("input");

        const message = input.value.trim();

        if (message === "") return;

        const chatMessages = document.querySelector(".chat-messages");

        const bubble = document.createElement("div");

        bubble.className = "message sent";

        bubble.textContent = message;

        chatMessages.appendChild(bubble);

        chatMessages.scrollTop = chatMessages.scrollHeight;

        input.value = "";

    });

}

/* ==========================================================
   PAGE : MON PLANNING
========================================================== */

// Filtres du planning
const planningFilters = document.querySelectorAll(".planning-filter");

planningFilters.forEach((button) => {

    button.addEventListener("click", () => {

        planningFilters.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// Bouton "Voir la conversation"
document.querySelectorAll(".planning-actions .outline-button").forEach((button) => {

    button.addEventListener("click", () => {

        if (button.textContent.includes("conversation")) {

            showView("messages");

        } else {

            alert("Les détails de la garde seront disponibles dans une prochaine version.");

        }

    });

});


// Accepter une garde en attente
document.querySelectorAll("#planning .accept-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".planning-card");

        const badge = card.querySelector(".pill");

        badge.textContent = "Confirmée";

        badge.classList.remove("pending");

        badge.classList.add("pill--success");

        button.remove();

        const declineButton = card.querySelector(".decline-btn");

        if (declineButton) {

            declineButton.remove();

        }

    });

});


// Refuser une garde
document.querySelectorAll("#planning .decline-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".planning-card");

        const badge = card.querySelector(".pill");

        badge.textContent = "Refusée";

        badge.classList.remove("pending");

        badge.style.background = "#FBE5E5";
        badge.style.color = "#C0392B";

        button.remove();

        const acceptButton = card.querySelector(".accept-btn");

        if (acceptButton) {

            acceptButton.remove();

        }

    });

});

/* ==========================================================
   PAGE : MES DISPONIBILITÉS
========================================================== */

// Statut Disponible / Indisponible
const statusToggle = document.querySelector(".status-toggle");

if (statusToggle) {

    statusToggle.addEventListener("click", () => {

        if (statusToggle.classList.contains("active")) {

            statusToggle.classList.remove("active");

            statusToggle.textContent = "Indisponible";

            statusToggle.style.background = "#8C8177";

        } else {

            statusToggle.classList.add("active");

            statusToggle.textContent = "Disponible";

            statusToggle.style.background = "";

        }

    });

}


// Sélection des jours
const dayButtons = document.querySelectorAll(".day-btn");

dayButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

    });

});


// Enregistrer les disponibilités
const saveAvailability = document.querySelector(".save-availability");

if (saveAvailability) {

    saveAvailability.addEventListener("click", () => {

        alert("Vos disponibilités ont été enregistrées.");

    });

}

/* ==========================================================
   PAGE : MON PROFIL
========================================================== */

// Changer la photo
const changePhotoButton = document.querySelector(".change-photo");

if (changePhotoButton) {

    changePhotoButton.addEventListener("click", () => {

        alert("Le changement de photo sera disponible lors de la connexion à Supabase.");

    });

}


// Enregistrer le profil
const saveProfileButton = document.querySelector(".save-profile");

if (saveProfileButton) {

    saveProfileButton.addEventListener("click", () => {

        alert("Votre profil a été enregistré avec succès.");

    });

}


// Mise en évidence des champs modifiés
const profileInputs = document.querySelectorAll(
    "#profil input, #profil textarea"
);

profileInputs.forEach((input) => {

    input.addEventListener("input", () => {

        input.style.borderColor = "var(--pc-orange)";

    });

});


// Cases à cocher
const profileCheckboxes = document.querySelectorAll(
    "#profil input[type='checkbox']"
);

profileCheckboxes.forEach((checkbox) => {

    checkbox.addEventListener("change", () => {

        console.log(
            checkbox.parentElement.textContent.trim(),
            checkbox.checked
        );

    });

});

/* ==========================================================
   PAGE : PARAMÈTRES
========================================================== */

// Interrupteurs
const settingsSwitches = document.querySelectorAll(
    "#settings .switch input"
);

settingsSwitches.forEach((toggle) => {

    toggle.addEventListener("change", () => {

        console.log(
            "Préférence modifiée :",
            toggle.checked
        );

    });

});


// Boutons des paramètres
const settingsButtons = document.querySelectorAll(".settings-button");

settingsButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const action = button.textContent.trim();

        switch (action) {

            case "Modifier mon mot de passe":

                alert(
                    "Cette fonctionnalité sera connectée à Supabase prochainement."
                );

                break;

            case "Télécharger mes données":

                alert(
                    "Le téléchargement de vos données sera disponible prochainement."
                );

                break;

        }

    });

});


// Déconnexion
const logoutSettingsButton = document.querySelector(".logout-button");

if (logoutSettingsButton) {

    logoutSettingsButton.addEventListener("click", () => {

        const confirmLogout = confirm(
            "Voulez-vous vraiment vous déconnecter ?"
        );

        if (confirmLogout) {

            alert("Déconnexion effectuée.");

            // Plus tard :
            // supabase.auth.signOut();

        }

    });

}
});