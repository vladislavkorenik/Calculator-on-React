export default function isName(str) {
  return (
    str.search(
      /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})+(\s+([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23}))$/,
    ) !== -1
  );
}
