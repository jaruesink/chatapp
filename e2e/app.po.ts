export class ChatappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chatapp-app p')).getText();
  }
}
