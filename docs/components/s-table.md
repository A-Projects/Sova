# Таблица

ТЗ

### Как использовать
Основной пример

<s-table responsive>
  <s-table-head>
    <s-table-row>
      <s-table-header-cell scope="col">#</s-table-header-cell>
      <s-table-header-cell scope="col">Class</s-table-header-cell>
      <s-table-header-cell scope="col">Heading</s-table-header-cell>
      <s-table-header-cell scope="col">Heading</s-table-header-cell>
    </s-table-row>
  </s-table-head>
  <s-table-body>
    <s-table-row>
      <s-table-header-cell scope="row">1</s-table-header-cell>
      <s-table-data-cell>Mark</s-table-data-cell>
      <s-table-data-cell>Otto</s-table-data-cell>
      <s-table-data-cell>@mdo</s-table-data-cell>
    </s-table-row>
    <s-table-row>
      <s-table-header-cell scope="row">2</s-table-header-cell>
      <s-table-data-cell>Jacob</s-table-data-cell>
      <s-table-data-cell>Thornton</s-table-data-cell>
      <s-table-data-cell>@fat</s-table-data-cell>
    </s-table-row>
    <s-table-row>
      <s-table-header-cell scope="row">3</s-table-header-cell>
      <s-table-data-cell colspan="2">Larry the Bird</s-table-data-cell>
      <s-table-data-cell>@twitter</s-table-data-cell>
    </s-table-row>
  </s-table-body>
</s-table>


``` vue
<s-table responsive>
  <s-table-head>
    <s-table-row>
      <s-table-header-cell scope="col">#</s-table-header-cell>
      <s-table-header-cell scope="col">Class</s-table-header-cell>
      <s-table-header-cell scope="col">Heading</s-table-header-cell>
      <s-table-header-cell scope="col">Heading</s-table-header-cell>
    </s-table-row>
  </s-table-head>
  <s-table-body>
    <s-table-row>
      <s-table-header-cell scope="row">1</s-table-header-cell>
      <s-table-data-cell>Mark</s-table-data-cell>
      <s-table-data-cell>Otto</s-table-data-cell>
      <s-table-data-cell>@mdo</s-table-data-cell>
    </s-table-row>
    <s-table-row>
      <s-table-header-cell scope="row">2</s-table-header-cell>
      <s-table-data-cell>Jacob</s-table-data-cell>
      <s-table-data-cell>Thornton</s-table-data-cell>
      <s-table-data-cell>@fat</s-table-data-cell>
    </s-table-row>
    <s-table-row>
      <s-table-header-cell scope="row">3</s-table-header-cell>
      <s-table-data-cell colspan="2">Larry the Bird</s-table-data-cell>
      <s-table-data-cell>@twitter</s-table-data-cell>
    </s-table-row>
  </s-table-body>
</s-table>
```
