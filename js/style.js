/**
 * ============================================================================
 * AGUNG RIZKI SAPUTRA — CLEAN WHITE INTERACTIVE PORTFOLIO
 * High-performance, error-free interactive logic with Scroll Expansion
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------------------
  // 1. Navigation & Scrollspy
  // --------------------------------------------------------------------------
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id], header[id='home']");

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Scrollspy to highlight active nav link
  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}`) {
              link.classList.add("is-active");
            } else {
              link.classList.remove("is-active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileBackdrop = document.getElementById("mobile-backdrop");

  const setMobileMenuOpen = (isOpen) => {
    if (!mobileMenu) return;
    if (isOpen) {
      mobileMenu.classList.add("mobile-menu-open");
      if (mobileBackdrop) mobileBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    } else {
      mobileMenu.classList.remove("mobile-menu-open");
      if (mobileBackdrop) mobileBackdrop.classList.remove("open");
      document.body.style.overflow = "";
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu && mobileMenu.classList.contains("mobile-menu-open");
      setMobileMenuOpen(!isOpen);
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => setMobileMenuOpen(false));
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", () => setMobileMenuOpen(false));
  }

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false);
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 3. Dynamic Headline Ticker
  // --------------------------------------------------------------------------
  const dynamicText = document.getElementById("dynamic-text");
  if (dynamicText) {
    const roles = [
      "Web Developer",
      "UI/UX Designer",
      "Creative Frontend Engineer",
      "Informatics Graduate"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 90;

    const typeRole = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 85;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2200; // Pause when word is complete
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing new word
      }

      setTimeout(typeRole, typeSpeed);
    };

    typeRole();
  }

  // --------------------------------------------------------------------------
  // 4. About Me Scroll Expansion Media Engine (Inspired by ScrollExpandMedia)
  // --------------------------------------------------------------------------
  const aboutSection = document.getElementById("about");
  const scrollExpandMedia = document.getElementById("scrollExpandMedia");
  const floatingBadgeTop = document.getElementById("blobBadgeTop");
  const floatingBadgeBottom = document.getElementById("blobBadgeBottom");

  if (aboutSection && scrollExpandMedia) {
    let ticking = false;

    const updateScrollExpansion = () => {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start calculating when the section approaches viewport center
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.15;

      const current = startTrigger - rect.top;
      const total = startTrigger - endTrigger;
      let progress = current / total;
      progress = Math.max(0, Math.min(1, progress));

      const isMobile = window.innerWidth < 768;
      // Controlled progressive scale: from 0.90 to 1.14 on desktop, 0.96 to 1.05 on mobile
      const minScale = isMobile ? 0.96 : 0.90;
      const maxScale = isMobile ? 1.05 : 1.14;
      const currentScale = minScale + (maxScale - minScale) * progress;

      // Apply transform smoothly
      scrollExpandMedia.style.transform = `scale(${currentScale.toFixed(3)}) translateZ(0)`;

      // Subtle parallax for floating badges
      if (floatingBadgeTop) {
        const moveX = isMobile ? progress * 6 : progress * 16;
        const moveY = isMobile ? -progress * 4 : -progress * 12;
        floatingBadgeTop.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      if (floatingBadgeBottom) {
        const moveX = isMobile ? -progress * 6 : -progress * 14;
        const moveY = isMobile ? progress * 5 : progress * 10;
        floatingBadgeBottom.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }

      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollExpansion);
        ticking = true;
      }
    }, { passive: true });

    updateScrollExpansion();
  }

  // --------------------------------------------------------------------------
  // 5. Project Modal Controller
  // --------------------------------------------------------------------------
  const modal = document.getElementById("modal");
  const modalDialog = modal && modal.querySelector(".modal-dialog");
  const modalPreview = document.getElementById("modalPreview");
  const modalMockupStage = modalPreview && modalPreview.querySelector(".modal-mockup-stage");
  const modalImage = document.getElementById("modalImage");
  const modalMockupImages = document.querySelectorAll(".modal-mockup-window img");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalCategory = document.getElementById("modalCategory");
  const modalTech = document.getElementById("modalTech");
  const modalGithubBtn = document.getElementById("modalGithubBtn");
  const modalGithubText = document.getElementById("modalGithubText");
  const modalLiveBtn = document.getElementById("modalLiveBtn");
  const modalLiveText = document.getElementById("modalLiveText");
  const closeModalBtn = document.getElementById("closeModal");


  const openProjectModal = (button) => {
    if (!modal) return;
    const title = button.getAttribute("data-title") || "Project Showcase";
    const desc = button.getAttribute("data-description") || "";
    const image = button.getAttribute("data-image") || "";
    const category = button.getAttribute("data-category") || "Featured Project";
    const tech = button.getAttribute("data-tech") || "";
    const mockupLeft = button.getAttribute("data-mockup-left");
    const mockupRight = button.getAttribute("data-mockup-right");
    const isMobileMockup = button.getAttribute("data-mockup-type") === "mobile";
    const github = button.getAttribute("data-github");
    const live = button.getAttribute("data-live");
    const githubLabel = button.getAttribute("data-github-label") || "View Repository";
    const liveLabel = button.getAttribute("data-live-label") || (category.toLowerCase().includes("figma") ? "Open Figma Prototype" : "Live Preview / Deployed");

    if (modalTitle) modalTitle.textContent = title;
    if (modalDescription) modalDescription.textContent = desc;
    if (modalImage) {
      modalImage.src = image;
      modalImage.alt = title;
    }
    if (modalPreview) {
      const hasMockup = Boolean(mockupLeft && mockupRight);
      modalPreview.classList.toggle("has-mockup", hasMockup);
      modalPreview.classList.toggle("has-mobile-mockup", hasMockup && isMobileMockup);

      if (hasMockup) {
        const mockupScreens = [
          { image: mockupLeft, label: `${title} screen preview` },
          { image: mockupRight, label: `${title} screen preview` },
          { image, label: `${title} screen preview` }
        ];

        if (modalMockupStage) {
          modalMockupStage.setAttribute("aria-label", `${title} screen previews`);
        }
        modalMockupImages.forEach((screen, index) => {
          const mockupScreen = mockupScreens[index];
          if (!mockupScreen) return;
          screen.src = mockupScreen.image;
          screen.alt = mockupScreen.label;
        });
      } else {
        if (modalMockupStage) {
          modalMockupStage.setAttribute("aria-label", "Project interface previews");
        }
        modalMockupImages.forEach((screen) => {
          screen.removeAttribute("src");
          screen.alt = "";
        });
      }
    }
    if (modalCategory) modalCategory.textContent = category;
    if (modalTech) modalTech.textContent = tech;

    // Wire GitHub Source Link — determine icon dynamically
    if (modalGithubBtn) {
      if (github) {
        modalGithubBtn.href = github;
        modalGithubBtn.style.display = "inline-flex";
        if (modalGithubText) modalGithubText.textContent = githubLabel;
        // Update icon: use GitHub icon always for github links
        const ghIcon = modalGithubBtn.querySelector("i");
        if (ghIcon) ghIcon.className = "fab fa-github text-sm";
      } else {
        modalGithubBtn.style.display = "none";
      }
    }

    // Wire Live Deployed / Figma / APK Link — choose icon dynamically
    if (modalLiveBtn) {
      if (live) {
        modalLiveBtn.href = live;
        modalLiveBtn.style.display = "inline-flex";
        if (modalLiveText) modalLiveText.textContent = liveLabel;
        // Pick icon based on link type
        const liveIcon = modalLiveBtn.querySelector("i");
        if (liveIcon) {
          if (live.includes("figma.com")) {
            liveIcon.className = "fab fa-figma text-[11px]";
          } else if (liveLabel.toLowerCase().includes("apk") || liveLabel.toLowerCase().includes("release") || liveLabel.toLowerCase().includes("download")) {
            liveIcon.className = "fas fa-download text-[11px]";
          } else {
            liveIcon.className = "fas fa-arrow-up-right-from-square text-[11px]";
          }
        }
      } else {
        modalLiveBtn.style.display = "none";
      }
    }

    if (modalDialog) modalDialog.scrollTop = 0;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".project-view-trigger, .eye-icon, .project-detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(btn);
    });
  });

  const featureCards = document.querySelectorAll(".project-feature-card");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reducedMotion.matches) {
    const enableMockupTilt = (card) => {
      card.addEventListener("pointermove", (event) => {
        if (event.pointerType === "touch") return;

        const bounds = card.getBoundingClientRect();
        const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
        const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

        card.style.setProperty("--mockup-tilt-x", `${-verticalPosition * 5}deg`);
        card.style.setProperty("--mockup-tilt-y", `${horizontalPosition * 6}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--mockup-tilt-x");
        card.style.removeProperty("--mockup-tilt-y");
      });
    };

    featureCards.forEach(enableMockupTilt);
    if (modalPreview) enableMockupTilt(modalPreview);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeProjectModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Scroll to Top Floating Button
  // --------------------------------------------------------------------------
  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    const handleScrollTopVisibility = () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScrollTopVisibility, { passive: true });
    handleScrollTopVisibility();

    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Section Reveal on Scroll
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    "header#home, main > section, main.archive-page-main > .border-b, " +
    "main.archive-page-main > .archive-featured-layout, " +
    "main.archive-page-main > .archive-project-grid, " +
    ".skills-category-card, .timeline-item, .contact-card-main, " +
    ".social-action-card, .project-card, .reveal-on-scroll"
  );
  if (revealElements.length > 0 && (reducedMotion.matches || !("IntersectionObserver" in window))) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  } else if (revealElements.length > 0) {
    const revealDelays = new Map();
    revealElements.forEach((el) => {
      const parent = el.parentElement;
      const siblingIndex = revealDelays.get(parent) || 0;
      revealDelays.set(parent, siblingIndex + 1);
      el.style.setProperty("--reveal-delay", `${(siblingIndex % 4) * 75}ms`);
      el.classList.add("reveal-on-scroll");
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // --------------------------------------------------------------------------
  // 8. All Projects Interactive Filter (Optimized for Pinterest Masonry)
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".masonry-item, .archive-card");
  const archiveFeaturedLayout = document.querySelector(".archive-featured-layout");
  const archiveProjectGrid = document.querySelector(".archive-project-grid");
  const filterHideTimers = new WeakMap();
  if (filterButtons.length > 0 && projectItems.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const targetCategory = btn.getAttribute("data-filter");
        if (archiveFeaturedLayout) {
          archiveFeaturedLayout.classList.toggle("is-filtered-web", targetCategory === "web");
          archiveFeaturedLayout.classList.toggle("is-filtered-mobile", targetCategory === "mobile");
          archiveFeaturedLayout.classList.toggle("is-filtered-design", targetCategory === "design");
        }
        if (archiveProjectGrid) {
          archiveProjectGrid.classList.toggle("is-filtered", targetCategory !== "all");
        }
        projectItems.forEach((item) => {
          const pendingHide = filterHideTimers.get(item);
          if (pendingHide) {
            clearTimeout(pendingHide);
            filterHideTimers.delete(item);
          }

          const itemCategory = item.getAttribute("data-category");
          if (targetCategory === "all" || itemCategory === targetCategory) {
            item.classList.remove("is-filtered-out");
            item.style.display = "";
            requestAnimationFrame(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0) scale(1)";
            });
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(12px) scale(0.97)";
            const hideTimer = setTimeout(() => {
              item.classList.add("is-filtered-out");
              item.style.display = "none";
              filterHideTimers.delete(item);
            }, 250);
            filterHideTimers.set(item, hideTimer);
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8b. Hero Arch Portal 3D Parallax Tilt Motion
  // --------------------------------------------------------------------------
  const heroPhotoStage = document.getElementById("heroPhotoStage");
  const heroArchWrapper = document.getElementById("heroArchWrapper") || document.getElementById("heroFacetedWrapper");
  if (heroPhotoStage && heroArchWrapper) {
    heroPhotoStage.addEventListener("mousemove", (e) => {
      const rect = heroPhotoStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / (rect.height / 2)) * 8;
      const rotateY = (x / (rect.width / 2)) * 8;
      heroArchWrapper.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px)`;
    });

    heroPhotoStage.addEventListener("mouseleave", () => {
      heroArchWrapper.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  }

  // --------------------------------------------------------------------------
  // 8c. Interactive Constellation ("Rasi Bintang") Engine (Supports Multi-Grid Sections)
  // --------------------------------------------------------------------------
  const setupConstellationEngine = (canvas, container) => {
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let stars = [];
    let shootingStars = [];
    let mouse = { x: null, y: null, radius: 170 };
    let isVisible = true;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    class CelestialStar {
      constructor() {
        this.reset(true);
      }
      reset(randomPos = false) {
        this.x = randomPos ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
        this.y = randomPos ? Math.random() * height : Math.random() * height;
        this.baseRadius = Math.random() * 1.6 + 1.1;
        this.radius = this.baseRadius;
        this.vx = (Math.random() - 0.5) * 0.38;
        this.vy = (Math.random() - 0.5) * 0.38;
        this.baseAlpha = Math.random() * 0.45 + 0.35;
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.025 + 0.012;
        this.twinklePhase = Math.random() * Math.PI * 2;
        const colors = [
          "52, 87, 213",   // Signature cobalt blue
          "124, 58, 237",  // Violet
          "56, 189, 248",  // Cyan
          "79, 70, 229"    // Indigo
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.twinklePhase += this.twinkleSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.twinklePhase) * 0.22;
        this.radius = this.baseRadius + Math.sin(this.twinklePhase * 1.4) * 0.35;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -15) this.x = width + 15;
        if (this.x > width + 15) this.x = -15;
        if (this.y < -15) this.y = height + 15;
        if (this.y > height + 15) this.y = -15;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius && dist > 1) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 1.25;
            this.y += (dy / dist) * force * 1.25;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.6, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${Math.max(0.12, this.alpha)})`;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.shadowBlur = this.radius * 3.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * (width * 0.7);
        this.y = Math.random() * (height * 0.4);
        this.length = Math.random() * 85 + 75;
        this.speed = Math.random() * 8 + 8;
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.opacity = 1;
        this.fade = Math.random() * 0.02 + 0.015;
        this.active = true;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= this.fade;
        if (this.opacity <= 0 || this.x > width || this.y > height) {
          this.active = false;
        }
      }
      draw() {
        if (!this.active || this.opacity <= 0) return;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, `rgba(52, 87, 213, 0)`);
        grad.addColorStop(0.7, `rgba(52, 87, 213, ${0.45 * this.opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${0.95 * this.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.0;
        ctx.shadowColor = "rgba(52, 87, 213, 0.9)";
        ctx.shadowBlur = 9;
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      stars = [];
      const starDensity = window.innerWidth < 768 ? 24000 : 16000;
      const count = Math.min(85, Math.max(30, Math.floor((width * height) / starDensity)));
      for (let i = 0; i < count; i++) {
        stars.push(new CelestialStar());
      }
    };

    const drawWeb = () => {
      const maxDist = 118;
      const count = stars.length;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.32;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(52, 87, 213, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - stars[i].x;
          const dy = mouse.y - stars[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.58;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(stars[i].x, stars[i].y);
            ctx.strokeStyle = `rgba(52, 87, 213, ${alpha})`;
            ctx.lineWidth = 1.15;
            ctx.stroke();
          }
        }
      }
    };

    let nextMeteorTime = Date.now() + 2200;

    const animate = () => {
      if (!isVisible) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      drawWeb();

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
      }

      if (Date.now() > nextMeteorTime) {
        shootingStars.push(new ShootingStar());
        nextMeteorTime = Date.now() + Math.random() * 4500 + 3500;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        shootingStars[i].update();
        shootingStars[i].draw();
        if (!shootingStars[i].active) {
          shootingStars.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);

    container.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    container.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    if ("IntersectionObserver" in window && container !== document.body) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      observer.observe(container);
    }

    init();
    requestAnimationFrame(animate);
  };

  // Initialize Constellation Engine on Home, Skills, and Contact (All Grid Sections)
  const heroCanvas = document.getElementById("constellationCanvas");
  const heroSection = document.getElementById("home") || document.body;
  if (heroCanvas) {
    setupConstellationEngine(heroCanvas, heroSection);
  }

  const skillsCanvas = document.getElementById("skillsConstellationCanvas");
  const skillsSection = document.getElementById("skills");
  if (skillsCanvas && skillsSection) {
    setupConstellationEngine(skillsCanvas, skillsSection);
  }

  const contactCanvas = document.getElementById("contactConstellationCanvas");
  const contactSection = document.getElementById("contact");
  if (contactCanvas && contactSection) {
    setupConstellationEngine(contactCanvas, contactSection);
  }

  const archiveCanvas = document.getElementById("archiveConstellationCanvas");
  const archiveSection = document.querySelector(".archive-page-main");
  if (archiveCanvas && archiveSection) {
    setupConstellationEngine(archiveCanvas, archiveSection);
  }

  // --------------------------------------------------------------------------
  // 9. Particle Canvas for Intro Page (index.html) — Tuned for Clean White
  // --------------------------------------------------------------------------
  const particleCanvas = document.getElementById("particleCanvas");
  if (particleCanvas) {
    const ctx = particleCanvas.getContext("2d");
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    const resizeCanvas = () => {
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class MinimalDust {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height;
        this.size = Math.random() * 1.6 + 0.6;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.35 + 0.1;
        // Tuned for clean white: subtle cobalt (#3457D5) and dark slate (#171717)
        this.color = Math.random() > 0.4 ? "52, 87, 213" : "100, 116, 139";
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > particleCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > particleCanvas.height) this.vy *= -1;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 1.8;
            this.y -= (dy / distance) * force * 1.8;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push(new MinimalDust());
      }
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();
  }
});

// ----------------------------------------------------------------------------
// 10. Global Copy To Clipboard Utility
// ----------------------------------------------------------------------------
function copyToClipboard(text, btnElement) {
  if (!navigator.clipboard) {
    fallbackCopyText(text, btnElement);
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    showCopiedFeedback(btnElement);
  }).catch((err) => {
    console.error("Clipboard copy failed, using fallback:", err);
    fallbackCopyText(text, btnElement);
  });
}

function fallbackCopyText(text, btnElement) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showCopiedFeedback(btnElement);
  } catch (err) {
    console.error("Fallback execCommand failed:", err);
  }
  document.body.removeChild(textArea);
}

function showCopiedFeedback(btnElement) {
  if (!btnElement) return;
  const originalHTML = btnElement.innerHTML;
  btnElement.innerHTML = `<i class="fas fa-check text-emerald-600"></i> <span class="text-emerald-700 font-bold">Copied!</span>`;
  btnElement.style.borderColor = "#10b981";
  btnElement.style.backgroundColor = "#ecfdf5";

  setTimeout(() => {
    btnElement.innerHTML = originalHTML;
    btnElement.style.borderColor = "";
    btnElement.style.backgroundColor = "";
  }, 2200);
}