/* eslint-disable no-undef */
Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Posting Review', async ({ I }) => {
  I.wait(3);
  I.waitForElement('.resto-item');
  I.seeElement('#resto-title a');

  const firstResto = locate('#resto-title a').first();
  I.click(firstResto);
  I.wait(3);

  I.seeElement('.form-control');
  I.click('#inputName');
  I.waitForElement('input[name="inputName"]');
  I.fillField('input[name="inputName"]', 'Admin Galak');

  I.click('#inputReview');
  I.waitForElement('textarea[name="inputReview"]');
  I.fillField('textarea[name="inputReview"]', 'Jangan SPAM dik');

  I.seeElement('#submit-review');
  const submitReview = locate('#submit-review');
  I.click(submitReview);
});
