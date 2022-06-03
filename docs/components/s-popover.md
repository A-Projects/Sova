# Всплывающие окона

ТЗ

### Как использовать
Основной пример

<s-btn class="me-1" color="primary" v-s-popover="{title: 'Худая честь, когда нечего есть', content: 'Когда в товарищах согласья нет, На лад их дело не пойдет', placement: 'top'}" >
    Tooltip сверху
</s-btn>

<s-btn class="me-1" color="primary" v-s-popover="'Когда в товарищах согласья нет, На лад их дело не пойдет'">
    Tooltip как строка
</s-btn>

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
