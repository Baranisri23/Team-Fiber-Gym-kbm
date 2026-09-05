/**
 * TEAM FIBER FITNESS STUDIO - JAVASCRIPT CONTROLLER
 * Location: Kelambakkam, Chennai, Tamil Nadu
 * 
 * Centralized Configuration:
 * Easily update phone numbers, WhatsApp, addresses, prices, and links below.
 */

const GYM_CONFIG = {
  businessName: "Team Fiber Fitness Studio",
  tagline: "Build Your Stronger Self",
  
  // Contact details
  phoneDisplay: "+91 87549 55844",
  phoneRaw: "+918754955844",
  whatsAppNumber: "918754955844", // Digits with country code (no + or spaces)
  email: "info@teamfiberfitness.com",
  
  // Location
  address: "1/142 KSAP Complex, Opposite Lenskart, Kelambakkam, Chennai, Tamil Nadu 603103",
  googleMapsUrl: "https://maps.google.com/?cid=5551189701791964836",
  instagramUrl: "https://www.instagram.com/teamfiber_kelambakkam/",
  
  // Operating Hours
  hours: {
    weekdays: "Monday - Saturday: 5:30 AM - 10:00 PM",
    sunday: "Sunday: 6:00 AM - 1:00 PM"
  },

  // WhatsApp Pre-filled Messages
  messages: {
    freeTrial: "Hi Team Fiber Fitness Studio! I would like to book my FREE TRIAL session.",
    generalEnquiry: "Hi Team Fiber Fitness Studio! I would like to enquire about gym memberships.",
    planEnquiry: (planName) => `Hi Team Fiber Fitness Studio! I am interested in joining the ${planName} membership plan. Please share details.`
  },

  // High Definition Studio Gallery definition (12 Authentic Photos)
  gallery: [
    { src: "assets/images/team-fibre-kodungaiyur-chennai-gyms-4tn4zxa3nr.webp", title: "Hammer Strength Center", category: "Machines & Equipment" },
    { src: "assets/images/studio1774619067-k1ejztgjbpev3o7aufnb.jpg", title: "Free Weights & Dumbbells", category: "Free Weights" },
    { src: "assets/images/4830613_store_images_30.webp", title: "Main Workout Arena", category: "Gym Floor" },
    { src: "assets/images/4830613_store_images_24.webp", title: "Cable Crossover Station", category: "Machines & Equipment" },
    { src: "assets/images/4830613_store_images_25.webp", title: "Turf Track & Cardio Zone", category: "Cardio & Turf" },
    { src: "assets/images/4830613_store_images_26.webp", title: "Smith Machine & Leg Press", category: "Machines & Equipment" },
    { src: "assets/images/4830613_store_images_22.webp", title: "Championship Coaching", category: "Champions & Results" },
    { src: "assets/images/4830613_store_images_23.webp", title: "Wall of Real Transformations", category: "Champions & Results" },
    { src: "assets/images/4830613_store_images_32.webp", title: "Wall of Champions", category: "Champions & Results" },
    { src: "assets/images/4830613_store_images_19.webp", title: "Incline Bench & Plate Aisle", category: "Free Weights" },
    { src: "assets/images/unnamed.webp", title: "Hammer Strength Isolations", category: "Machines & Equipment" },
    { src: "assets/images/4830613_store_images_3.webp", title: "Member Success Wall", category: "Champions & Results" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initGalleryFilters();
  initLightbox();
  initEnquiryForm();
  initActionButtons();
});

/* ==========================================================================
   1. NAVBAR STICKY & ACTIVE STATE
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const backdrop = document.getElementById("navMenuBackdrop");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navMenu) return;

  const toggleMenu = () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("open");
    if (backdrop) backdrop.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("open") ? "hidden" : "";
  };

  const closeMenu = () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("open");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", toggleMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

/* ==========================================================================
   3. SCROLL SPY FOR NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   4. SCROLL REVEAL ANIMATION
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   5. GALLERY FILTERS & LIGHTBOX
   ========================================================================== */
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll(".gallery-filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      galleryItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
          item.style.animation = "fadeInGallery 0.4s ease forwards";
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

let currentImageIndex = 0;

function initLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxTag = document.getElementById("lightboxTag");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!lightbox || !galleryItems.length) return;

  const updateLightbox = (index) => {
    const items = document.querySelectorAll(".gallery-item");
    if (!items.length) return;
    currentImageIndex = (index + items.length) % items.length;
    const currentItem = items[currentImageIndex];
    const img = currentItem.querySelector("img");
    const title = currentItem.querySelector(".gallery-title");
    const subtitle = currentItem.querySelector(".gallery-subtitle");

    if (lightboxImg && img) {
      lightboxImg.style.opacity = "0.3";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "Studio Shot";
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = "1";
      };
    }
    if (lightboxCaption && title) lightboxCaption.textContent = title.textContent;
    if (lightboxTag && subtitle) lightboxTag.textContent = subtitle.textContent;
    if (lightboxCounter) lightboxCounter.textContent = `Photo ${currentImageIndex + 1} of ${items.length}`;
  };

  const openLightbox = (index) => {
    updateLightbox(index);
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.getAttribute("data-index") || "0", 10);
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    updateLightbox(currentImageIndex - 1);
  });
  if (nextBtn) nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    updateLightbox(currentImageIndex + 1);
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") updateLightbox(currentImageIndex - 1);
    if (e.key === "ArrowRight") updateLightbox(currentImageIndex + 1);
  });
}

