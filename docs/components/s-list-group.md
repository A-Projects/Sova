# Группы списков

ТЗ

### Как использовать
Основной пример

<s-list-group>
  <s-list-group-item>An item</s-list-group-item>
  <s-list-group-item>A second item</s-list-group-item>
  <s-list-group-item>A third item</s-list-group-item>
  <s-list-group-item>A fourth item</s-list-group-item>
  <s-list-group-item>And a fifth one</s-list-group-item>
</s-list-group>

``` vue
<s-list-group>
  <s-list-group-item>An item</s-list-group-item>
  <s-list-group-item>A second item</s-list-group-item>
  <s-list-group-item>A third item</s-list-group-item>
  <s-list-group-item>A fourth item</s-list-group-item>
  <s-list-group-item>And a fifth one</s-list-group-item>
</s-list-group>
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item active>An item</s-list-group-item>
  <s-list-group-item>A second item</s-list-group-item>
  <s-list-group-item>A third item</s-list-group-item>
  <s-list-group-item>A fourth item</s-list-group-item>
  <s-list-group-item>And a fifth one</s-list-group-item>
</s-list-group>


``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item disabled>An item</s-list-group-item>
  <s-list-group-item>A second item</s-list-group-item>
  <s-list-group-item>A third item</s-list-group-item>
  <s-list-group-item>A fourth item</s-list-group-item>
  <s-list-group-item>And a fifth one</s-list-group-item>
</s-list-group>


``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item href="#" active>An item</s-list-group-item>
  <s-list-group-item href="#">A second item</s-list-group-item>
  <s-list-group-item href="#">A third item</s-list-group-item>
  <s-list-group-item href="#">A fourth item</s-list-group-item>
  <s-list-group-item href="#">And a fifth one</s-list-group-item>
</s-list-group>



``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item tag="button" active>An item</s-list-group-item>
  <s-list-group-item tag="button">A second item</s-list-group-item>
  <s-list-group-item tag="button">A third item</s-list-group-item>
  <s-list-group-item tag="button">A fourth item</s-list-group-item>
  <s-list-group-item tag="button">And a fifth one</s-list-group-item>
</s-list-group>

``` vue
ТЗ
```


### ТЗ
ТЗ

<s-list-group flush>
  <s-list-group-item disabled>An item</s-list-group-item>
  <s-list-group-item>A second item</s-list-group-item>
  <s-list-group-item>A third item</s-list-group-item>
  <s-list-group-item>A fourth item</s-list-group-item>
  <s-list-group-item>And a fifth one</s-list-group-item>
</s-list-group>


``` vue
ТЗ
```


### ТЗ
ТЗ

<s-list-group numbered>
  <s-list-group-item>An item</s-list-group-item>
  <s-list-group-item>A second item</s-list-group-item>
  <s-list-group-item>A third item</s-list-group-item>
  <s-list-group-item>A fourth item</s-list-group-item>
  <s-list-group-item>And a fifth one</s-list-group-item>
</s-list-group>


``` vue
ТЗ
```

### ТЗ
ТЗ

Currently horizontal list groups cannot be combined with flush list groups!!!

<template v-for="(item) in ['', '-sm', '-md', '-lg', '-xl', '-xxl']">
  <s-list-group class="mb-1" :layout="'horizontal' + item">
    <s-list-group-item>An item</s-list-group-item>
    <s-list-group-item>A second item</s-list-group-item>
    <s-list-group-item>A third item</s-list-group-item>
  </s-list-group>
</template>


``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" :color="item">{{item}} color item</s-list-group-item>
</s-list-group>



``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item href="#" v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" :color="item">{{item}} color item</s-list-group-item>
</s-list-group>



``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group>
  <s-list-group-item class="d-flex justify-content-between align-items-center">
    An item
    <s-badge color="primary" shape="rounded-pill">14</s-badge>
  </s-list-group-item>
  <s-list-group-item class="d-flex justify-content-between align-items-center">
    A second item
    <s-badge color="primary" shape="rounded-pill">2</s-badge>
  </s-list-group-item>
  <s-list-group-item class="d-flex justify-content-between align-items-center">
    A third item
    <s-badge color="primary" shape="rounded-pill">1</s-badge>
  </s-list-group-item>
</s-list-group>


``` vue
ТЗ
```

### ТЗ
ТЗ

<s-list-group numbered>
  <s-list-group-item class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <s-badge color="primary" shape="rounded-pill">14</s-badge>
  </s-list-group-item>
  <s-list-group-item class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <s-badge color="primary" shape="rounded-pill">2</s-badge>
  </s-list-group-item>
  <s-list-group-item class="d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <s-badge color="primary" shape="rounded-pill">1</s-badge>
  </s-list-group-item>
</s-list-group>


``` vue
ТЗ
```
