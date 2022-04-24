# Прогресс

Компонент `s-progress` и `s-progress-bar` позволяют отобразить процесс загрузки или выполнения. 

### Как использовать
Т1

<s-progress class="mb-3">
    <s-progress-bar :value="0">
        40%
    </s-progress-bar>
</s-progress>

<s-progress class="mb-3" :value="25">
    <s-progress-bar color="danger" striped animated>
        50%
    </s-progress-bar>
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar  color="success" />
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar />
</s-progress>

<s-progress class="mb-3">
    <s-progress-bar/>
</s-progress>

``` vue
Т1
```

### Т2
Т2

``` vue
Т2
```

### Т3
Т3

``` vue
Т3
```
