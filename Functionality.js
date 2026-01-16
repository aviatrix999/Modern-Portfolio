const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');

  // Toggle mobile menu with smooth slide
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px") {
      mobileMenu.style.maxHeight = "0px";
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    }
  });

  // Close mobile menu automatically when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.maxHeight = "0px";
    });
  });

  // Sync mobile theme toggle
  mobileThemeToggle.addEventListener('click', () => {
    themeToggle.click();
  });



const toggleBtn = document.getElementById("themeToggle");
      const root = document.documentElement;

      function setTheme(theme) {
        if (theme === "light") {
          root.classList.remove("dark");
          toggleBtn.innerHTML = '<i data-lucide="sun" class="w-5 h-5"></i>';
        } else {
          root.classList.add("dark");
          toggleBtn.innerHTML = '<i data-lucide="moon" class="w-5 h-5"></i>';
        }
        lucide.createIcons();
        localStorage.theme = theme;
      }

      setTheme(localStorage.theme || "dark");

      toggleBtn.addEventListener("click", () => {
        setTheme(root.classList.contains("dark") ? "light" : "dark");
      });

      const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach((el) => {
      const revealTop = el.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load


  const birthDate = new Date(2006, 11, 12, 0, 0, 0, 0);

  function updateAge() {
    const now = new Date();
    let diff = now - birthDate;

    const ms = diff % 1000;
    diff = Math.floor(diff / 1000);

    const sec = diff % 60;
    diff = Math.floor(diff / 60);

    const min = diff % 60;
    diff = Math.floor(diff / 60);

    const hrs = diff % 24;
    diff = Math.floor(diff / 24);

    const totalDays = diff;

    const years = Math.floor(totalDays / 365.2422);
    const daysAfterYears = totalDays % 365.2422;

    const months = Math.floor(daysAfterYears / 30.4369);
    const days = Math.floor(daysAfterYears % 30.4369);

    document.getElementById("ageTimer").innerText =
      `Been here for ${years}.${months}${days}` +
      `${hrs}${min}${sec}${ms.toString().padStart(3, "0")} years`;
  }

  updateAge();
  setInterval(updateAge, 10);
