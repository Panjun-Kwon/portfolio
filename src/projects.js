'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projcetsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }

  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projcetsContainer.classList.add('anim-out');
  projects.forEach((proejct) => {
    if (filter === 'all' || filter === proejct.dataset.type) {
      proejct.style.display = 'block';
    } else {
      proejct.style.display = 'none';
    }
  });
  setTimeout(() => {
    projcetsContainer.classList.remove('anim-out');
  }, 250);
}
