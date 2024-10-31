import React, { FC } from "react";
import { SharedLayout } from "../../shared/ui";
import { Footer, LayoutHeader } from "../../widgets";
import { SearchResultPage } from "../../pages";

export const SearchLayout: FC = React.memo(() => {
  return (
    <SharedLayout
      header={<LayoutHeader />}
      search_content={<SearchResultPage />}
      footer={<Footer />}
    />
  );
});
