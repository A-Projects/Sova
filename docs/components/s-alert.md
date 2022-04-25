# Оповещение

Компонент `s-alert` позволяет отображать оповещения для пользователя. 

### Как использовать
Т1

<s-alert color="primary">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="secondary">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="success">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="danger">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="warning">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="info">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="light">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="dark">Простой сигнал тревоги. Для проверки!</s-alert>

``` vue
<s-alert color="primary">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="secondary">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="success">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="danger">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="warning">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="info">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="light">Простой сигнал тревоги. Для проверки!</s-alert>
<s-alert color="dark">Простой сигнал тревоги. Для проверки!</s-alert>
```

### Жизненный пример
Т2

<s-alert color="primary" :visible="show" dismissible @close="() => { show = false }">
    Простой сигнал тревоги. Для проверки!
</s-alert>
<s-button color="primary" @click="() => { show = true }">
    Показать оповещение
</s-button>

``` vue
<s-alert color="primary" :visible="show" dismissible @close="() => { show = false }">
    Простой сигнал тревоги. Для проверки!
</s-alert>
<s-button color="primary" @click="() => { show = true }">
    Показать оповещение
</s-button>
```

### Ссылки
Т3

<s-alert color="primary">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="secondary">Простой сигнал тревогис с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="success">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="danger">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="warning">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="info">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="light">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>
<s-alert color="dark">Простой сигнал тревоги с <s-alert-link href="#">примером ссылки</s-alert-link>. Для проверки!</s-alert>

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
  <svg class="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 512 512">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"></path>
  </svg>
  <div>
    An example alert with an icon
  </div>
</s-alert>

<s-alert color="primary" class="d-flex align-items-center">
  <s-icon icon="cil-info" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example alert with an icon
  </div>
</s-alert>
<s-alert color="success" class="d-flex align-items-center">
  <s-icon icon="cil-check-circle" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example success alert with an icon
  </div>
</s-alert>
<s-alert color="warning" class="d-flex align-items-center">
  <s-icon icon="cil-warning" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example warning alert with an icon
  </div>
</s-alert>
<s-alert color="danger" class="d-flex align-items-center">
  <s-icon icon="cil-burn" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example danger alert with an icon
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