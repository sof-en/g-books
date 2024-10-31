import { SharedLayout } from "../../shared/ui";
import { BannerSlide, Footer, ForChildLayout, LayoutHeader, PopularBooks, SoundBooksLayout } from "../../widgets";

export function LayoutApp() {
  return (
    <SharedLayout
      header={<LayoutHeader />}
      features_them_lan={""}
      content={{
        slide_banner: <BannerSlide />,
        top_books: <PopularBooks />,
        sound_books: <SoundBooksLayout/>,
        for_child: <ForChildLayout/>,
      }}
      footer={<Footer/>}
      menu_item={[
        {
          key: "1",
          icon: "",
          label: "nav 1",
        },
      ]}
    />
  );
}
