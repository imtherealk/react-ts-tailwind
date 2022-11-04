import React from "react";
import Header from "layouts/Header";

interface RootPageProps {
  header: string;
  children: React.ReactNode;
}

const RootPage: React.FC<RootPageProps> = (props) => {
  return (
    <>
      <Header header={props.header} />
      {/* <Sidebar /> */}
      <div className="my-6 lg:my-12 container px-3 mx-auto">
        {props.children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default RootPage;
