export function filterData(event, tag, blockClass, tagClassActive, dataList) {
  let articleEls = Array.from(document.querySelectorAll(`.${blockClass}`));
  articleEls = articleEls.filter(article => !article.classList.contains('selectedArticle'));

  if (event.currentTarget.classList.contains(tagClassActive)) {
    event.currentTarget.classList.remove(tagClassActive);
    articleEls.forEach(el => {
      el.style.display = 'block';
    });
  } else {
    const tagEls = document.querySelectorAll(`.${tagClassActive}`);
    if (tagEls.length > 0) {
      tagEls.forEach(el => {
        el.classList.remove(tagClassActive);
      });
    }
    event.currentTarget.classList.add(tagClassActive);
    const filteredArticles = dataList.filter(article => article.tags.includes(tag));
    const indexesOfFilteredArticles = filteredArticles.map(article => dataList.indexOf(article));
    articleEls.forEach((el, index) => {
      el.style.display = 'none';
      if (indexesOfFilteredArticles.includes(index)) {
        el.style.display = 'block';
      }
    });
  }
}
