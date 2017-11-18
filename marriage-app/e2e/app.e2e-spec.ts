import { MarriageAppPage } from './app.po';

describe('marriage-app App', function() {
  let page: MarriageAppPage;

  beforeEach(() => {
    page = new MarriageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
