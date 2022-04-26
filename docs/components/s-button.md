# Кнопки

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
<s-button class="me-1" color="primary" disabled>Primary</s-button>
<s-button class="me-1" color="secondary">Secondary</s-button>
<s-button class="me-1" color="success" active>Success</s-button>
<s-button class="me-1" color="danger">Danger</s-button>
<s-button class="me-1" color="warning">Warning</s-button>
<s-button class="me-1" color="info">Info</s-button>
<s-button class="me-1" color="light">Light</s-button>
<s-button class="me-1" color="dark">Dark</s-button>
<s-button class="me-1" color="link">Link</s-button>
```

### Свойство ссылки
Может работать как ссылка при добавлении свойства `link`

<s-button class="me-1" color="primary" href="#" link disabled>
    Disabled
</s-button>

<s-button class="me-1" color="danger" href="http://google.ru" link>
    Google
</s-button>

``` vue
<s-button class="me-1" color="primary" href="#" link disabled>
    Disabled
</s-button>

<s-button class="me-1" color="danger" href="http://google.ru" link>
    Google
</s-button>
```
### ТЗ
ТЗ

<s-button class="me-1" color="success" outline>Success</s-button>
<s-button class="me-1" color="danger" outline>Danger</s-button>
<s-button class="me-1" color="warning" outline>Warning</s-button>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-button class="me-1" color="primary" size="lg">Большая кнопка</s-button>
<s-button class="me-1" color="secondary" size="lg">Большая кнопка</s-button>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-button class="me-1" color="primary" size="sm">Маленькая кнопка</s-button>
<s-button class="me-1" color="secondary" size="sm">Маленькая кнопка</s-button>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-button class="me-1" color="primary" disabled>Отключенная кнопка</s-button>
<s-button class="me-1" color="secondary" disabled>Отключенная кнопка</s-button>

``` vue
ТЗ
```


### ТЗ
ТЗ

<s-button class="me-1" color="success" shape="rounded-pill">Success</s-button>
<s-button class="me-1" color="danger" shape="rounded-pill">Danger</s-button>
<s-button class="me-1" color="warning" shape="rounded-pill">Warning</s-button>

``` vue
ТЗ
```


### ТЗ
ТЗ

<s-button class="me-1" color="success" shape="rounded-0">Success</s-button>
<s-button class="me-1" color="danger" shape="rounded-0">Danger</s-button>
<s-button class="me-1" color="warning" shape="rounded-0">Warning</s-button>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2">
    <s-button class="me-1" color="primary">Кнопка</s-button>
    <s-button class="me-1" color="primary">Кнопка</s-button>
</div>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2 d-md-block">
    <s-button class="me-1" color="primary">Кнопка</s-button>
    <s-button class="me-1" color="primary">Кнопка</s-button>
</div>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2 col-6 mx-auto">
    <s-button class="me-1" color="primary">Кнопка</s-button>
    <s-button class="me-1" color="primary">Кнопка</s-button>
</div>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <s-button class="me-1" color="primary">Кнопка</s-button>
    <s-button class="me-1" color="primary">Кнопка</s-button>
</div>

``` vue
ТЗ
```