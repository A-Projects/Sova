# Заполнители

ТЗ

### Как использовать
Основной пример
<div class="d-flex justify-content-around">
<s-card style="width: 18rem">
  <s-card-image orientation="top" :src="$withBase('/owl.png')" />
  <s-card-body>
    <s-card-title>Заголовок карточки</s-card-title>
    <s-card-text>
      Некоторый, достаточно длинный текст, придуманный на скорую руку
    </s-card-text>
    <s-button color="primary" href="#">Перейти к источнику</s-button>
  </s-card-body>
</s-card>
<s-card style="width: 18rem">
  <s-card-image orientation="top" :src="$withBase('/gray.png')" />  
  <s-card-body>
    <s-card-title v-s-placeholder="{animation: 'glow', col: 7}">
      <span v-s-placeholder="{col: 6}" />
    </s-card-title>
    <s-card-text v-s-placeholder="{animation: 'glow'}">
      <span v-s-placeholder="{col: 7}" />
      <span v-s-placeholder="{col: 4}" />
      <span v-s-placeholder="{col: 4}" />
      <span v-s-placeholder="{col: 6}" />
      <span v-s-placeholder="{col: 8}" />
    </s-card-text>
    <s-button v-s-placeholder="{col: 8}" color="primary" disabled href="#" tabindex="-1"></s-button>
  </s-card-body>
</s-card>
</div>

``` vue
<s-card style="width: 18rem">
  <s-card-image orientation="top" :src="$withBase('/owl.png')" />
  <s-card-body>
    <s-card-title>Заголовок карточки</s-card-title>
    <s-card-text>
      Некоторый, достаточно длинный текст, придуманный на скорую руку
    </s-card-text>
    <s-button color="primary" href="#">Перейти к источнику</s-button>
  </s-card-body>
</s-card>
<s-card style="width: 18rem">
  <s-card-image orientation="top" :src="$withBase('/gray.png')" />  
  <s-card-body>
    <s-card-title v-s-placeholder="{animation: 'glow', col: 7}">
      <span v-s-placeholder="{col: 6}" />
    </s-card-title>
    <s-card-text v-s-placeholder="{animation: 'glow'}">
      <span v-s-placeholder="{col: 7}" />
      <span v-s-placeholder="{col: 4}" />
      <span v-s-placeholder="{col: 4}" />
      <span v-s-placeholder="{col: 6}" />
      <span v-s-placeholder="{col: 8}" />
    </s-card-text>
    <s-button v-s-placeholder="{col: 8}" color="primary" disabled href="#" tabindex="-1"></s-button>
  </s-card-body>
</s-card>
```