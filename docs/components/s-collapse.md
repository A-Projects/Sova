# Скрывашка

ТЗ

### Как использовать
Основной пример

<s-button color="primary" @click="show1 = !show1">Click Me</s-button>
<s-collapse :visible="show1">
    <s-card class="mt-3">
        <s-card-body>
            Я спешил на обед в кафе, когда внезапно пошел дождь. 
            Мне пришлось перейти на бег, но за мной погналась собака.
            В итоге я остался годным с порванными штанами и насморком.
        </s-card-body>
    </s-card>
</s-collapse>


``` vue
<s-button color="primary" @click="show = !show">Click Me</s-button>
<s-collapse :visible="show">
    <s-card class="mt-3">
        <s-card-body>
            Я спешил на обед в кафе, когда внезапно пошел дождь. 
            Мне пришлось перейти на бег, но за мной погналась собака.
            В итоге я остался годным с порванными штанами и насморком.
        </s-card-body>
    </s-card>
</s-collapse>

```

### ТЗ
ТЗ

<s-button color="primary" @click="show2 = !show2">Click Me</s-button>
<s-collapse :visible="show2" horizontal>
    <s-card class="mt-3" style="width: 300px">
        <s-card-body>
            Я спешил на обед в кафе, когда внезапно пошел дождь.
            Мне пришлось перейти на бег, но за мной погналась собака.
            В итоге я остался годным с порванными штанами и насморком.
        </s-card-body>
    </s-card>
</s-collapse>

<script>
  export default {
    data() {
      return { 
        show1: false,
        show2: false
      }
    }
  }
</script>
