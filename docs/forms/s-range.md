# Диапазон

ТЗ

### Как использовать
Основной пример
<div>Значение {{ value }}</div>
<s-form-range class="mb-1" label="Потянуть вправо" :min="0" :max="5" :step="0.5" v-model.number="value"/>
<s-form-text>Длина от 6 до 40 символов</s-form-text>

``` vue
ТЗ
```
<script>
export default {
    data() {
        return {
            value: 1,
        }
    }
}
</script>