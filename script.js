        // 1. Mobile Menu Toggle Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });

        // 2. Background Hero Carousel (3 Slides, No Indicators)
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;

        function cycleSlides() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(cycleSlides, 5000); // 5 seconds per slide transition

        // 3. Dynamic Typewriter Effect for Hero Headline
        const typedTextSpan = document.getElementById('typed-text');
        const textArray = [
            "SHIELDING YOUR PEACE OF MIND",
            "ELITE PHYSICAL & CYBER PROTECTION",
            "NEXT-GEN SECURITY IN NAIROBI, KENYA"
        ];
        const typingDelay = 80;
        const erasingDelay = 40;
        const newTextDelay = 2000; // Pause between phrases
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 300);
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            if (textArray.length) setTimeout(type, 500);
            
            // Set dynamic footer year
            document.getElementById('current-year').textContent = new Date().getFullYear();
        });

        // 4. Live Nairobi East Africa Time (EAT) Clock
        function updateNairobiTime() {
            const timeSpan = document.getElementById('nairobi-time');
            if (timeSpan) {
                const now = new Date();
                const options = { timeZone: 'Africa/Nairobi', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
                timeSpan.textContent = 'EAT ' + now.toLocaleTimeString('en-US', options);
            }
        }
        setInterval(updateNairobiTime, 1000);
        updateNairobiTime();

        // 5. Contact Form Submission Handling (Without alert())
        function handleFormSubmit(event) {
            event.preventDefault();
            const alertBox = document.getElementById('form-alert');
            
            // Display loading state
            alertBox.className = "mt-4 p-4 rounded-xl text-sm font-semibold bg-brandRed/20 border border-brandRed text-white block";
            alertBox.innerHTML = `<i class="fa-solid fa-spinner animate-spin mr-2"></i> Transmitting security request to Nairobi Dispatch...`;

            setTimeout(() => {
                alertBox.className = "mt-4 p-4 rounded-xl text-sm font-semibold bg-emerald-900/40 border border-emerald-500 text-emerald-300 block";
                alertBox.innerHTML = `<i class="fa-solid fa-circle-check mr-2 text-emerald-400"></i> Request Received! A Brillex Security Command Officer will contact you within 15 minutes.`;
                document.getElementById('contact-form').reset();
            }, 1800);
        }
