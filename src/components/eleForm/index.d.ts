interface eleForm {}

export interface form {
  attrs: { key: string };
  events: { key: string };
  children?: Array<form>;
}
