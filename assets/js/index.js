const defaultConfig = {
  couple_names: '小醋桶 & 阿妙',
  special_date: '202X.XX.XX',
  page1_title: '我們的故事',
  page1_text: '在這裡放第一段想對妳說的話...每一個與你相遇的瞬間，都是我生命中最美好的時光。從那一刻起，我知道你就是我一直在尋找的那個人。',
  page2_title: '第一次見面',
  page2_text: '我們第一次見面的那天...那個午後的陽光特別溫暖,就像你的笑容一樣。我永遠不會忘記那一天,因為那是我們故事的開始。',
  page3_title: '美好回憶',
  page3_text: '那些一起度過的日子...每一次的牽手、每一個擁抱、每一次的對視,都深深烙印在我的心底。和你在一起的每一刻,都是我珍藏的回憶。',
  page4_title: '感謝有你',
  page4_text: '謝謝你陪伴在我身邊...在最困難的時候給我力量,在最快樂的時刻與我分享。因為有你,我的世界變得更加完整和美好。',
  final_subtitle: '永遠都愛你'
};

let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

async function onConfigChange(config) {
  document.getElementById('couple-names').textContent = config.couple_names || defaultConfig.couple_names;
  document.getElementById('special-date').textContent = config.special_date || defaultConfig.special_date;
  document.getElementById('page1-title').textContent = config.page1_title || defaultConfig.page1_title;
  document.getElementById('page1-text').textContent = config.page1_text || defaultConfig.page1_text;
  document.getElementById('page2-title').textContent = config.page2_title || defaultConfig.page2_title;
  document.getElementById('page2-text').textContent = config.page2_text || defaultConfig.page2_text;
  document.getElementById('page3-title').textContent = config.page3_title || defaultConfig.page3_title;
  document.getElementById('page3-text').textContent = config.page3_text || defaultConfig.page3_text;
  document.getElementById('page4-title').textContent = config.page4_title || defaultConfig.page4_title;
  document.getElementById('page4-text').textContent = config.page4_text || defaultConfig.page4_text;
  document.getElementById('final-subtitle').textContent = config.final_subtitle || defaultConfig.final_subtitle;
}

function updatePageDisplay() {
  document.querySelectorAll('.page').forEach((page, index) => {
    page.classList.toggle('active', index + 1 === currentPage);
  });

  document.querySelectorAll('.dot-indicator').forEach((dot, index) => {
    dot.classList.toggle('active', index + 1 === currentPage);
  });

  document.getElementById('prev-btn').disabled = currentPage === 1;
  document.getElementById('next-btn').disabled = currentPage === totalPages;
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageDisplay();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePageDisplay();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
});

function createHeart(x, y) {
  const heart = document.createElement('img');
  heart.className = 'heart-img';

  const images = [
    'assets/images/1.PNG',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/8.jpg',
    'assets/images/12.jpg',
    'assets/images/17.JPG',
    'assets/images/18.PNG',
    'assets/images/19.PNG',
    'assets/images/20.jpg'
  ];

  heart.src = images[Math.floor(Math.random() * images.length)];

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

document.getElementById('final-page').addEventListener('click', (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createHeart(
        x + (Math.random() - 0.5) * 50,
        y + (Math.random() - 0.5) * 50
      );
    }, i * 100);
  }
});

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig: defaultConfig,
    onConfigChange: onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ['couple_names', config.couple_names || defaultConfig.couple_names],
      ['special_date', config.special_date || defaultConfig.special_date],
      ['page1_title', config.page1_title || defaultConfig.page1_title],
      ['page1_text', config.page1_text || defaultConfig.page1_text],
      ['page2_title', config.page2_title || defaultConfig.page2_title],
      ['page2_text', config.page2_text || defaultConfig.page2_text],
      ['page3_title', config.page3_title || defaultConfig.page3_title],
      ['page3_text', config.page3_text || defaultConfig.page3_text],
      ['page4_title', config.page4_title || defaultConfig.page4_title],
      ['page4_text', config.page4_text || defaultConfig.page4_text],
      ['final_subtitle', config.final_subtitle || defaultConfig.final_subtitle]
    ])
  });
}

updatePageDisplay();