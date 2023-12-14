import { FC, ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = (props) => {
  return <main className='flex-shrink-0 bg-light'>{props.children}</main>;
};

export default Content;
