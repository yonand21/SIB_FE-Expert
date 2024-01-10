/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.resto-item');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.wait(3);
  I.waitForElement('.resto-item');
  I.seeElement('#resto-title a');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.wait(3);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.waitForElement('.resto-item');
  I.seeElement('#resto-title a');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.wait(3);
  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.resto-item');
  I.seeElement('#resto-title a');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.resto-item a');

  const firstRestolike = locate('#resto-title a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);

  I.click(firstRestolike);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.dontSeeElement('.resto-item');
});
