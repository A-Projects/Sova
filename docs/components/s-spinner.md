# Спиннер

Компонент `s-spinner` везуализирует процесс загрузки.

### Как использовать
Несколько предопределенных стилей спиннера, каждый из которых служит своей смысловой цели.

<s-spinner class="me-1" label>Primary</s-spinner>
<s-spinner class="me-1" color="secondary">Secondary</s-spinner>
<s-spinner class="me-1" color="success" span>Success</s-spinner>
<s-spinner class="me-1" color="danger">Danger</s-spinner>
<s-spinner class="me-1" color="warning">Warning</s-spinner>
<s-spinner class="me-1" color="info">Info</s-spinner>
<s-spinner class="me-1" color="light">Light</s-spinner>
<s-spinner class="me-1" color="body" size="lg" variant="grow">Dark</s-spinner>

``` vue
<template>
  <s-spinner color="primary" disabled>Primary</s-spinner>
  <s-spinner color="secondary">Secondary</s-spinner>
  <s-spinner color="success" active>Success</s-spinner>
  <s-spinner color="danger">Danger</s-spinner>
  <s-spinner color="warning">Warning</s-spinner>
  <s-spinner color="info">Info</s-spinner>
  <s-spinner color="light">Light</s-spinner>
  <s-spinner color="dark">Dark</s-spinner>
</template>
```