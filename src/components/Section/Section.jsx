import style from './Section.module.css';
import clsx from 'clsx';

const Section = ({ children, className }) => {
  const sectionClassName = clsx(className, {
    [style.searchInput]: className === 'searchInput',
    [style.form]: className === 'form',
    [style.section]: true,
  });
  return <section className={sectionClassName}>{children}</section>;
};

export default Section;
