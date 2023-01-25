const listItem = document.querySelectorAll('.drop-down li');
const arrow = document.querySelectorAll('.arrow');
const mobNavBtn = document.querySelector('.mob-btn');
const mobileNav = document.querySelector('.mobile-nav');
const active = 'active';

function toggleActive(item) {
  item.classList.toggle(active);
}
function removeActive(item) {
  item.classList.remove(active);
}
// function addActive(item) {
//   item.classList.add(active);
// }

function stopPropagating() {
  listItem.forEach((li) => {
    li.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}
stopPropagating();

function handleDropDown() {
  arrow.forEach((ar) => {
    ar.addEventListener('click', (e) => {
      e.stopPropagation();
      arrow.forEach((aw) => {
        if (aw == ar) {
          toggleActive(ar);
        } else {
          removeActive(aw);
        }
      });
    });

    window.addEventListener('click', () => {
      removeActive(ar);
    });
  });
}

handleDropDown();

mobNavBtn.addEventListener('click', () => {
  toggleActive(mobNavBtn);
  toggleActive(mobileNav);
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    removeActive(mobileNav);
    removeActive(mobNavBtn);
  }
});
