# Ярлыки

Компонент `s-badge` подходит как небольшой компонент маркера, ярлыка или подсчёта чего-либо

### Как использовать
Т1

<s-btn color="primary">
  Уведомления <s-badge color="secondary">4</s-badge>
</s-btn>

``` vue
<s-btn color="primary">
  Уведомления <s-badge color="secondary">4</s-badge>
</s-btn>
```

### Позиция
Т2

<s-btn color="primary" class="position-relative me-2">
    Входящие 
    <s-badge position="top-left" color="danger" shape="rounded-pill">
        +99
    </s-badge>
</s-btn>

<s-btn color="primary" class="position-relative me-5">
    Входящие 
    <s-badge position="top-right" color="danger" shape="rounded-pill">
        +99
    </s-badge>
</s-btn>

<s-btn color="primary" class="position-relative me-2">
    Входящие 
    <s-badge position="bottom-left" color="danger" shape="rounded-pill">
        +99
    </s-badge>
</s-btn>

<s-btn color="primary" class="position-relative">
    Входящие 
    <s-badge position="bottom-right" color="danger" shape="rounded-pill">
        +99
    </s-badge>
</s-btn>

``` vue
Т2
```

###  Модификация
Т3

<s-btn color="primary" class="position-relative">
  Profile
  <s-badge class="border border-light p-2" color="danger" position="top-right" shape="rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </s-badge>
</s-btn>


``` vue
Т3
```

###  Варианты
Т4

<s-badge color="primary">primary</s-badge>
<s-badge color="success">success</s-badge>
<s-badge color="danger">danger</s-badge>
<s-badge color="warning" shape="rounded-pill">warning</s-badge>
<s-badge color="info" shape="rounded-pill">info</s-badge>
<s-badge color="light" shape="rounded-pill">light</s-badge>
<s-badge color="dark" shape="rounded-pill">dark</s-badge>

``` vue
Т4
```
