export function clickOnPageBtn(event, btnText, mutation, pathName) {
  let pageNumber;
  let indexOfPastActiveBtnEl = -1;
  const btnEls = document.querySelectorAll('.page-buttons_btn');
  if (btnText === 'next') {
    let pastActiveBtnEl;
    btnEls.forEach((btn, index) => {
      if (btn.classList.contains('active-page-btn')) {
        pastActiveBtnEl = btn;
        indexOfPastActiveBtnEl = index;
      }
    });
    pastActiveBtnEl.classList.remove('active-page-btn')

    if (indexOfPastActiveBtnEl === btnEls.length - 2) {
      btnEls[0].classList.add('active-page-btn');
      this.$store.commit(mutation, 1);
    } else {
      btnEls[indexOfPastActiveBtnEl + 1].classList.add('active-page-btn');
      this.$store.commit(mutation, indexOfPastActiveBtnEl + 2);
    }
    if (indexOfPastActiveBtnEl === btnEls.length - 2) {
      pageNumber = 0;
    } else {
      pageNumber = indexOfPastActiveBtnEl + 1;
    }
  }
  else {
    const activeBtnEls = document.querySelectorAll('.active-page-btn');
    if (activeBtnEls.length > 0) {
      activeBtnEls.forEach(el => {
        el.classList.remove('active-page-btn');
      })
    }
    event.currentTarget.classList.add('active-page-btn');
    this.$store.commit(mutation, btnText+1);
    pageNumber = parseInt(btnText);
  }
  const categoryActiveEl = document.querySelector('.project-categories__block_category-active');
  if (categoryActiveEl) {
    categoryActiveEl.classList.remove('project-categories__block_category-active');
  }
  const newPath = `/${pathName}/page/${pageNumber + 1}`;

  this.$router.push(newPath);
}
