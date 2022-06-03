# Чекбоксы

ТЗ

### Как использовать
Основной пример
<s-btn class="mb-2" @click="onClick" color="primary">Поменять состояние</s-btn>
<s-check type="checkbox" label="Мой первый чекбокс" v-model="value"/>
<s-check type="radio" label="Моя первая радиокнопка" v-model="value" :valid="value"/>
<s-label>Текущее состояние {{value}}</s-label>

<script>
export default {
    data() {
        return {
            value: false,
            model: {
                value: false,
            }           
        }
    },
    methods: {
        onClick() {
            this.value = !this.value;
        }
    }
}
</script>

``` vue
<s-btn class="mb-2" @click="onClick" color="primary">Поменять состояние</s-btn>
<s-check type="checkbox" label="Мой первый чекбокс" v-model="value"/>
<s-check type="radio" label="Моя первая радиокнопка" v-model="value" :valid="value"/>
<s-label>Текущее состояние {{value}}</s-label>

<script>
export default {
    data() {
        return {
            value: false,
            model: {
                value: false,
            }           
        }
    },
    methods: {
        onClick() {
            this.value = !this.value;
        }
    }
}
</script>
```
