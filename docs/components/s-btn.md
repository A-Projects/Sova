# Кнопки

Компонент `s-btn` для использования в таблицах, формах, карточках и многом другом. 
Можно применять различные стили, состояния и размеры. Готов к использованию и легко настраивается.

### Использование
Несколько предопределенных стилей кнопок, каждый из которых служит своей смысловой цели.

<s-btn class="me-1" color="primary" disabled>Primary</s-btn>
<s-btn class="me-1" color="secondary">Secondary</s-btn>
<s-btn class="me-1" color="success" active>Success</s-btn>
<s-btn class="me-1" color="danger">Danger</s-btn>
<s-btn class="me-1" color="warning">Warning</s-btn>
<s-btn class="me-1" color="info">Info</s-btn>
<s-btn class="me-1" color="light">Light</s-btn>
<s-btn class="me-1" color="dark">Dark</s-btn>
<s-btn class="me-1" color="link">Link</s-btn>

``` vue
<s-btn class="me-1" color="primary" disabled>Primary</s-btn>
<s-btn class="me-1" color="secondary">Secondary</s-btn>
<s-btn class="me-1" color="success" active>Success</s-btn>
<s-btn class="me-1" color="danger">Danger</s-btn>
<s-btn class="me-1" color="warning">Warning</s-btn>
<s-btn class="me-1" color="info">Info</s-btn>
<s-btn class="me-1" color="light">Light</s-btn>
<s-btn class="me-1" color="dark">Dark</s-btn>
<s-btn class="me-1" color="link">Link</s-btn>
```

### Ссылка
Может работать как ссылка при добавлении свойства `href`, `to` или при явном указании тэга.

<s-btn class="me-1" color="primary" tag="a">
    Включена
</s-btn>

<s-btn class="me-1" color="primary" tag="a" disabled>
    Отключена
</s-btn>

<s-btn class="me-1" color="primary" href="http://google.ru">
    Google
</s-btn>

<s-btn class="me-1" color="primary" to="{ path: '/home' }">
    Маршрут
</s-btn>




``` vue
<s-btn class="me-1" color="primary" href="#" link disabled>
    Disabled
</s-btn>

<s-btn class="me-1" color="danger" href="http://google.ru" link>
    Google
</s-btn>
```

### Тэги
Иногда требуется представить кнопку различными тэгами и типам

<s-btn class="me-1" color="info" tag="span">Текст</s-btn>
<s-btn class="me-1" color="info" tag="div">Блок</s-btn>

<s-btn class="me-1" color="primary" type="button">Кнопка</s-btn>
<s-btn class="me-1" color="primary" type="submit">Запрос</s-btn>
<s-btn class="me-1" color="primary" type="reset">Сброс</s-btn>

<s-btn class="me-1" color="secondary" tag="input" type="button" value="Запрос"/>
<s-btn class="me-1" color="secondary" tag="input" type="submit" value="Запрос"/>
<s-btn class="me-1" color="secondary" tag="input" type="reset" value="Сброс"/>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-btn class="me-1" color="success" outline>Success</s-btn>
<s-btn class="me-1" color="danger" outline>Danger</s-btn>
<s-btn class="me-1" color="warning" outline>Warning</s-btn>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-btn class="me-1" color="primary" size="lg">Большая кнопка</s-btn>
<s-btn class="me-1" color="secondary" size="lg">Большая кнопка</s-btn>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-btn class="me-1" color="primary" size="sm">Маленькая кнопка</s-btn>
<s-btn class="me-1" color="secondary" size="sm">Маленькая кнопка</s-btn>

``` vue
ТЗ
```

### ТЗ
ТЗ

<s-btn class="me-1" color="primary" disabled>Отключенная кнопка</s-btn>
<s-btn class="me-1" color="secondary" disabled>Отключенная кнопка</s-btn>

``` vue
ТЗ
```


### ТЗ
ТЗ

<s-btn class="me-1" color="success" shape="rounded-pill">Success</s-btn>
<s-btn class="me-1" color="danger" shape="rounded-pill">Danger</s-btn>
<s-btn class="me-1" color="warning" shape="rounded-pill">Warning</s-btn>

``` vue
ТЗ
```


### ТЗ
ТЗ

<s-btn class="me-1" color="success" shape="rounded-0">Success</s-btn>
<s-btn class="me-1" color="danger" shape="rounded-0">Danger</s-btn>
<s-btn class="me-1" color="warning" shape="rounded-0">Warning</s-btn>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2">
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
</div>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2 d-md-block">
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
</div>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2 col-6 mx-auto">
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
</div>

``` vue
ТЗ
```

### ТЗ
ТЗ

<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
    <s-btn class="me-1" color="primary">Кнопка</s-btn>
</div>

``` vue
ТЗ
```