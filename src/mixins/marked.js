import 'highlight.js/styles/androidstudio.css';

import hljs from 'highlight.js'
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

export default {
  methods: {
    marked(input){
      if(!input) return null;
      let html = marked(input);
      html = html.replace(/<code> /g, "<code>");
      return html;
    }
  }
}