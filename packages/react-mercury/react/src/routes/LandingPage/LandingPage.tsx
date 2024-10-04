import { useState } from "react";
import {
  getIconPath,
  getIconPathExpanded,
  getTreeViewImagePathCallback,
} from "@genexus/mercury";
import {
  AccordionModel,
  ComboBoxModel,
  TreeViewModel,
} from "@genexus/chameleon-controls-library";
import {
  ChAccordionRender,
  ChCheckbox,
  ChComboBoxRender,
  ChEdit,
  ChTreeViewRender,
} from "../../chameleon-wrappers";
import "./LandingPage.scss";
import { lazyLoadTreeItemsCallback } from "./tree-view-mock";

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
    { value: "Value 1", caption: "Label for the value 1" },
    {
      value: "Value 2",
      caption: "Label for the value 222 (not expandable)",
      items: [
        { value: "Value 2.1", caption: "Label for the value 2.1" },
        { value: "Value 2.2", caption: "Label for the value 2.2" },
      ],
    },
    {
      value: "Value 3",
      caption: "Label for the value 3",
      disabled: true,
    },
    { value: "Value 4", caption: "Label for the value 4" },
    {
      value: "Value 5",
      caption: "Label for the value 5",
      disabled: true,
      expandable: true,
      items: [
        { value: "Value 5.1", caption: "Label for the value 5.1" },
        { value: "Value 5.2", caption: "Label for the value 5.2" },
        {
          value: "Value 5.3",
          caption: "Label for the value 5.3",
          disabled: false,
        },
        { value: "Value 5.4", caption: "Label for the value 5.4" },
      ],
    },
    {
      value: "Value 6",
      caption: "Label for the value 6",
      expandable: true,
      expanded: true,
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
        { value: "Value 6.4", caption: "Label for the value 6.4" },
      ],
    },
    {
      value: "Value 7",
      caption: "Label for the value 7",
      disabled: true,
    },
    { value: "Value 8", caption: "Label for the value 8" },
    {
      value: "Value 9",
      caption: "Label for the value 9",
      expandable: true,
      items: [
        { value: "Value 9.1", caption: "Label for the value 9.1" },
        { value: "Value 9.2", caption: "Label for the value 9.2" },
        {
          value: "Value 9.3",
          caption: "Label for the value 9.3",
          disabled: false,
        },
        { value: "Value 9.4", caption: "Label for the value 9.4" },
      ],
    },
  ]);

  const [controlAccordionUIModel] = useState<AccordionModel>([
    {
      id: "item 1",
      caption: "Item 1",
      startImgSrc: "var(folder)",
    },
    {
      id: "item 2",
      caption: "Item 2",
      startImgSrc: "var(module)",
    },
    {
      id: "item 3",
      caption: "Item 3",
    },
    {
      id: "item 4",
      caption: "Item 4",
      headerSlotId: "item 4 header",
    },
  ]);

  return (
    <div className="lading-page spacing-body">
      <ChTreeViewRender
        className="tree-view lading-page__tree-view"
        model={controlUIModel}
        getImagePathCallback={getTreeViewImagePathCallback}
        lazyLoadTreeItemsCallback={lazyLoadTreeItemsCallback}
      ></ChTreeViewRender>

      <form action="" className="field-group lading-page__form">
        <div className="field field-inline">
          <div className="field field-block">
            <label className="label" htmlFor="first-name">
              First name
            </label>
            <ChEdit
              id="first-name"
              name="first-name"
              autocapitalize="off"
              autocomplete="off"
              className="form-input"
              maxLength={10}
              mode="none"
              placeholder="John"
            ></ChEdit>
          </div>

          <div className="field field-block">
            <label className="label" htmlFor="last-name">
              Last name
            </label>
            <ChEdit
              id="last-name"
              name="last-name"
              autocapitalize="off"
              autocomplete="off"
              className="form-input"
              maxLength={10}
              mode="none"
              placeholder="Doe"
            ></ChEdit>
          </div>
        </div>

        <div className="field field-block">
          <label className="label" htmlFor="combo-box">
            Country
          </label>
          <ChComboBoxRender
            id="combo-box"
            accessibleName="Option"
            className="combo-box lading-page__combo-box"
            model={controlComboBoxUIModel}
            placeholder="Select an option..."
          ></ChComboBoxRender>
        </div>

        <div className="field field-block">
          <ChCheckbox
            className="checkbox"
            caption="Option"
            checkedValue="true"
          ></ChCheckbox>
        </div>

        <button className="button-primary">Submit</button>
      </form>

      <ChAccordionRender
        className="accordion-outlined lading-page__accordion"
        model={controlAccordionUIModel}
      >
        <div slot="item 1">Content of the item 1</div>

        <div slot="item 2">
          Content of the item 2
          <button className="button-primary" type="button">
            Some action
          </button>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
            cum deleniti? Ullam sit saepe non laudantium dicta alias, corrupti
            dolores rerum sint, maiores expedita esse, molestias modi
            perspiciatis pariatur.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
            cum deleniti? Ullam sit saepe non laudantium dicta alias, corrupti
            dolores rerum sint, maiores expedita esse, molestias modi
            perspiciatis pariatur.
          </div>
        </div>

        <div slot="item 3">
          Content of the item 3
          <button className="button-secondary" type="button">
            Some action
          </button>
        </div>

        <div slot="item 4 header">
          Custom header
          <input
            aria-label="Search"
            className="form-input"
            placeholder="Search..."
            type="text"
          />
        </div>

        <div slot="item 4">
          Content of the item 4
          <button className="button-tertiary" type="button">
            Some action
          </button>
        </div>
      </ChAccordionRender>
    </div>
  );
};

export default LandingPage;
