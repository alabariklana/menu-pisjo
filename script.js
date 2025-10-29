// Script untuk website menu
// Menangani interaksi dan animasi dinamis

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website menu berhasil dimuat!');
    
    // Ambil semua elemen menu item
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Menambahkan efek klik pada setiap menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Efek scale bounce saat diklik
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Ambil nama menu
            const menuName = this.querySelector('h2').textContent;
            const menuPrice = this.querySelector('.price').textContent;
            
            // Tampilkan informasi di console (bisa diganti dengan modal atau alert)
            console.log(`Menu dipilih: ${menuName} - ${menuPrice}`);
        });
    });
    
    // Intersection Observer untuk animasi saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observasi setiap menu item
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
    
    // Menangani error loading gambar
    const images = document.querySelectorAll('.menu-image img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.error(`Gagal memuat gambar: ${this.src}`);
            // Tampilkan placeholder atau pesan error
            this.parentElement.style.background = '#f0f0f0';
            this.style.display = 'none';
            
            // Tambahkan pesan error
            const errorMsg = document.createElement('div');
            errorMsg.style.cssText = 'color: #999; font-size: 14px; text-align: center;';
            errorMsg.textContent = '🖼️ Gambar tidak tersedia';
            this.parentElement.appendChild(errorMsg);
        });
        
        img.addEventListener('load', function() {
            console.log(`Gambar berhasil dimuat: ${this.alt}`);
        });
    });
    
    // Animasi fade in untuk header
    const header = document.querySelector('header');
    setTimeout(() => {
        header.style.opacity = '1';
    }, 100);
    
    // Smooth scroll untuk animasi yang lebih halus
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});