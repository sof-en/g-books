
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
    <div className="bg-green w-full mx-auto px-[10px] ">
      {/* <Watermark content="e-books" > */}
        {/* Header */}
        <div className=" sticky top-0 w-[full] z-50  bg-green py-[20px]">
          <div className="lg:w-[80%] md:w-[90%] sm:w-[95%]  mx-auto rounded-[5px] px-[30px] py-[20px]   bg-whiteGray flex justify-between">
            {header}
          </div>
        </div>

        {/* Content */}
        <div className=" lg:w-[80%] md:w-[90%] sm:w-[95%]    mx-auto">
          {content?.slide_banner}
          {content?.top_books}
          {content?.sound_books}
          {content?.for_child}
        </div>
      {/* </Watermark> */}
    </div>
  );
};
