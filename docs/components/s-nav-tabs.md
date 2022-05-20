# Навигация и вкладки

ТЗ

### Как использовать
Основной пример

<s-nav variant="tabs" layout="justified">
  <s-nav-item>
    <s-nav-link :active="index === 1" @click="() => { index = 1 }">
      Один
    </s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link :active="index === 2" @click="() => { index = 2 }">
      Два
    </s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link :active="index === 3" @click="() => { index = 3 }">
      Три
    </s-nav-link>
  </s-nav-item>
</s-nav>

<s-tab-content>
    <s-tab-pane :visible="index === 1">
      Рожь две недели зеленеет, две недели колосится, две недели отцветает, 
      две недели наливает, две недели подсыхает.
    </s-tab-pane>
    <s-tab-pane :visible="index === 2">
      И честь не в честь, когда нечего есть.
    </s-tab-pane>
    <s-tab-pane :visible="index === 3">
      Пошёл проведать да остался обедать.
    </s-tab-pane>
</s-tab-content>


``` vue
<s-nav variant="pills" layout="justified">
  <s-nav-item>
    <s-nav-link href="#" active>
      Active
    </s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#">Link</s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#">Link</s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#" disabled>
      Disabled
    </s-nav-link>
  </s-nav-item>
</s-nav>
```

### ТЗ
ТЗ

<s-nav variant="pills">
  <s-nav-item>
    <s-nav-link href="#" active>
      Active
    </s-nav-link>
  </s-nav-item>
  <s-dropdown variant="nav-item">
    <s-dropdown-toggle tag="a" color="secondary">Выпадающее меню</s-dropdown-toggle>
    <s-dropdown-menu>
        <s-dropdown-item>Элемент 1</s-dropdown-item>
        <s-dropdown-item>Элемент 2</s-dropdown-item>
        <s-dropdown-item>Элемент 3</s-dropdown-item>
    </s-dropdown-menu>
  </s-dropdown>
  <s-nav-item>
    <s-nav-link href="#">Link</s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#" disabled>
      Disabled
    </s-nav-link>
  </s-nav-item>
</s-nav>


``` vue
<s-nav variant="pills" layout="justified">
  <s-nav-item>
    <s-nav-link href="#" active>
      Active
    </s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#">Link</s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#">Link</s-nav-link>
  </s-nav-item>
  <s-nav-item>
    <s-nav-link href="#" disabled>
      Disabled
    </s-nav-link>
  </s-nav-item>
</s-nav>
```

<script>
  export default {
    data() {
      return { 
        index: 1,
      }
    }
  }
</script>
