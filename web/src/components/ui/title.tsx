import type { ReactNode } from 'react';

interface TitleRootProps {
  children: ReactNode;
}

export const TitleRoot = ({ children }: TitleRootProps) => {
  return <div>{children}</div>;
};

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-4xl mb-4">{children}</h1>;
};

interface TitleDescriptionRoot {
  children: ReactNode;
}

export const TitleDescription = ({ children }: TitleDescriptionRoot) => {
  return <p className="text-zinc-400">{children}</p>;
};
