const data = [
  ['程锦程', '417213', 'emmett.daugherty@gmail.com', 'OtP'],
  ['石靖琪', '64984', 'darron.raynor@yahoo.com', 'FBh'],
  ['夏弘文', '295', 'shakia.larson@yahoo.com', 'HXdh'],
  ['朱文昊', '861440340', 'oliva.kutch@hotmail.com', 'Cc5'],
  ['何航', '7', 'henry.harvey@gmail.com', 'ah3n'],
  ['宋琪', '2973', 'monte.rodriguez@hotmail.com', 'Od'],
  ['秦凯瑞', '536988', 'olene.dicki@gmail.com', 'dE3H'],
  ['江旭尧', '7175304', 'glen.veum@gmail.com', 'yH'],
  ['周越彬', '1879277', 'melody.tillman@hotmail.com', 'XMQQ'],
  ['刘健柏', '338', 'charles.grady@yahoo.com', 'jr'],
  ['蒋涛', '4150114328', 'kia.jerde@hotmail.com', 'uVKs8'],
  ['郑立轩', '117', 'cyril.cassin@hotmail.com', 'DG1'],
  ['孙楷瑞', '576074798', 'carson.grady@hotmail.com', 'QW'],
  ['尹靖琪', '71041', 'alfonso.bogan@yahoo.com', 'dVjE0'],
  ['田烨华', '669963458', 'sherman.weber@hotmail.com', '5QM5'],
  ['金鹤轩', '872427359', 'buffy.barton@gmail.com', 'ZX6ZD'],
  ['龙鸿煊', '88635', 'fabiola.yundt@yahoo.com', 'sSvR3'],
  ['崔伟诚', '506494947', 'andreas.brown@yahoo.com', 'Zm'],
  ['卢弘文', '68978', 'kendrick.stroman@gmail.com', 'RM'],
  ['刘志泽', '22', 'erwin.roberts@yahoo.com', 'eKz'],
];

const arr = data.map((item) => {
  return {
    name: item[0],
    age: Number(item[1]),
    email: item[2],
    hobby: item[3],
  };
});
export default arr;
