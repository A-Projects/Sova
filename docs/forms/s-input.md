# Поля ввода

!! Не плохо бы разбить input по типам. Email, Phone, Color, Range, Date, Time, Text

### Как использовать
Основной пример

<s-form-label for="i0001">Адрес</s-form-label>
<s-form-input id="i0001" class="mb-5" placeholder="Песочная, д. 35"/>

<s-form-input class="mb-5" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес найден" valid/>
<s-form-input class="mb-5" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес не найден" invalid floating/>

<s-form-color class="mb-5" label="Цвет" v-model="color"/>

<s-form-textarea class="mb-5" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес не найден" rows="3" floating/>

``` vue
ТЗ
```

<script>
export default {
    data() {
        return {
            color: '#563d7c',
        }
    }
}
</script>