export interface ServiceTabContent {
  div1: {
    title: string;
    text: string;
    image: string;
  };
  div2: {
    text: string;
  };
  div3: {
    title: string;
    text: string;
    image: string;
  };
  div4: {
    text: string;
  };
}

export interface ServiceTab {
  slug: string; 
  title: string; 
  content: ServiceTabContent; 
}