# Поля ввода

Описание

### Как использовать
Основной пример

<s-form-label for="i0001">Адрес</s-form-label>
<s-form-input id="i0001" class="mb-5" placeholder="Песочная, д. 35"/>

<s-form-input class="mb-5" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес найден" valid/>
<s-form-input class="mb-5" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес не найден" invalid floating/>

<s-form-color class="mb-5" label="Цвет" v-model="color"/>

<s-form-textarea class="mb-5" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес не найден" rows="3" floating/>

<s-form-number class="mb-5" label="Адрес" feedback="Адрес найден" valid/>

<s-form-file class="mb-5" label="Выбрать файл" feedback="Файл не найден"/>

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