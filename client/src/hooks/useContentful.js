// ダミーモード：Contentfulなしで動作させる
const useContentful = () => {
  return {
    getEntries: async () => {
      return { items: [] };
    }
  };
};

export default useContentful;
