import availability, { isValid } from './availability';

describe('availability', () => {
  it('executes as expected', async () => {
    expect(
      await availability({ pathParameters: { propertyId: '1234' } }, {})
    ).toMatchSnapshot();
  });

  it('is invalid', async () => {
    expect(
      await availability({ pathParameters: { propertyId: 'aaaa' } }, {})
    ).toMatchSnapshot();
    // TODO: ...
  });
  it('cannot be 123', async () => {
    expect(
      await availability({ pathParameters: { propertyId: '123' } }, {})
    ).toMatchSnapshot();
    // TODO: ...
  });
});
