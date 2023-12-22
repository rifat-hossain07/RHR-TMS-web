import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import Modal from "react-modal";
import Provider from "./Components/ContextProvider/Provider";
import "aos/dist/aos.css";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
Aos.init();
Aos.refresh();
Modal.setAppElement(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
