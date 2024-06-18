import "@testing-library/jest-dom";

jest.mock("dotenv", () => ({
  config: () => {
    process.env.VITE_WIKI_ACCESS_TOKEN = "token";
  },
}));
