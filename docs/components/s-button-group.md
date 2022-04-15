# Группа кнопок

Компонент `v-button-group` группирует кнопки в ряд или складывает их в вертикальный столбец.

### Как использовать
Основной пример

<s-button-group>
    <s-button color="primary">Left</s-button>
    <s-button color="primary">Middle</s-button>
    <s-button color="primary">Right</s-button>
</s-button-group>

``` vue
<template>
  <s-button-group>
    <s-button>Лево</s-button>
    <s-button>Центр</s-button>
    <s-button>Право</s-button>
  </s-button-group>
</template>
```

### Смешанные стили
Поддерживает различное оформление кнопок

<s-button-group>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
</s-button-group>

``` vue
<template>
  <s-button-group>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
  </s-button-group>
</template>
```

### Вертикальное расположение
Может принимать вертикальное расположение при добавлении свойства `vertical`

<s-button-group vertical>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
</s-button-group>

``` vue
<template>
  <s-button-group vertical>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
  </s-button-group>
</template>
```

