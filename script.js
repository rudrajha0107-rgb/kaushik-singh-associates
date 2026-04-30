/* ==================== GLOBAL STYLES ==================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #0d1b2a;
    --accent-color: #1b9aaa;
    --background-color: #f5f7fb;
    --text-color: #333;
    --light-text: #666;
    --white: #fff;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    --shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.15);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ==================== NAVBAR ==================== */
.navbar {
    position: sticky;
    top: 0;
    background: var(--white);
    box-shadow: var(--shadow);
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: var(--accent-color);
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
}

.cta-btn {
    background: var(--accent-color);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.cta-btn:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--primary-color);
    margin: 5px 0;
    transition: 0.3s;
}

/* ==================== BUTTONS ==================== */
.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--accent-color);
    color: var(--white);
}

.btn-primary:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.btn-outline {
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    background: transparent;
}

.btn-outline:hover {
    background: var(--accent-color);
    color: var(--white);
}

/* ==================== HERO SECTION ==================== */
.hero {
    padding: 100px 20px;
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
    text-align: center;
}

.hero-content h1 {
    font-size: 48px;
    color: var(--primary-color);
    margin-bottom: 15px;
    line-height: 1.2;
}

.hero-content p {
    font-size: 18px;
    color: var(--light-text);
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

/* ==================== SECTION TITLES ==================== */
.section-title {
    font-size: 36px;
    color: var(--primary-color);
    margin-bottom: 10px;
    text-align: center;
}

.section-subtitle {
    text-align: center;
    color: var(--light-text);
    font-size: 16px;
    margin-bottom: 40px;
}

/* ==================== PARTNER SECTION ==================== */
.partner-section {
    padding: 80px 20px;
    background: var(--white);
}

.partner-card {
    display: flex;
    gap: 40px;
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
    padding: 40px;
    border-radius: 12px;
    align-items: center;
}

.partner-card.featured {
    box-shadow: var(--shadow);
}

.partner-image {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: var(--shadow);
    flex-shrink: 0;
}

.partner-info h3 {
    font-size: 28px;
    color: var(--primary-color);
    margin-bottom: 5px;
}

.partner-info .role {
    color: var(--accent-color);
    font-weight: 600;
    margin-bottom: 15px;
}

.partner-info .description {
    color: var(--light-text);
    margin-bottom: 15px;
    line-height: 1.8;
}

.partner-contact {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    color: var(--text-color);
}

/* ==================== TEAM SECTION ==================== */
.team-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.team-card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    text-align: center;
}

.team-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.team-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.team-card h3 {
    padding: 20px 15px 5px;
    color: var(--primary-color);
}

.team-card p {
    padding: 0 15px 20px;
    color: var(--accent-color);
    font-weight: 600;
}

/* ==================== SERVICES SECTION ==================== */
.services-section {
    padding: 80px 20px;
    background: var(--white);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.service-card {
    background: var(--white);
    padding: 30px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    text-align: center;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-top: 3px solid var(--accent-color);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 15px;
}

.service-card h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.service-card p {
    color: var(--light-text);
    font-size: 14px;
}

/* ==================== WHY SECTION ==================== */
.why-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.why-card {
    background: var(--white);
    padding: 30px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    text-align: center;
}

.why-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.why-icon {
    font-size: 36px;
    margin-bottom: 15px;
    color: var(--accent-color);
}

.why-card h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.why-card p {
    color: var(--light-text);
    font-size: 14px;
}

/* ==================== CONTACT SECTION ==================== */
.contact-section {
    padding: 80px 20px;
    background: var(--white);
}

.contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
}

.contact-card {
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
    padding: 30px;
    border-radius: 12px;
    text-align: center;
}

.contact-card h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.contact-card a,
.contact-card p {
    color: var(--light-text);
    text-decoration: none;
}

.contact-card a:hover {
    color: var(--accent-color);
}

/* ==================== PRICING PAGE ==================== */
.pricing-hero {
    padding: 80px 20px;
    background: linear-gradient(135deg, #1b9aaa 0%, #0d1b2a 100%);
    color: var(--white);
    text-align: center;
}

.pricing-hero h1 {
    font-size: 42px;
    margin-bottom: 10px;
}

.pricing-hero p {
    font-size: 18px;
    opacity: 0.9;
}

.pricing-section {
    padding: 80px 20px;
    background: var(--white);
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.pricing-card {
    background: var(--white);
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    padding: 40px 30px;
    transition: all 0.3s ease;
    position: relative;
}

.pricing-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.pricing-card.featured {
    border-color: var(--accent-color);
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
    transform: scale(1.05);
}

.badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent-color);
    color: var(--white);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
}

.plan-header h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
    font-size: 20px;
}

.price {
    font-size: 32px;
    color: var(--accent-color);
    font-weight: 700;
    margin-bottom: 20px;
}

.price span {
    font-size: 14px;
    color: var(--light-text);
    font-weight: 500;
}

.features-list {
    list-style: none;
    margin: 25px 0;
    text-align: left;
}

.features-list li {
    padding: 10px 0;
    color: var(--light-text);
    border-bottom: 1px solid #e0e0e0;
}

.features-list li:last-child {
    border-bottom: none;
}

.pricing-card .btn {
    width: 100%;
    margin-top: 20px;
}

.custom-pricing-section {
    padding: 60px 20px;
    background: linear-gradient(135deg, #f5f7fb 0%, #eef4ff 100%);
    text-align: center;
}

.custom-pricing-section h2 {
    color: var(--primary-color);
    font-size: 32px;
    margin-bottom: 15px;
}

.custom-pricing-section p {
    color: var(--light-text);
    margin-bottom: 30px;
}

/* ==================== WHATSAPP BUTTON ==================== */
.whatsapp-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #25d366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    text-decoration: none;
    box-shadow: var(--shadow-hover);
    transition: all 0.3s ease;
    z-index: 100;
}

.whatsapp-btn:hover {
    transform: scale(1.1);
    bottom: 40px;
}

/* ==================== FOOTER ==================== */
.footer {
    background: var(--primary-color);
    color: var(--white);
    text-align: center;
    padding: 30px 20px;
}

/* ==================== RESPONSIVE DESIGN ==================== */
@media (max-width: 768px) {
    .logo {
        font-size: 20px;
    }

    .nav-links {
        gap: 15px;
    }

    .nav-link {
        font-size: 14px;
    }

    .hamburger {
        display: flex;
    }

    .hero-content h1 {
        font-size: 32px;
    }

    .hero-content p {
        font-size: 16px;
    }

    .section-title {
        font-size: 28px;
    }

    .partner-card {
        flex-direction: column;
        gap: 20px;
    }

    .partner-image {
        width: 150px;
        height: 150px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    .pricing-card.featured {
        transform: scale(1);
    }

    .whatsapp-btn {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        font-size: 24px;
    }

    .cta-btn {
        padding: 8px 15px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 24px;
    }

    .section-title {
        font-size: 24px;
    }

    .nav-links {
        gap: 10px;
        font-size: 12px;
    }

    .services-grid,
    .team-grid,
    .why-grid,
    .pricing-grid,
    .contact-info {
        grid-template-columns: 1fr;
    }

    .partner-info h3 {
        font-size: 22px;
    }
}
