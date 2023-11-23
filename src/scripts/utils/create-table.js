import { Grid } from 'gridjs';
import { idID } from 'gridjs/l10n/dist/l10n.umd';

const createGrid = (tableId, columns, data, options = {}) => {
  const defaultOptions = {
    pagination: {
      limit: 5,
    },
    sort: true,
    language: idID,
    className: {
      th: 'table-header',
      td: 'table-data',
      paginationSummary: 'table-summary',
      footer:
        'table-footer',
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const grid = new Grid({
    columns,
    data,
    ...mergedOptions,
  });

  grid.render(document.getElementById(tableId));
};

export default createGrid;
