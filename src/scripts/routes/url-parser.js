const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  parseUrlDetail() {
    const url = window.location.hash.slice(1);
    return this._urlExamSplitter(url);
  },

  _urlExamSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      sub: urlsSplits[2] || null,
      number: urlsSplits.slice(3).join('/') || null,
    };
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      sub: urlsSplits[2] || null,
      id: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.sub ? `/${splitedUrl.sub}` : '')
      + (splitedUrl.id ? '/:id' : '')
    );
  },
};

export default UrlParser;
