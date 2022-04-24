# Группа кнопок

Компонент `s-button-group` группирует кнопки в ряд или складывает их в вертикальный столбец. Между компонентам `s-button` не должно быть разрывов.

### Как использовать
Основной пример

<s-button-group>
    <s-button color="primary">Left</s-button>
    <s-button color="primary">Middle</s-button>
    <s-button color="primary">Right</s-button>
</s-button-group>

``` vue
<s-button-group>
    <s-button color="primary">Left</s-button>
    <s-button color="primary">Middle</s-button>
    <s-button color="primary">Right</s-button>
</s-button-group>
```

### Смешанные стили
Поддерживает различное оформление кнопок

<s-button-group>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
</s-button-group>

``` vue
<s-button-group>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
</s-button-group>
```

### Вертикальное расположение
Может принимать вертикальное расположение при добавлении свойства `vertical`

<s-button-group vertical>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
</s-button-group>

``` vue
<s-button-group vertical>
    <s-button color="success">Success</s-button>
    <s-button color="danger">Danger</s-button>
    <s-button color="warning">Warning</s-button>
</s-button-group>
```

