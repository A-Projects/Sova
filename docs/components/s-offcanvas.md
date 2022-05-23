# Боковая панель

ТЗ

### Как использовать
Основной пример

<s-button color="primary" @click="() => { show = !show }">Toggle offcanvas</s-button>
<s-offcanvas placement="start" :visible="show" @hide="() => { show = !show }" backdrop>
<s-offcanvas-header>
  <s-offcanvas-title>Offcanvas</s-offcanvas-title>
  <s-close-button class="text-reset" @click="() => { show = false }"/>
</s-offcanvas-header>
<s-offcanvas-body>
  Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
</s-offcanvas-body>
</s-offcanvas>

``` vue
<s-button color="primary" @click="() => { visible = !visible }">Toggle offcanvas</s-button>
<s-offcanvas placement="start" :visible="visible" @hide="() => { visible = !visible }">
<s-offcanvas-header>
  <s-offcanvas-title>Offcanvas</s-offcanvas-title>
  <s-close-button class="text-reset" @click="() => { visible = false }"/>
</s-offcanvas-header>
<s-offcanvas-body>
  Content for the offcanvas goes here. You can place just about any Bootstrap component or
  custom elements here.
</s-offcanvas-body>
</s-offcanvas>
```

<script>
  export default {
    data() {
      return { 
        show: false,
      }
    }
  }
</script>
