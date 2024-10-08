import { useState } from "react";
import { getBundles } from "@genexus/mercury";
import { ChatMessage, ThemeModel } from "@genexus/chameleon-controls-library";
import { ChChat, ChTheme } from "../../chameleon-wrappers";
import "./LandingPage.scss";
import { chatCallbacks, chatTranslations, codeFixerRecord } from "./callbacks";
import { mercuryChatMessageRender } from "@genexus/chameleon-integrations-web-components/dist/collection";

const CSS_BUNDLES: ThemeModel = getBundles(
  ["components/chat", "components/markdown-viewer", "utils/layout"],
  "./assets/css/"
);

const LandingPage = () => {
  const [items] = useState<ChatMessage[] | undefined>(codeFixerRecord);

  return (
    <>
      <ChTheme model={CSS_BUNDLES}></ChTheme>
      <div className="lading-page spacing-body">
        <ChChat
          callbacks={chatCallbacks}
          className="chat"
          generatingResponse={false}
          loadingState="more-data-to-fetch"
          markdownTheme="components/markdown-viewer"
          renderItem={mercuryChatMessageRender("components/markdown-viewer")}
          isMobile={false}
          items={items}
          translations={chatTranslations}
        ></ChChat>
      </div>
    </>
  );
};

export default LandingPage;
