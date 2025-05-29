// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Scroll suave para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Slider de depoimentos
    const depoimentos = document.querySelectorAll('.depoimento-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    function showDepoimento(index) {
        depoimentos.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        depoimentos[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showDepoimento(index);
        });
    });
    
    prevBtn.addEventListener('click', function() {
        let index = currentIndex - 1;
        if (index < 0) index = depoimentos.length - 1;
        showDepoimento(index);
    });
    
    nextBtn.addEventListener('click', function() {
        let index = currentIndex + 1;
        if (index >= depoimentos.length) index = 0;
        showDepoimento(index);
    });
    
    // Auto-slide a cada 5 segundos
    setInterval(function() {
        let index = currentIndex + 1;
        if (index >= depoimentos.length) index = 0;
        showDepoimento(index);
    }, 5000);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    });
    
    // Header com fundo ao rolar
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
});



// Language Switcher Logic - Added
document.addEventListener("DOMContentLoaded", function() {
    const languageButtons = document.querySelectorAll(".language-btn");
    const translatableElements = document.querySelectorAll("[data-translate]");
    const htmlTag = document.documentElement;

    // Function to set the language
    const setLanguage = (lang) => {
        // Check if translations for the selected language exist
        if (!translations[lang]) {
            console.error(`Translations for language '${lang}' not found.`);
            return; // Exit if translations are missing
        }

        // Update text content of translatable elements
        translatableElements.forEach(element => {
            const key = element.getAttribute("data-translate");
            // Use textContent for most elements, but check for specific cases if needed (e.g., input placeholders)
            if (translations[lang][key]) {
                // Find the innermost text node if element contains other nodes (like icons)
                let targetNode = element;
                if (element.childNodes.length > 1 && element.querySelector("span[data-translate]")) {
                   // If we wrapped text in spans, target the span directly
                   targetNode = element.querySelector("span[data-translate]");
                } else if (element.childNodes.length > 0) {
                    // Attempt to find the primary text node, often the last one
                    for (let i = element.childNodes.length - 1; i >= 0; i--) {
                        if (element.childNodes[i].nodeType === Node.TEXT_NODE && element.childNodes[i].textContent.trim() !== "") {
                            targetNode = element.childNodes[i];
                            break;
                        }
                    }
                    // Fallback to the element itself if no suitable text node found
                    if (targetNode === element && element.firstChild && element.firstChild.nodeType === Node.TEXT_NODE) {
                         targetNode = element.firstChild;
                    }
                }
                // Check if targetNode is actually a text node before setting textContent
                if(targetNode && targetNode.textContent !== undefined) {
                    targetNode.textContent = translations[lang][key];
                } else if (element.textContent !== undefined) {
                    // Fallback for elements where finding the specific text node failed
                    element.textContent = translations[lang][key];
                }

            } else {
                console.warn(`Translation key '${key}' not found for language '${lang}'.`);
            }
        });

        // Update page title if translation exists
        if (translations[lang]["page_title"]) {
            document.title = translations[lang]["page_title"];
        }

        // Update HTML lang attribute
        htmlTag.setAttribute("lang", lang);

        // Update active button state
        languageButtons.forEach(button => {
            if (button.getAttribute("data-lang") === lang) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        // Save language preference
        try {
            localStorage.setItem("preferredLanguage", lang);
        } catch (e) {
            console.error("Could not save language preference to localStorage:", e);
        }
    };

    // Add click event listeners to buttons
    languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });

    // Set initial language on page load
    let preferredLanguage = "pt"; // Default language
    try {
        const storedLanguage = localStorage.getItem("preferredLanguage");
        if (storedLanguage && translations[storedLanguage]) {
            preferredLanguage = storedLanguage;
        } else {
            // Optional: Detect browser language (e.g., 'en-US' -> 'en')
            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                preferredLanguage = browserLang;
            }
        }
    } catch (e) {
        console.error("Could not retrieve language preference from localStorage:", e);
        // Stick with the default 'pt'
    }

    // Apply the initial language
    setLanguage(preferredLanguage);
});




// Testimonial Form WhatsApp Submission
document.addEventListener("DOMContentLoaded", function() {
    const testimonialForm = document.getElementById("testimonial-form");
    const nameInput = document.getElementById("testimonial-name");
    const messageInput = document.getElementById("testimonial-message");
    const phoneNumber = "5522999925684"; // Replace with the actual WhatsApp number

    if (testimonialForm) {
        testimonialForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = nameInput.value.trim();
            const message = messageInput.value.trim();

            if (name && message) {
                // Construct the WhatsApp message
                const whatsappMessage = `Olá Luli! Gostaria de deixar meu depoimento:\n\nNome: ${name}\nMensagem: ${message}`;
                const encodedMessage = encodeURIComponent(whatsappMessage);

                // Construct the WhatsApp URL
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                // Open WhatsApp link in a new tab
                window.open(whatsappUrl, "_blank");

                // Optional: Clear the form after submission
                // nameInput.value = "";
                // messageInput.value = "";
            } else {
                // Optional: Add some user feedback if fields are empty
                alert("Por favor, preencha seu nome e mensagem.");
            }
        });
    }
});

