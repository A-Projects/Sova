# Кнопка

Компонент `s-button` для использования в таблицах, формах, карточках и многом другом. 
Можно применять различные стили, состояния и размеры. Готов к использованию и легко настраивается.

### Как использовать
Несколько предопределенных стилей кнопок, каждый из которых служит своей смысловой цели.

<s-button class="me-1" color="primary" disabled>Primary</s-button>
<s-button class="me-1" color="secondary">Secondary</s-button>
<s-button class="me-1" color="success" active>Success</s-button>
<s-button class="me-1" color="danger">Danger</s-button>
<s-button class="me-1" color="warning">Warning</s-button>
<s-button class="me-1" color="info">Info</s-button>
<s-button class="me-1" color="light">Light</s-button>
<s-button class="me-1" color="dark">Dark</s-button>
<s-button class="me-1" color="link">Link</s-button>

``` vue
<template>
  <s-button color="primary" disabled>Primary</s-button>
  <s-button color="secondary">Secondary</s-button>
  <s-button color="success" active>Success</s-button>
  <s-button color="danger">Danger</s-button>
  <s-button color="warning">Warning</s-button>
  <s-button color="info">Info</s-button>
  <s-button color="light">Light</s-button>
  <s-button color="dark">Dark</s-button>
  <s-button color="link">Link</s-button>
</template>
```

### Свойство ссылки
Может использоваться как ссылка при добавлении свойства `link`

<s-button class="me-1" color="primary" href="#" link disabled>
    Disabled
</s-button>

<s-button class="me-1" color="danger" href="http://google.ru" link>
    Google
</s-button>

``` vue
<template>
  <s-button color="primary" href="#" link disabled>
    Disabled
  </s-button>

  <s-button color="danger" href="http://google.ru" link>
    Google
  </s-button>
</template>
```