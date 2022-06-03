# Спиннер

Компонент `s-spinner` визуализирует процесс загрузки. 
В целях доступности в спиннер можно включить вложенный `<span class="visually-hidden">Загрузка...</span>`.
Для построения спинера походят различные тэги `div`, `span` (по умолчанию `div`).

### Как использовать
Можно применять различные стили спиннера и использовать различные тэги для построения.

<s-spinner class="me-1" color="primary"/>
<s-spinner class="me-1" color="secondary"/>
<s-spinner class="me-1" color="success"/>
<s-spinner class="me-1" color="danger"/>
<s-spinner class="me-1" color="warning" tag="span"/>
<s-spinner class="me-1" color="info" tag="span"/>
<s-spinner class="me-1" color="light" tag="span"/>
<s-spinner class="me-1" color="body" tag="span"/>

``` vue
<s-spinner class="me-1" color="primary"/>
<s-spinner class="me-1" color="secondary"/>
<s-spinner class="me-1" color="success"/>
<s-spinner class="me-1" color="danger"/>
<s-spinner class="me-1" color="warning" tag="span"/>
<s-spinner class="me-1" color="info" tag="span"/>
<s-spinner class="me-1" color="light" tag="span"/>
<s-spinner class="me-1" color="body" tag="span"/>
```

### Grow вариант
Вариант `grow` спиннера, когда ищите альтернативу.

<s-spinner class="me-1" color="primary" grow/>
<s-spinner class="me-1" color="secondary" grow/>
<s-spinner class="me-1" color="success" grow/>
<s-spinner class="me-1" color="danger" grow/>
<s-spinner class="me-1" color="warning" grow/>
<s-spinner class="me-1" color="info" grow/>
<s-spinner class="me-1" color="light" grow/>
<s-spinner class="me-1" color="body" grow/>

``` vue
<s-spinner class="me-1" color="primary" grow/>
<s-spinner class="me-1" color="secondary" grow/>
<s-spinner class="me-1" color="success" grow/>
<s-spinner class="me-1" color="danger" grow/>
<s-spinner class="me-1" color="warning" grow/>
<s-spinner class="me-1" color="info" grow/>
<s-spinner class="me-1" color="light" grow/>
<s-spinner class="me-1" color="body" grow/>
```

### Выравнивание
Спиннеры построены с использованием `rems`, `currentColor` и `display: inline-flex`. 
Это означает, что они легко изменяют размер, цвет и быстро выравниваются.

<s-spinner class="ms-5">
    <span class="visually-hidden">Загрузка...</span>
</s-spinner>

``` vue
<s-spinner class="ms-5">
  <span class="visually-hidden">Загрузка...</span>
</s-spinner>
```

### Размещение
Используйте утилиты flexbox, float или выравнивания текста, чтобы разместить спиннеры именно там, где вам нужно.

#### Flex
<div class="d-flex justify-content-center">
    <s-spinner>
        <span class="visually-hidden">Загрузка...</span>
    </s-spinner>
</div>

``` vue
<div class="d-flex justify-content-center">
  <s-spinner>
    <span class="visually-hidden">Загрузка...</span>
  </s-spinner>
</div>
```

<div class="d-flex justify-content-center">
    <strong>Загрузка...</strong>
    <s-spinner class="ms-auto"/>
</div>

``` vue
<div class="d-flex justify-content-center">
  <strong>Загрузка...</strong>
  <s-spinner class="ms-auto"/>
</div>
```

#### Floats
<div class="clearfix">
    <s-spinner class="float-end">
        <span class="visually-hidden">Загрузка...</span>
    </s-spinner>
</div>

``` vue
<div class="clearfix">
  <s-spinner class="float-end">
    <span class="visually-hidden">Загрузка...</span>
  </s-spinner>
</div>
```

#### Text align
<div class="text-center">
    <s-spinner>
        <span class="visually-hidden">Загрузка...</span>
    </s-spinner>
</div>

``` vue
<div class="text-center">
  <s-spinner>
    <span class="visually-hidden">Загрузка...</span>
  </s-spinner>
</div>
```

### Размер
Можно сделать спиннер маленьким (предопределённый размер `sm`) или любым другим с помощью `style`.

<s-spinner class="me-2" size="sm"/>
<s-spinner class="me-2" :width="3" :height="3"/>

``` vue
<s-spinner class="me-2" size="sm"/>
<s-spinner class="me-2" width=3 height=3/>
```

### Кнопки
Можно использовать спиннеры в кнопках, чтобы указать, что действие в данный момент обрабатывается или выполняется.

<s-btn class="me-1" disabled>
    <s-spinner size="sm"/>
</s-btn>

<s-btn class="me-1" disabled>
    <s-spinner size="sm" tag="span"/>
    <span class="ms-2">Загрузка...</span>
</s-btn>

``` vue
<s-btn class="me-1" disabled>
    <s-spinner size="sm"/>
</s-btn>

<s-btn class="me-1" disabled>
    <s-spinner size="sm" tag="span"/>
    <span class="ms-2">Загрузка...</span>
</s-btn>
```