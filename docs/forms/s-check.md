# Чекбоксы

ТЗ

### Как использовать
Основной пример
<s-btn class="mb-2" @click="onClick" color="primary">Поменять состояние</s-btn>
<s-form-check type="checkbox" label="Мой первый чекбокс" v-model="value"/>
<s-form-check type="radio" label="Моя первая радиокнопка" v-model="value" :valid="value"/>
<s-form-label>Текущее состояние {{value}}</s-form-label>

``` vue
ТЗ
```

### ТЗ
ТЗ
<s-btn class="mb-2" @click="onClick2" color="primary">Поменять состояние</s-btn>
<div>
    <s-form-btn-check class="me-2" color="primary" type="checkbox" label="Мой первый чекбокс" v-model="value2" outline/>
    <s-form-btn-check color="primary" type="radio" label="Моя первая радиокнопка" v-model="value2" :valid="value2" outline/>
</div>

<s-form-label>Текущее состояние {{value2}}</s-form-label>

``` vue
ТЗ
```

### ТЗ
ТЗ
<div>
    <s-form-switch class="mb-2" label="Мой первый переключатель"/>
    <s-form-switch class="mb-2" label="Мой первый переключатель" disabled/>
</div>

``` vue
ТЗ
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
