import { useEffect, useState } from 'react';

export const useSeo = (TitleData: string | null) => {
  const [title, setTitle] = useState(TitleData);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.text = title + `${' '}| 포트폴리오`;
  };
  useEffect(updateTitle, [title]);
};
