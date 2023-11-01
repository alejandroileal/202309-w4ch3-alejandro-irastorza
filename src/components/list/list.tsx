export function List() {
  return <ul className="characters-list row list-unstyled"></ul>;
}

// export class List extends Component {
//   constructor(selector: string) {
//     super(selector);
//     this.template = this.createTemplate();
//     this.render();
//   }

//   refresh() {
//     this.clear();
//     this.render();
//   }

//   render() {
//     super.render();
//     const elements = repo().map(
//       (item) => new Card('ul', item as AnyCharacter, this.refresh.bind(this))
//     );
//     console.log(elements);
//   }

//   createTemplate() {
//     return '<ul class="characters-list row list-unstyled"></ul>';
//   }
// }
