# Подсказки

ТЗ

### Как использовать
Основной пример

<s-button class="me-1" color="primary" v-s-tooltip="{content: 'Худая честь, когда нечего есть', placement: 'top'}" >
    Tooltip сверху
</s-button>

<s-button class="me-1" color="primary" v-s-tooltip="'Худая честь, когда нечего есть'">
    Tooltip как строка
</s-button>



``` vue
<s-button class="me-1" color="primary" v-s-tooltip="{title: 'Худая честь, когда нечего есть', placement: 'top'}" >
    Tooltip сверху
</s-button>

<s-button class="me-1" color="primary" v-s-tooltip="'Худая честь, когда нечего есть'">
    Tooltip как строка
</s-button>
```
