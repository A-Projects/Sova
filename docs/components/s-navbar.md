# Панель навигации

ТЗ

### Как использовать
Основной пример

<s-navbar expand="lg" color-scheme="dark" class="bg-dark">
  <s-container fluid>
    <s-navbar-brand href="#">Navbar</s-navbar-brand>
    <s-navbar-toggler @click="visible = !visible"/>
    <s-collapse class="navbar-collapse" :visible="visible">
      <s-navbar-nav>
        <s-nav-item>
          <s-nav-link href="#" active>Домой</s-nav-link>
        </s-nav-item>
        <s-nav-item>
          <s-nav-link href="#">Ссылка</s-nav-link>
        </s-nav-item>
        <s-dropdown variant="nav-item" :popper="false">
          <s-dropdown-toggle color="secondary">Меню</s-dropdown-toggle>
          <s-dropdown-menu>
            <s-dropdown-item href="#">Первый</s-dropdown-item>
            <s-dropdown-item href="#">Второй</s-dropdown-item>
            <s-dropdown-divider />
            <s-dropdown-item href="#">Третий</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
        <s-nav-item>
          <s-nav-link href="#" disabled>
            Отключенный
          </s-nav-link>
        </s-nav-item>
      </s-navbar-nav>      
    </s-collapse>
  </s-container>
</s-navbar>

``` vue
<s-navbar expand="lg" color-scheme="light" class="bg-light">
  <s-container fluid>
    <s-navbar-brand href="#">Navbar</s-navbar-brand>
    <s-navbar-toggler @click="visible = !visible"/>
    <s-collapse class="navbar-collapse" :visible="visible">
      <s-navbar-nav>
        <s-nav-item>
          <s-nav-link href="#" active>Домой</s-nav-link>
        </s-nav-item>
        <s-nav-item>
          <s-nav-link href="#">Ссылка</s-nav-link>
        </s-nav-item>
        <s-dropdown variant="nav-item" :popper="false">
          <s-dropdown-toggle color="secondary">Меню</s-dropdown-toggle>
          <s-dropdown-menu>
            <s-dropdown-item href="#">Первый</s-dropdown-item>
            <s-dropdown-item href="#">Второй</s-dropdown-item>
            <s-dropdown-divider />
            <s-dropdown-item href="#">Третий</s-dropdown-item>
          </s-dropdown-menu>
        </s-dropdown>
        <s-nav-item>
          <s-nav-link href="#" disabled>
            Отключенный
          </s-nav-link>
        </s-nav-item>
      </s-navbar-nav>      
    </s-collapse>
  </s-container>
</s-navbar>
```
