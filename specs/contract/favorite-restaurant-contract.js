/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurants) => {
  it('return the restaurant that has been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });

    expect(await favoriteRestaurants.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurants.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurants.getRestaurant(3))
      .toEqual(undefined);
  });

  it('refuse a restaurant from being added if not have the correct property', async () => {
    favoriteRestaurants.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([]);
  });

  it('return all of the restaurants that have been added', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('remove favorite restaurant', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });
    favoriteRestaurants.putRestaurant({ id: 3 });

    await favoriteRestaurants.deleteRestaurant(1);

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('handle request to remove a restaurant', async () => {
    favoriteRestaurants.putRestaurant({ id: 1 });
    favoriteRestaurants.putRestaurant({ id: 2 });
    favoriteRestaurants.putRestaurant({ id: 3 });

    await favoriteRestaurants.deleteRestaurant(4);

    expect(await favoriteRestaurants.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
