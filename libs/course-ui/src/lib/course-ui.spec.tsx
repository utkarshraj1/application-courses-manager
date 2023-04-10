import { render } from '@testing-library/react';

import CourseUi from './course-ui';

describe('CourseUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseUi />);
    expect(baseElement).toBeTruthy();
  });
});
