# Оповещения

Компонент `s-alert` позволяет отображать оповещения для пользователя. 

### Как использовать
Т1

<s-alert color="primary">Простое оповещение. Для проверки!</s-alert>
<s-alert color="secondary">Простое оповещение. Для проверки!</s-alert>
<s-alert color="success">Простое оповещение. Для проверки!</s-alert>
<s-alert color="danger">Простое оповещение. Для проверки!</s-alert>
<s-alert color="warning">Простое оповещение. Для проверки!</s-alert>
<s-alert color="info">Простое оповещение. Для проверки!</s-alert>
<s-alert color="light">Простое оповещение. Для проверки!</s-alert>
<s-alert color="dark">Простое оповещение. Для проверки!</s-alert>

``` vue
<s-alert color="primary">Простое оповещение. Для проверки!</s-alert>
<s-alert color="secondary">Простое оповещение. Для проверки!</s-alert>
<s-alert color="success">Простое оповещение. Для проверки!</s-alert>
<s-alert color="danger">Простое оповещение. Для проверки!</s-alert>
<s-alert color="warning">Простое оповещение. Для проверки!</s-alert>
<s-alert color="info">Простое оповещение. Для проверки!</s-alert>
<s-alert color="light">Простое оповещение. Для проверки!</s-alert>
<s-alert color="dark">Простое оповещение. Для проверки!</s-alert>
```

### Механика
Т2

<s-alert color="primary" :visible="show" dismissible @close="() => { show = false }">
    Простое оповещение. Для проверки!
</s-alert>
<s-btn color="primary" @click="() => { show = true }">
    Показать оповещение
</s-btn>

``` vue
<s-alert color="primary" :visible="show" dismissible @close="() => { show = false }">
    Простое оповещение. Для проверки!
</s-alert>
<s-btn color="primary" @click="() => { show = true }">
    Показать оповещение
</s-btn>
```

### Ссылки
Т3

<s-alert color="primary">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="secondary">Простое оповещениес с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="success">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="danger">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="warning">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="info">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="light">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="dark">Простое оповещение с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>

``` vue
Т3
```

### Контент
Т3

<s-alert color="success">
  <s-alert-heading>Well done!</s-alert-heading>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</s-alert>


``` vue
Т3
```

### Иконки
Т3

<s-alert color="primary" class="d-flex align-items-center">
  <s-icon class="flex-shrink-0 me-2" icon="info-circle-fill" :size="24" /> 
  <div>
    Пример оповещения с иконкой
  </div>
</s-alert>

<s-alert color="success" class="d-flex align-items-center">
  <s-icon class="flex-shrink-0 me-2" icon="check-circle-fill" :size="24" /> 
  <div>
    Пример оповещения с иконкой
  </div>
</s-alert>
<s-alert color="warning" class="d-flex align-items-center">
  <s-icon class="flex-shrink-0 me-2" icon="exclamation-triangle-fill" :size="24" /> 
  <div>
    Пример оповещения с иконкой
  </div>
</s-alert>
<s-alert color="danger" class="d-flex align-items-center">
  <s-icon class="flex-shrink-0 me-2" icon="exclamation-triangle-fill" :size="24" />
  <div>
    Пример оповещения с иконкой
  </div>
</s-alert>

``` vue
Т3
```

<script>
  export default {
    data() {
      return { 
        show: false
      }
    }
  }
</script>