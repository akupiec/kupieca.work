export function IndexTemplate({ css, body }: any) {
  const stylesToImport = css.map((c) => `<link href="${c}" rel="stylesheet" />`).join("\n");
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="dark light" />
    <title></title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
      rel="stylesheet" />
    ${stylesToImport}
  </head>
  <body>
    ${body}
  </body>
</html>
`;
}