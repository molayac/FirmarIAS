import { SignUpperPage } from './app.po';

describe('sign-upper App', () => {
  let page: SignUpperPage;

  beforeEach(() => {
    page = new SignUpperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
