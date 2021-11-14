import React from "react";

const SPY_INTERVAL = 100;

interface SpyItem {
  inView: boolean;
  element: HTMLElement;
}

interface ScrollspyProps {
  ids: string[];
  offset: number;
  itemContainerClassName?: string;
  activeItemClassName?: string;
  itemClassName?: string;
}

interface ScrollspyState {
  items: SpyItem[];
}

const HeritagePage = () => {
  return <div>HeritagePage</div>;
};

export default HeritagePage;