/* ==========================================================================
   6. CONTACT & ENQUIRY FORM (WHATSAPP REDIRECTION)
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("formName");
    const phoneInput = document.getElementById("formPhone");
    const programInput = document.getElementById("formProgram");
    const messageInput = document.getElementById("formMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const program = programInput ? programInput.value : "General Fitness";
    const message = messageInput ? messageInput.value.trim() : "None";

    if (!name || !phone) {
      showToast("Please enter your name and contact phone number.", "warning");
      return;
    }

    // Build pre-formatted WhatsApp text
    const textLines = [
      `🏋️‍♂️ *NEW ENQUIRY - TEAM FIBER FITNESS STUDIO*`,
      `---------------------------------------`,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
      `🎯 *Program:* ${program}`,
      `💬 *Message:* ${message ? message : 'Looking for membership & trial details'}`,
      `---------------------------------------`,
      `Sent via Team Fiber Website`
    ];

    const encodedText = encodeURIComponent(textLines.join("\n"));
    const whatsAppUrl = `https://wa.me/${GYM_CONFIG.whatsAppNumber}?text=${encodedText}`;

    showToast("Opening WhatsApp to send your enquiry...", "success");

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsAppUrl, "_blank");
      form.reset();
    }, 600);
  });
}

/* ==========================================================================
   7. INTERACTIVE ACTION BUTTONS (CALL, WHATSAPP, PLANS)
   ========================================================================== */
function initActionButtons() {
  // Free Trial buttons
  const trialButtons = document.querySelectorAll("[data-action='free-trial']");
  trialButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = `https://wa.me/${GYM_CONFIG.whatsAppNumber}?text=${encodeURIComponent(GYM_CONFIG.messages.freeTrial)}`;
      window.open(url, "_blank");
    });
  });

  // Plan Join buttons
  const planButtons = document.querySelectorAll("[data-action='join-plan']");
  planButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const planName = btn.getAttribute("data-plan") || "Gym Membership";
      const message = GYM_CONFIG.messages.planEnquiry(planName);
      const url = `https://wa.me/${GYM_CONFIG.whatsAppNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  });

  // Call buttons
  const callButtons = document.querySelectorAll("[data-action='call']");
  callButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `tel:${GYM_CONFIG.phoneRaw}`;
    });
  });

  // Maps buttons
  const mapButtons = document.querySelectorAll("[data-action='maps']");
  mapButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(GYM_CONFIG.googleMapsUrl, "_blank");
    });
  });

  // WhatsApp general buttons
  const waButtons = document.querySelectorAll("[data-action='whatsapp']");
  waButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = `https://wa.me/${GYM_CONFIG.whatsAppNumber}?text=${encodeURIComponent(GYM_CONFIG.messages.generalEnquiry)}`;
      window.open(url, "_blank");
    });
  });
}

/* ==========================================================================
   8. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = "info") {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
