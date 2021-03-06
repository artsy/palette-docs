import styled from "styled-components"

export const FONT_FAMILY =
  'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace'
export const FONT_SIZE = "14px"
export const LINE_HEIGHT = "1.7"

export const CodeEditorTheme = styled.div<{ editable: boolean }>`
  ${({ editable }) => {
    if (!editable) {
      return `
        pre {
          user-modify: read-only;
        }
      `
    }
  }}

  code[class*="language-"],
  pre[class*="language-"] {
    /* FIXME: This doesn't seem to actually style anything? */
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE};
    line-height: ${LINE_HEIGHT};
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #ffffff;
    color: #303030;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #e0e0e0;
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #e0e0e0;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #b0b0b0;
  }

  .token.punctuation {
    color: #303030;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: #f865ff;
  }

  .token.property {
    color: #aba800;
  }

  .token.tag {
    color: #ff8200;
  }

  .token.string {
    color: #1faaaa;
  }

  .token.selector {
    color: #ad00a1;
  }

  .token.attr-name {
    color: #989898;
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #1faaaa;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #f865ff;
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: #1faaaa;
  }

  .token.placeholder,
  .token.variable {
    color: #3777e6;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #151515;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #ff0086;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #ff0086;
    outline-offset: 0.4em;
  }

  .line-numbers .line-numbers-rows {
    border-right-color: #e0e0e0 !important;
  }

  .line-numbers-rows > span:before {
    color: #d0d0d0 !important;
  }

  .line-highlight {
    background: rgba(21, 21, 21, 0.2) !important;
    background: -webkit-linear-gradient(
      left,
      rgba(21, 21, 21, 0.2) 70%,
      rgba(21, 21, 21, 0)
    ) !important;
    background: linear-gradient(
      to right,
      rgba(21, 21, 21, 0.2) 70%,
      rgba(21, 21, 21, 0)
    ) !important;
  }
`
