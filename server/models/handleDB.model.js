import wn_gloss from "./WordNet/wn_gloss.js";
import wn_synset from "./WordNet/wn_synset.js";

const set_word = new Set();
const word_list = [];

const type_obj = {
  n: "noun",
  v: "verb",
  s: "adjective",
  a: "adjective",
  r: "adverb",
};

for (let obj of wn_synset) {
  set_word.add(obj.word);
}

for (let word of set_word) {
  word_list.push(word);
}

const handleDB = (word) => {
  let response = {
    noun: [],
    verb: [],
    adjective: [],
    adverb: [],
  };

  if (!word_list.includes(word)) {
    return null;
  }
  const type_set = new Set();
  const type_list = [];
  const list_id = [];
  const id_gloss = new Map();
  const id_type = new Map();
  // set_type & list_id
  for (let obj of wn_synset) {
    if (obj.word === word) {
      type_set.add(obj.ss_type);
      list_id.push(obj.synset_id);
      id_type.set(obj.synset_id, obj.ss_type);
    }
  }

  for (let s of type_set) {
    type_list.push(s);
  }

  // id_gloss
  for (let obj of wn_gloss) {
    if (list_id.includes(obj.synset_id)) {
      id_gloss.set(obj.synset_id, obj.gloss);
    }
  }

  for (let type of type_list) {
    for (let id of list_id) {
      if (id_type.get(id) === type) {
        let curr = {
          gloss: "",
          synset: [],
        };
        curr.gloss = id_gloss.get(id);
        for (let obj of wn_synset) {
          if (obj.synset_id === id && obj.word !== word) {
            curr.synset.push(obj.word);
          }
        }
        response[type_obj[type]].push(curr);
      }
    }
  }

  return response;
};

export default handleDB;

export { word_list };
