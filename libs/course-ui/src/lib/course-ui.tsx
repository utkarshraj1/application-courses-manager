import styles from './course-ui.module.scss';

/* eslint-disable-next-line */
export interface CourseUiProps {}

export function CourseUi(props: CourseUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourseUi!</h1>
    </div>
  );
}

export default CourseUi;
