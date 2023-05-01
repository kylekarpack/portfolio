import Image, { GraphImageProp, GraphImageProps } from "@karpack/react-image";
import { FunctionComponent } from "react";

const GraphCmsImage: FunctionComponent<
  Pick<HTMLImageElement, "alt" | "loading" | "className" | "loading"> & Partial<GraphImageProps> & { handle: string }
> = ({ handle, ...rest }) => {
  const asset: GraphImageProp = {
    handle,
    width: 400,
    height: 400,
  };

  return <Image {...rest} image={asset} withWebp={true} transforms={["quality=value:40"]} maxWidth={200} />;
};

export default GraphCmsImage;
