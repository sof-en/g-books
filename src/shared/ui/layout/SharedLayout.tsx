interface IMenu {
  key: string;
  icon: React.ReactNode;
  label: string;
}

interface IContent {
  slide_banner: React.ReactNode;
  top_books: React.ReactNode;
  sound_books: React.ReactNode;
  for_child: React.ReactNode;
}

type Props = {
  header?: React.ReactNode;
  features_them_lan?: React.ReactNode;
  content?: IContent;
  menu_item?: IMenu[];
};

export const SharedLayout: React.FC<Props> = ({ content, header }) => {
  return (
    <div className=" w-full mx-auto">
      {/* Header */}
      <div className=" sticky top-0 w-[full] z-50  bg-white py-[20px]">
        <div className="w-[80%] mx-auto rounded-[10px] px-[30px] py-[20px] shadow-whiteGray shadow-md  bg-whiteGray flex justify-between">
          {header}
        </div>
      </div>

      {/* Content */}
      <div className=" w-[80%] mx-auto">
        {content?.slide_banner}
        {content?.top_books}
        {content?.sound_books}
        {content?.for_child}
      </div>
    </div>
  );
};
