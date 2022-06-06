# Поля ввода

!! Не плохо бы разбить input по типам. Email, Phone, Color, Range, Date, Time, Text

### Как использовать
Основной пример
<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес"/>
<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес" floating/>

<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес найден" :valid="true"/>
<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес не найден" :valid="false" floating/>

<p>
<s-color class="mb-2" label="Цвет" v-model="color" :valid="false"/>
</p>

``` vue
<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес"/>
<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес" floating/>

<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес найден" :valid="true"/>
<s-input class="mb-2" placeholder="Песочная, д. 35" label="Адрес" feedback="Адрес не найден" :valid="false" floating/>
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