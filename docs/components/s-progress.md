# Прогресс

Компонент `s-progress` и `s-progress-bar` позволяют отобразить процесс загрузки или выполнения. 

### Как использовать
Т1

<s-progress class="mb-3">
    <s-progress-bar color="primary" :value="0"/>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="success" :value="25" striped/>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="info" :value="50" striped animated/>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="warning" :value="75">
        75%
    </s-progress-bar>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="danger" :value="100">
        100%
    </s-progress-bar>
</s-progress>


``` vue
<s-progress class="mb-3">
    <s-progress-bar color="primary" :value="0"/>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="success" :value="25" striped/>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="info" :value="50" striped animated/>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar color="warning" :value="75">
        75%
    </s-progress-bar>
</s-progress>

<s-progress class="mb-3" height="30">
    <s-progress-bar color="danger" :value="100">
        100%
    </s-progress-bar>
</s-progress>
```

### Размер
Т2

<s-progress class="mb-3" :height="1">
    <s-progress-bar color="primary" :value="50"/>
</s-progress>

<s-progress class="mb-3" :height="30">
    <s-progress-bar color="primary" :value="50"/>
</s-progress>

``` vue
<s-progress class="mb-3" height=1>
    <s-progress-bar color="primary" :value="50"/>
</s-progress>

<s-progress class="mb-3" height=30>
    <s-progress-bar color="primary" :value="50"/>
</s-progress>
```

###  Несколько индикаторов
Т3

<s-progress class="mb-3">
    <s-progress-bar color="primary" :value="15"/>
    <s-progress-bar color="success" :value="30"/>
    <s-progress-bar color="info" :value="20"/>
</s-progress>

``` vue
Т3
```
