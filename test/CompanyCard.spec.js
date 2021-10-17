import { shallow } from "vue-test-utils";
import CompanyCard from "@/components/CompanyCard.vue";

describe("Card Component", () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(CompanyCard, {
      propsData: {
        company: {
          company_name: 1,
          image_url: "http://placekitten.com/200/300",
          company_size: "1000+",
          excerpt: "Lol",
        },
      },
      mocks: {
        $t: () => {},
      },
    });
  });

  it("Has the expected markup", () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
