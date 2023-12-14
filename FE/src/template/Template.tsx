import { FC, ReactNode } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = (props) => {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
};

export default Template;
