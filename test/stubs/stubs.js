import { MENU_ITEMS } from "../../constants";

export const COMPANIES = [
  {
    company_id: 1,
    company_name: "Deputy",
    image_url:
      "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/themes/deputy/assets/imagesnew/logo/deputy-stack-blue@2x.png",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    industry: "Other",
    location: "Australia",
    company_size: "100+",
    use_case: [
      "Employee Scheduling",
      "Time & Attendance",
      "Performance Management",
    ],
    word_count: 452,
  },
  {
    company_id: 2,
    company_name: "DropCar",
    image_url:
      "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/uploads/2018/12/DropCar_LOGO1.png",
    excerpt:
      "DropCar saw a 57% decrease in the number of no-shows amongst their drivers after using Deputy.",
    industry: "Services",
    location: "Australia",
    company_size: "50-100",
    use_case: ["Employee Scheduling", "Auto-Scheduling", "Time & Attendance"],
    word_count: 633,
  },
];

export const UNIQUE_COMPANIES = [
  {
    company_id: 1,
    company_name: "Deputy",
    image_url:
      "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/themes/deputy/assets/imagesnew/logo/deputy-stack-blue@2x.png",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    industry: "Other",
    location: "Australia",
    company_size: "100+",
    use_case: ["Employee Scheduling", "Time & Attendance"],
    word_count: 452,
  },
  {
    company_id: 2,
    company_name: "DropCar",
    image_url:
      "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/uploads/2018/12/DropCar_LOGO1.png",
    excerpt:
      "DropCar saw a 57% decrease in the number of no-shows amongst their drivers after using Deputy.",
    industry: "Services",
    location: "Australia",
    company_size: "50-100",
    use_case: ["Auto-Scheduling"],
    word_count: 633,
  },
];

export const STUBBED_FILTER_STATE = {
  USE_CASE: [
    "Employee Scheduling",
    "Time & Attendance",
    "Performance Management",
    "Auto-Scheduling",
  ],
  LOCATION: ["Australia"],
  COMPANY_SIZE: ["100+", "50-100"],
  INDUSTRY: ["Other", "Services"],
};

export const STUBBED_COUNTER_RESPONSE = {
  [MENU_ITEMS.USE_CASE]: {
    "Employee Scheduling": 2,
    "Time & Attendance": 2,
    "Performance Management": 1,
    "Auto-Scheduling": 1,
  },
  [MENU_ITEMS.LOCATION]: { Australia: 2 },
  [MENU_ITEMS.COMPANY_SIZE]: { "100+": 1, "50-100": 1 },
  [MENU_ITEMS.INDUSTRY]: { Other: 1, Services: 1 },
};

export const EMPTY_FITLER_STATE = {
  [MENU_ITEMS.USE_CASE]: [],
  [MENU_ITEMS.LOCATION]: [],
  [MENU_ITEMS.COMPANY_SIZE]: [],
  [MENU_ITEMS.INDUSTRY]: [],
};

export const SAMPLE_FILTERS = ["Employee Scheduling", "Performance Management"];
export const SAMPLE_FILTER = "Auto-Scheduling";
