import {articles} from './vellMagazineData';

export const script = articles.map((article) => {
  const metaTitle = document.createElement('meta');
  metaTitle.setAttribute('property', 'og:title');
  metaTitle.setAttribute('content', article.mainHeader);
  document.head.appendChild(metaTitle);

  const metaType = document.createElement('meta');
  metaType.setAttribute('property', 'og:type');
  metaType.setAttribute('content', 'article');
  document.head.appendChild(metaType);



  const metaImage = document.createElement('meta');
  metaImage.setAttribute('property', 'og:image');
  metaImage.setAttribute('content', article.img);
  document.head.appendChild(metaImage);

});
