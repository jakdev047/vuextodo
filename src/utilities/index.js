import Vue from "vue";

// word filter

Vue.filter("nameSnippet", (val) => {
  if (!val || typeof val !== "string") return "";
  val = val.slice(0, 10);
  return val;
});