import React from "react";

import RootPage from "./Root";
import PageHeading from "layouts/PageHeading";

const LoginPage: React.FC = () => {
  return (
    <RootPage header="login">
      <PageHeading title="Login"></PageHeading>
      <div className="px-0 lg:px-2 w-full inline-block align-middle">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block space-y-2">
              <div className="relative flex flex-col overflow-x-scroll rounded-lg max-h-screen w-full">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootPage>
  );
};
export default LoginPage;
