import styles from '../src/styles';

describe('testing styling', () => {
  it('shows stylesheet is as expected', () => {
    expect(styles({
      adjustedContentSize: { height: 480, width: 640 },
      displayInsets: { top: 0, right: 0, bottom: 0, left: 0 },
      ownProps: { backgroundColor: 'red' },
      arrowSize: { height: 8, width: 16 },
      anchorPoint: { x: 0, y: 0 },
      tooltipOrigin: { x: 0, y: 0 },
    })).toMatchSnapshot();
  });
});
