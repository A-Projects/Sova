# Аккордеон

Компонент `s-accordion` позволяет создавать вертикально сворачивающиеся аккордеоны.

### Как использовать
Аккордеон для своей работы использует внутри компонент свёртка `s-collapse`. Между компонентам `s-accordion-item` не должно быть разрывов.

<s-accordion activeItemKey="1">
    <s-accordion-item itemKey="1">
        <s-accordion-header>
            # Аккордеон 1
        </s-accordion-header>
        <s-accordion-body>
            <strong>Это первый аккордеон.</strong> Он открыт.
        </s-accordion-body>
    </s-accordion-item>
    <s-accordion-item itemKey="2">
        <s-accordion-header>
            # Аккордеон 2
        </s-accordion-header>
        <s-accordion-body>
            <strong>Это второй аккордеон.</strong> Он закрыт.
        </s-accordion-body>
    </s-accordion-item>
    <s-accordion-item itemKey="3">
        <s-accordion-header>
            # Аккордеон 3
        </s-accordion-header>
        <s-accordion-body>
            <strong>Это третий аккордеон.</strong> This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. 
        </s-accordion-body>
    </s-accordion-item>
</s-accordion>

``` vue
<template>
  <s-link href="#" color="primary" disabled>Primary</s-link>
  <s-link href="#" color="secondary">Secondary</s-link>
  <s-link href="#" color="success" active>Success</s-link>
  <s-link href="#" color="danger">Danger</s-link>
  <s-link href="#" color="warning">Warning</s-link>
  <s-link href="#" color="info">Info</s-link>
  <s-link href="#" color="light">Light</s-link>
  <s-link href="#" color="dark">Dark</s-link>
</template>
```