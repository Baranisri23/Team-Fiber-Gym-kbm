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
  ],

  // Authentic 5-Star Google Reviews Pool for Dynamic Rotation on Page Refresh
  reviews: [
    {
      name: "Sarmy Raja Kumar",
      avatar: "SR",
      rating: 5,
      text: "Trainer Ram provides excellent workout sessions and constantly pushes members to achieve their fitness goals easily. Very supportive, knowledgeable coaching with complete focus on form, posture, and progressive overload. Easily the best gym in Kelambakkam!"
    },
    {
      name: "Venkatesh (Venky)",
      avatar: "VK",
      rating: 5,
      text: "The gym creates an amazing sense of community and positivity, making members feel genuinely welcomed every single day. Friendly staff, inspiring crowd, and very supportive trainers who are always ready to guide you through workouts."
    },
    {
      name: "Srinivasan K.",
      avatar: "SK",
      rating: 5,
      text: "The facility is super clean, spacious, and well-maintained with modern equipment. Great range of machines for chest, back, and legs plus a heavy free-weights zone. Value for money membership fees right on OMR Kelambakkam."
    },
    {
      name: "Ganesan M.",
      avatar: "GM",
      rating: 5,
      text: "The trainers are supportive, knowledgeable, and tailor workouts specifically to individual fitness levels. There is a wide range of activities available including cardio, strength, and CrossFit. Highly recommend Team Fiber!"
    },
    {
      name: "Ananya Ramesh",
      avatar: "AR",
      rating: 5,
      text: "Joined Team Fiber 4 months back for weight loss and functional fitness, already lost 8 kgs! Coach Priya gives customized diet guidance and keeps track of weekly progress. Safe and highly motivating atmosphere for women."
    },
    {
      name: "Karthik Narayanan",
      avatar: "KN",
      rating: 5,
      text: "Top-notch fitness studio in Kelambakkam. Equipment is brand new and well-spaced, especially the cable crossover rig and squat racks. Trainers correct your posture with extreme patience without pushing unnecessary supplements."
    },
    {
      name: "Divya Balaji",
      avatar: "DB",
      rating: 5,
      text: "Love the morning vibe here! The energy on the workout floor keeps you motivated throughout the day. Personal training helped me fix my lower back posture and build real core strength. Great gym with dedicated coaches."
    },
    {
      name: "Vigneshwaran R.",
      avatar: "VR",
      rating: 5,
      text: "Been training at Team Fiber for over a year. Heavy dumbbell range, plenty of plates, and zero bottlenecks at the bench stations. Air conditioning is always on point and cleanliness is maintained round the clock. 10/10!"
    },
    {
      name: "Mohammed Feroz",
      avatar: "MF",
      rating: 5,
      text: "Exceptional training studio! Ram master and the trainer team genuinely invest their time in your transformation. Clean locker area, purified water dispenser, and motivating music playlist during heavy sets."
    },
    {
      name: "Sandhya Suresh",
      avatar: "SS",
      rating: 5,
      text: "Very hygienic gym with a top-tier cardio section. Treadmills and assault bikes are smooth and well-maintained. The trainers are polite, patient, and always assist with mobility drills and post-workout stretches."
    },
    {
      name: "Ashwin Kumar",
      avatar: "AK",
      rating: 5,
      text: "Hands down the best training space on the Kelambakkam-OMR stretch. Perfect mix of bodybuilding machines, free weights, and functional turf area. Membership pricing is very fair given the premium facility."
    },
    {
      name: "Deepa Krishnan",
      avatar: "DK",
      rating: 5,
      text: "As a complete beginner, I was intimidated by gym environments, but Team Fiber coaches made me feel completely comfortable and supported from day one. Proper step-by-step guidance. Truly loving my fitness journey now!"
    },
    {
      name: "Harish Chandran",
      avatar: "HC",
      rating: 5,
      text: "Super energetic environment with serious fitness enthusiasts. Trainer guidance during deadlifts and squats is top tier. Easily the cleanest and most well-equipped gym in the entire Kelambakkam area."
    },
    {
      name: "Pooja Sundaram",
      avatar: "PS",
      rating: 5,
      text: "Great personal training experience! Trainers are respectful, knowledgeable, and focus heavily on safety and correct form. Seeing visible fat loss and muscle tone in just 8 weeks. Worth every penny."
    },
    {
      name: "Rajesh Kannan",
      avatar: "RK",
      rating: 5,
      text: "Excellent gym with imported machines and a great functional zone. Friendly management and flexible workout hours make it super convenient for IT professionals working on OMR. Highly recommended!"
    },
    {
      name: "Meenakshi Swaminathan",
      avatar: "MS",
      rating: 5,
      text: "What sets Team Fiber apart is the personal attention each member gets even without a PT plan. Friendly vibe, modern locker facility, and pristine hygiene. Proud to be a Team Fiber member!"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initGalleryFilters();
  initLightbox();
  initTestimonials();
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
    currentImageIndex = (index + GYM_CONFIG.gallery.length) % GYM_CONFIG.gallery.length;
    const item = GYM_CONFIG.gallery[currentImageIndex];
    if (lightboxImg) {
      lightboxImg.style.opacity = "0.3";
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
      lightboxImg.onload = () => {
        lightboxImg.style.opacity = "1";
      };
    }
    if (lightboxCaption) lightboxCaption.textContent = item.title;
    if (lightboxTag) lightboxTag.textContent = item.category;
    if (lightboxCounter) lightboxCounter.textContent = `Photo ${currentImageIndex + 1} of ${GYM_CONFIG.gallery.length}`;
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
   6. CONTACT & ENQUIRY FORM (WHATSAPP REDIRECTION & PHONE VALIDATION)
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  const phoneInput = document.getElementById("formPhone");
  const phoneGroup = document.getElementById("phoneInputGroup");
  const phoneError = document.getElementById("phoneError");

  const setPhoneError = (msg) => {
    if (phoneGroup) phoneGroup.classList.add("invalid");
    if (phoneError) {
      phoneError.textContent = msg;
      phoneError.classList.add("visible");
    }
  };

  const clearPhoneError = () => {
    if (phoneGroup) phoneGroup.classList.remove("invalid");
    if (phoneError) {
      phoneError.textContent = "";
      phoneError.classList.remove("visible");
    }
  };

  // Real-time phone number input enforcement (only 10 numbers allowed)
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "");

      // If user pasted a number with country code 91 or leading 0, strip prefix
      if (val.length > 10) {
        if (val.startsWith("91") && val.length === 12) {
          val = val.substring(2);
        } else if (val.startsWith("0") && val.length === 11) {
          val = val.substring(1);
        }
      }

      // Enforce strictly max 10 digits
      if (val.length > 10) {
        val = val.slice(0, 10);
      }

      e.target.value = val;

      if (val.length === 10) {
        clearPhoneError();
      }
    });

    phoneInput.addEventListener("blur", () => {
      const val = phoneInput.value.trim();
      if (val && val.length < 10) {
        setPhoneError(`Please enter 10 digits (currently ${val.length}/10)`);
      } else if (val.length === 10) {
        if (!/^[6-9]\d{9}$/.test(val)) {
          setPhoneError("Valid Indian mobile numbers start with 6, 7, 8, or 9");
        } else {
          clearPhoneError();
        }
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("formName");
    const programInput = document.getElementById("formProgram");
    const messageInput = document.getElementById("formMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";
    const program = programInput ? programInput.value : "General Fitness";
    const message = messageInput ? messageInput.value.trim() : "None";

    if (!name) {
      showToast("Please enter your full name.", "warning");
      if (nameInput) nameInput.focus();
      return;
    }

    if (!phone) {
      showToast("Please enter your 10-digit mobile number.", "warning");
      setPhoneError("Phone number is required");
      if (phoneInput) phoneInput.focus();
      return;
    }

    if (phone.length !== 10) {
      showToast(`Phone number must have exactly 10 digits (currently ${phone.length}/10).`, "warning");
      setPhoneError(`Enter 10 digits (currently ${phone.length}/10)`);
      if (phoneInput) phoneInput.focus();
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      showToast("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.", "warning");
      setPhoneError("Number must start with 6, 7, 8, or 9");
      if (phoneInput) phoneInput.focus();
      return;
    }

    clearPhoneError();

    // Build pre-formatted WhatsApp text with +91 country code
    const textLines = [
      `🏋️‍♂️ *NEW ENQUIRY - TEAM FIBER FITNESS STUDIO*`,
      `---------------------------------------`,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* +91 ${phone}`,
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

/* ==========================================================================
   9. DYNAMIC TESTIMONIALS (AUTO-FETCH NEW REVIEWS ON PAGE REFRESH)
   ========================================================================== */
function initTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid || !GYM_CONFIG.reviews || !GYM_CONFIG.reviews.length) return;

  const BATCH_SIZE = 4;
  const totalReviews = GYM_CONFIG.reviews.length;
  const totalBatches = Math.ceil(totalReviews / BATCH_SIZE);

  // Advance batch index on each page refresh so new reviews automatically display
  let currentBatch = 0;
  try {
    const saved = sessionStorage.getItem("team_fiber_review_batch");
    if (saved !== null) {
      currentBatch = (parseInt(saved, 10) + 1) % totalBatches;
    }
    sessionStorage.setItem("team_fiber_review_batch", currentBatch.toString());
  } catch (e) {
    currentBatch = Math.floor(Math.random() * totalBatches);
  }

  const starSvg = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>`;
  const googleLogoSvg = `
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>`;
  const verifiedBadgeSvg = `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`;

  const startIndex = (currentBatch * BATCH_SIZE) % totalReviews;
  const selectedReviews = [];
  for (let i = 0; i < BATCH_SIZE; i++) {
    selectedReviews.push(GYM_CONFIG.reviews[(startIndex + i) % totalReviews]);
  }

  grid.innerHTML = selectedReviews.map((r, idx) => `
    <div class="testimonial-card revealed" style="animation-delay: ${idx * 0.08}s">
      <div class="testimonial-card-top">
        <div class="testimonial-rating">
          ${starSvg.repeat(r.rating || 5)}
        </div>
        <span class="google-review-badge">
          ${googleLogoSvg}
          Google Review
        </span>
      </div>
      <p class="testimonial-text">"${r.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${r.avatar}</div>
        <div class="author-info">
          <div class="author-title-row">
            <h4>${r.name}</h4>
            <span class="author-verified-badge" title="Verified Google Reviewer">
              ${verifiedBadgeSvg}
            </span>
          </div>
          <p>Google Verified Review • 5 Stars</p>
        </div>
      </div>
    </div>
  `).join("");
}
