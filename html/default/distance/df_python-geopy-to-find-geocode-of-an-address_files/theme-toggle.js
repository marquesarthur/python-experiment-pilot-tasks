function updateTheme() {
  const htmlAttr = document.documentElement.getAttribute('color-theme');
  if (htmlAttr !== 'dark') {
    document.documentElement.setAttribute('color-theme', 'dark');
    themeBtn.classList.toggle('dark');
    themeBtn.classList.add('light');
    window.localStorage.setItem('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
    themeBtn.classList.remove('light');
    themeBtn.classList.add('dark');
    window.localStorage.setItem('color-theme', 'light');
  }

  document.documentElement.classList.add('theme-transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 600);
}

const themeBtn = document.getElementById('themer');
themeBtn.addEventListener('click', updateTheme);
