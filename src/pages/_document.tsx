import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";

const Document = (props: DocumentHeadTagsProps) => {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};

export default Document;
