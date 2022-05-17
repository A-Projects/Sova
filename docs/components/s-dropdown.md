# Выпадающее меню

Компонент `s-dropdown` позволяет создавать выпадающие меню.

### Использование
ТЗ !! В выпадающих списках не реализовано "alignment", "menu{-sm|-md|-lg|-xl|-xxl}-start", "form", "offset"  

<template v-for="(item) in items">
    <s-dropdown class="me-1 mb-1">
        <s-dropdown-toggle :color=item[0]>{{ item[1] }}</s-dropdown-toggle>
        <s-dropdown-menu>
            <s-dropdown-item>Элемент 1</s-dropdown-item>
            <s-dropdown-item>Элемент 2</s-dropdown-item>
            <s-dropdown-divider/>
            <s-dropdown-item>Элемент 3</s-dropdown-item>
            <s-dropdown-item>Элемент 4</s-dropdown-item>
        </s-dropdown-menu>
    </s-dropdown>
</template>

``` vue
ТЗ
```

### Кнопка как ссылка 
ТЗ

<s-dropdown>
    <s-dropdown-toggle tag="a" color="primary">Выпадающее меню</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item>Элемент 1</s-dropdown-item>
        <s-dropdown-item>Элемент 2</s-dropdown-item>
        <s-dropdown-item>Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

### Элементы как ссылки
ТЗ

<s-dropdown>
    <s-dropdown-toggle color="primary">Выпадающее меню</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

### Разделённая кнопка
ТЗ

<s-dropdown>
    <s-button color="primary">Выпадающее меню</s-button>
    <s-dropdown-toggle color="primary" split></s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

### Размеры
ТЗ

#### Большая кнопка
<s-dropdown class="me-1">
    <s-dropdown-toggle color="secondary" size="lg">Кнопка</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

<s-dropdown>
    <s-button color="secondary" size="lg">Разделённая кнопка</s-button>
    <s-dropdown-toggle color="secondary" size="lg" split></s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>


#### Маленькая кнопка
<s-dropdown class="me-1">
    <s-dropdown-toggle color="secondary" size="sm">Кнопка</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

<s-dropdown>
    <s-button color="secondary" size="sm">Разделённая кнопка</s-button>
    <s-dropdown-toggle color="secondary" size="sm" split></s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

### Тёмное меню
ТЗ

<s-dropdown>
    <s-dropdown-toggle color="secondary">Выпадающее меню</s-dropdown-toggle>
    <s-dropdown-menu dark>
        <s-dropdown-item href="#" active>Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

### Направление
ТЗ

#### Вверх
ТЗ

<s-dropdown direction="dropup" class="me-1">
    <s-dropdown-toggle color="secondary">Вверх</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#" active>Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

<s-dropdown direction="dropup" class="me-1">
    <s-button color="secondary">Вверх разделённая</s-button>
    <s-dropdown-toggle color="secondary" split/>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

#### Вправо
ТЗ

<s-dropdown direction="dropend" class="me-1">
    <s-dropdown-toggle color="secondary">Вправо</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#" active>Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

<s-dropdown direction="dropend" class="me-1">
    <s-button color="secondary">Вправо разделённая</s-button>
    <s-dropdown-toggle color="secondary" split/>
    <s-dropdown-menu>
        <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

#### Влево
ТЗ

<s-dropdown direction="dropstart" class="me-1">
    <s-dropdown-toggle color="secondary">Влево</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item href="#" active>Элемент 1</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
        <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
</s-dropdown>

<s-button-group>
    <s-dropdown direction="dropstart">
        <s-dropdown-toggle color="secondary" split/>
        <s-dropdown-menu>
            <s-dropdown-item href="#">Элемент 1</s-dropdown-item>
            <s-dropdown-item href="#">Элемент 2</s-dropdown-item>
            <s-dropdown-item href="#">Элемент 3</s-dropdown-item>
        </s-dropdown-menu>
    </s-dropdown>
    <s-button color="secondary">Влево разделённая</s-button>
</s-button-group>

``` vue
ТЗ
```

### Использование
ТЗ

<s-dropdown>
    <s-button color="primary">Меню</s-button>
    <s-dropdown-toggle color="primary" split></s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-header>Заголовок</s-dropdown-header>
        <s-dropdown-item>Элемент 1</s-dropdown-item>
        <s-dropdown-item>Элемент 2</s-dropdown-item>
        <s-dropdown-item>Элемент 3</s-dropdown-item>
        <s-dropdown-item>Элемент 4</s-dropdown-item>
        <s-dropdown-divider/>
        <s-dropdown-text>Просто текст</s-dropdown-text>
    </s-dropdown-menu>
</s-dropdown>

``` vue
ТЗ
```

<script>
  export default {
    data() {
      return { 
        items: [
            /*['primary', 'Основной'],*/ 
            /*['secondary', 'Второстепенный'],*/ 
            ['success', 'Успешный'], 
            ['info', 'Информационный'], 
            ['warning', 'Предупреждающий'], 
            ['danger', 'Опасный']
        ]
      }
    }
  }
</script>