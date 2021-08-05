export type Cat = {
  id: string;
  tags: string[];
  created_at: string;
};

export const CAT_URL = "https://cataas.com/cat";

const fetchBase = async (url: string) => {
  const data = await (await fetch(url)).json();
  return data;
};

export const fetchTags = async () => {
  const url = `https://cataas.com/api/tags`;
  return fetchBase(url);
};

export const fetchCats = async (
  amount: number,
  tag: string
): Promise<Cat[]> => {
  const url = `https://cataas.com/api/cats?tags=${tag}&limit=${amount}`;
  return fetchBase(url);
};
