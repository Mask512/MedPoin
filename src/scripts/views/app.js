import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import menuList from './menu-list';

class App {
  constructor(contentTitleElement, mainContentElement) {
    this._contentTitleElement = contentTitleElement;
    this._mainContentElement = mainContentElement;
  }

  _getTitleFromMenuList(url) {
    const { title } = menuList.find((menu) => menu.link === url) || {};
    return title;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const title = this._getTitleFromMenuList(url);

    this._contentTitleElement.setAttribute('data-link', title);

    const page = routes[url];
    if (!page) {
      window.location.href = '/';
      return;
    }
    this._mainContentElement.innerHTML = await page.render();
    if (page.afterRender) {
      page.afterRender();
    }
  }
}

export default App;
