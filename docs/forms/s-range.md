# Диапазон

ТЗ

### Как использовать
Основной пример
<s-label for="i">Email адрес</s-label>
<s-range id="i" :min="0" :max="5" :step="0.5" value="3"/>

``` vue
<s-label for="i">Email адрес</s-label>
<s-input id="i" type="email" placeholder="name@example.com"/>
<s-text>Длина от 6 до 40 символов</s-text>
```
