import { shallow } from "vue-test-utils";
import NavDropdown from "@/components/NavDropdown.vue";
import { MENU_ITEMS } from "../constants";

describe("Navigation Filter Dropdown Component", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(NavDropdown, {
      propsData: {
        title: "Integrations",
        items: ["Other", "Services"],
        type: MENU_ITEMS.INDUSTRY
      }
    });
  });

  it("Has the expected markup", () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
