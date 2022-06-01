# Уведомления (toast)

ТЗ

### Как использовать
Основной пример

<s-toast :autohide="false">
  <s-toast-header>
    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">2 seconds ago</small>
  </s-toast-header>
  <s-toast-body>
    Сперва проверь, а потом верь.
  </s-toast-body>  
</s-toast>

``` vue
<s-toast :autohide="false">
  <s-toast-header>
    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">2 seconds ago</small>
  </s-toast-header>
  <s-toast-body>
    Сперва проверь, а потом верь.
  </s-toast-body>  
</s-toast>
```

### ТЗ
ТЗ

<s-button color="primary" @click="createToast">Отправить уведомление</s-button>
<s-toast-container placement="top-end">
    <s-toast v-for="(toast, index) in toasts">
        <s-toast-header dismissible>
            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>
            <strong class="me-auto">{{toast.header}}</strong>
        </s-toast-header>
        <s-toast-body>
            {{toast.body}}
        </s-toast-body>  
    </s-toast>
</s-toast-container>


<script>
  export default {
    data() {
      return { 
        toasts: []
      }
    },
    methods: {
        createToast() {
            this.toasts.push({
              header: 'Новое уведомление',
              body: 'Умей работать, умей и веселиться'
            })
        }
    }
  }
</script>


``` vue
<s-button color="primary" @click="createToast">Отправить уведомление</s-button>
<s-toast-container placement="top-end">
    <s-toast v-for="(toast, index) in toasts">
        <s-toast-header>
            <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>
            <strong class="me-auto">{{toast.header}}</strong>
        </s-toast-header>
        <s-toast-body>
            {{toast.body}}
        </s-toast-body>  
    </s-toast>
</s-toast-container>


<script>
  export default {
    data() {
      return { 
        toasts: []
      }
    },
    methods: {
        createToast() {
            this.toasts.push({
              header: 'Новое уведомление',
              body: 'Умей работать, умей и веселиться'
            })
        }
    }
  }
</script>
```


