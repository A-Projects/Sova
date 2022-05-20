# Модалка

ТЗ

### Как использовать
Основной пример

<s-modal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
  <s-modal-header>
    <s-modal-title>Заголовок</s-modal-title>
  </s-modal-header>
  <s-modal-body>
    Сперва проверь, а потом верь.
  </s-modal-body>
  <s-modal-footer>
    <s-button color="secondary">Закрыть</s-button>
    <s-button color="primary">Сохранить</s-button>
  </s-modal-footer>
</s-modal>

``` vue
<s-modal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
  <s-modal-header>
    <s-modal-title>Заголовок</s-modal-title>
  </s-modal-header>
  <s-modal-body>
    Сперва проверь, а потом верь.
  </s-modal-body>
  <s-modal-footer>
    <s-button color="secondary">Закрыть</s-button>
    <s-button color="primary">Сохранить</s-button>
  </s-modal-footer>
</s-modal>
```

### ТЗ
ТЗ

<s-button color="primary" @click="() => { show1 = true }">Открыть</s-button>
<s-modal :visible="show1" @close="() => { show1 = false }">
    <s-modal-header>
        <s-modal-title>Заголовок</s-modal-title>
    </s-modal-header>
    <s-modal-body>
        Умей работать, умей и веселиться.
    </s-modal-body>
    <s-modal-footer>
        <s-button color="secondary" @click="() => { show1 = false }">
            Закрыть
        </s-button>
        <s-button color="primary">Сохранить</s-button>
    </s-modal-footer>
</s-modal>


``` vue
ТЗ
```

### ТЗ
ТЗ

<s-button color="primary" @click="() => { show2 = true }">Открыть</s-button>
<s-modal backdrop="static" :visible="show2" @close="() => { show2 = false }">
    <s-modal-header>
        <s-modal-title>Заголовок</s-modal-title>
    </s-modal-header>
    <s-modal-body>
        Не имей сто рублей, а имей сто друзей.
    </s-modal-body>
    <s-modal-footer>
        <s-button color="secondary" @click="() => { show2 = false }">
            Закрыть
        </s-button>
        <s-button color="primary">Сохранить</s-button>
    </s-modal-footer>
</s-modal>


``` vue
ТЗ
```

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
