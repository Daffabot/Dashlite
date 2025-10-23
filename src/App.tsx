import { Suspense } from "react";
import Spinner from "./shared/atoms/Spinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetRoutes } from "./routes";

const router = createBrowserRouter(GetRoutes());

/**
 * Root application component that mounts the router.
 * Wraps lazy routes in a suspense boundary with a centered spinner.
 */
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="lg" />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
