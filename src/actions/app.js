export const UPDATE_PAGE = "UPDATE_PAGE";
export const UPDATE_OFFLINE = "UPDATE_OFFLINE";

export const navigate = path => dispatch => {
  // Extract the page name from path.
  const page = path === "/" ? "office" : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));
};

const loadPage = page => async dispatch => {
  // If the page is invalid, set to 404. The is also a good spot to check
  // other location things like sub-path or query params.
  if (["office"].indexOf(page) === -1) {
    page = "404";
  }

  dispatch(updatePage(page));

  switch (page) {
    case "office":
      await import("../components/e91-office.js");
      break;
    default:
      await import("../components/e91-404.js");
  }
};

const updatePage = page => {
  return {
    type: UPDATE_PAGE,
    page
  };
};
