/**
 * Naga Lakshmi - Digital Creator Portfolio
 * Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close mobile menu on clicking any link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll);

  // 4. Portfolio Filter System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 5. Testimonial Carousel
  const testimonials = [
    {
      quote: "Naga Lakshmi delivered an amazing website and creative designs. Highly recommended!",
      author: "Happy Client",
      role: "Business Owner",
      rating: 5,
      avatar: "assets/images/testimonial-avatar.png"
    },
    {
      quote: "The promotional posters and video editing exceeded our expectations! Our brand engagement skyrocketed by over 140%.",
      author: "Priya Sharma",
      role: "E-Commerce Founder",
      rating: 5,
      avatar: "assets/images/testimonial-avatar.png"
    },
    {
      quote: "Her promotional video campaigns brought us targeted leads within the very first week. Strategic, reliable, and exceptionally talented!",
      author: "Rajesh Verma",
      role: "Marketing Director",
      rating: 5,
      avatar: "assets/images/testimonial-avatar.png"
    }
  ];

  let currentTestimonial = 0;
  const quoteText = document.getElementById('testimQuote');
  const authorName = document.getElementById('testimAuthor');
  const dots = document.querySelectorAll('.testim-dot');

  function renderTestimonial(index) {
    if (!quoteText || !authorName) return;
    const item = testimonials[index];
    
    quoteText.style.opacity = '0';
    setTimeout(() => {
      quoteText.textContent = item.quote;
      authorName.textContent = `- ${item.author}`;
      quoteText.style.opacity = '1';
    }, 200);

    dots.forEach((dot, dIdx) => {
      if (dIdx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentTestimonial = parseInt(dot.getAttribute('data-slide'));
      renderTestimonial(currentTestimonial);
    });
  });

  // Auto rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
  }, 6000);

  // 6. Interactive Modal System
  const modalBackdrop = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalImg = document.getElementById('modalImg');
  const modalTags = document.getElementById('modalTags');
  const modalClose = document.getElementById('modalClose');

  const projectDetails = {
    'proj-1': {
      title: 'Build Your Dream Website',
      category: 'Website Design',
      desc: 'Custom high-performance business website designed with responsive UI/UX, SEO optimization, and sleek modern aesthetic. Built to convert visitors into loyal customers.',
      tags: ['WordPress', 'HTML5', 'CSS3', 'Responsive Design'],
      img: 'assets/images/portfolio-1.png'
    },
    'proj-2': {
      title: 'Special Offer 50% Campaign',
      category: 'Poster Designing',
      desc: 'High-impact promotional campaign visuals featuring 3D shopping bag compositions, bold discount typography, and vibrant color psychology designed for social media feeds.',
      tags: ['Graphic Design', 'Canva', 'Photoshop', 'Social Media'],
      img: 'assets/images/portfolio-2.png'
    },
    'proj-3': {
      title: 'Promotional Reel & Video Edit',
      category: 'Video Editing',
      desc: 'Dynamic, fast-paced video editing with cinematic transitions, crisp audio synchronization, color grading, and subtitle animations tailored for Instagram Reels and YouTube Shorts.',
      tags: ['Premiere Pro', 'Video Production', 'Color Grading', 'Reels'],
      img: 'assets/images/portfolio-3.png'
    },
    'proj-4': {
      title: 'Grow Your Business With Promotional Videos',
      category: 'Promotional Videos',
      desc: 'Compelling promotional video content crafted to boost brand awareness, engage audiences, and drive conversions across social media platforms and digital channels.',
      tags: ['Promotional Videos', 'Brand Storytelling', 'Social Media', 'Engagement'],
      img: 'assets/images/portfolio-4.png'
    }
  };

  const serviceDetails = {
    'serv-web': {
      title: 'Website Design & Development',
      category: 'Service Overview',
      desc: 'Modern, mobile-responsive business websites, portfolio showcases, and landing pages built for speed, aesthetics, and high conversion rates. Optimized across all devices.',
      tags: ['Business Sites', 'Landing Pages', 'E-Commerce', 'UI/UX'],
      img: 'assets/images/service-1.png'
    },
    'serv-poster': {
      title: 'Poster & Social Media Designing',
      category: 'Service Overview',
      desc: 'Eye-catching social media creatives, flyers, brochures, banners, and digital advertisement graphics that reflect your brand identity and attract engagement.',
      tags: ['Posters', 'Flyers', 'Banners', 'Branding'],
      img: 'assets/images/service-2.png'
    },
    'serv-video': {
      title: 'Engaging Video Editing',
      category: 'Service Overview',
      desc: 'Professional editing for promotional videos, viral Instagram reels, YouTube content, product showcases, and corporate clips with crisp sound design and visual effects.',
      tags: ['Reels / Shorts', 'YouTube Edits', 'Transitions', 'Color Grade'],
      img: 'assets/images/service-3.png'
    },
    'serv-promo': {
      title: 'Promotional Video Production',
      category: 'Service Overview',
      desc: 'High-impact promotional videos designed to captivate audiences, tell your brand story, and drive engagement across social media platforms and digital marketing channels.',
      tags: ['Promo Videos', 'Brand Stories', 'Social Content', 'Engagement'],
      img: 'assets/images/service-4.png'
    }
  };

  // Open modal from portfolio cards
  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const data = projectDetails[id];
      if (data) {
        openModal(data);
      }
    });
  });

  // Open modal from service cards
  document.querySelectorAll('.service-card-wrapper, .service-btn').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-service');
      const data = serviceDetails[id];
      if (data) {
        openModal(data);
      }
    });
  });

  function openModal(data) {
    if (!modalBackdrop) return;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalImg.src = data.img;
    modalImg.alt = data.title;
    
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
      const pill = document.createElement('span');
      pill.className = 'portfolio-badge-pill';
      pill.style.background = 'rgba(168, 85, 247, 0.2)';
      pill.style.border = '1px solid rgba(168, 85, 247, 0.4)';
      pill.textContent = tag;
      modalTags.appendChild(pill);
    });

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 7. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const toastMsg = document.getElementById('toastMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all fields.');
        return;
      }

      // Show submitting state
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = 'Sent Successfully! ✓';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        showToast(`Thank you, ${name}! Naga Lakshmi will get in touch soon.`);
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }

  function showToast(message) {
    if (!toastMsg) return;
    toastMsg.textContent = message;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 4000);
  }
});
