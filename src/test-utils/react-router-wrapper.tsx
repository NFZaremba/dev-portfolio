import { createMemoryHistory, MemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";

// createMemoryHistory creates an in-memory history object that does not interact with the browser URL. This is useful when you need to customize the history used for server-side rendering, as well as for automated testing.

export * from "@testing-library/react";
export function renderWithProviders(
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: MemoryHistory } = {}
) {
  console.log("I am route inside renderWithProviders Wrapper:", route);
  return {
    ...render(
      <Router history={history}>
        <Route path={route}>{ui}</Route>
      </Router>
    ),
    history,
  };
}
