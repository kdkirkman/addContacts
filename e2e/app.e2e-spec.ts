import { AddContactsPage } from './app.po';

describe('add-contacts App', () => {
  let page: AddContactsPage;

  beforeEach(() => {
    page = new AddContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
