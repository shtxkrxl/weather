import { ReactNode } from 'react';

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`m-auto max-w-[340px] overflow-hidden pb-[30px] md:max-w-[800px] ${className}`}>
      {children}
    </div>
  );
};

interface Props {
  children?: ReactNode;
  className?: string;
}

export default Wrapper;
