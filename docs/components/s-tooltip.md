# Подсказки

ТЗ

### Как использовать
Основной пример

<s-button class="me-1" color="primary" v-s-tooltip="{title: 'Худая честь, когда нечего есть', placement: 'top'}" >
    Tooltip сверху
</s-button>

<s-button class="me-1" color="primary" v-s-tooltip="'Худая честь, когда нечего есть'">
    Tooltip как строка
</s-button>



``` vue
<s-pagination aria-label="Page navigation example">
  <s-pagination-item disabled>
     <s-pagination-link href="#">&laquo;</s-pagination-link>
  </s-pagination-item>
  <s-pagination-item active>
    <s-pagination-link href="#">1</s-pagination-link>
  </s-pagination-item>
  <s-pagination-item>
    <s-pagination-link href="#">2</s-pagination-link>
  </s-pagination-item>
  <s-pagination-item>
    <s-pagination-link href="#">3</s-pagination-link>
  </s-pagination-item>
  <s-pagination-item>
    <s-pagination-link href="#">&raquo;</s-pagination-link>
  </s-pagination-item>
</s-pagination>

```
