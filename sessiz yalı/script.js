document.addEventListener('DOMContentLoaded', () => {
    // 1. Project Details Data for Apple Sheet Modal
    const projectData = {
        'modal-iron': {
            tag: 'Oyun Arayüzü & UI/UX',
            title: "Iron o' the Rivers",
            description: 'Alternatif II. Dünya Savaşı evreninde geçen strateji oyunu konsepti için kodlama gerektirmeyen görsel tasarım ve kullanıcı deneyimi mimarisi. Ana menü hiyerarşisi, üst bilgi çubuğu ve stratejik harita ekranları Figma üzerinde modüler bileşenlerle kurgulandı.',
            details: [
                'Araçlar: Figma, UI Bileşen Kütüphanesi, Prototipleme',
                'Odak Alanı: Bilgi yoğunluğu yüksek strateji ekranlarında okunabilirlik ve atmosfer bütünlüğü'
            ]
        },
        'modal-izmir': {
            tag: 'Kentsel İletişim & Vizyon',
            title: '2050 İzmir Autofreie Innenstadt',
            description: 'İzmir kent merkezi için 2050 yılına yönelik araçsız şehir konsepti ve kamusal alan dönüşüm projesi. Kent konseyi ile yürütülen süreçte görsel iletişim materyalleri ve stratejik sunum kurgusu geliştirildi.',
            details: [
                'Kapsam: Bitirme Projesi • Kentsel Sürdürülebilirlik İletişimi',
                'Çıktılar: Konsept görselleştirme, paydaş sunumları ve kamusal alan senaryoları'
            ]
        },
        'modal-empire': {
            tag: 'Dijital Kültür & Video Deneme',
            title: 'Alternative Empire',
            description: 'Tarihsel haritalama tekniklerini kullanarak alternatif jeopolitik senaryoları analiz eden video deneme çalışması. Görsel anlatım dili ve kurgu ritmi dijital medya estetiğiyle birleştirildi.',
            details: [
                'Araçlar: Adobe Premiere Pro, Harita Görselleştirme',
                'Tema: Modern tarih, jeopolitik kırılmalar ve dijital anlatıcılık'
            ]
        },
        'modal-belgesel': {
            tag: 'Multimedya Belgesel',
            title: 'Sözlü Tarih ve Aile Hafızası',
            description: 'Fotoğraf hikayeciliği, dört dakikalık ses anlatısı ve kamera önü röportajlardan oluşan üç aşamalı multimedya belgesel projesi. Yerel kültür ve aile belleğinin görsel-işitsel kaydını sunar.',
            details: [
                'Araçlar: Adobe Premiere Pro, Adobe Audition',
                'Format: Fotoğraf Serisi, Ses Belgeseli ve Kısa Video'
            ]
        }
    };

    // 2. Modal Controls
    const modalBackdrop = document.getElementById('project-modal');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDetails = document.getElementById('modal-details');
    const closeModalBtn = document.getElementById('close-modal');

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            const targetKey = button.getAttribute('data-target');
            const data = projectData[targetKey];

            if (data) {
                modalTag.textContent = data.tag;
                modalTitle.textContent = data.title;
                modalDescription.textContent = data.description;
                modalDetails.innerHTML = data.details.map(item => `<span>${item}</span>`).join('');
                modalBackdrop.classList.add('active');
                modalBackdrop.setAttribute('aria-hidden', 'false');
            }
        });
    });

    const closeModal = () => {
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
    };

    closeModalBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
            closeModal();
        }
    });

    // 3. Copy Email to Clipboard Interaction
    const copyBtn = document.getElementById('copy-email');
    const feedback = document.getElementById('copy-feedback');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = copyBtn.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                feedback.textContent = 'E-posta adresi panoya kopyalandı.';
                setTimeout(() => {
                    feedback.textContent = '';
                }, 3000);
            });
        });
    }

    // 4. Subtle Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});