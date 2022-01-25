const type_obj = {
  n: "noun",
  v: "verb",
  s: "adjective",
  a: "adjective",
  r: "adverb",
};

Object.keys(type_obj).forEach((key) => {
  console.log(`${key}: ${type_obj[key]}`);
});

if (gloss[key].length !== 0) {
  console.log(gloss[key]);
  console.log(key);
  <Explain word={word} type={key} explain={gloss[key]} />;
}
