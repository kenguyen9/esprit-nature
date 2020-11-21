export class InfoModal {
  title: string;
  content: string[];

  constructor(title: string, content: string[]) {
    this.title = title;
    this.content = [];
    content.forEach(c => {
      this.content.push(c);
    });
  }
}
