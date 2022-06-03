# Группа кнопок

Компонент `s-btn-group` группирует кнопки в ряд или складывает их в вертикальный столбец. Между компонентам `s-btn` не должно быть разрывов.

### Как использовать
Основной пример

<s-btn-group>
    <s-btn color="primary">Left</s-btn>
    <s-btn color="primary">Middle</s-btn>
    <s-btn color="primary">Right</s-btn>
</s-btn-group>

``` vue
<s-btn-group>
    <s-btn color="primary">Left</s-btn>
    <s-btn color="primary">Middle</s-btn>
    <s-btn color="primary">Right</s-btn>
</s-btn-group>
```

### Смешанные стили
Поддерживает различное оформление кнопок

<s-btn-group>
    <s-btn color="success">Success</s-btn>
    <s-btn color="danger">Danger</s-btn>
    <s-btn color="warning">Warning</s-btn>
</s-btn-group>

``` vue
<s-btn-group>
    <s-btn color="success">Success</s-btn>
    <s-btn color="danger">Danger</s-btn>
    <s-btn color="warning">Warning</s-btn>
</s-btn-group>
```

### Вертикальное расположение
Может принимать вертикальное расположение при добавлении свойства `vertical`

<s-btn-group vertical>
    <s-btn color="success">Success</s-btn>
    <s-btn color="danger">Danger</s-btn>
    <s-btn color="warning">Warning</s-btn>
</s-btn-group>

``` vue
<s-btn-group vertical>
    <s-btn color="success">Success</s-btn>
    <s-btn color="danger">Danger</s-btn>
    <s-btn color="warning">Warning</s-btn>
</s-btn-group>
```

