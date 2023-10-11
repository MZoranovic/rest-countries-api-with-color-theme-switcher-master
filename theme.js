const isDarkTheme = !!localStorage.getItem('theme');
document.querySelector('#switch').checked = isDarkTheme;
document.querySelector('#switch').addEventListener('click', function (e) {
  if (e.target.checked) {
    localStorage.setItem('theme', 'setTheme');
  } else {
    localStorage.removeItem('theme');
  }
});
