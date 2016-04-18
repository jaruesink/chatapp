import { ChatappPage } from './app.po';

describe('chatapp App', function() {
  let page: ChatappPage;

  beforeEach(() => {
    page = new ChatappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chatapp Works!');
  });
});
