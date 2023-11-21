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
      th: 'text-gray-700 text-lg uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400',
      td: 'text-gray-900 dark:text-white dark:bg-gray-800',
      paginationSummary: 'text-gray-700 dark:text-white',
      footer:
        'bg-gray-50 dark:bg-gray-700',
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
