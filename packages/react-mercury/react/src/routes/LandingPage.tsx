import { useState } from "react";
import { getIconPath, getIconPathExpanded } from "@genexus/mercury";
import {
  ComboBoxModel,
  TreeViewModel,
} from "@genexus/chameleon-controls-library";
import ChComboBoxRender from "../chameleon-wrappers/ChComboBoxRender";
import ChTreeViewRender from "../chameleon-wrappers/ChTreeViewRender";

import { getControlRegisterProperty } from "@genexus/chameleon-controls-library/dist/collection";

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
      startImgType: "img",
      dragDisabled: true,
      dropDisabled: true,
      items: [
        {
          id: "Main_Programs",
          caption: "Main Programs",
          editable: false,
          startImgSrc: "showcase/pages/assets/icons/category.svg",
          dragDisabled: true,
          dropDisabled: true,
          lazy: false,
          order: 0,
          expanded: false,
          indeterminate: false,
          selected: true,
          items: [
            {
              id: "Main_Programs.ApiHealthCheck",
              caption: "ApiHealthCheck",
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/api.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Main_Programs.BackHome",
              caption: "BackHome",
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/web-panel.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Main_Programs.Login",
              caption: "Login",
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/web-panel.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Main_Programs.Prompt",
              caption: "Prompt",
              dragDisabled: true,
              dropDisabled: true,
              startImgType: "img",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/panel-for-sd.svg",
              metadata: "Panel",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Main_Programs.ProvisioningServices",
              caption: "ProvisioningServices",
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/api.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Main_Programs.VersionCheck",
              caption: "VersionCheck",
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/procedure.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
          ],
          downloading: false,
        },
        {
          id: "Root_Module",
          caption: "Root Module",
          editable: false,
          startImgSrc: MODULE_ICON,
          dragDisabled: true,
          lazy: false,
          order: 1,
          expanded: false,
          indeterminate: false,
          selected: false,
          items: [
            {
              id: "Root_Module.AWS_internal",
              caption: "AWS_internal",
              startImgSrc: MODULE_ICON,
              order: 1,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.BL",
              caption: "BL",
              startImgSrc: MODULE_ICON,
              order: 1,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.General",
              caption: "General",
              startImgSrc: MODULE_ICON,
              lazy: true,
              order: 1,
              expanded: false,
              indeterminate: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.IDE",
              caption: "IDE",
              startImgSrc: MODULE_ICON,
              order: 1,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.Back",
              caption: "Back",
              startImgSrc: "var(folder)",
              order: 2,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.DataModel",
              caption: "DataModel",
              startImgSrc: "var(folder)",
              order: 2,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.Tests",
              caption: "Tests",
              startImgSrc: "var(folder)",
              order: 2,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
              items: [],
            },
            {
              id: "Root_Module.GXNext",
              caption: "GXNext",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/dso.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Root_Module.GeneXusNext",
              caption: "GeneXusNext",
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/dso.svg",
              order: 3,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Root_Module.Domain",
              caption: "Domain",
              editable: false,
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/domain.svg",
              order: 5,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Root_Module.Files",
              caption: "Files",
              editable: false,
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/file.svg",
              order: 7,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
            {
              id: "Root_Module.Images",
              caption: "Images",
              dragDisabled: true,
              dropDisabled: true,
              leaf: true,
              startImgSrc: "showcase/pages/assets/icons/image.svg",
              order: 8,
              expanded: false,
              indeterminate: false,
              lazy: false,
              selected: false,
            },
          ],
          downloading: false,
        },
        {
          id: "References",
          caption: "References",
          editable: false,
          startImgSrc: "showcase/pages/assets/icons/references.svg",
          dragDisabled: true,
          dropDisabled: true,
          order: 2,
          expanded: false,
          indeterminate: false,
          lazy: false,
          selected: false,
          items: [],
        },
        {
          id: "Customization",
          caption: "Customization",
          editable: false,
          startImgSrc: "showcase/pages/assets/icons/customization.svg",
          dragDisabled: true,
          dropDisabled: true,
          lazy: true,
          order: 3,
          expanded: false,
          indeterminate: false,
          selected: false,
          items: [],
        },
        {
          id: "Documentation",
          caption: "Documentation",
          editable: false,
          leaf: true,
          startImgSrc: "showcase/pages/assets/icons/document.svg",
          dragDisabled: true,
          dropDisabled: true,
          order: 4,
          expanded: false,
          indeterminate: false,
          lazy: false,
          selected: false,
        },
      ],
      indeterminate: false,
      lazy: false,
      order: 0,
      selected: false,
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
      expandable: true,
      items: [
        {
          value: "Value 5.1",
          caption: "Label for the value 5.1",
        },
        {
          value: "Value 5.2",
          caption: "Label for the value 5.2",
        },
        {
          value: "Value 5.3",
          caption: "Label for the value 5.3",
          disabled: false,
        },
        {
          value: "Value 5.4",
          caption: "Label for the value 5.4",
        },
      ],
    },
    {
      value: "Value 6",
      caption: "Label for the value 6",
      expandable: true,
      expanded: false,
      items: [
        {
          value: "Value 6.1",
          caption: "Label for the value 6.1",
          disabled: true,
        },
        {
          value: "Value 6.2",
          caption: "Label for the value 6.2",
          disabled: true,
        },
        {
          value: "Value 6.3",
          caption: "Label for the value 6.3",
          disabled: false,
        },
        {
          value: "Value 6.4",
          caption: "Label for the value 6.4",
        },
      ],
    },
    {
      value: "Value 7",
      caption: "Label for the value 7",
      disabled: true,
    },
    {
      value: "Value 8",
      caption: "Label for the value 8",
    },
    {
      value: "Value 9",
      caption: "Label for the value 9",
      expandable: true,
      items: [
        {
          value: "Value 9.1",
          caption: "Label for the value 9.1",
        },
        {
          value: "Value 9.2",
          caption: "Label for the value 9.2",
        },
        {
          value: "Value 9.3",
          caption: "Label for the value 9.3",
          disabled: false,
        },
        {
          value: "Value 9.4",
          caption: "Label for the value 9.4",
        },
      ],
    },
  ]);

  return (
    <div style={{ display: "grid", gridTemplateRows: "32px 1fr", gap: "16px" }}>
      <ChComboBoxRender
        accessibleName="Option"
        className="combo-box"
        model={controlComboBoxUIModel}
        placeholder="Select an option..."
        // onFilterChange={handleFilterChange}
        // onInput={handleValueChange}
      ></ChComboBoxRender>

      <ChTreeViewRender
        className="tree-view"
        model={controlUIModel}
      ></ChTreeViewRender>
    </div>
  );
};

export default LandingPage;
