class SemanticBox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <div style="border:1px solid black; padding:8px;">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("semantic-box", SemanticBox);


