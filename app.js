// Filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.video-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-category');
    cards.forEach(card => {
      const match = (cat === 'all') || (card.getAttribute('data-category') === cat);
      card.style.display = match ? 'block' : 'none';
    });
  });
});

// Modal logic
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoFrame');
const closeBtn = document.getElementById('closeModal');

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-video');
    iframe.src = url + (url.includes('?') ? '&' : '?') + 'autoplay=1';
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal(){
  iframe.src = '';
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal){ closeModal(); } });
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
