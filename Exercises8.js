const Data = [
    {name: "Avenger", time: 10 },
    {name: "Shang-chi", time: 3 },
    {name: "James Bond", time: 18 },
  ];
  const Cari1 = Data.find(({ time }) => time === 3);
  console.log(Cari1);
  