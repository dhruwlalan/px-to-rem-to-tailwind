const px = document.getElementById('px');
const rem = document.getElementById('rem');
const tailwind = document.getElementById('tailwind');
px.addEventListener('input', (event) => {
  if (event.target.value === '') {
    rem.value = '';
    tailwind.value = '';
  } else {
    const val = +event.target.value;
    if (typeof val === 'number') {
      rem.value = val / 16;
      tailwind.value = (val / 16) * 4;
    }
  }
});
rem.addEventListener('input', (event) => {
  if (event.target.value === '') {
    px.value = '';
    tailwind.value = '';
  } else {
    const val = +event.target.value;
    if (typeof val === 'number') {
      px.value = val * 16;
      tailwind.value = val * 4;
    }
  }
});
tailwind.addEventListener('input', (event) => {
  if (event.target.value === '') {
    px.value = '';
    rem.value = '';
  } else {
    const val = +event.target.value;
    if (typeof val === 'number') {
      px.value = val * 4;
      rem.value = (val * 4) / 16;
    }
}
});