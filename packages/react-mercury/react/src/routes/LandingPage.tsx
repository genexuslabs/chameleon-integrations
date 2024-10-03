import { useState } from "react";
import {
  getIconPath,
  getIconPathExpanded,
  getTreeViewImagePathCallback,
} from "@genexus/mercury";
import {
  ComboBoxModel,
  TreeViewModel,
} from "@genexus/chameleon-controls-library";
import ChComboBoxRender from "../chameleon-wrappers/ChComboBoxRender";
import ChTreeViewRender from "../chameleon-wrappers/ChTreeViewRender";

const MODULE_ICON = getIconPathExpanded(
  {
    category: "objects",
    name: "module",
  },
  {
    category: "objects",
    name: "module-open",
  }
);

const LandingPage = () => {
  const [controlUIModel] = useState<TreeViewModel>([
    {
      id: "root",
      caption: "GeneXusNext Develop",
      editable: false,
      expanded: true,
      leaf: false,
      startImgSrc: getIconPath({
        name: "version",
        category: "objects",
      }),
      items: [
        {
          id: "Main_Programs",
          caption: "Main Programs",
          editable: false,
          startImgSrc: "showcase/pages/assets/icons/category.svg",
          lazy: false,
          order: 0,
          items: [
            {
              id: "Main_Programs.ApiHealthCheck",
              caption: "ApiHealthCheck",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/api.svg",
              order: 3,
              lazy: false,
            },
            {
              id: "Main_Programs.BackHome",
              caption: "BackHome",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/web-panel.svg",
              order: 3,
              lazy: false,
            },
            {
              id: "Main_Programs.Login",
              caption: "Login",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/web-panel.svg",
              order: 3,
              lazy: false,
            },
            {
              id: "Main_Programs.Prompt",
              caption: "Prompt",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/panel-for-sd.svg",
              metadata: "Panel",
              order: 3,
              lazy: false,
            },
            {
              id: "Main_Programs.ProvisioningServices",
              caption: "ProvisioningServices",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/api.svg",
              order: 3,
              lazy: false,
            },
            {
              id: "Main_Programs.VersionCheck",
              caption: "VersionCheck",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/procedure.svg",
              order: 3,
              lazy: false,
            },
          ],
          downloading: false,
        },
        {
          id: "Root_Module",
          caption: "Root Module",
          editable: false,
          startImgSrc: MODULE_ICON,
          lazy: false,
          order: 1,
          items: [
            {
              id: "Root_Module.AWS_internal",
              caption: "AWS_internal",
              startImgSrc: MODULE_ICON,
              order: 1,
              lazy: false,
              items: [],
            },
            {
              id: "Root_Module.BL",
              caption: "BL",
              startImgSrc: MODULE_ICON,
              order: 1,
              lazy: false,
              items: [],
            },
            {
              id: "Root_Module.General",
              caption: "General",
              startImgSrc: MODULE_ICON,
              lazy: true,
              order: 1,
              items: [],
            },
            {
              id: "Root_Module.IDE",
              caption: "IDE",
              startImgSrc: MODULE_ICON,
              order: 1,
              lazy: false,
              items: [],
            },
            {
              id: "Root_Module.Back",
              caption: "Back",
              startImgSrc: "var(folder)",
              order: 2,
              lazy: false,
              items: [],
            },
            {
              id: "Root_Module.DataModel",
              caption: "DataModel",
              startImgSrc: "var(folder)",
              order: 2,
              lazy: false,
              items: [],
            },
            {
              id: "Root_Module.Tests",
              caption: "Tests",
              startImgSrc: "var(folder)",
              order: 2,
              lazy: false,
              items: [],
            },
            {
              id: "Root_Module.GXNext",
              caption: "GXNext",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/dso.svg",
              order: 3,
              lazy: false,
            },
            {
              id: "Root_Module.GeneXusNext",
              caption: "GeneXusNext",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/dso.svg",
              order: 3,
              lazy: false,
            },
            {
              id: "Root_Module.Domain",
              caption: "Domain",
              editable: false,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/domain.svg",
              order: 5,
              lazy: false,
            },
            {
              id: "Root_Module.Files",
              caption: "Files",
              editable: false,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/file.svg",
              order: 7,
              lazy: false,
            },
            {
              id: "Root_Module.Images",
              caption: "Images",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/image.svg",
              order: 8,
              lazy: false,
            },
          ],
          downloading: false,
        },
        {
          id: "References",
          caption: "References",
          editable: false,
          startImgSrc: "showcase/pages/assets/icons/references.svg",
          order: 2,
          lazy: false,
          items: [],
        },
        {
          id: "Customization",
          caption: "Customization",
          editable: false,
          startImgSrc: "showcase/pages/assets/icons/customization.svg",
          lazy: true,
          order: 3,
          items: [],
        },
        {
          id: "Documentation",
          caption: "Documentation",
          editable: false,
          leaf: true,
          startImgSrc: "showcase/pages/assets/icons/document.svg",
          order: 4,
          lazy: false,
        },
      ],
      lazy: false,
      order: 0,
    },
  ]);

  const [controlComboBoxUIModel] = useState<ComboBoxModel>([
    {
      value: "Value 1",
      caption: "Label for the value 1",
    },
    {
      value: "Value 2",
      caption: "Label for the value 222 (not expandable)",
      items: [
        {
          value: "Value 2.1",
          caption: "Label for the value 2.1",
        },
        {
          value: "Value 2.2",
          caption: "Label for the value 2.2",
        },
      ],
    },
    {
      value: "Value 3",
      caption: "Label for the value 3",
      disabled: true,
    },
    {
      value: "Value 4",
      caption: "Label for the value 4",
    },
    {
      value: "Value 5",
      caption: "Label for the value 5",
      disabled: true,
    },
    {
      value: "Value 6",
      caption: "Label for the value 6",
    },
  ]);

  return (
    <div style={{ display: "grid", gridTemplateRows: "32px 1fr", gap: "16px" }}>
      <ChComboBoxRender
        accessibleName="Option"
        className="combo-box"
        model={controlComboBoxUIModel}
        placeholder="Select an option..."
      ></ChComboBoxRender>

      <ChTreeViewRender
        className="tree-view"
        model={controlUIModel}
        getImagePathCallback={getTreeViewImagePathCallback}
      ></ChTreeViewRender>
    </div>
  );
};

export default LandingPage;
