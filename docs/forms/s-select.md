# Выпадающий список

ТЗ

### Как использовать
Основной пример
<div>Значение {{ value }}</div>
<s-form-select
    v-model="value"
    :options="options"    
/>

``` vue
ТЗ
```
<script>
export default {
    data() {
        return {
            value: 'А',
            options: [
                { label: 'Один', value: 'А' },
                { label: 'Два', value: 'Б' },
                { label: 'Три', value: 'В', disabled: true }
            ]
        }
    }
}
</script>