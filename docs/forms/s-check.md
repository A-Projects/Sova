# Чекбоксы

ТЗ

### Как использовать
Основной пример
<s-btn class="mb-2" @click="onClick" color="primary">Поменять состояние</s-btn>
<s-check type="checkbox" label="Мой первый чекбокс" v-model="value"/>
<s-check type="radio" label="Моя первая радиокнопка" v-model="value" :valid="value"/>
<s-label>Текущее состояние {{value}}</s-label>

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

### ТЗ
ТЗ
<s-btn class="mb-2" @click="onClick2" color="primary">Поменять состояние</s-btn>
<div>
    <s-btn-check class="me-2" color="primary" type="checkbox" label="Мой первый чекбокс" v-model="value2" outline/>
    <s-btn-check color="primary" type="radio" label="Моя первая радиокнопка" v-model="value2" :valid="value2" outline/>
</div>

<s-label>Текущее состояние {{value2}}</s-label>

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

<script>
export default {
    data() {
        return {
            value: false,
            value2: false,
        }
    },
    methods: {
        onClick() {
            this.value = !this.value;
        },
        onClick2() {
            this.value2 = !this.value2;
        }
    }
}
</script>